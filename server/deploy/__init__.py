"""Deploy module for cloud GPU deployment functionality."""
from .runpod_client import RunPodClient, RunPodAPIError, GPU_TYPES
from .runpod_api_logger import API_LOGGING_ENABLED
from .client_factory import get_deploy_client, is_simulator_mode, DeployClient

# Lazy imports for simulator (requires docker package)
def __getattr__(name):
    if name == "LocalSimulatorClient":
        from .local_simulator import LocalSimulatorClient
        return LocalSimulatorClient
    elif name == "LocalSimulatorError":
        from .local_simulator import LocalSimulatorError
        return LocalSimulatorError
    raise AttributeError(f"module {__name__!r} has no attribute {name!r}")

__all__ = [
    "RunPodClient",
    "RunPodAPIError",
    "GPU_TYPES",
    "API_LOGGING_ENABLED",
    "get_deploy_client",
    "is_simulator_mode",
    "DeployClient",
    "LocalSimulatorClient",
    "LocalSimulatorError",
]
