"""
Integration tests for environment switch progress polling via orchestrator control server.

These tests verify that the frontend can poll progress through the orchestrator's
control server even when the ComfyUI server is down during environment switches.
"""

import json
import time
import pytest
import requests
from pathlib import Path
from unittest.mock import Mock


@pytest.mark.integration
class TestSwitchProgressPolling:
    """Test progress polling during environment switches."""

    def test_frontend_can_poll_orchestrator_during_comfyui_shutdown(
        self, mock_workspace, metadata_dir, mocker
    ):
        """
        Frontend should be able to poll switch progress from orchestrator control server
        even when ComfyUI server is down.

        This is THE CRITICAL test - it verifies that there's no gap in progress updates
        during the switch window when ComfyUI is restarting.
        """
        from server.orchestrator import Orchestrator, write_switch_status

        # Mock environment
        env1 = Mock()
        env1.name = "env1"
        env1.sync = Mock()
        env1.comfyui_path = Path("/env1")
        env1.uv_manager.python_executable = Path("/env1/python")

        # Create orchestrator with control server enabled
        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=["--port", "8188"]
        )

        # Mock _start_comfyui and _sync_environment
        mocker.patch.object(orch, '_start_comfyui', return_value=Mock())
        mocker.patch.object(orch, '_sync_environment')
        mocker.patch.object(orch.workspace, 'get_environment', return_value=env1)

        # Orchestrator should have started control server
        assert orch.control_server is not None
        assert orch.control_port is not None

        # Read the control port file (this is what frontend will do)
        port_file = metadata_dir / ".control_port"
        assert port_file.exists(), "Orchestrator should write .control_port file"
        control_port = int(port_file.read_text())

        # Write a switch status (simulating orchestrator during switch)
        write_switch_status(
            metadata_dir,
            state="syncing",
            progress=30,
            message="Syncing env2...",
            target_env="env2",
            source_env="env1"
        )

        # Frontend polls the orchestrator control server's /status endpoint
        response = requests.get(f"http://127.0.0.1:{control_port}/status", timeout=2)

        assert response.status_code == 200
        data = response.json()

        # CRITICAL ASSERTIONS: Progress should be available even when ComfyUI is down
        assert data["state"] == "syncing"
        assert data["progress"] == 30
        assert data["message"] == "Syncing env2..."
        assert data["target_env"] == "env2"
        assert data["source_env"] == "env1"

        # Cleanup
        orch.control_server.shutdown()

    def test_frontend_discovers_orchestrator_port_from_file(
        self, mock_workspace, metadata_dir
    ):
        """
        Frontend should discover orchestrator control port by reading .control_port file.
        """
        from server.orchestrator import Orchestrator

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        # Control port file should exist
        port_file = metadata_dir / ".control_port"
        assert port_file.exists()

        # Port should be valid
        control_port = int(port_file.read_text())
        assert 8189 <= control_port <= 8199

        # Port should match orchestrator's port
        assert control_port == orch.control_port

        # Cleanup
        orch.control_server.shutdown()

    def test_orchestrator_status_endpoint_returns_idle_when_no_switch(
        self, mock_workspace, metadata_dir
    ):
        """
        Orchestrator /status endpoint should return idle state when no switch in progress.
        """
        from server.orchestrator import Orchestrator

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        port_file = metadata_dir / ".control_port"
        control_port = int(port_file.read_text())

        # Poll status (no switch in progress)
        response = requests.get(f"http://127.0.0.1:{control_port}/status", timeout=2)

        assert response.status_code == 200
        data = response.json()

        # Should indicate no switch in progress
        assert data["state"] == "idle"
        assert data["message"] == "No switch in progress"

        # Cleanup
        orch.control_server.shutdown()

    def test_orchestrator_status_reflects_all_switch_phases(
        self, mock_workspace, metadata_dir, mocker
    ):
        """
        Orchestrator /status endpoint should reflect all phases of a switch.
        """
        from server.orchestrator import Orchestrator, write_switch_status

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        port_file = metadata_dir / ".control_port"
        control_port = int(port_file.read_text())

        # Simulate switch phases
        phases = [
            {"state": "preparing", "progress": 10, "message": "Preparing..."},
            {"state": "syncing", "progress": 30, "message": "Syncing..."},
            {"state": "starting", "progress": 60, "message": "Starting..."},
            {"state": "validating", "progress": 80, "message": "Validating..."},
            {"state": "complete", "progress": 100, "message": "Complete!"},
        ]

        for phase in phases:
            # Write status
            write_switch_status(
                metadata_dir,
                state=phase["state"],
                progress=phase["progress"],
                message=phase["message"],
                target_env="env2",
                source_env="env1"
            )

            # Poll status
            response = requests.get(f"http://127.0.0.1:{control_port}/status", timeout=2)
            assert response.status_code == 200
            data = response.json()

            # Verify phase
            assert data["state"] == phase["state"]
            assert data["progress"] == phase["progress"]
            assert data["message"] == phase["message"]

        # Cleanup
        orch.control_server.shutdown()

    def test_orchestrator_status_endpoint_has_cors_headers(
        self, mock_workspace, metadata_dir
    ):
        """
        Orchestrator /status endpoint should include CORS headers for browser access.
        """
        from server.orchestrator import Orchestrator

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        port_file = metadata_dir / ".control_port"
        control_port = int(port_file.read_text())

        # Make request with Origin header (simulating browser)
        response = requests.get(
            f"http://127.0.0.1:{control_port}/status",
            headers={"Origin": "http://127.0.0.1:8188"},
            timeout=2
        )

        assert response.status_code == 200

        # Should have CORS header
        assert "Access-Control-Allow-Origin" in response.headers
        assert response.headers["Access-Control-Allow-Origin"] == "http://127.0.0.1:8188"

        # Cleanup
        orch.control_server.shutdown()

    @pytest.mark.slow
    def test_continuous_polling_during_switch_window(
        self, mock_workspace, metadata_dir, mocker
    ):
        """
        Test continuous polling during a realistic switch window.

        This simulates the actual frontend polling behavior during a switch.
        """
        from server.orchestrator import Orchestrator, write_switch_status
        import threading

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        port_file = metadata_dir / ".control_port"
        control_port = int(port_file.read_text())

        # Simulate orchestrator updating status in background
        def simulate_switch():
            phases = [
                (0.0, "preparing", 10),
                (1.0, "syncing", 30),
                (2.0, "starting", 60),
                (3.0, "validating", 80),
                (4.0, "complete", 100),
            ]

            for delay, state, progress in phases:
                time.sleep(delay)
                write_switch_status(
                    metadata_dir,
                    state=state,
                    progress=progress,
                    message=f"{state}...",
                    target_env="env2",
                    source_env="env1"
                )

        # Start background thread
        thread = threading.Thread(target=simulate_switch, daemon=True)
        thread.start()

        # Frontend polls continuously
        collected_progress = []
        poll_start = time.time()
        max_poll_time = 12.0  # Allow time for all phases (10s delay + buffer)

        while time.time() - poll_start < max_poll_time:
            try:
                response = requests.get(
                    f"http://127.0.0.1:{control_port}/status",
                    timeout=1
                )
                if response.status_code == 200:
                    data = response.json()
                    collected_progress.append({
                        "state": data["state"],
                        "progress": data["progress"]
                    })

                    # Stop when complete
                    if data["state"] == "complete":
                        break

            except Exception as e:
                print(f"Poll error: {e}")

            time.sleep(0.5)  # Poll every 500ms

        thread.join(timeout=2)

        # CRITICAL ASSERTION: Should have collected progress from all phases
        states_seen = [p["state"] for p in collected_progress]

        # We should see at least some of the major phases
        assert "syncing" in states_seen or "starting" in states_seen or "validating" in states_seen
        assert "complete" in states_seen

        # Progress should generally increase (allow duplicates due to polling frequency)
        progresses = [p["progress"] for p in collected_progress]
        assert progresses[-1] == 100  # Should end at 100%

        # Cleanup
        orch.control_server.shutdown()
