"""Tests for deploy client factory."""
import os
import sys
from pathlib import Path
from unittest import mock

import pytest

# Add server directory to path
server_dir = Path(__file__).parent.parent.parent.parent / "server"
if str(server_dir) not in sys.path:
    sys.path.insert(0, str(server_dir))


class TestClientFactory:
    """Test get_deploy_client factory function."""

    def test_default_returns_runpod(self):
        """Should return RunPodClient by default."""
        from server.deploy.client_factory import get_deploy_client
        from server.deploy.runpod_client import RunPodClient

        with mock.patch.dict(os.environ, {"DEPLOY_BACKEND": "runpod"}, clear=False):
            client = get_deploy_client("test_api_key")
            assert isinstance(client, RunPodClient)

    def test_local_returns_simulator(self):
        """Should return LocalSimulatorClient when DEPLOY_BACKEND=local."""
        from server.deploy.client_factory import get_deploy_client
        from server.deploy.local_simulator import LocalSimulatorClient

        with mock.patch.dict(os.environ, {"DEPLOY_BACKEND": "local"}, clear=False):
            client = get_deploy_client(None)
            assert isinstance(client, LocalSimulatorClient)

    def test_runpod_requires_api_key(self):
        """Should raise ValueError when RunPod backend has no API key."""
        from server.deploy.client_factory import get_deploy_client

        with mock.patch.dict(os.environ, {"DEPLOY_BACKEND": "runpod"}, clear=False):
            with pytest.raises(ValueError, match="API key required"):
                get_deploy_client(None)

    def test_is_simulator_mode(self):
        """Should detect simulator mode correctly."""
        from server.deploy.client_factory import is_simulator_mode

        with mock.patch.dict(os.environ, {"DEPLOY_BACKEND": "local"}, clear=False):
            assert is_simulator_mode() is True

        with mock.patch.dict(os.environ, {"DEPLOY_BACKEND": "runpod"}, clear=False):
            assert is_simulator_mode() is False

    def test_gpu_mode_passed_to_simulator(self):
        """Should pass GPU mode from env var to simulator."""
        from server.deploy.client_factory import get_deploy_client
        from server.deploy.local_simulator import LocalSimulatorClient

        with mock.patch.dict(os.environ, {
            "DEPLOY_BACKEND": "local",
            "SIMULATOR_GPU_MODE": "cpu"
        }, clear=False):
            client = get_deploy_client(None)
            assert isinstance(client, LocalSimulatorClient)
            assert client.gpu_mode == "cpu"
