"""
Unit tests for orchestrator abort mechanism (Phase 2).

Tests manual restart detection, abort command sending, and graceful cleanup.
Following the revised design document from 2025-11-20 Phase 2.
"""

import json
import os
import time
from pathlib import Path
from unittest.mock import Mock, patch, MagicMock
import pytest


@pytest.mark.unit
class TestManualRestartDetection:
    """Test detection of manual ComfyUI restart during orchestrator switch."""

    def test_detect_manual_start_returns_false_when_no_workspace(self, tmp_path):
        """Should return False when no workspace root found."""
        from server.orchestrator import detect_manual_start_during_orchestrator

        with patch('server.orchestrator.find_workspace_root', return_value=None):
            result = detect_manual_start_during_orchestrator()
            assert result is False

    def test_detect_manual_start_returns_false_when_no_orchestrator_pid(self, tmp_path):
        """Should return False when orchestrator PID file doesn't exist."""
        from server.orchestrator import detect_manual_start_during_orchestrator

        workspace_root = tmp_path / "comfygit"
        workspace_root.mkdir()
        metadata_dir = workspace_root / ".metadata"
        metadata_dir.mkdir()

        with patch('server.orchestrator.find_workspace_root', return_value=workspace_root):
            result = detect_manual_start_during_orchestrator()
            assert result is False

    def test_detect_manual_start_returns_false_when_orchestrator_dead(self, tmp_path):
        """Should return False when orchestrator process is dead."""
        from server.orchestrator import detect_manual_start_during_orchestrator

        workspace_root = tmp_path / "comfygit"
        workspace_root.mkdir()
        metadata_dir = workspace_root / ".metadata"
        metadata_dir.mkdir()

        # Write PID file with non-existent PID
        pid_file = metadata_dir / ".orchestrator.pid"
        pid_file.write_text("999999")

        with patch('server.orchestrator.find_workspace_root', return_value=workspace_root):
            result = detect_manual_start_during_orchestrator()
            assert result is False

    def test_detect_manual_start_returns_false_when_supervised(self, tmp_path):
        """Should return False when running under orchestrator supervision."""
        from server.orchestrator import detect_manual_start_during_orchestrator

        workspace_root = tmp_path / "comfygit"
        workspace_root.mkdir()
        metadata_dir = workspace_root / ".metadata"
        metadata_dir.mkdir()

        # Write PID file
        pid_file = metadata_dir / ".orchestrator.pid"
        pid_file.write_text(str(os.getpid()))

        # Set supervised env var
        with patch.dict(os.environ, {'COMFYGIT_SUPERVISED': '1'}):
            with patch('server.orchestrator.find_workspace_root', return_value=workspace_root):
                result = detect_manual_start_during_orchestrator()
                assert result is False

    def test_detect_manual_start_returns_false_when_no_switch_in_progress(self, tmp_path):
        """Should return False when orchestrator is running but no switch in progress."""
        from server.orchestrator import detect_manual_start_during_orchestrator

        workspace_root = tmp_path / "comfygit"
        workspace_root.mkdir()
        metadata_dir = workspace_root / ".metadata"
        metadata_dir.mkdir()

        # Write PID file with current process (simulate running orchestrator)
        pid_file = metadata_dir / ".orchestrator.pid"
        pid_file.write_text(str(os.getpid()))

        # No lock file (no switch in progress)

        with patch.dict(os.environ, {'COMFYGIT_SUPERVISED': '0'}):
            with patch('server.orchestrator.find_workspace_root', return_value=workspace_root):
                result = detect_manual_start_during_orchestrator()
                assert result is False

    def test_detect_manual_start_returns_true_when_manual_start_during_switch(self, tmp_path):
        """Should return True when manual start detected during switch."""
        from server.orchestrator import detect_manual_start_during_orchestrator

        workspace_root = tmp_path / "comfygit"
        workspace_root.mkdir()
        metadata_dir = workspace_root / ".metadata"
        metadata_dir.mkdir()

        # Write PID file with current process (simulate running orchestrator)
        pid_file = metadata_dir / ".orchestrator.pid"
        pid_file.write_text(str(os.getpid()))

        # Create lock file (switch in progress)
        lock_file = metadata_dir / ".switch.lock"
        lock_file.touch()

        with patch.dict(os.environ, {'COMFYGIT_SUPERVISED': '0'}):
            with patch('server.orchestrator.find_workspace_root', return_value=workspace_root):
                result = detect_manual_start_during_orchestrator()
                assert result is True


