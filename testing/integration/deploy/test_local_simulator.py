"""Integration tests for LocalSimulatorClient.

These tests require Docker to be running.
Run with: pytest testing/integration/deploy/test_local_simulator.py -v
"""
import sys
from pathlib import Path

import pytest

# Add server directory to path
server_dir = Path(__file__).parent.parent.parent.parent / "server"
if str(server_dir) not in sys.path:
    sys.path.insert(0, str(server_dir))


@pytest.mark.integration
class TestLocalSimulatorConnection:
    """Test Docker connectivity."""

    @pytest.mark.asyncio
    async def test_connection_success(self, docker_client):
        """Should return success when Docker is available."""
        from server.deploy.local_simulator import LocalSimulatorClient
        client = LocalSimulatorClient(gpu_mode="cpu")
        result = await client.test_connection()
        assert result["success"] is True
        assert "credit_balance" in result


@pytest.mark.integration
class TestLocalSimulatorPodLifecycle:
    """Test pod creation, listing, deletion."""

    @pytest.mark.asyncio
    async def test_create_pod(self, simulator_client, runpod_image, cleanup_simulator_containers):
        """Should create container and return pod-like response."""
        pod = await simulator_client.create_pod(
            name="test-create",
            image_name=runpod_image,
            gpu_type_id="Local CPU",
            docker_start_cmd=["/bin/bash", "-c", "sleep infinity"],
        )

        try:
            assert "id" in pod
            assert pod["name"] == "test-create"
            assert pod["desiredStatus"] == "RUNNING"
        finally:
            await simulator_client.delete_pod(pod["id"])

    @pytest.mark.asyncio
    async def test_list_pods(self, simulator_client, runpod_image, cleanup_simulator_containers):
        """Should list simulator containers."""
        pod = await simulator_client.create_pod(
            name="test-list",
            image_name=runpod_image,
            gpu_type_id="Local CPU",
            docker_start_cmd=["/bin/bash", "-c", "sleep infinity"],
        )

        try:
            pods = await simulator_client.list_pods()
            pod_ids = [p["id"] for p in pods]
            assert pod["id"] in pod_ids
        finally:
            await simulator_client.delete_pod(pod["id"])

    @pytest.mark.asyncio
    async def test_stop_start_pod(self, simulator_client, runpod_image, cleanup_simulator_containers):
        """Should stop and restart container."""
        pod = await simulator_client.create_pod(
            name="test-stop-start",
            image_name=runpod_image,
            gpu_type_id="Local CPU",
            docker_start_cmd=["/bin/bash", "-c", "sleep infinity"],
        )

        try:
            # Stop
            stop_result = await simulator_client.stop_pod(pod["id"])
            assert stop_result["desiredStatus"] == "EXITED"

            # Verify stopped
            stopped_pod = await simulator_client.get_pod(pod["id"])
            assert stopped_pod["desiredStatus"] == "EXITED"
            assert stopped_pod["publicIp"] == ""  # No IP when stopped

            # Start
            start_result = await simulator_client.start_pod(pod["id"])
            assert start_result["desiredStatus"] == "RUNNING"

            # Verify running
            running_pod = await simulator_client.get_pod(pod["id"])
            assert running_pod["desiredStatus"] == "RUNNING"
        finally:
            await simulator_client.delete_pod(pod["id"])

    @pytest.mark.asyncio
    async def test_delete_pod(self, simulator_client, runpod_image, cleanup_simulator_containers):
        """Should remove container."""
        pod = await simulator_client.create_pod(
            name="test-delete",
            image_name=runpod_image,
            gpu_type_id="Local CPU",
            docker_start_cmd=["/bin/bash", "-c", "sleep infinity"],
        )

        result = await simulator_client.delete_pod(pod["id"])
        assert result is True

        # Verify container is gone
        pods = await simulator_client.list_pods()
        assert pod["id"] not in [p["id"] for p in pods]


@pytest.mark.integration
class TestLocalSimulatorURLs:
    """Test URL generation."""

    @pytest.mark.asyncio
    async def test_comfyui_url_running(self, simulator_client, runpod_image, cleanup_simulator_containers):
        """Should return localhost URL with mapped port."""
        from server.deploy.local_simulator import LocalSimulatorClient

        pod = await simulator_client.create_pod(
            name="test-url",
            image_name=runpod_image,
            gpu_type_id="Local CPU",
            docker_start_cmd=["/bin/bash", "-c", "sleep infinity"],
        )

        try:
            url = LocalSimulatorClient.get_comfyui_url(pod)
            assert url is not None
            assert url.startswith("http://localhost:")
        finally:
            await simulator_client.delete_pod(pod["id"])

    @pytest.mark.asyncio
    async def test_comfyui_url_stopped(self, simulator_client, runpod_image, cleanup_simulator_containers):
        """Should return None for stopped pod."""
        from server.deploy.local_simulator import LocalSimulatorClient

        pod = await simulator_client.create_pod(
            name="test-url-stopped",
            image_name=runpod_image,
            gpu_type_id="Local CPU",
            docker_start_cmd=["/bin/bash", "-c", "sleep infinity"],
        )

        try:
            await simulator_client.stop_pod(pod["id"])
            stopped_pod = await simulator_client.get_pod(pod["id"])
            url = LocalSimulatorClient.get_comfyui_url(stopped_pod)
            assert url is None
        finally:
            await simulator_client.delete_pod(pod["id"])


@pytest.mark.integration
class TestLocalSimulatorMetadata:
    """Test metadata methods."""

    @pytest.mark.asyncio
    async def test_get_gpu_types(self, simulator_client):
        """Should return simulated GPU types."""
        gpu_types = await simulator_client.get_gpu_types_with_pricing()
        assert len(gpu_types) >= 1
        assert any(gpu["id"] == "Local CPU" for gpu in gpu_types)

    @pytest.mark.asyncio
    async def test_get_data_centers(self, simulator_client):
        """Should return simulated data centers."""
        data_centers = await simulator_client.get_data_centers()
        assert len(data_centers) == 1
        assert data_centers[0]["id"] == "LOCAL-SIM"

    @pytest.mark.asyncio
    async def test_list_network_volumes(self, simulator_client):
        """Should list Docker volumes with simulator prefix."""
        volumes = await simulator_client.list_network_volumes()
        assert isinstance(volumes, list)
