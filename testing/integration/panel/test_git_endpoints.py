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
        # Setup: git_manager.list_branches returns list of (name, is_current) tuples
        mock_environment.git_manager.list_branches.return_value = [
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


@pytest.mark.integration
class TestCheckoutEndpoint:
    """POST /v2/comfygit/checkout - Checkout commit or branch."""

    async def test_success_checkout_no_changes(
        self,
        client,
        mock_environment,
        monkeypatch
    ):
        """Should checkout ref when no uncommitted changes."""
        # Setup: No uncommitted changes
        mock_environment.git_manager = Mock()
        mock_environment.git_manager.has_uncommitted_changes.return_value = False
        mock_environment.git_manager.repo_path = "/tmp/repo"
        mock_environment.workflow_manager.get_workflow_sync_status.return_value = Mock(has_changes=False)

        # Mock the git command to prevent actual execution
        mock_git = Mock()
        monkeypatch.setattr("comfygit_core.utils.git._git", mock_git)

        # Execute
        resp = await client.post("/v2/comfygit/checkout", json={
            "ref": "develop",
            "force": False
        })

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"
        assert "Restarting" in data["message"]

    async def test_warning_uncommitted_changes_no_force(
        self,
        client,
        mock_environment
    ):
        """Should return warning when uncommitted changes and force=False."""
        # Setup: Has uncommitted changes
        mock_environment.git_manager = Mock()
        mock_environment.git_manager.has_uncommitted_changes.return_value = True

        # Execute
        resp = await client.post("/v2/comfygit/checkout", json={
            "ref": "develop",
            "force": False
        })

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "warning"
        assert data["reason"] == "uncommitted_changes"
        assert "uncommitted changes" in data["message"].lower()

    async def test_success_force_checkout_with_changes(
        self,
        client,
        mock_environment,
        monkeypatch
    ):
        """Should checkout with force when force=True even with changes."""
        # Setup: Has uncommitted changes
        mock_environment.git_manager = Mock()
        mock_environment.git_manager.has_uncommitted_changes.return_value = True
        mock_environment.git_manager.repo_path = "/tmp/repo"

        # Mock the git command to prevent actual execution
        mock_git = Mock()
        monkeypatch.setattr("comfygit_core.utils.git._git", mock_git)

        # Execute
        resp = await client.post("/v2/comfygit/checkout", json={
            "ref": "develop",
            "force": True
        })

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"

    async def test_validation_missing_ref(self, client, mock_environment):
        """Should return 400 when ref is missing."""
        # Execute: No ref in body
        resp = await client.post("/v2/comfygit/checkout", json={})

        # Verify
        assert resp.status == 400
        data = await resp.json()
        assert "error" in data
        assert "ref is required" in data["error"]

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.post("/v2/comfygit/checkout", json={
            "ref": "develop"
        })

        assert resp.status == 500


@pytest.mark.integration
class TestCreateBranchEndpoint:
    """POST /v2/comfygit/branch - Create new branch."""

    async def test_success_create_branch(
        self,
        client,
        mock_environment
    ):
        """Should create branch successfully."""
        # Setup
        mock_environment.create_branch = Mock()

        # Execute
        resp = await client.post("/v2/comfygit/branch", json={
            "name": "feature/test",
            "start_point": "main"
        })

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"
        assert data["branch"] == "feature/test"

        # Verify create_branch was called
        mock_environment.create_branch.assert_called_once_with("feature/test", "main")

    async def test_success_create_branch_default_start_point(
        self,
        client,
        mock_environment
    ):
        """Should use HEAD as default start point."""
        # Setup
        mock_environment.create_branch = Mock()

        # Execute: No start_point specified
        resp = await client.post("/v2/comfygit/branch", json={
            "name": "feature/test"
        })

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"

        # Verify create_branch was called with HEAD as default
        mock_environment.create_branch.assert_called_once_with("feature/test", "HEAD")

    async def test_validation_missing_name(self, client, mock_environment):
        """Should return 400 when name is missing."""
        # Execute: No name in body
        resp = await client.post("/v2/comfygit/branch", json={})

        # Verify
        assert resp.status == 400
        data = await resp.json()
        assert "error" in data
        assert "name is required" in data["error"]

    async def test_error_branch_already_exists(
        self,
        client,
        mock_environment
    ):
        """Should return 500 when branch already exists."""
        # Setup: create_branch raises exception
        mock_environment.create_branch.side_effect = Exception("Branch already exists")

        # Execute
        resp = await client.post("/v2/comfygit/branch", json={
            "name": "existing-branch"
        })

        # Verify
        assert resp.status == 500
        data = await resp.json()
        assert data["status"] == "error"
        assert "message" in data

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.post("/v2/comfygit/branch", json={
            "name": "feature/test"
        })

        assert resp.status == 500
