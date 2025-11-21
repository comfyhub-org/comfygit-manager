"""
ComfyGit Manager - Custom node that provides Manager UI integration for ComfyGit.
Adds a Manager button to the ComfyUI toolbar that opens the built-in Manager UI.
"""

import os
import sys
from pathlib import Path

# Add server module to path
sys.path.append(os.path.join(os.path.dirname(__file__), "server"))

# Import to register routes and feature flags
import comfygit_server  # noqa: F401
import comfygit_panel   # noqa: F401

# Setup orchestrator venv on custom node load
try:
    # Import orchestrator module to setup venv
    custom_node_root = Path(__file__).parent
    orchestrator_module_path = custom_node_root / "server" / "orchestrator.py"

    # Dynamic import to avoid module path collision
    import importlib.util
    spec = importlib.util.spec_from_file_location("comfygit_orchestrator", orchestrator_module_path)
    orchestrator = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(orchestrator)

    orchestrator_venv_path = custom_node_root / "server" / ".orchestrator_venv"
    orchestrator.ensure_orchestrator_venv(orchestrator_venv_path)
    print("[ComfyGit] Orchestrator environment ready")

    # Phase 2: Detect manual start during orchestrator switch
    if orchestrator.detect_manual_start_during_orchestrator():
        import time
        print("[ComfyGit] ⚠️  Manual start detected during orchestrator switch")
        print("[ComfyGit] Sending abort signal to orchestrator...")

        workspace_root = orchestrator.find_workspace_root()
        if workspace_root:
            metadata_dir = workspace_root / ".metadata"

            # Write abort command
            orchestrator.safe_write_command(metadata_dir, {
                "command": "abort_switch",
                "reason": "manual_restart",
                "timestamp": time.time(),
                "pid": os.getpid()
            })

            print("[ComfyGit] Waiting for orchestrator to abort...")

            # Wait for orchestrator to clean up (max 30 seconds)
            for i in range(30):
                time.sleep(1)

                # Check if orchestrator released the lock
                lock_file = metadata_dir / ".switch.lock"
                if not lock_file.exists():
                    print("[ComfyGit] ✅ Orchestrator aborted, proceeding with startup")
                    break

                # Check if orchestrator died
                orch_pid_file = metadata_dir / ".orchestrator.pid"
                if not orch_pid_file.exists():
                    print("[ComfyGit] ✅ Orchestrator shut down")
                    break

                if i % 5 == 0 and i > 0:
                    print(f"[ComfyGit] Still waiting... ({30-i}s remaining)")
            else:
                # Timeout - orchestrator didn't respond
                print("[ComfyGit] ⚠️  Orchestrator did not respond to abort")
                print("[ComfyGit] Forcing cleanup of stale files...")

                # Force cleanup (nuclear option)
                orchestrator.force_cleanup_orchestrator_state(metadata_dir)

except Exception as e:
    print(f"[ComfyGit] WARNING: Failed to setup orchestrator venv: {e}")

# Serve frontend JS from the js directory
WEB_DIRECTORY = "js"

NODE_CLASS_MAPPINGS = {}
__all__ = ['NODE_CLASS_MAPPINGS']
