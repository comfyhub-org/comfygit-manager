"""Configuration management API."""
from aiohttp import web
from pathlib import Path

from comfygit_core.models.exceptions import ComfyDockError
from cgm_core.context import get_environment_from_request

routes = web.RouteTableDef()


@routes.get("/v2/comfygit/config")
async def get_config(request: web.Request) -> web.Response:
    """
    Get workspace configuration settings.

    Returns:
        {
            "workspace_path": str,
            "models_path": str | None,
            "civitai_api_key": str | None,
            "huggingface_token": str | None,
            "auto_sync_models": bool,
            "confirm_destructive": bool
        }
    """
    env = get_environment_from_request(request)
    if not env:
        return web.json_response({
            "error": "No environment detected"
        }, status=500)

    workspace = env.workspace
    config_manager = workspace.workspace_config_manager

    # Get models directory (may not be set)
    models_path = None
    try:
        models_dir = config_manager.get_models_directory()
        models_path = str(models_dir)
    except ComfyDockError:
        # Models directory not configured yet
        pass

    # Get API credentials
    civitai_token = config_manager.get_civitai_token()

    # Build response matching frontend ConfigSettings interface
    config = {
        "workspace_path": str(workspace.path),
        "models_path": models_path,
        "civitai_api_key": civitai_token,
        "huggingface_token": None,  # Not yet supported
        "auto_sync_models": True,   # Not yet supported - default to True
        "confirm_destructive": True # Not yet supported - default to True
    }

    return web.json_response(config)


@routes.post("/v2/comfygit/config")
async def update_config(request: web.Request) -> web.Response:
    """
    Update workspace configuration settings.

    Request body (all fields optional):
        {
            "models_path": str,
            "civitai_api_key": str | None,
            "huggingface_token": str | None,  # Not yet supported
            "auto_sync_models": bool,         # Not yet supported
            "confirm_destructive": bool       # Not yet supported
        }

    Returns:
        {
            "status": "updated"
        }
    """
    env = get_environment_from_request(request)
    if not env:
        return web.json_response({
            "error": "No environment detected"
        }, status=500)

    # Parse request body
    try:
        data = await request.json()
    except Exception:
        return web.json_response({
            "error": "Invalid JSON"
        }, status=400)

    workspace = env.workspace
    config_manager = workspace.workspace_config_manager

    # Update models directory if provided
    if "models_path" in data:
        models_path = data["models_path"]
        if models_path:
            try:
                workspace.set_models_directory(Path(models_path))
            except ComfyDockError as e:
                return web.json_response({
                    "error": str(e)
                }, status=400)

    # Update CivitAI token if provided
    if "civitai_api_key" in data:
        token = data["civitai_api_key"]
        config_manager.set_civitai_token(token)

    # Ignore unsupported fields for now:
    # - huggingface_token
    # - auto_sync_models
    # - confirm_destructive

    return web.json_response({
        "status": "updated"
    })