@pytest.mark.unit
class TestAbortCommandSending:
    """Test sending abort command to orchestrator."""

    def test_send_abort_command_writes_cmd_file(self, metadata_dir):
        """Should write abort command file atomically."""
        from server.orchestrator import safe_write_command

        abort_cmd = {
            "command": "abort_switch",
            "reason": "manual_restart",
            "timestamp": time.time(),
            "pid": os.getpid()
        }

        safe_write_command(metadata_dir, abort_cmd)

        cmd_file = metadata_dir / ".cmd"
        assert cmd_file.exists()

        with open(cmd_file) as f:
            data = json.load(f)

        assert data["command"] == "abort_switch"
        assert data["reason"] == "manual_restart"
        assert "timestamp" in data
        assert "pid" in data

    def test_send_abort_command_overwrites_existing(self, metadata_dir):
        """Should overwrite existing command file."""
        from server.orchestrator import safe_write_command

        # Write restart command first
        safe_write_command(metadata_dir, {"command": "restart"})

        # Write abort command (should overwrite)
        abort_cmd = {
            "command": "abort_switch",
            "reason": "manual_restart",
            "timestamp": time.time()
        }
        safe_write_command(metadata_dir, abort_cmd)

        cmd_file = metadata_dir / ".cmd"
        with open(cmd_file) as f:
            data = json.load(f)

        assert data["command"] == "abort_switch"


@pytest.mark.unit
class TestOrchestratorAbortHandler:
    """Test orchestrator handling of abort commands."""

    def test_handle_abort_switch_sets_shutdown_flag(self, metadata_dir):
        """Should set shutdown flag when abort received."""
        from server.orchestrator import Orchestrator

        orch = Mock(spec=Orchestrator)
        orch.metadata_dir = metadata_dir
        orch.current_process = None
        orch._shutdown_requested = False

        cmd = {
            "command": "abort_switch",
            "reason": "manual_restart",
            "pid": 12345
        }

        with patch('server.orchestrator.read_switch_status', return_value=None):
            with patch('server.orchestrator.write_switch_status'):
                with patch('server.orchestrator.release_switch_lock'):
                    with patch('server.orchestrator.cleanup_switch_status'):
                        with patch('time.sleep'):
                            Orchestrator._handle_abort_switch_command(orch, cmd)

        assert orch._shutdown_requested is True

    def test_handle_abort_switch_kills_current_process(self, metadata_dir):
        """Should terminate current process when abort received."""
        from server.orchestrator import Orchestrator

        mock_proc = Mock()
        mock_proc.poll.return_value = None  # Process running

        orch = Mock(spec=Orchestrator)
        orch.metadata_dir = metadata_dir
        orch.current_process = mock_proc
        orch._shutdown_requested = False
        orch.current_env_name = "env2"

        cmd = {
            "command": "abort_switch",
            "reason": "manual_restart"
        }

        with patch('server.orchestrator.read_switch_status', return_value=None):
            with patch('server.orchestrator.write_switch_status'):
                with patch('server.orchestrator.release_switch_lock'):
                    with patch('server.orchestrator.cleanup_switch_status'):
                        with patch('time.sleep'):
                            Orchestrator._handle_abort_switch_command(orch, cmd)

        mock_proc.terminate.assert_called_once()

    def test_handle_abort_switch_updates_status_to_aborted(self, metadata_dir):
        """Should write aborted status."""
        from server.orchestrator import Orchestrator

        orch = Mock(spec=Orchestrator)
        orch.metadata_dir = metadata_dir
        orch.current_process = None
        orch._shutdown_requested = False
        orch._switch_target_env = "env2"
        orch._switch_source_env = "env1"

        cmd = {"command": "abort_switch", "reason": "manual_restart"}

        with patch('server.orchestrator.read_switch_status', return_value=None):
            with patch('server.orchestrator.write_switch_status') as mock_write:
                with patch('server.orchestrator.release_switch_lock'):
                    with patch('server.orchestrator.cleanup_switch_status'):
                        with patch('time.sleep'):
                            Orchestrator._handle_abort_switch_command(orch, cmd)

        # Should have called write_switch_status with "aborted" state
        mock_write.assert_called_once()
        call_args = mock_write.call_args
        assert call_args[1]['state'] == 'aborted'
        assert 'aborted' in call_args[1]['message'].lower()

    def test_handle_abort_switch_releases_lock(self, metadata_dir):
        """Should release switch lock."""
        from server.orchestrator import Orchestrator

        orch = Mock(spec=Orchestrator)
        orch.metadata_dir = metadata_dir
        orch.current_process = None
        orch._shutdown_requested = False

        cmd = {"command": "abort_switch", "reason": "manual_restart"}

        with patch('server.orchestrator.read_switch_status', return_value=None):
            with patch('server.orchestrator.write_switch_status'):
                with patch('server.orchestrator.release_switch_lock') as mock_release:
                    with patch('server.orchestrator.cleanup_switch_status'):
                        with patch('time.sleep'):
                            Orchestrator._handle_abort_switch_command(orch, cmd)

        mock_release.assert_called_once()

    def test_handle_abort_switch_when_already_complete(self, metadata_dir):
        """Should still shutdown when switch already completed."""
        from server.orchestrator import Orchestrator

        orch = Mock(spec=Orchestrator)
        orch.metadata_dir = metadata_dir
        orch.current_process = None
        orch._shutdown_requested = False

        cmd = {"command": "abort_switch", "reason": "manual_restart"}

        # Switch already complete
        with patch('server.orchestrator.read_switch_status', return_value={"state": "complete"}):
            Orchestrator._handle_abort_switch_command(orch, cmd)

        assert orch._shutdown_requested is True

    def test_wait_with_polling_processes_abort_command(self, metadata_dir):
        """Should process abort command in polling loop."""
        from server.orchestrator import Orchestrator

        mock_proc = Mock()
        mock_proc.poll.side_effect = [None, None, 0]  # Run a few times then exit

        orch = Mock(spec=Orchestrator)
        orch.metadata_dir = metadata_dir
        orch._shutdown_requested = False
        orch.current_process = None

        # Mock _check_command_file to return abort command on first call
        abort_cmd = {
            "command": "abort_switch",
            "reason": "manual_restart"
        }
        orch._check_command_file = Mock(side_effect=[abort_cmd, None, None])

        # Mock the abort handler on the instance
        orch._handle_abort_switch_command = Mock()

        with patch('time.sleep'):  # Speed up test
            result = Orchestrator._wait_with_polling(orch, mock_proc)

        # Should have called abort handler
        orch._handle_abort_switch_command.assert_called_once()

        # Check that abort command was passed
        call_args = orch._handle_abort_switch_command.call_args[0]
        assert call_args[0]["command"] == "abort_switch"


