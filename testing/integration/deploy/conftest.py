"""Deploy integration test fixtures."""
import sys
from pathlib import Path

import pytest

# Add server directory to path
server_dir = Path(__file__).parent.parent.parent.parent / "server"
if str(server_dir) not in sys.path:
    sys.path.insert(0, str(server_dir))


@pytest.fixture
def docker_client():
    """Provide Docker client, skip if unavailable."""
    try:
        import docker
        client = docker.from_env()
        client.ping()
        return client
    except Exception:
        pytest.skip("Docker not available")


@pytest.fixture
def runpod_image(docker_client):
    """Ensure RunPod base image is available."""
    image_name = "runpod/pytorch:2.1.0-py3.10-cuda11.8.0-devel-ubuntu22.04"
    try:
        docker_client.images.get(image_name)
    except Exception:
        pytest.skip(f"RunPod image not found. Run: docker pull {image_name}")
    return image_name


@pytest.fixture
def simulator_client():
    """Provide LocalSimulatorClient instance in CPU mode for testing."""
    from server.deploy.local_simulator import LocalSimulatorClient
    return LocalSimulatorClient(gpu_mode="cpu")


@pytest.fixture
def cleanup_simulator_containers(docker_client):
    """Clean up simulator containers after test."""
    yield
    containers = docker_client.containers.list(
        all=True,
        filters={"label": "comfygit.deploy.simulator"}
    )
    for container in containers:
        container.remove(force=True)


@pytest.fixture
def cleanup_simulator_volumes(docker_client):
    """Clean up simulator volumes after test."""
    yield
    volumes = docker_client.volumes.list(
        filters={"name": "comfygit-simulator-"}
    )
    for volume in volumes:
        try:
            volume.remove()
        except Exception:
            pass
