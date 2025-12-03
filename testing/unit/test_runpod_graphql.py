"""Unit tests for RunPod GraphQL API methods.

Tests the GraphQL methods needed for Deploy UI:
- get_user_info() - credit balance, spend info
- get_gpu_types_with_pricing() - GPU list with real pricing and availability
- create_spot_pod() - spot/interruptible pod creation with bidding
"""
import pytest
from unittest.mock import AsyncMock, patch, MagicMock
from pathlib import Path
import sys

# Add server directory to path
server_dir = Path(__file__).parent.parent.parent / "server"
if str(server_dir) not in sys.path:
    sys.path.insert(0, str(server_dir))


@pytest.mark.unit
class TestRunPodClientGraphQLEndpoint:
    """Test GraphQL endpoint configuration."""

    def test_graphql_url_configured(self):
        """Should have GraphQL API URL configured."""
        from server.deploy.runpod_client import RunPodClient

        client = RunPodClient(api_key="test_key")
        assert hasattr(client, 'graphql_url')
        assert client.graphql_url == "https://api.runpod.io/graphql"


@pytest.mark.unit
class TestRunPodClientGetUserInfo:
    """Test get_user_info() method for account data and credit balance."""

    @pytest.mark.asyncio
    async def test_get_user_info_returns_credit_balance(self):
        """Should return user info with credit balance."""
        from server.deploy.runpod_client import RunPodClient

        client = RunPodClient(api_key="test_key")

        mock_response = {
            "data": {
                "myself": {
                    "id": "user_123",
                    "clientBalance": 25.50,
                    "currentSpendPerHr": 0.44,
                    "spendLimit": 100.00,
                }
            }
        }

        with patch.object(client, '_graphql_query', AsyncMock(return_value=mock_response)):
            result = await client.get_user_info()

        assert result["id"] == "user_123"
        assert result["clientBalance"] == 25.50
        assert result["currentSpendPerHr"] == 0.44
        assert result["spendLimit"] == 100.00

    @pytest.mark.asyncio
    async def test_get_user_info_handles_error(self):
        """Should raise error on GraphQL failure."""
        from server.deploy.runpod_client import RunPodClient, RunPodAPIError

        client = RunPodClient(api_key="test_key")

        mock_response = {
            "errors": [{"message": "Invalid API key"}]
        }

        with patch.object(client, '_graphql_query', AsyncMock(return_value=mock_response)):
            with pytest.raises(RunPodAPIError) as exc_info:
                await client.get_user_info()

        assert "Invalid API key" in str(exc_info.value)


