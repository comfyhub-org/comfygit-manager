"""Integration tests for git_changes structure in status endpoint.

Tests that workflow_changes is returned as both:
- workflow_changes: boolean (for quick checks)
- workflow_changes_detail: dict (for detailed display)
"""
import pytest


@pytest.mark.integration
class TestStatusGitChangesStructure:
    """GET /v2/comfygit/status - git_changes structure."""

    async def test_workflow_changes_empty_dict(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should return workflow_changes as false when dict is empty."""
        # Setup: No workflow changes
        mock_env_status.git.workflow_changes = {}
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.get("/v2/comfygit/status")
        data = await resp.json()

        # Verify: Boolean should be false when dict is empty
        assert data["git_changes"]["workflow_changes"] is False
        assert data["git_changes"]["workflow_changes_detail"] == {}

    async def test_workflow_changes_with_modifications(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should return workflow_changes as true with detail dict when changes exist."""
        # Setup: Some workflow changes
        workflow_changes_dict = {
            "api.json": "modified",
            "txt2img.json": "added",
            "old.json": "deleted"
        }
        mock_env_status.git.workflow_changes = workflow_changes_dict
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.get("/v2/comfygit/status")
        data = await resp.json()

        # Verify: Boolean should be true and dict should contain details
        assert data["git_changes"]["workflow_changes"] is True
        assert data["git_changes"]["workflow_changes_detail"] == workflow_changes_dict
        assert len(data["git_changes"]["workflow_changes_detail"]) == 3

    async def test_has_git_changes_logic(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should properly detect git changes using boolean fields."""
        # Setup: Only workflow changes, no node changes
        mock_env_status.git.workflow_changes = {"test.json": "modified"}
        mock_env_status.git.nodes_added = []
        mock_env_status.git.nodes_removed = []
        mock_env_status.git.has_other_changes = False
        mock_env_status.git.has_changes = True
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.get("/v2/comfygit/status")
        data = await resp.json()

        # Verify: Should detect changes via boolean
        assert data["has_changes"] is True
        assert data["git_changes"]["workflow_changes"] is True
        assert len(data["git_changes"]["nodes_added"]) == 0

    async def test_no_git_changes_at_all(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should return all false/empty when no git changes exist."""
        # Setup: Clean git state
        mock_env_status.git.workflow_changes = {}
        mock_env_status.git.nodes_added = []
        mock_env_status.git.nodes_removed = []
        mock_env_status.git.has_other_changes = False
        mock_env_status.git.has_changes = False
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.get("/v2/comfygit/status")
        data = await resp.json()

        # Verify: All git change indicators should be false/empty
        assert data["has_changes"] is False
        assert data["git_changes"]["workflow_changes"] is False
        assert data["git_changes"]["workflow_changes_detail"] == {}
        assert data["git_changes"]["has_other_changes"] is False
        assert len(data["git_changes"]["nodes_added"]) == 0
        assert len(data["git_changes"]["nodes_removed"]) == 0

    async def test_workflow_changes_detail_types(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should return correct change types in workflow_changes_detail."""
        # Setup: Each type of workflow change
        workflow_changes_dict = {
            "new_workflow.json": "added",
            "existing.json": "modified",
            "removed.json": "deleted"
        }
        mock_env_status.git.workflow_changes = workflow_changes_dict
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.get("/v2/comfygit/status")
        data = await resp.json()

        # Verify: Detail dict should preserve change types
        detail = data["git_changes"]["workflow_changes_detail"]
        assert detail["new_workflow.json"] == "added"
        assert detail["existing.json"] == "modified"
        assert detail["removed.json"] == "deleted"

    async def test_combined_git_changes(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should handle combination of workflow changes, node changes, and other changes."""
        # Setup: Multiple types of changes
        mock_env_status.git.workflow_changes = {"api.json": "modified"}
        mock_env_status.git.nodes_added = [{"name": "new-node", "is_development": False}]
        mock_env_status.git.nodes_removed = [{"name": "old-node", "is_development": True}]
        mock_env_status.git.has_other_changes = True
        mock_env_status.git.has_changes = True
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.get("/v2/comfygit/status")
        data = await resp.json()

        # Verify: All change indicators should be true/populated
        assert data["has_changes"] is True
        assert data["git_changes"]["workflow_changes"] is True
        assert data["git_changes"]["workflow_changes_detail"] == {"api.json": "modified"}
        assert data["git_changes"]["has_other_changes"] is True
        assert len(data["git_changes"]["nodes_added"]) == 1
        assert len(data["git_changes"]["nodes_removed"]) == 1
