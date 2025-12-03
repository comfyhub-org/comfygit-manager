"""Unit tests for health checking logic."""

import time
import socket
import pytest
from unittest.mock import Mock, MagicMock


@pytest.mark.unit
class TestHealthChecking:
    """Test health check validation logic."""

    def test_health_check_success(self, mocker, mock_workspace_factory):
        """Should pass health check when process running and port accessible."""
        from server.orchestrator import Orchestrator

        # Mock process that stays alive
        mock_proc = Mock()
        mock_proc.poll.return_value = None  # Still running

        # Mock successful socket connection (context manager)
        mock_socket_instance = MagicMock()
        mock_socket_instance.__enter__ = Mock(return_value=mock_socket_instance)
        mock_socket_instance.__exit__ = Mock(return_value=False)

        mock_socket_class = Mock(return_value=mock_socket_instance)
        mocker.patch("socket.socket", mock_socket_class)

        orch = Orchestrator(
            workspace_root=mock_workspace_factory.path,
            initial_env="env1",
            args=["--port", "8188"]
        )

        result = orch._wait_for_health(mock_proc, timeout=10)

        assert result is True
        # Should require 3 consecutive successes
        assert mock_socket_instance.connect.call_count >= 3

    def test_health_check_process_died(self, mocker, mock_workspace_factory):
        """Should fail health check when process exits."""
        from server.orchestrator import Orchestrator

        # Mock process that dies
        mock_proc = Mock()
        mock_proc.poll.return_value = 1  # Exit code
        mock_proc.returncode = 1

        orch = Orchestrator(
            workspace_root=mock_workspace_factory.path,
            initial_env="env1",
            args=["--port", "8188"]
        )

        result = orch._wait_for_health(mock_proc, timeout=10)

        assert result is False

    def test_health_check_timeout(self, mocker, mock_workspace_factory):
        """Should fail health check on timeout."""
        from server.orchestrator import Orchestrator

        # Mock process that stays alive but port never opens
        mock_proc = Mock()
        mock_proc.poll.return_value = None

        # Mock connection that always fails (context manager)
        mock_socket_instance = MagicMock()
        mock_socket_instance.__enter__ = Mock(return_value=mock_socket_instance)
        mock_socket_instance.__exit__ = Mock(return_value=False)
        mock_socket_instance.connect.side_effect = ConnectionRefusedError()

        mock_socket_class = Mock(return_value=mock_socket_instance)
        mocker.patch("socket.socket", mock_socket_class)

        orch = Orchestrator(
            workspace_root=mock_workspace_factory.path,
            initial_env="env1",
            args=["--port", "8188"]
        )

        result = orch._wait_for_health(mock_proc, timeout=2)

        assert result is False

    def test_health_check_unstable_connection(self, mocker, mock_workspace_factory):
        """Should fail if connection is unstable (not 3 consecutive successes)."""
        from server.orchestrator import Orchestrator

        mock_proc = Mock()
        mock_proc.poll.return_value = None

        # Alternate between success and failure
        call_count = [0]

        def connect_side_effect(*args):
            call_count[0] += 1
            if call_count[0] % 2 == 0:
                raise ConnectionRefusedError()

        mock_socket_instance = MagicMock()
        mock_socket_instance.__enter__ = Mock(return_value=mock_socket_instance)
        mock_socket_instance.__exit__ = Mock(return_value=False)
        mock_socket_instance.connect.side_effect = connect_side_effect

        mock_socket_class = Mock(return_value=mock_socket_instance)
        mocker.patch("socket.socket", mock_socket_class)

        orch = Orchestrator(
            workspace_root=mock_workspace_factory.path,
            initial_env="env1",
            args=["--port", "8188"]
        )

        result = orch._wait_for_health(mock_proc, timeout=5)

        assert result is False

    def test_health_check_with_custom_port(self, mocker, mock_workspace_factory):
        """Should check health on custom port from args."""
        from server.orchestrator import Orchestrator

        mock_proc = Mock()
        mock_proc.poll.return_value = None

        mock_socket_instance = MagicMock()
        mock_socket_instance.__enter__ = Mock(return_value=mock_socket_instance)
        mock_socket_instance.__exit__ = Mock(return_value=False)

        mock_socket_class = Mock(return_value=mock_socket_instance)
        mocker.patch("socket.socket", mock_socket_class)

        orch = Orchestrator(
            workspace_root=mock_workspace_factory.path,
            initial_env="env1",
            args=["--port", "9999"]
        )

        orch._wait_for_health(mock_proc, timeout=5)

        # Check that we connected to the custom port
        connect_calls = mock_socket_instance.connect.call_args_list
        assert len(connect_calls) > 0
        # First call should be to port 9999
        assert connect_calls[0][0][0] == ("127.0.0.1", 9999)

    def test_check_port_connection_success(self, mock_workspace_factory):
        """Should successfully connect to open port."""
        from server.orchestrator import Orchestrator

        orch = Orchestrator(
            workspace_root=mock_workspace_factory.path,
            initial_env="env1",
            args=[]
        )

        # Create a temporary server socket
        server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        server.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        server.bind(("127.0.0.1", 0))  # Random port
        server.listen(1)
        port = server.getsockname()[1]

        try:
            result = orch._check_port_connection(port)
            assert result is True
        finally:
            server.close()

    def test_check_port_connection_refused(self, mock_workspace_factory):
        """Should return False for closed port."""
        from server.orchestrator import Orchestrator

        orch = Orchestrator(
            workspace_root=mock_workspace_factory.path,
            initial_env="env1",
            args=[]
        )

        # Use a port that's definitely closed
        result = orch._check_port_connection(59999)

        assert result is False

    def test_check_port_connection_timeout(self, mocker, mock_workspace_factory):
        """Should handle socket timeout gracefully."""
        from server.orchestrator import Orchestrator

        orch = Orchestrator(
            workspace_root=mock_workspace_factory.path,
            initial_env="env1",
            args=[]
        )

        # Mock socket that times out (context manager)
        mock_socket_instance = MagicMock()
        mock_socket_instance.__enter__ = Mock(return_value=mock_socket_instance)
        mock_socket_instance.__exit__ = Mock(return_value=False)
        mock_socket_instance.connect.side_effect = socket.timeout()

        mock_socket_class = Mock(return_value=mock_socket_instance)
        mocker.patch("socket.socket", mock_socket_class)

        result = orch._check_port_connection(8188)

        assert result is False

    @pytest.mark.slow
    def test_health_check_requires_stability_period(self, mocker, mock_workspace_factory):
        """Should require 3 consecutive successes over ~6 seconds."""
        from server.orchestrator import Orchestrator

        mock_proc = Mock()
        mock_proc.poll.return_value = None

        # Track connection attempts
        connect_times = []

        def track_connect(*args):
            connect_times.append(time.time())

        mock_socket_instance = MagicMock()
        mock_socket_instance.__enter__ = Mock(return_value=mock_socket_instance)
        mock_socket_instance.__exit__ = Mock(return_value=False)
        mock_socket_instance.connect.side_effect = track_connect

        mock_socket_class = Mock(return_value=mock_socket_instance)
        mocker.patch("socket.socket", mock_socket_class)

        # Speed up sleep for testing
        mocker.patch("time.sleep", side_effect=lambda x: None)

        orch = Orchestrator(
            workspace_root=mock_workspace_factory.path,
            initial_env="env1",
            args=["--port", "8188"]
        )

        result = orch._wait_for_health(mock_proc, timeout=30)

        assert result is True
        # Should have exactly 3 connection attempts
        assert len(connect_times) >= 3

    def test_health_check_process_dies_after_two_successes(self, mocker, mock_workspace_factory):
        """Should fail if process dies after 2 successful checks (before reaching 3)."""
        from server.orchestrator import Orchestrator

        call_count = [0]

        def poll_side_effect():
            call_count[0] += 1
            # Die after 2 successful connection attempts (before 3rd)
            # Each health check iteration: poll + connect
            # We want to succeed twice, then die before 3rd check
            return 1 if call_count[0] > 2 else None

        mock_proc = Mock()
        mock_proc.poll.side_effect = poll_side_effect
        mock_proc.returncode = 1

        mock_socket_instance = MagicMock()
        mock_socket_instance.__enter__ = Mock(return_value=mock_socket_instance)
        mock_socket_instance.__exit__ = Mock(return_value=False)

        mock_socket_class = Mock(return_value=mock_socket_instance)
        mocker.patch("socket.socket", mock_socket_class)

        # Speed up sleep for testing
        mocker.patch("time.sleep", side_effect=lambda x: None)

        orch = Orchestrator(
            workspace_root=mock_workspace_factory.path,
            initial_env="env1",
            args=["--port", "8188"]
        )

        result = orch._wait_for_health(mock_proc, timeout=10)

        assert result is False

    def test_health_check_resets_counter_on_failed_connection(self, mocker, mock_workspace_factory):
        """Should reset consecutive success counter when connection fails."""
        from server.orchestrator import Orchestrator

        mock_proc = Mock()
        mock_proc.poll.return_value = None

        # Pattern: success, success, fail, success, success, success
        call_count = [0]

        def connect_side_effect(*args):
            call_count[0] += 1
            # Fail on 3rd attempt
            if call_count[0] == 3:
                raise ConnectionRefusedError()

        mock_socket_instance = MagicMock()
        mock_socket_instance.__enter__ = Mock(return_value=mock_socket_instance)
        mock_socket_instance.__exit__ = Mock(return_value=False)
        mock_socket_instance.connect.side_effect = connect_side_effect

        mock_socket_class = Mock(return_value=mock_socket_instance)
        mocker.patch("socket.socket", mock_socket_class)

        orch = Orchestrator(
            workspace_root=mock_workspace_factory.path,
            initial_env="env1",
            args=["--port", "8188"]
        )

        result = orch._wait_for_health(mock_proc, timeout=20)

        # Should succeed eventually (after reset)
        assert result is True
        # Should have taken 6 attempts (2 + fail + 3)
        assert call_count[0] >= 6

    def test_health_check_default_port_8188_when_no_args(self, mocker, mock_workspace_factory):
        """Should use default port 8188 when no --port in args."""
        from server.orchestrator import Orchestrator

        mock_proc = Mock()
        mock_proc.poll.return_value = None

        mock_socket_instance = MagicMock()
        mock_socket_instance.__enter__ = Mock(return_value=mock_socket_instance)
        mock_socket_instance.__exit__ = Mock(return_value=False)

        mock_socket_class = Mock(return_value=mock_socket_instance)
        mocker.patch("socket.socket", mock_socket_class)

        orch = Orchestrator(
            workspace_root=mock_workspace_factory.path,
            initial_env="env1",
            args=[]  # No port specified
        )

        orch._wait_for_health(mock_proc, timeout=5)

        # Should have tried to connect to port 8188
        connect_calls = mock_socket_instance.connect.call_args_list
        assert len(connect_calls) > 0
        assert connect_calls[0][0][0] == ("127.0.0.1", 8188)