@pytest.mark.unit
class TestRunPodClientGetGpuTypesWithPricing:
    """Test get_gpu_types_with_pricing() method for GPU list with real pricing."""

    @pytest.mark.asyncio
    async def test_returns_gpu_list_with_pricing(self):
        """Should return GPU types with pricing information."""
        from server.deploy.runpod_client import RunPodClient

        client = RunPodClient(api_key="test_key")

        mock_response = {
            "data": {
                "gpuTypes": [
                    {
                        "id": "NVIDIA GeForce RTX 4090",
                        "displayName": "RTX 4090",
                        "memoryInGb": 24,
                        "secureCloud": True,
                        "communityCloud": True,
                        "securePrice": 0.44,
                        "communityPrice": 0.34,
                        "secureSpotPrice": 0.22,
                        "communitySpotPrice": 0.17,
                        "lowestPrice": {
                            "minimumBidPrice": 0.15,
                            "uninterruptablePrice": 0.34,
                            "stockStatus": "HIGH",
                        }
                    },
                    {
                        "id": "NVIDIA GeForce RTX 3090",
                        "displayName": "RTX 3090",
                        "memoryInGb": 24,
                        "secureCloud": True,
                        "communityCloud": True,
                        "securePrice": 0.22,
                        "communityPrice": 0.16,
                        "secureSpotPrice": 0.11,
                        "communitySpotPrice": 0.08,
                        "lowestPrice": {
                            "minimumBidPrice": 0.07,
                            "uninterruptablePrice": 0.16,
                            "stockStatus": "MEDIUM",
                        }
                    }
                ]
            }
        }

        with patch.object(client, '_graphql_query', AsyncMock(return_value=mock_response)):
            gpu_types = await client.get_gpu_types_with_pricing()

        assert len(gpu_types) == 2

        # Verify first GPU has all expected fields
        gpu = gpu_types[0]
        assert gpu["id"] == "NVIDIA GeForce RTX 4090"
        assert gpu["displayName"] == "RTX 4090"
        assert gpu["memoryInGb"] == 24
        assert gpu["securePrice"] == 0.44
        assert gpu["communityPrice"] == 0.34
        assert gpu["secureSpotPrice"] == 0.22
        assert gpu["communitySpotPrice"] == 0.17
        assert gpu["lowestPrice"]["minimumBidPrice"] == 0.15
        assert gpu["lowestPrice"]["stockStatus"] == "HIGH"

    @pytest.mark.asyncio
    async def test_returns_empty_list_on_no_gpus(self):
        """Should return empty list when no GPUs available."""
        from server.deploy.runpod_client import RunPodClient

        client = RunPodClient(api_key="test_key")

        mock_response = {
            "data": {
                "gpuTypes": []
            }
        }

        with patch.object(client, '_graphql_query', AsyncMock(return_value=mock_response)):
            gpu_types = await client.get_gpu_types_with_pricing()

        assert gpu_types == []

    @pytest.mark.asyncio
    async def test_handles_null_pricing_fields(self):
        """Should handle GPUs with null/missing pricing gracefully."""
        from server.deploy.runpod_client import RunPodClient

        client = RunPodClient(api_key="test_key")

        mock_response = {
            "data": {
                "gpuTypes": [
                    {
                        "id": "NVIDIA A100 80GB PCIe",
                        "displayName": "A100 80GB",
                        "memoryInGb": 80,
                        "secureCloud": True,
                        "communityCloud": False,
                        "securePrice": 1.89,
                        "communityPrice": None,  # Not available
                        "secureSpotPrice": 0.95,
                        "communitySpotPrice": None,
                        "lowestPrice": None  # No availability data
                    }
                ]
            }
        }

        with patch.object(client, '_graphql_query', AsyncMock(return_value=mock_response)):
            gpu_types = await client.get_gpu_types_with_pricing()

        assert len(gpu_types) == 1
        gpu = gpu_types[0]
        assert gpu["communityPrice"] is None
        assert gpu["lowestPrice"] is None


@pytest.mark.unit
class TestRunPodClientCreateSpotPod:
    """Test create_spot_pod() method for spot/interruptible instances."""

    @pytest.mark.asyncio
    async def test_create_spot_pod_success(self):
        """Should create spot pod with bid price."""
        from server.deploy.runpod_client import RunPodClient

        client = RunPodClient(api_key="test_key")

        mock_response = {
            "data": {
                "podRentInterruptable": {
                    "id": "spot_pod_123",
                    "name": "my-spot-comfyui",
                    "desiredStatus": "RUNNING",
                    "costPerHr": 0.17,
                    "machineId": "machine_abc",
                }
            }
        }

        with patch.object(client, '_graphql_query', AsyncMock(return_value=mock_response)):
            pod = await client.create_spot_pod(
                name="my-spot-comfyui",
                image_name="runpod/pytorch:2.1.0-py3.10-cuda11.8.0-devel-ubuntu22.04",
                gpu_type_id="NVIDIA GeForce RTX 4090",
                bid_per_gpu=0.20,
                volume_in_gb=50,
            )

        assert pod["id"] == "spot_pod_123"
        assert pod["name"] == "my-spot-comfyui"
        assert pod["costPerHr"] == 0.17

    @pytest.mark.asyncio
    async def test_create_spot_pod_with_network_volume(self):
        """Should create spot pod attached to network volume."""
        from server.deploy.runpod_client import RunPodClient

        client = RunPodClient(api_key="test_key")

        mock_response = {
            "data": {
                "podRentInterruptable": {
                    "id": "spot_pod_456",
                    "name": "test-pod",
                    "desiredStatus": "RUNNING",
                    "costPerHr": 0.17,
                    "machineId": "machine_xyz",
                }
            }
        }

        with patch.object(client, '_graphql_query', AsyncMock(return_value=mock_response)) as mock_query:
            await client.create_spot_pod(
                name="test-pod",
                image_name="runpod/pytorch:latest",
                gpu_type_id="NVIDIA GeForce RTX 4090",
                bid_per_gpu=0.20,
                network_volume_id="vol_abc123",
            )

        # Verify network volume was included in mutation
        call_args = mock_query.call_args
        query = call_args[0][0]
        variables = call_args[0][1] if len(call_args[0]) > 1 else call_args[1].get('variables', {})
        assert "networkVolumeId" in query or "network_volume_id" in str(variables).lower()

    @pytest.mark.asyncio
    async def test_create_spot_pod_with_cloud_type(self):
        """Should create spot pod with specified cloud type."""
        from server.deploy.runpod_client import RunPodClient

        client = RunPodClient(api_key="test_key")

        mock_response = {
            "data": {
                "podRentInterruptable": {
                    "id": "spot_pod_789",
                    "name": "test-pod",
                    "desiredStatus": "RUNNING",
                    "costPerHr": 0.15,
                    "machineId": "machine_123",
                }
            }
        }

        with patch.object(client, '_graphql_query', AsyncMock(return_value=mock_response)) as mock_query:
            await client.create_spot_pod(
                name="test-pod",
                image_name="runpod/pytorch:latest",
                gpu_type_id="NVIDIA GeForce RTX 4090",
                bid_per_gpu=0.20,
                cloud_type="COMMUNITY",
            )

        # Verify cloud type was passed
        call_args = mock_query.call_args
        query = call_args[0][0]
        assert "COMMUNITY" in query or "cloudType" in query

    @pytest.mark.asyncio
    async def test_create_spot_pod_handles_no_capacity(self):
        """Should raise error when no GPU capacity available."""
        from server.deploy.runpod_client import RunPodClient, RunPodAPIError

        client = RunPodClient(api_key="test_key")

        mock_response = {
            "errors": [{"message": "No available machines for this configuration"}]
        }

        with patch.object(client, '_graphql_query', AsyncMock(return_value=mock_response)):
            with pytest.raises(RunPodAPIError) as exc_info:
                await client.create_spot_pod(
                    name="test-pod",
                    image_name="runpod/pytorch:latest",
                    gpu_type_id="NVIDIA GeForce RTX 4090",
                    bid_per_gpu=0.05,  # Bid too low
                )

        assert "No available machines" in str(exc_info.value)


