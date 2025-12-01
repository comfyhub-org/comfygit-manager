"""Handler decorators for common patterns."""
import functools
from aiohttp import web
from cgm_core.context import get_environment_from_request, get_workspace_from_request

# Import EnvironmentLogger with graceful fallback
try:
    from panel_environment_logger import EnvironmentLogger
except ImportError:
    EnvironmentLogger = None


def logged_operation(operation_name: str = None):
    """
    Decorator for endpoints that perform mutations and should be logged.

    Wraps the handler in EnvironmentLogger.log_command() so all logs from
    comfygit_core are captured to the environment's log file.

    This decorator also injects the environment (like @requires_environment).

    Args:
        operation_name: Base operation name. Path params like {name} will be
                        appended automatically.

    Usage:
        @routes.post("/v2/comfygit/nodes/{name}/install")
        @logged_operation("install node")
        async def install_node(request, env):
            ...
    """
    def decorator(handler):
        @functools.wraps(handler)
        async def wrapper(request: web.Request, *args, **kwargs):
            # Get environment
            env = get_environment_from_request(request)
            if not env:
                return web.json_response({
                    "error": "No environment detected"
                }, status=500)

            # Build operation name with request context
            op = operation_name or f"{request.method} {request.path}"
            match_info = request.match_info
            if 'name' in match_info:
                op = f"{op}: {match_info['name']}"
            elif 'hash' in match_info:
                op = f"{op}: {match_info['hash'][:8]}"
            elif 'identifier' in match_info:
                op = f"{op}: {match_info['identifier'][:8]}"

            # Setup logging context
            log_ctx = None
            if EnvironmentLogger and env.workspace:
                try:
                    workspace_path = env.workspace.path
                    # Only log if we have a real Path that exists (not in tests)
                    from pathlib import Path
                    if isinstance(workspace_path, Path) and workspace_path.exists():
                        EnvironmentLogger.set_workspace_path(workspace_path)
                        log_ctx = EnvironmentLogger.log_command(env.name, f"panel: {op}")
                        log_ctx.__enter__()
                except (TypeError, AttributeError, OSError):
                    pass  # Graceful degradation for mocked/inaccessible environments

            try:
                return await handler(request, env, *args, **kwargs)
            finally:
                if log_ctx:
                    log_ctx.__exit__(None, None, None)

        return wrapper
    return decorator


def requires_environment(handler):
    """
    Decorator that injects environment into handler.

    Transforms:
        async def handler(request) -> Response
    Into:
        async def handler(request, env: Environment) -> Response
    """
    @functools.wraps(handler)
    async def wrapper(request: web.Request, *args, **kwargs):
        env = get_environment_from_request(request)
        if not env:
            return web.json_response({
                "error": "No environment detected"
            }, status=500)
        return await handler(request, env, *args, **kwargs)
    return wrapper


def requires_workspace(handler):
    """
    Decorator that injects workspace into handler.

    Transforms:
        async def handler(request) -> Response
    Into:
        async def handler(request, workspace: Workspace) -> Response
    """
    @functools.wraps(handler)
    async def wrapper(request: web.Request, *args, **kwargs):
        workspace = get_workspace_from_request(request)
        if not workspace:
            return web.json_response({
                "error": "No workspace detected"
            }, status=500)
        return await handler(request, workspace, *args, **kwargs)
    return wrapper
