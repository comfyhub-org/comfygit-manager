"""Factory for deploy backend clients.

Environment Variables:
    DEPLOY_BACKEND: "runpod" (default) or "local"
    SIMULATOR_GPU_MODE: "gpu" (default) or "cpu"
"""

import os
from typing import Protocol, Any, runtime_checkable


@runtime_checkable
class DeployClient(Protocol):
    """Protocol defining the deploy client interface."""

    async def test_connection(self) -> dict[str, Any]:
        """Test backend connectivity."""
        ...

    async def list_pods(self) -> list[dict]:
        """List all pods/containers."""
        ...

    async def get_pod(self, pod_id: str) -> dict:
        """Get pod by ID."""
        ...

    async def create_pod(
        self,
        name: str,
        image_name: str,
        gpu_type_id: str,
        gpu_count: int = 1,
        volume_in_gb: int = 20,
        container_disk_in_gb: int = 50,
        cloud_type: str = "SECURE",
        ports: list[str] | None = None,
        env: dict[str, str] | None = None,
        docker_start_cmd: list[str] | None = None,
        network_volume_id: str | None = None,
        data_center_ids: list[str] | None = None,
        interruptible: bool = False,
    ) -> dict:
        """Create a new pod."""
        ...

    async def delete_pod(self, pod_id: str) -> bool:
        """Delete a pod."""
        ...

    async def start_pod(self, pod_id: str) -> dict:
        """Start a stopped pod."""
        ...

    async def stop_pod(self, pod_id: str) -> dict:
        """Stop a running pod."""
        ...

    async def list_network_volumes(self) -> list[dict]:
        """List network volumes."""
        ...

    async def get_gpu_types_with_pricing(self, data_center_id: str | None = None) -> list[dict]:
        """Get GPU types with pricing."""
        ...

    async def get_data_centers(self) -> list[dict]:
        """Get available data centers."""
        ...

    @staticmethod
    def get_comfyui_url(pod: dict, port: int = 8188) -> str | None:
        """Get ComfyUI URL for a pod."""
        ...

    @staticmethod
    def get_ssh_command(pod: dict) -> str | None:
        """Get SSH/exec command for a pod."""
        ...


def get_deploy_client(api_key: str | None = None) -> DeployClient:
    """Get appropriate deploy client based on DEPLOY_BACKEND env var.

    Args:
        api_key: RunPod API key (required for runpod backend)

    Returns:
        RunPodClient or LocalSimulatorClient
    """
    backend = os.environ.get("DEPLOY_BACKEND", "runpod").lower()

    if backend == "local":
        from .local_simulator import LocalSimulatorClient
        gpu_mode = os.environ.get("SIMULATOR_GPU_MODE", "gpu").lower()
        return LocalSimulatorClient(gpu_mode=gpu_mode)
    else:
        if not api_key:
            raise ValueError("API key required for RunPod backend")
        from .runpod_client import RunPodClient
        return RunPodClient(api_key)


def is_simulator_mode() -> bool:
    """Check if running in simulator mode."""
    return os.environ.get("DEPLOY_BACKEND", "runpod").lower() == "local"
