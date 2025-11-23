"""Integration tests for git-related panel endpoints."""
import pytest
from unittest.mock import Mock


@pytest.mark.integration
class TestCommitEndpoint:
    """POST /v2/comfygit/commit - Create workflow commit."""

    async def test_success_with_changes(
        self,
        client,
        mock_environment
    ):
        """Should create commit when changes exist."""
        # Setup
        mock_environment.has_committable_changes.return_value = True

        # Mock workflow status to be safe
        mock_wf_status = Mock()
        mock_wf_status.is_commit_safe = True
        mock_wf_status.workflows_with_issues = []
        mock_wf_status.sync_status = Mock()
        mock_wf_status.sync_status.new = {"workflow1.json"}
        mock_wf_status.sync_status.modified = set()
        mock_wf_status.sync_status.deleted = set()
        mock_environment.workflow_manager.get_workflow_status.return_value = mock_wf_status

        # Execute
        resp = await client.post("/v2/comfygit/commit", json={
            "message": "Test commit",
            "allow_issues": False
        })

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"
        assert "summary" in data

        # Verify commit was called
        mock_environment.execute_commit.assert_called_once()

    async def test_no_changes_to_commit(
        self,
        client,
        mock_environment
    ):
        """Should return no_changes status when nothing to commit."""
        # Setup: No changes
        mock_environment.has_committable_changes.return_value = False

        # Execute
        resp = await client.post("/v2/comfygit/commit", json={
            "message": "Test commit"
        })

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "no_changes"

        # Verify commit was NOT called
        mock_environment.execute_commit.assert_not_called()

    async def test_commit_with_issues_blocked(
        self,
        client,
        mock_environment
    ):
        """Should block commit when workflows have issues and allow_issues=False."""
        # Setup: Has issues
        mock_environment.has_committable_changes.return_value = True

        mock_issue = Mock()
        mock_issue.name = "workflow1.json"
        mock_issue.issue_summary = "Missing nodes"

        mock_wf_status = Mock()
        mock_wf_status.is_commit_safe = False
        mock_wf_status.workflows_with_issues = [mock_issue]
        mock_environment.workflow_manager.get_workflow_status.return_value = mock_wf_status

        # Execute
        resp = await client.post("/v2/comfygit/commit", json={
            "message": "Test commit",
            "allow_issues": False
        })

        # Verify
        assert resp.status == 400
        data = await resp.json()
        assert data["status"] == "blocked"
        assert "issues" in data

        # Verify commit was NOT called
        mock_environment.execute_commit.assert_not_called()

    async def test_commit_with_issues_allowed(
        self,
        client,
        mock_environment
    ):
        """Should allow commit when allow_issues=True."""
        # Setup: Has issues
        mock_environment.has_committable_changes.return_value = True

        mock_wf_status = Mock()
        mock_wf_status.is_commit_safe = False
        mock_wf_status.workflows_with_issues = [Mock()]
        mock_wf_status.sync_status = Mock()
        mock_wf_status.sync_status.new = set()
        mock_wf_status.sync_status.modified = {"workflow1.json"}
        mock_wf_status.sync_status.deleted = set()
        mock_environment.workflow_manager.get_workflow_status.return_value = mock_wf_status

        # Execute
        resp = await client.post("/v2/comfygit/commit", json={
            "message": "Test commit",
            "allow_issues": True
        })

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"

        # Verify commit was called
        mock_environment.execute_commit.assert_called_once()

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.post("/v2/comfygit/commit", json={
            "message": "Test"
        })

        assert resp.status == 500

    async def test_default_commit_message(
        self,
        client,
        mock_environment
    ):
        """Should use default message when not provided."""
        mock_environment.has_committable_changes.return_value = True

        mock_wf_status = Mock()
        mock_wf_status.is_commit_safe = True
        mock_wf_status.workflows_with_issues = []
        mock_wf_status.sync_status = Mock()
        mock_wf_status.sync_status.new = set()
        mock_wf_status.sync_status.modified = set()
        mock_wf_status.sync_status.deleted = set()
        mock_environment.workflow_manager.get_workflow_status.return_value = mock_wf_status

        # Execute without message
        resp = await client.post("/v2/comfygit/commit", json={})

        # Verify
        assert resp.status == 200


@pytest.mark.integration
class TestLogEndpoint:
    """GET /v2/comfygit/log - Get commit history."""

    async def test_success_default_params(
        self,
        client,
        mock_environment
    ):
        """Should return commit history with default pagination."""
        # Setup
        commits = [
            {
                "hash": f"abc{i}",
                "message": f"Commit {i}",
                "author": "test@test.com",
                "date": "2025-01-22"
            }
            for i in range(10)
        ]
        mock_environment.get_commit_history.return_value = commits
        mock_environment.get_current_branch.return_value = "main"

        # Execute
        resp = await client.get("/v2/comfygit/log")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert "commits" in data
        assert "has_more" in data
        assert "current_branch" in data
        assert data["current_branch"] == "main"

    async def test_pagination_limit(
        self,
        client,
        mock_environment
    ):
        """Should respect limit parameter."""
        # Setup: Return 25 commits (limit=10 + 1 for pagination check)
        commits = [{"hash": f"abc{i}"} for i in range(25)]
        mock_environment.get_commit_history.return_value = commits
        mock_environment.get_current_branch.return_value = "main"

        # Execute with limit=10
        resp = await client.get("/v2/comfygit/log?limit=10")
        data = await resp.json()

        # Verify
        assert len(data["commits"]) == 10
        assert data["has_more"] is True

    async def test_pagination_offset(
        self,
        client,
        mock_environment
    ):
        """Should respect offset parameter."""
        # Setup
        commits = [{"hash": f"abc{i}"} for i in range(30)]
        mock_environment.get_commit_history.return_value = commits
        mock_environment.get_current_branch.return_value = "main"

        # Execute with offset=10, limit=5
        resp = await client.get("/v2/comfygit/log?limit=5&offset=10")
        data = await resp.json()

        # Verify: Should skip first 10, return next 5
        assert len(data["commits"]) == 5

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.get("/v2/comfygit/log")
        assert resp.status == 500


@pytest.mark.integration
class TestBranchesEndpoint:
    """GET /v2/comfygit/branches - List git branches."""

    async def test_success(
        self,
        client,
        mock_environment
    ):
        """Should return list of branches."""
        # Setup: list_branches returns list of (name, is_current) tuples
        mock_environment.list_branches.return_value = [
            ("main", True),
            ("dev", False),
            ("feature/test", False)
        ]
        mock_environment.get_current_branch.return_value = "main"

        # Execute
        resp = await client.get("/v2/comfygit/branches")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert "branches" in data
        assert "current" in data
        assert data["current"] == "main"
        assert len(data["branches"]) == 3
        assert data["branches"][0]["name"] == "main"
        assert data["branches"][0]["is_current"] is True

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.get("/v2/comfygit/branches")
        assert resp.status == 500
