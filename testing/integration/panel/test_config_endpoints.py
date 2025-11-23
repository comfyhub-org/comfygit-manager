"""Integration tests for configuration panel endpoints."""
import pytest
from unittest.mock import Mock, MagicMock
from pathlib import Path


@pytest.mark.integration
class TestGetConfigEndpoint:
    """GET /v2/comfygit/config - Get workspace configuration settings."""

    async def test_success_with_config(self, client, monkeypatch):
        """Should return 200 with config when workspace has settings."""
        # Setup: Mock environment with workspace config
        mock_env = Mock()
        mock_env.name = "test-env"

        # Mock workspace with config manager
        mock_workspace = Mock()
        mock_workspace.path = Path("/workspace")
        mock_env.workspace = mock_workspace

        # Mock config manager
        mock_config_manager = Mock()

        # Mock config data
        mock_config_manager.get_models_directory.return_value = Path("/workspace/models")
        mock_config_manager.get_civitai_token.return_value = "test_token_1234"

        mock_workspace.workspace_config_manager = mock_config_manager

        # Patch get_environment_from_cwd
        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: mock_env)

        # Execute
        resp = await client.get("/v2/comfygit/config")

        # Verify
        assert resp.status == 200
        data = await resp.json()

        # Check required fields
        assert "workspace_path" in data
        assert "models_path" in data
        assert "civitai_api_key" in data
        assert "auto_sync_models" in data
        assert "confirm_destructive" in data

        # Check values
        assert data["workspace_path"] == "/workspace"
        assert data["models_path"] == "/workspace/models"
        assert data["civitai_api_key"] == "test_token_1234"
        assert isinstance(data["auto_sync_models"], bool)
        assert isinstance(data["confirm_destructive"], bool)

    async def test_success_with_no_civitai_token(self, client, monkeypatch):
        """Should return config with None civitai_api_key when not set."""
        # Setup
        mock_env = Mock()
        mock_env.name = "test-env"
        mock_workspace = Mock()
        mock_workspace.path = Path("/workspace")
        mock_env.workspace = mock_workspace

        mock_config_manager = Mock()
        mock_config_manager.get_models_directory.return_value = Path("/workspace/models")
        mock_config_manager.get_civitai_token.return_value = None  # No token
        mock_workspace.workspace_config_manager = mock_config_manager

        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: mock_env)

        # Execute
        resp = await client.get("/v2/comfygit/config")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["civitai_api_key"] is None

    async def test_success_with_no_models_directory(self, client, monkeypatch):
        """Should return config with None models_path when not configured."""
        # Setup
        mock_env = Mock()
        mock_env.name = "test-env"
        mock_workspace = Mock()
        mock_workspace.path = Path("/workspace")
        mock_env.workspace = mock_workspace

        mock_config_manager = Mock()
        # Simulate ComfyDockError when models directory not set
        from comfygit_core.models.exceptions import ComfyDockError
        mock_config_manager.get_models_directory.side_effect = ComfyDockError("No models directory set")
        mock_config_manager.get_civitai_token.return_value = None
        mock_workspace.workspace_config_manager = mock_config_manager

        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: mock_env)

        # Execute
        resp = await client.get("/v2/comfygit/config")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["models_path"] is None

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        # Setup: No environment
        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: None)

        # Execute
        resp = await client.get("/v2/comfygit/config")

        # Verify
        assert resp.status == 500
        data = await resp.json()
        assert "error" in data


