"""RunPod API request/response logger for simulator development.

Captures API exchanges with signature-based deduplication to avoid log spam
from repetitive polling while capturing unique response shapes.

Enable with: RUNPOD_API_LOGGING=true

Logs are written to: logs/runpod/api_exchanges.log
"""

import os
import json
import hashlib
from datetime import datetime
from pathlib import Path
from typing import Any

# Project root for logs
LOGS_DIR = Path(__file__).parent.parent.parent / "logs" / "runpod"

# Enable via environment variable
API_LOGGING_ENABLED = os.environ.get("RUNPOD_API_LOGGING", "").lower() == "true"


def _compute_signature(operation: str, response: Any) -> str:
    """Compute a signature for deduplication based on operation type.

    Mutations always get unique signatures (always logged).
    Queries get signatures based on key response fields to deduplicate polling.
    """
    # Mutations: always log (unique signature each time)
    if operation in ("create_pod", "create_spot_pod", "delete_pod", "start_pod",
                     "stop_pod", "restart_pod", "update_pod", "create_template",
                     "delete_template", "create_network_volume", "delete_network_volume"):
        return f"{operation}:{datetime.now().isoformat()}"

    # Errors: always log
    if isinstance(response, dict) and response.get("error"):
        return f"error:{datetime.now().isoformat()}"

    # get_pod: signature based on status
    if operation == "get_pod":
        if isinstance(response, dict):
            status = response.get("desiredStatus", "unknown")
            machine = response.get("machine", {})
            gpu = machine.get("gpuDisplayName", "") if machine else ""
            return f"get_pod:{status}:{gpu}"
        return f"get_pod:{hash(str(response))}"

    # list_pods: signature based on pod count and statuses
    if operation == "list_pods":
        if isinstance(response, list):
            statuses = sorted(f"{p.get('id', '')}:{p.get('desiredStatus', '')}" for p in response)
            return f"list_pods:{len(response)}:{hash(tuple(statuses))}"
        return f"list_pods:{hash(str(response))}"

    # test_connection: signature based on success
    if operation == "test_connection":
        if isinstance(response, dict):
            return f"test_connection:{response.get('success', 'unknown')}"
        return f"test_connection:{hash(str(response))}"

    # GPU types / data centers: signature based on content hash
    if operation in ("get_gpu_types", "get_gpu_types_with_pricing", "get_data_centers"):
        content = json.dumps(response, sort_keys=True) if response else ""
        return f"{operation}:{hashlib.md5(content.encode()).hexdigest()[:8]}"

    # Default: hash the full response
    content = json.dumps(response, sort_keys=True, default=str) if response else ""
    return f"{operation}:{hashlib.md5(content.encode()).hexdigest()[:8]}"


class RunPodAPILogger:
    """Logger for RunPod API exchanges with deduplication."""

    def __init__(self):
        self._seen_signatures: dict[str, str] = {}
        self._log_file: Path | None = None
        self._initialized = False

    def _ensure_initialized(self):
        """Lazy init - create log directory and file on first use."""
        if self._initialized:
            return

        LOGS_DIR.mkdir(parents=True, exist_ok=True)
        self._log_file = LOGS_DIR / "api_exchanges.log"
        self._initialized = True

    def log_exchange(
        self,
        operation: str,
        request: dict[str, Any],
        response: Any,
        latency_ms: float | None = None,
        error: str | None = None,
    ):
        """Log an API exchange if it has a new signature.

        Args:
            operation: Operation name (e.g., "create_pod", "list_pods")
            request: Request details (method, path, payload, params)
            response: Response body (or error dict)
            latency_ms: Request latency in milliseconds
            error: Error message if request failed
        """
        if not API_LOGGING_ENABLED:
            return

        # Compute signature and check if we've seen it
        effective_response = {"error": error} if error else response
        signature = _compute_signature(operation, effective_response)

        if self._seen_signatures.get(operation) == signature:
            return  # Skip duplicate

        self._seen_signatures[operation] = signature
        self._ensure_initialized()

        # Build log entry
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S.%f")[:-3]

        entry_lines = [
            "=" * 60,
            f"[{timestamp}] RunPod API Exchange",
            "-" * 60,
            f"OPERATION: {operation}",
        ]

        if latency_ms is not None:
            entry_lines.append(f"LATENCY: {latency_ms:.0f}ms")

        entry_lines.append("-" * 60)
        entry_lines.append("REQUEST:")

        # Format request
        if request.get("method"):
            entry_lines.append(f"  Method: {request['method']}")
        if request.get("path"):
            entry_lines.append(f"  Path: {request['path']}")
        if request.get("query"):
            entry_lines.append(f"  Query: {request['query']}")
        if request.get("payload"):
            entry_lines.append("  Payload:")
            payload_str = json.dumps(request["payload"], indent=4, default=str)
            for line in payload_str.split("\n"):
                entry_lines.append(f"    {line}")

        entry_lines.append("-" * 60)

        if error:
            entry_lines.append(f"ERROR: {error}")
        else:
            entry_lines.append("RESPONSE:")
            response_str = json.dumps(response, indent=4, default=str)
            for line in response_str.split("\n"):
                entry_lines.append(f"  {line}")

        entry_lines.append("=" * 60)
        entry_lines.append("")  # Blank line between entries

        # Write to file
        with open(self._log_file, "a") as f:
            f.write("\n".join(entry_lines) + "\n")

    def log_graphql(
        self,
        operation: str,
        query: str,
        variables: dict | None,
        response: Any,
        latency_ms: float | None = None,
        error: str | None = None,
    ):
        """Log a GraphQL exchange.

        Args:
            operation: Operation name (e.g., "create_spot_pod", "get_user_info")
            query: GraphQL query string
            variables: Query variables
            response: Response data
            latency_ms: Request latency
            error: Error message if failed
        """
        request = {
            "method": "POST",
            "path": "/graphql",
            "query": query.strip()[:500] + ("..." if len(query) > 500 else ""),
        }
        if variables:
            request["payload"] = variables

        self.log_exchange(operation, request, response, latency_ms, error)


# Singleton instance
_logger = RunPodAPILogger()


def log_api_exchange(
    operation: str,
    request: dict[str, Any],
    response: Any,
    latency_ms: float | None = None,
    error: str | None = None,
):
    """Log an API exchange (module-level function for convenience)."""
    _logger.log_exchange(operation, request, response, latency_ms, error)


def log_graphql_exchange(
    operation: str,
    query: str,
    variables: dict | None,
    response: Any,
    latency_ms: float | None = None,
    error: str | None = None,
):
    """Log a GraphQL exchange (module-level function for convenience)."""
    _logger.log_graphql(operation, query, variables, response, latency_ms, error)
