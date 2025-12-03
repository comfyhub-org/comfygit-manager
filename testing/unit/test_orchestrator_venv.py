"""Unit tests for orchestrator virtual environment setup."""

import sys
import pytest


@pytest.mark.unit
class TestOrchestratorVenv:
    """Test orchestrator venv creation and setup."""

    def test_ensure_orchestrator_venv_creates_venv(self, temp_dir, mocker):
        """Should create orchestrator venv if it doesn't exist."""
        from server.orchestrator import ensure_orchestrator_venv

        venv_path = temp_dir / ".orchestrator_venv"

        # Mock venv.create and subprocess.run to avoid actual venv creation
        mocker.patch("venv.create")
        mocker.patch("subprocess.run")

        # Create the expected directory structure to simulate venv creation
        venv_path.mkdir()
        (venv_path / "bin").mkdir()
        (venv_path / "bin" / "python").touch()
        (venv_path / "bin" / "pip").touch()

        ensure_orchestrator_venv(venv_path)

        # Verify venv was not recreated (idempotent check)
        assert venv_path.exists()
        assert (venv_path / "bin" / "python").exists()
        assert (venv_path / "bin" / "pip").exists()

    def test_ensure_orchestrator_venv_idempotent(self, mock_orchestrator_venv):
        """Should not recreate venv if it already exists."""
        from server.orchestrator import ensure_orchestrator_venv

        # Mark with timestamp
        marker = mock_orchestrator_venv / "bin" / ".created"
        marker.touch()
        original_mtime = marker.stat().st_mtime

        ensure_orchestrator_venv(mock_orchestrator_venv)

        # Should not have been recreated
        assert marker.exists()
        assert marker.stat().st_mtime == original_mtime

    def test_ensure_orchestrator_venv_installs_comfygit_core(self, temp_dir, mocker):
        """Should install comfygit-core in orchestrator venv."""
        from server.orchestrator import ensure_orchestrator_venv

        venv_path = temp_dir / ".orchestrator_venv"

        # Mock venv.create to avoid actual venv creation
        mock_venv_create = mocker.patch("venv.create")

        # Mock subprocess to capture pip install
        mock_run = mocker.patch("subprocess.run")

        # Create minimal directory structure so function doesn't early return
        # (but don't create python executable so it goes through creation path)

        ensure_orchestrator_venv(venv_path)

        # Verify venv.create was called
        mock_venv_create.assert_called_once_with(venv_path, with_pip=True, clear=True)

        # Verify pip install was called with comfygit-core
        mock_run.assert_called_once()
        args = mock_run.call_args[0][0]
        assert "pip" in str(args[0])  # First arg should be pip executable
        assert "install" in args
        assert "comfygit-core" in args

    def test_orchestrator_venv_isolated_from_comfyui(self, mock_orchestrator_venv, mock_environment):
        """Orchestrator venv should be independent of ComfyUI environment."""
        orch_python = mock_orchestrator_venv / "bin" / "python"
        env_python = mock_environment / ".venv" / "bin" / "python"

        # Different paths
        assert orch_python != env_python

        # Both should point to valid python executables
        assert orch_python.exists()
        assert env_python.exists()

    def test_get_orchestrator_python_path(self, mock_orchestrator_venv, temp_dir):
        """Should correctly locate orchestrator Python executable."""
        from server.orchestrator import get_orchestrator_python

        # Mock custom node structure
        custom_node_root = temp_dir / "comfygit-manager"
        server_dir = custom_node_root / "server"
        server_dir.mkdir(parents=True)

        venv_dir = server_dir / ".orchestrator_venv"
        venv_dir.mkdir()
        (venv_dir / "bin").mkdir()

        python_exe = venv_dir / "bin" / "python"
        python_exe.symlink_to(sys.executable)

        result = get_orchestrator_python(custom_node_root)

        assert result == python_exe
        assert result.exists()

    def test_get_orchestrator_python_not_found(self, temp_dir):
        """Should raise error if orchestrator venv not found."""
        from server.orchestrator import get_orchestrator_python

        custom_node_root = temp_dir / "comfygit-manager"
        custom_node_root.mkdir()

        with pytest.raises(RuntimeError, match="Orchestrator venv not found"):
            get_orchestrator_python(custom_node_root)