@pytest.mark.unit
class TestRunPodClientGraphQLQuery:
    """Test the internal _graphql_query method."""

    @pytest.mark.asyncio
    async def test_graphql_query_uses_api_key_in_url(self):
        """Should pass API key as URL parameter (not Bearer token)."""
        from server.deploy.runpod_client import RunPodClient

        client = RunPodClient(api_key="rpa_test_key_123")

        # We need to verify the URL includes the API key
        with patch('aiohttp.ClientSession') as mock_session_class:
            mock_session = MagicMock()
            mock_response = MagicMock()
            mock_response.json = AsyncMock(return_value={"data": {"test": True}})
            mock_response.__aenter__ = AsyncMock(return_value=mock_response)
            mock_response.__aexit__ = AsyncMock(return_value=None)

            mock_session.post = MagicMock(return_value=mock_response)
            mock_session.__aenter__ = AsyncMock(return_value=mock_session)
            mock_session.__aexit__ = AsyncMock(return_value=None)

            mock_session_class.return_value = mock_session

            await client._graphql_query("query { test }")

            # Verify URL contains API key
            call_args = mock_session.post.call_args
            url = call_args[0][0]
            assert "api_key=rpa_test_key_123" in url

    @pytest.mark.asyncio
    async def test_graphql_query_method_exists(self):
        """Should have _graphql_query method."""
        from server.deploy.runpod_client import RunPodClient

        client = RunPodClient(api_key="test")
        assert hasattr(client, '_graphql_query')
        assert callable(client._graphql_query)


@pytest.mark.unit
class TestRunPodClientTestConnectionWithBalance:
    """Test that test_connection returns credit balance."""

    @pytest.mark.asyncio
    async def test_test_connection_returns_balance(self):
        """Should return credit balance with connection test."""
        from server.deploy.runpod_client import RunPodClient

        client = RunPodClient(api_key="test_key")

        # Mock both REST (for backwards compat) and GraphQL
        mock_user_info = {
            "id": "user_123",
            "clientBalance": 42.50,
            "currentSpendPerHr": 0.0,
            "spendLimit": 100.0,
        }

        with patch.object(client, 'get_user_info', AsyncMock(return_value=mock_user_info)):
            result = await client.test_connection()

        assert result["success"] is True
        assert result["credit_balance"] == 42.50
