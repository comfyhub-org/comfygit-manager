"""
ComfyGit Control Panel Server - Backend API endpoints for the Control Panel UI.
Provides /v2/comfygit/ endpoints for git operations, status, and environment management.
"""

import logging
from contextlib import asynccontextmanager

from server import PromptServer

from comfygit_server import get_environment_from_cwd, _workspace

# Import panel-specific logging infrastructure
try:
    from panel_environment_logger import EnvironmentLogger, WorkspaceLogger
    from panel_logging_config import get_logger
    logger = get_logger(__name__)
except Exception as e:
    # Graceful degradation
    print(f"[ComfyGit Panel] Could not import panel logging: {e}")
    logger = logging.getLogger(__name__)
    EnvironmentLogger = None
    WorkspaceLogger = None

# Import error handler middleware
from api.middleware.error_handler import error_handler_middleware

# Import all endpoint modules
from api.v2 import status, git, workflows, operations, environments, debug, models

# Get routes object from ComfyUI
routes = PromptServer.instance.routes

# Register middleware
PromptServer.instance.app.middlewares.append(error_handler_middleware)

# Setup app state for context access
PromptServer.instance.app['get_environment'] = get_environment_from_cwd
PromptServer.instance.app['workspace'] = _workspace

# Register all routes (iterate since PromptServer routes don't have add_routes)
for route_def in [status.routes, git.routes, workflows.routes, operations.routes, environments.routes, debug.routes, models.routes]:
    for route in route_def:
        # Route is a tuple-like (method, path, handler)
        method = route.method
        path = route.path
        handler = route.handler

        # Register with PromptServer routes
        if method == 'GET':
            routes.get(path)(handler)
        elif method == 'POST':
            routes.post(path)(handler)
        elif method == 'PUT':
            routes.put(path)(handler)
        elif method == 'DELETE':
            routes.delete(path)(handler)

# Setup context management for request logging
@asynccontextmanager
async def log_panel_request(env_name: str, operation: str, **context):
    """Context manager for logging panel requests."""
    if EnvironmentLogger:
        with EnvironmentLogger.log_command(env_name, f"panel: {operation}", **context):
            yield
    else:
        yield


def _initialize_panel_logging():
    """Initialize environment logging for panel backend."""
    if not EnvironmentLogger or not WorkspaceLogger:
        return

    env = get_environment_from_cwd()
    if env and env.workspace:
        # Set workspace path for loggers
        EnvironmentLogger.set_workspace_path(env.workspace.path)
        WorkspaceLogger.set_workspace_path(env.workspace.path)
        logger.info(f"Panel API initialized for environment: {env.name}")


# Initialize logging
_initialize_panel_logging()

print("[ComfyGit] Control Panel API endpoints registered")