@pytest.mark.unit
class TestForceCleanup:
    """Test force cleanup of orchestrator state."""

    def test_force_cleanup_removes_state_files(self, metadata_dir):
        """Should remove all orchestrator state files."""
        from server.orchestrator import force_cleanup_orchestrator_state

        # Create state files
        (metadata_dir / ".switch.lock").touch()
        (metadata_dir / ".switch_status.json").write_text('{"state": "syncing"}')
        (metadata_dir / ".switch_request.json").write_text('{"target_env": "env2"}')

        force_cleanup_orchestrator_state(metadata_dir)

        # All should be removed
        assert not (metadata_dir / ".switch.lock").exists()
        assert not (metadata_dir / ".switch_status.json").exists()
        assert not (metadata_dir / ".switch_request.json").exists()

    def test_force_cleanup_handles_missing_files(self, metadata_dir):
        """Should not error if files don't exist."""
        from server.orchestrator import force_cleanup_orchestrator_state

        # No files exist - should not raise
        force_cleanup_orchestrator_state(metadata_dir)

    def test_force_cleanup_kills_orchestrator_process(self, metadata_dir):
        """Should attempt to kill orchestrator process."""
        from server.orchestrator import force_cleanup_orchestrator_state

        # Write PID file with current process
        pid_file = metadata_dir / ".orchestrator.pid"
        pid_file.write_text(str(os.getpid()))

        with patch('os.kill') as mock_kill:
            with patch('time.sleep'):
                force_cleanup_orchestrator_state(metadata_dir)

        # Should have attempted to kill process
        assert mock_kill.called

    def test_force_cleanup_removes_pid_file(self, metadata_dir):
        """Should remove PID file after killing process."""
        from server.orchestrator import force_cleanup_orchestrator_state

        pid_file = metadata_dir / ".orchestrator.pid"
        pid_file.write_text("12345")

        with patch('os.kill'):
            with patch('time.sleep'):
                force_cleanup_orchestrator_state(metadata_dir)

        assert not pid_file.exists()

    def test_force_cleanup_handles_process_lookup_error(self, metadata_dir):
        """Should handle gracefully if process doesn't exist."""
        from server.orchestrator import force_cleanup_orchestrator_state

        pid_file = metadata_dir / ".orchestrator.pid"
        pid_file.write_text("999999")

        # Should not raise
        with patch('time.sleep'):
            force_cleanup_orchestrator_state(metadata_dir)

        # PID file should still be removed
        assert not pid_file.exists()
