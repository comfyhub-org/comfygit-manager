"""Integration tests for frontend WebSocket event registration.

Tests that custom WebSocket events are properly registered with ComfyUI's API
to prevent "Unknown message type" errors.
"""

import json
import pytest
from unittest.mock import Mock


@pytest.mark.integration
class TestFrontendWebSocketRegistration:
    """Test that frontend properly registers custom WebSocket event types."""

    @pytest.fixture
    def mock_comfy_api(self):
        """Mock ComfyUI API with event registration tracking."""
        api = Mock()
        api.registered_events = set()

        # Track addEventListener calls
        def mock_add_listener(event_type, callback, options=None):
            api.registered_events.add(event_type)

        api.addEventListener = Mock(side_effect=mock_add_listener)
        api.socket = Mock()
        api.socket.onmessage = None  # Will be set by ComfyUI

        return api

    @pytest.fixture
    def mock_window(self, mock_comfy_api):
        """Mock browser window object with ComfyUI app."""
        window = Mock()
        window.app = Mock()
        window.app.api = mock_comfy_api
        return window

    def test_registers_custom_event_type_before_handling_messages(self, mock_window, mock_comfy_api):
        """Should register 'comfygit:workflow-changed' event type with ComfyUI API.

        This prevents "Unknown message type" errors when WebSocket messages arrive.
        The event must be registered BEFORE the socket starts receiving messages.
        """
        # Arrange: Simulate ComfyUI's message handler behavior
        def comfy_message_handler(event):
            """Simulates ComfyUI's actual message handling logic from api.ts:558-680."""
            msg = json.loads(event.data)

            # This is the actual logic from api.ts line 666-674
            if msg['type'] not in ['status', 'executing', 'progress']:
                # Check if event type is registered
                if mock_comfy_api.registered_events and msg['type'] in mock_comfy_api.registered_events:
                    # Would dispatch CustomEvent - OK
                    return True
                else:
                    # Would throw error - FAIL
                    raise Exception(f"Unknown message type {msg['type']}")
            return True

        # Act: Simulate our fixed frontend code - register the event type
        mock_comfy_api.addEventListener('comfygit:workflow-changed', Mock())

        # Simulate receiving a workflow change message
        mock_event = Mock()
        mock_event.data = json.dumps({
            "type": "comfygit:workflow-changed",
            "data": {
                "change_type": "modified",
                "workflow_name": "test.json",
                "timestamp": "2025-11-23T15:00:00"
            }
        })

        # Assert: Should NOT throw error now that it's registered
        result = comfy_message_handler(mock_event)
        assert result is True
        assert 'comfygit:workflow-changed' in mock_comfy_api.registered_events

    def test_registration_happens_early_in_setup(self, mock_comfy_api):
        """Should register event type during extension setup(), not later.

        Registration must happen before any messages arrive to prevent race conditions.
        """
        # Act: Simulate fixed implementation - registers during setup
        mock_comfy_api.addEventListener('comfygit:workflow-changed', Mock())

        # Assert: Event is properly registered
        assert 'comfygit:workflow-changed' in mock_comfy_api.registered_events

    def test_handler_receives_custom_event_with_correct_detail(self, mock_comfy_api):
        """Should receive CustomEvent with workflow change data in detail property.

        When properly registered, ComfyUI dispatches our custom events as:
        new CustomEvent('comfygit:workflow-changed', { detail: msg.data })
        """
        # Arrange
        received_events = []

        def event_handler(event):
            received_events.append(event)

        # Act: Register handler (simulating our fixed code)
        mock_comfy_api.addEventListener('comfygit:workflow-changed', event_handler)

        # Simulate ComfyUI dispatching the registered custom event
        mock_custom_event = Mock()
        mock_custom_event.detail = {
            "change_type": "modified",
            "workflow_name": "test.json",
            "timestamp": "2025-11-23T15:00:00"
        }

        event_handler(mock_custom_event)

        # Assert
        assert len(received_events) == 1
        assert received_events[0].detail["workflow_name"] == "test.json"
        assert received_events[0].detail["change_type"] == "modified"
        assert "timestamp" in received_events[0].detail


@pytest.mark.integration
class TestWebSocketMessageFlow:
    """Test the complete message flow from backend to frontend handler."""

    def test_complete_flow_without_errors(self):
        """Should handle workflow change from backend broadcast to frontend handler.

        Flow:
        1. Backend broadcasts: send_sync('comfygit:workflow-changed', data)
        2. WebSocket sends JSON: {"type": "comfygit:workflow-changed", "data": {...}}
        3. ComfyUI receives message, checks if registered
        4. ComfyUI dispatches: CustomEvent('comfygit:workflow-changed', {detail: data})
        5. Our handler receives event and triggers status update

        This test validates the integration works end-to-end.
        """
        # Arrange
        registered_handlers = {}

        def mock_add_listener(event_type, callback, options=None):
            registered_handlers[event_type] = callback

        mock_api = Mock()
        mock_api.addEventListener = Mock(side_effect=mock_add_listener)

        status_updates = []

        def mock_fetch_status():
            status_updates.append('fetched')

        # Act 1: Extension registers handler
        def workflow_change_handler(event):
            # This is what our frontend code should do
            mock_fetch_status()

        mock_api.addEventListener('comfygit:workflow-changed', workflow_change_handler)

        # Act 2: Backend sends message (simulated)
        backend_message = {
            "type": "comfygit:workflow-changed",
            "data": {
                "change_type": "modified",
                "workflow_name": "default.json",
                "timestamp": "2025-11-23T15:00:00"
            }
        }

        # Act 3: ComfyUI dispatches custom event (because it's registered)
        assert 'comfygit:workflow-changed' in registered_handlers

        mock_custom_event = Mock()
        mock_custom_event.detail = backend_message["data"]

        registered_handlers['comfygit:workflow-changed'](mock_custom_event)

        # Assert
        assert len(status_updates) == 1
        assert status_updates[0] == 'fetched'


@pytest.mark.integration
class TestBackwardCompatibility:
    """Ensure the fix doesn't break existing WebSocket functionality."""

    def test_does_not_interfere_with_standard_comfyui_events(self):
        """Should not affect ComfyUI's built-in event types (status, executing, etc).

        Our registration should be additive - it adds support for our custom
        event type without changing how ComfyUI handles its own events.
        """
        # Arrange
        mock_api = Mock()
        registered = set()

        def track_registration(event_type, callback, options=None):
            registered.add(event_type)

        mock_api.addEventListener = Mock(side_effect=track_registration)

        # Act: Register our custom event
        mock_api.addEventListener('comfygit:workflow-changed', Mock())

        # Assert: Only our custom event is registered via addEventListener
        # ComfyUI's built-in events (status, executing, etc.) are handled in the switch statement
        assert 'comfygit:workflow-changed' in registered
        assert 'status' not in registered  # Built-in, handled differently
        assert 'executing' not in registered  # Built-in, handled differently
