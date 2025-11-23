"""Integration tests for workflow-related panel endpoints."""
import pytest
from unittest.mock import Mock
import sys
from pathlib import Path

# Add helpers to path
helpers_dir = Path(__file__).parent.parent.parent / "helpers"
if str(helpers_dir) not in sys.path:
    sys.path.insert(0, str(helpers_dir))

from mock_helpers import create_mock_resolution, create_mock_resolved_node


@pytest.mark.integration
class TestWorkflowsListEndpoint:
    """GET /v2/comfygit/workflows - List all workflows."""

    async def test_success_with_workflows(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should return list of workflows with analysis."""
        # Setup: Mock analyzed workflows
        mock_wf1 = Mock()
        mock_wf1.name = "workflow1.json"
        mock_wf1.has_issues = False
        mock_wf1.sync_state = "synced"
        mock_wf1.uninstalled_count = 0
        mock_wf1.models_needing_path_sync_count = 0

        mock_wf2 = Mock()
        mock_wf2.name = "workflow2.json"
        mock_wf2.has_issues = True
        mock_wf2.sync_state = "modified"
        mock_wf2.uninstalled_count = 2
        mock_wf2.models_needing_path_sync_count = 1

        mock_env_status.workflow.analyzed_workflows = [mock_wf1, mock_wf2]
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.get("/v2/comfygit/workflows")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert isinstance(data, list)
        assert len(data) == 2
        assert data[0]["name"] == "workflow1.json"
        assert data[0]["status"] == "synced"
        assert data[1]["name"] == "workflow2.json"
        assert data[1]["status"] == "broken"

    async def test_success_empty_workflows(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should return empty list when no workflows."""
        # Setup: No workflows
        mock_env_status.workflow.analyzed_workflows = []
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.get("/v2/comfygit/workflows")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert isinstance(data, list)
        assert len(data) == 0

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.get("/v2/comfygit/workflows")
        assert resp.status == 500


@pytest.mark.integration
class TestWorkflowDetailsEndpoint:
    """GET /v2/comfygit/workflow/{name}/details - Get workflow details."""

    async def test_success_workflow_found(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should return workflow details when workflow exists."""
        # Setup: Mock workflow with resolution
        mock_wf = Mock()
        mock_wf.name = "test.json"
        mock_wf.has_issues = False
        mock_wf.sync_state = "synced"
        mock_wf.uninstalled_nodes = []

        # Mock resolution with iterable fields
        mock_wf.resolution = create_mock_resolution(
            models_resolved=[],  # Empty list (iterable)
            models_unresolved=[],
            nodes_resolved=[]
        )

        mock_env_status.workflow.analyzed_workflows = [mock_wf]
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.get("/v2/comfygit/workflow/test.json/details")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["name"] == "test.json"
        assert data["status"] == "synced"
        assert "models" in data
        assert "nodes" in data
        assert isinstance(data["models"], list)
        assert isinstance(data["nodes"], list)

    async def test_workflow_not_found(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should return 404 when workflow doesn't exist."""
        # Setup: Empty workflows
        mock_env_status.workflow.analyzed_workflows = []
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.get("/v2/comfygit/workflow/nonexistent.json/details")

        # Verify
        assert resp.status == 404
        data = await resp.json()
        assert "error" in data

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.get("/v2/comfygit/workflow/test.json/details")
        assert resp.status == 500


@pytest.mark.integration
class TestWorkflowResolveEndpoint:
    """POST /v2/comfygit/workflow/{name}/resolve - Resolve workflow issues."""

    async def test_success_resolution(
        self,
        client,
        mock_environment
    ):
        """Should resolve workflow issues."""
        # Setup: Mock resolve_workflow to return resolution with iterable fields
        mock_result = create_mock_resolution(
            nodes_resolved=[create_mock_resolved_node("comfyui-example-node")],
            nodes_unresolved=["UnknownNode"],
            models_resolved=[],
            models_unresolved=[],
            models_ambiguous=[]
        )
        mock_environment.resolve_workflow.return_value = mock_result

        # Execute
        resp = await client.post("/v2/comfygit/workflow/test.json/resolve", json={
            "auto_install": True
        })

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert "workflow" in data
        assert data["workflow"] == "test.json"
        assert "nodes" in data
        assert "models" in data
        assert isinstance(data["nodes"]["auto_installable"], list)
        assert len(data["nodes"]["auto_installable"]) == 1
        assert data["nodes"]["auto_installable"][0]["name"] == "comfyui-example-node"

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.post("/v2/comfygit/workflow/test.json/resolve", json={})
        assert resp.status == 500


@pytest.mark.integration
class TestWorkflowInstallEndpoint:
    """POST /v2/comfygit/workflow/{name}/install - Install workflow dependencies."""

    async def test_success_install(
        self,
        client,
        mock_environment
    ):
        """Should install workflow dependencies."""
        # Setup: Mock get_uninstalled_nodes to return list of nodes to install
        mock_environment.get_uninstalled_nodes.return_value = ["node1", "node2"]

        # Mock install_node to succeed
        mock_environment.install_node.return_value = None

        # Execute
        resp = await client.post("/v2/comfygit/workflow/test.json/install", json={})

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"
        assert "nodes_installed" in data
        assert len(data["nodes_installed"]) == 2
        assert "node1" in data["nodes_installed"]
        assert "node2" in data["nodes_installed"]

        # Verify install_node was called for each node
        assert mock_environment.install_node.call_count == 2

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.post("/v2/comfygit/workflow/test.json/install", json={})
        assert resp.status == 500
