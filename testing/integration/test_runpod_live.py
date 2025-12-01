"""Integration tests for RunPod API with live API key.

These tests hit the real RunPod API. To run:
    1. Create .env.local in repo root with: RUNPOD_API_KEY=rpa_xxx
    2. Run: uv run pytest testing/integration/test_runpod_live.py -v

Tests are skipped if API key is not set.
"""
import os
import pytest
from pathlib import Path
import sys

# Add server directory to path
server_dir = Path(__file__).parent.parent.parent / "server"
if str(server_dir) not in sys.path:
    sys.path.insert(0, str(server_dir))


def get_api_key() -> str | None:
    """Get API key from environment or .env.local file."""
    # Check environment first
    key = os.environ.get("RUNPOD_API_KEY")
    if key:
        return key

    # Try .env.local in repo root
    env_file = Path(__file__).parent.parent.parent / ".env.local"
    if env_file.exists():
        content = env_file.read_text()
        for line in content.splitlines():
            if line.startswith("export RUNPOD_API_KEY="):
                return line.split("=", 1)[1].strip().strip('"\'')
            if line.startswith("RUNPOD_API_KEY="):
                return line.split("=", 1)[1].strip().strip('"\'')

    return None


API_KEY = get_api_key()
skip_if_no_key = pytest.mark.skipif(
    not API_KEY,
    reason="RUNPOD_API_KEY not set (add to .env.local or environment)"
)


@pytest.mark.integration
@skip_if_no_key
class TestRunPodLiveConnection:
    """Test live API connection."""

    @pytest.mark.asyncio
    async def test_connection_succeeds(self):
        """Should connect with valid API key."""
        from server.deploy.runpod_client import RunPodClient

        client = RunPodClient(api_key=API_KEY)
        result = await client.test_connection()

        assert result["success"] is True, f"Connection failed: {result.get('error')}"

    @pytest.mark.asyncio
    async def test_invalid_key_fails(self):
        """Should fail with invalid API key."""
        from server.deploy.runpod_client import RunPodClient

        client = RunPodClient(api_key="invalid_key_12345")
        result = await client.test_connection()

        assert result["success"] is False
        assert "error" in result


@pytest.mark.integration
@skip_if_no_key
class TestRunPodLivePods:
    """Test live pod operations (read-only)."""

    @pytest.mark.asyncio
    async def test_list_pods(self):
        """Should list pods (may be empty)."""
        from server.deploy.runpod_client import RunPodClient

        client = RunPodClient(api_key=API_KEY)
        pods = await client.list_pods()

        # Should return a list
        assert isinstance(pods, list)

        # If there are pods, verify structure
        if pods:
            pod = pods[0]
            assert "id" in pod
            assert "name" in pod
            assert "desiredStatus" in pod


@pytest.mark.integration
@skip_if_no_key
class TestRunPodLiveTemplates:
    """Test live template operations (read-only)."""

    @pytest.mark.asyncio
    async def test_list_templates(self):
        """Should list templates (may be empty)."""
        from server.deploy.runpod_client import RunPodClient

        client = RunPodClient(api_key=API_KEY)
        templates = await client.list_templates()

        # Should return a list
        assert isinstance(templates, list)


@pytest.mark.integration
@skip_if_no_key
class TestRunPodLiveNetworkVolumes:
    """Test live network volume operations (read-only)."""

    @pytest.mark.asyncio
    async def test_list_network_volumes(self):
        """Should list network volumes (may be empty)."""
        from server.deploy.runpod_client import RunPodClient

        client = RunPodClient(api_key=API_KEY)
        volumes = await client.list_network_volumes()

        # Should return a list
        assert isinstance(volumes, list)

        # If there are volumes, verify structure
        if volumes:
            vol = volumes[0]
            assert "id" in vol
            assert "name" in vol
