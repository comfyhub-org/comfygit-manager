"""Debug and logging endpoints."""
import re
from pathlib import Path

from aiohttp import web

from cgm_core.decorators import requires_environment
from cgm_utils.async_helpers import run_sync

routes = web.RouteTableDef()


def parse_log_file(log_file: Path, level_filter: str | None = None, lines: int = 100) -> list[dict]:
    """
    Parse Python logging file and return structured log entries.

    Format: "%(asctime)s - %(name)s - %(levelname)s - %(funcName)s:%(lineno)d - %(message)s"
    Example: "2025-11-22 15:30:45,234 - comfygit_core.workflow - DEBUG - execute:456 - Starting"

    Args:
        log_file: Path to log file
        level_filter: Optional level to filter by (ERROR, WARNING, INFO, DEBUG)
        lines: Number of lines to return (from end of file)

    Returns:
        List of log entry dicts with timestamp, level, message, context
    """
    if not log_file.exists():
        return []

    try:
        # Read last N lines from file
        with open(log_file, 'r', encoding='utf-8') as f:
            all_lines = f.readlines()
            recent_lines = all_lines[-lines:] if len(all_lines) > lines else all_lines

        # Parse format: "timestamp - name - level - func:line - message"
        log_pattern = re.compile(
            r'^(?P<timestamp>\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2},\d{3})\s+-\s+'
            r'(?P<name>[\w.]+)\s+-\s+(?P<level>\w+)\s+-\s+'
            r'(?P<func>\w+):(?P<line>\d+)\s+-\s+(?P<message>.*)$'
        )

        entries = []
        for line in recent_lines:
            match = log_pattern.match(line.strip())
            if match:
                data = match.groupdict()

                # Filter by level if specified
                if level_filter and data['level'] != level_filter.upper():
                    continue

                # Convert timestamp to ISO format that JavaScript can parse
                # Python format: "2025-11-22 15:30:45,234"
                # ISO format: "2025-11-22T15:30:45.234Z"
                timestamp_iso = data['timestamp'].replace(',', '.').replace(' ', 'T') + 'Z'

                # Extract context from logger name (e.g., "comfygit_core.workflow" -> "workflow")
                context = data['name'].split('.')[-1] if '.' in data['name'] else data['name']

                entries.append({
                    'timestamp': timestamp_iso,
                    'level': data['level'],
                    'message': data['message'],
                    'context': context
                })

        return entries

    except Exception:
        return []


@routes.get("/v2/comfygit/debug/logs")
@requires_environment
async def get_environment_logs(request: web.Request, env) -> web.Response:
    """
    Get environment-specific debug logs.

    Query params:
        - level: Filter by log level (ERROR, WARNING, INFO, DEBUG)
        - lines: Number of lines to return (default: 100)
    """
    level = request.query.get('level')
    lines = int(request.query.get('lines', '100'))

    log_file = env.workspace.path / "logs" / env.name / "full.log"

    logs = await run_sync(parse_log_file, log_file, level, lines)

    return web.json_response(logs)


@routes.get("/v2/workspace/debug/logs")
async def get_workspace_logs(request: web.Request) -> web.Response:
    """
    Get workspace-level debug logs.

    Query params:
        - level: Filter by log level (ERROR, WARNING, INFO, DEBUG)
        - lines: Number of lines to return (default: 100)
    """
    from comfygit_server import get_environment_from_cwd

    level = request.query.get('level')
    lines = int(request.query.get('lines', '100'))

    env = get_environment_from_cwd()
    if not env:
        return web.json_response({"error": "No environment detected"}, status=500)

    workspace = env.workspace
    log_file = workspace.path / "logs" / "workspace" / "full.log"

    logs = await run_sync(parse_log_file, log_file, level, lines)

    return web.json_response(logs)
