"""Integration tests for sync and export panel endpoints."""
import pytest
from unittest.mock import Mock
from pathlib import Path


@pytest.mark.integration
class TestSyncEndpoint:
    """POST /v2/comfygit/sync - Manually sync environment."""

    async def test_success_sync_default_params(
        self,
        client,
        mock_environment
    ):
        """Should sync environment with default parameters."""
        # Setup: Mock sync result
        mock_result = Mock()
        mock_result.success = True
        mock_result.nodes_installed = ["node1", "node2"]
        mock_result.nodes_removed = []
        mock_result.errors = []
        mock_environment.sync.return_value = mock_result

        # Execute
        resp = await client.post("/v2/comfygit/sync", json={})

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"
        assert len(data["nodes_installed"]) == 2
        assert len(data["nodes_removed"]) == 0
        assert len(data["errors"]) == 0
        assert "Sync completed" in data["message"]

        # Verify sync was called with defaults
        mock_environment.sync.assert_called_once()
        call_args = mock_environment.sync.call_args
        assert call_args[1]["model_strategy"] == "skip"
        assert call_args[1]["remove_extra_nodes"] is True

    async def test_success_sync_with_custom_params(
        self,
        client,
        mock_environment
    ):
        """Should sync with custom parameters."""
        # Setup
        mock_result = Mock()
        mock_result.success = True
        mock_result.nodes_installed = []
        mock_result.nodes_removed = ["extra_node"]
        mock_result.errors = []
        mock_environment.sync.return_value = mock_result

        # Execute
        resp = await client.post("/v2/comfygit/sync", json={
            "model_strategy": "download",
            "remove_extra_nodes": False
        })

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"

        # Verify sync was called with custom params
        call_args = mock_environment.sync.call_args
        assert call_args[1]["model_strategy"] == "download"
        assert call_args[1]["remove_extra_nodes"] is False

    async def test_success_sync_with_errors(
        self,
        client,
        mock_environment
    ):
        """Should return partial success when sync has errors."""
        # Setup: Sync completes but has errors
        mock_result = Mock()
        mock_result.success = False
        mock_result.nodes_installed = ["node1"]
        mock_result.nodes_removed = []
        mock_result.errors = ["Failed to install node2"]
        mock_environment.sync.return_value = mock_result

        # Execute
        resp = await client.post("/v2/comfygit/sync", json={})

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "error"
        assert len(data["errors"]) == 1
        assert "completed with errors" in data["message"]

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.post("/v2/comfygit/sync", json={})

        assert resp.status == 500
        data = await resp.json()
        assert "error" in data

    async def test_error_sync_fails(
        self,
        client,
        mock_environment
    ):
        """Should return 500 when sync raises exception."""
        # Setup: sync() raises exception
        mock_environment.sync.side_effect = Exception("Sync failed")

        # Execute
        resp = await client.post("/v2/comfygit/sync", json={})

        # Verify
        assert resp.status == 500
        data = await resp.json()
        assert data["status"] == "error"
        assert "Sync failed" in data["message"]


@pytest.mark.integration
class TestExportEndpoint:
    """POST /v2/comfygit/export - Export environment to tarball."""

    async def test_success_export_with_path(
        self,
        client,
        mock_environment,
        tmp_path
    ):
        """Should export environment to specified path."""
        # Setup
        output_file = tmp_path / "export.tar.gz"
        mock_environment.export_environment.return_value = output_file

        # Execute
        resp = await client.post("/v2/comfygit/export", json={
            "output_path": str(output_file)
        })

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"
        assert data["path"] == str(output_file)
        assert "models_without_sources" in data

        # Verify export was called
        mock_environment.export_environment.assert_called_once()

    async def test_success_export_default_path(
        self,
        client,
        mock_environment,
        tmp_path
    ):
        """Should use default path when none specified."""
        # Setup
        default_output = tmp_path / "env1_export_20250122_120000.tar.gz"
        mock_environment.export_environment.return_value = default_output

        # Execute: No output_path specified
        resp = await client.post("/v2/comfygit/export", json={})

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"
        assert "export" in data["path"]
        assert ".tar.gz" in data["path"]

    async def test_success_export_with_models_without_sources(
        self,
        client,
        mock_environment,
        tmp_path
    ):
        """Should report models without sources."""
        # Setup: Export callbacks will report models without sources
        output_file = tmp_path / "export.tar.gz"

        def mock_export(path, callbacks=None):
            if callbacks:
                # Simulate callback
                callbacks.on_models_without_sources(["model1.safetensors", "model2.ckpt"])
            return output_file

        mock_environment.export_environment.side_effect = mock_export

        # Execute
        resp = await client.post("/v2/comfygit/export", json={
            "output_path": str(output_file)
        })

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"
        assert data["models_without_sources"] == 2

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.post("/v2/comfygit/export", json={})

        assert resp.status == 500
        data = await resp.json()
        assert "error" in data

    async def test_error_export_fails(
        self,
        client,
        mock_environment
    ):
        """Should return 500 when export raises exception."""
        # Setup: export_environment raises exception
        mock_environment.export_environment.side_effect = Exception("Export failed")

        # Execute
        resp = await client.post("/v2/comfygit/export", json={})

        # Verify
        assert resp.status == 500
        data = await resp.json()
        assert data["status"] == "error"
        assert "Export failed" in data["message"]

    async def test_error_invalid_output_path(
        self,
        client,
        mock_environment
    ):
        """Should return 500 when output path is invalid."""
        # Setup: export_environment raises exception for invalid path
        mock_environment.export_environment.side_effect = Exception("Invalid path")

        # Execute
        resp = await client.post("/v2/comfygit/export", json={
            "output_path": "/invalid/nonexistent/path/export.tar.gz"
        })

        # Verify
        assert resp.status == 500
        data = await resp.json()
        assert data["status"] == "error"