@pytest.mark.integration
class TestUpdateConfigEndpoint:
    """POST /v2/comfygit/config - Update workspace configuration settings."""

    async def test_success_update_civitai_token(self, client, monkeypatch):
        """Should return 200 and update civitai token."""
        # Setup
        mock_env = Mock()
        mock_env.name = "test-env"
        mock_workspace = Mock()
        mock_workspace.path = Path("/workspace")
        mock_env.workspace = mock_workspace

        mock_config_manager = Mock()
        mock_config_manager.set_civitai_token = Mock()
        mock_workspace.workspace_config_manager = mock_config_manager

        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: mock_env)

        # Execute
        resp = await client.post("/v2/comfygit/config", json={
            "civitai_api_key": "new_token_5678"
        })

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "updated"

        # Verify the config manager was called
        mock_config_manager.set_civitai_token.assert_called_once_with("new_token_5678")

    async def test_success_clear_civitai_token(self, client, monkeypatch):
        """Should clear civitai token when set to None."""
        # Setup
        mock_env = Mock()
        mock_env.name = "test-env"
        mock_workspace = Mock()
        mock_workspace.path = Path("/workspace")
        mock_env.workspace = mock_workspace

        mock_config_manager = Mock()
        mock_config_manager.set_civitai_token = Mock()
        mock_workspace.workspace_config_manager = mock_config_manager

        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: mock_env)

        # Execute
        resp = await client.post("/v2/comfygit/config", json={
            "civitai_api_key": None
        })

        # Verify
        assert resp.status == 200
        mock_config_manager.set_civitai_token.assert_called_once_with(None)

    async def test_success_update_models_path(self, client, monkeypatch):
        """Should return 200 and update models directory."""
        # Setup
        mock_env = Mock()
        mock_env.name = "test-env"
        mock_workspace = Mock()
        mock_workspace.path = Path("/workspace")
        mock_workspace.set_models_directory = Mock()
        mock_env.workspace = mock_workspace

        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: mock_env)

        # Execute
        resp = await client.post("/v2/comfygit/config", json={
            "models_path": "/workspace/new_models"
        })

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "updated"

        # Verify workspace method was called
        mock_workspace.set_models_directory.assert_called_once()
        call_args = mock_workspace.set_models_directory.call_args[0]
        assert str(call_args[0]) == "/workspace/new_models"

    async def test_success_partial_update(self, client, monkeypatch):
        """Should update only provided fields."""
        # Setup
        mock_env = Mock()
        mock_env.name = "test-env"
        mock_workspace = Mock()
        mock_workspace.path = Path("/workspace")
        mock_env.workspace = mock_workspace

        mock_config_manager = Mock()
        mock_config_manager.set_civitai_token = Mock()
        mock_workspace.workspace_config_manager = mock_config_manager

        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: mock_env)

        # Execute - only update civitai_api_key
        resp = await client.post("/v2/comfygit/config", json={
            "civitai_api_key": "partial_token"
        })

        # Verify
        assert resp.status == 200
        mock_config_manager.set_civitai_token.assert_called_once_with("partial_token")

    async def test_validation_invalid_json(self, client, monkeypatch):
        """Should return 400 when request body is invalid JSON."""
        # Setup
        mock_env = Mock()
        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: mock_env)

        # Execute - send invalid JSON
        resp = await client.post("/v2/comfygit/config", data="not-json")

        # Verify
        assert resp.status == 400
        data = await resp.json()
        assert "error" in data

    async def test_validation_invalid_models_path(self, client, monkeypatch):
        """Should return 400 when models_path doesn't exist."""
        # Setup
        mock_env = Mock()
        mock_env.name = "test-env"
        mock_workspace = Mock()
        mock_workspace.path = Path("/workspace")

        # Mock set_models_directory to raise error for invalid path
        from comfygit_core.models.exceptions import ComfyDockError
        mock_workspace.set_models_directory.side_effect = ComfyDockError("Directory does not exist")
        mock_env.workspace = mock_workspace

        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: mock_env)

        # Execute
        resp = await client.post("/v2/comfygit/config", json={
            "models_path": "/nonexistent/path"
        })

        # Verify
        assert resp.status == 400
        data = await resp.json()
        assert "error" in data

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        # Setup: No environment
        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: None)

        # Execute
        resp = await client.post("/v2/comfygit/config", json={
            "civitai_api_key": "test"
        })

        # Verify
        assert resp.status == 500
        data = await resp.json()
        assert "error" in data

    async def test_ignored_unsupported_fields(self, client, monkeypatch):
        """Should ignore unsupported fields like auto_sync_models and confirm_destructive."""
        # Setup
        mock_env = Mock()
        mock_env.name = "test-env"
        mock_workspace = Mock()
        mock_workspace.path = Path("/workspace")
        mock_env.workspace = mock_workspace

        mock_config_manager = Mock()
        mock_workspace.workspace_config_manager = mock_config_manager

        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: mock_env)

        # Execute - send unsupported fields (should be ignored for now)
        resp = await client.post("/v2/comfygit/config", json={
            "auto_sync_models": True,
            "confirm_destructive": False
        })

        # Verify - should succeed but not call any setters
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "updated"
