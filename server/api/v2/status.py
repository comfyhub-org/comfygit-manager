"""Status and workspace configuration endpoints."""
from aiohttp import web

from cgm_core.decorators import requires_environment
from cgm_core.serializers import serialize_environment_status
from cgm_utils.async_helpers import run_sync

routes = web.RouteTableDef()


@routes.get("/v2/comfygit/status")
@requires_environment
async def get_status(request: web.Request, env) -> web.Response:
    """
    Get current environment status.

    Query params:
        refresh: If "true", forces refresh of cached environment before status check.

    Returns:
        Environment status with git, workflow, and comparison info.
    """
    try:
        # Check if refresh is requested
        if request.query.get("refresh", "").lower() == "true":
            from comfygit_server import refresh_environment
            refresh_environment()
            # Re-get the environment after refresh
            from cgm_core.context import get_environment_from_request
            env = get_environment_from_request(request)
            if not env:
                return web.json_response({"error": "Failed to refresh environment"}, status=500)

        status = await run_sync(env.status)
        return web.json_response(serialize_environment_status(status, env.name))
    except Exception as e:
        return web.json_response({
            "error": str(e)
        }, status=500)
