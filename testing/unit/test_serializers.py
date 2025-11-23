"""Unit tests for serializer functions."""
import pytest
from unittest.mock import Mock
import sys
from pathlib import Path

# Add server directory to path
server_dir = Path(__file__).parent.parent.parent / "server"
if str(server_dir) not in sys.path:
    sys.path.insert(0, str(server_dir))

from cgm_core.serializers import serialize_environment_status


@pytest.mark.unit
class TestSerializeEnvironmentStatus:
    """Unit tests for serialize_environment_status function."""

    def test_workflow_changes_empty_dict(self):
        """Should serialize workflow_changes as false when dict is empty."""
        # Arrange: Create mock status with empty workflow_changes
        status = Mock()
        status.is_synced = True

        status.git = Mock()
        status.git.current_branch = "main"
        status.git.has_changes = False
        status.git.has_other_changes = False
        status.git.nodes_added = []
        status.git.nodes_removed = []
        status.git.workflow_changes = {}  # Empty dict

        status.workflow = Mock()
        status.workflow.sync_status = Mock()
        status.workflow.sync_status.new = set()
        status.workflow.sync_status.modified = set()
        status.workflow.sync_status.deleted = set()
        status.workflow.sync_status.synced = {"test.json"}
        status.workflow.sync_status.total_count = 1

        status.comparison = Mock()
        status.comparison.is_synced = True
        status.comparison.missing_nodes = set()
        status.comparison.extra_nodes = set()

        status.missing_models = []

        # Act
        result = serialize_environment_status(status, "test-env")

        # Assert
        assert result["git_changes"]["workflow_changes"] is False
        assert result["git_changes"]["workflow_changes_detail"] == {}

    def test_workflow_changes_with_modifications(self):
        """Should serialize workflow_changes as true with detail dict when changes exist."""
        # Arrange: Create mock status with workflow changes
        status = Mock()
        status.is_synced = True

        status.git = Mock()
        status.git.current_branch = "main"
        status.git.has_changes = True
        status.git.has_other_changes = False
        status.git.nodes_added = []
        status.git.nodes_removed = []
        status.git.workflow_changes = {
            "api.json": "modified",
            "new.json": "added",
            "old.json": "deleted"
        }

        status.workflow = Mock()
        status.workflow.sync_status = Mock()
        status.workflow.sync_status.new = {"new.json"}
        status.workflow.sync_status.modified = {"api.json"}
        status.workflow.sync_status.deleted = {"old.json"}
        status.workflow.sync_status.synced = set()
        status.workflow.sync_status.total_count = 3

        status.comparison = Mock()
        status.comparison.is_synced = True
        status.comparison.missing_nodes = set()
        status.comparison.extra_nodes = set()

        status.missing_models = []

        # Act
        result = serialize_environment_status(status, "test-env")

        # Assert
        assert result["git_changes"]["workflow_changes"] is True
        assert result["git_changes"]["workflow_changes_detail"] == {
            "api.json": "modified",
            "new.json": "added",
            "old.json": "deleted"
        }
        assert len(result["git_changes"]["workflow_changes_detail"]) == 3

    def test_workflow_changes_preserves_change_types(self):
        """Should preserve change type strings in workflow_changes_detail."""
        # Arrange
        status = Mock()
        status.is_synced = True

        status.git = Mock()
        status.git.current_branch = "main"
        status.git.has_changes = True
        status.git.has_other_changes = False
        status.git.nodes_added = []
        status.git.nodes_removed = []
        status.git.workflow_changes = {
            "added.json": "added",
            "modified.json": "modified",
            "deleted.json": "deleted"
        }

        status.workflow = Mock()
        status.workflow.sync_status = Mock()
        status.workflow.sync_status.new = set()
        status.workflow.sync_status.modified = set()
        status.workflow.sync_status.deleted = set()
        status.workflow.sync_status.synced = set()
        status.workflow.sync_status.total_count = 0

        status.comparison = Mock()
        status.comparison.is_synced = True
        status.comparison.missing_nodes = set()
        status.comparison.extra_nodes = set()

        status.missing_models = []

        # Act
        result = serialize_environment_status(status, "test-env")

        # Assert
        detail = result["git_changes"]["workflow_changes_detail"]
        assert detail["added.json"] == "added"
        assert detail["modified.json"] == "modified"
        assert detail["deleted.json"] == "deleted"

    def test_nodes_serialization_with_dict_structure(self):
        """Should handle nodes_added/removed as list of dicts."""
        # Arrange
        status = Mock()
        status.is_synced = True

        status.git = Mock()
        status.git.current_branch = "main"
        status.git.has_changes = True
        status.git.has_other_changes = False
        status.git.nodes_added = [
            {"name": "node1", "is_development": False},
            {"name": "node2", "is_development": True}
        ]
        status.git.nodes_removed = [
            {"name": "old-node", "is_development": False}
        ]
        status.git.workflow_changes = {}

        status.workflow = Mock()
        status.workflow.sync_status = Mock()
        status.workflow.sync_status.new = set()
        status.workflow.sync_status.modified = set()
        status.workflow.sync_status.deleted = set()
        status.workflow.sync_status.synced = set()
        status.workflow.sync_status.total_count = 0

        status.comparison = Mock()
        status.comparison.is_synced = True
        status.comparison.missing_nodes = set()
        status.comparison.extra_nodes = set()

        status.missing_models = []

        # Act
        result = serialize_environment_status(status, "test-env")

        # Assert: Should extract just the name strings
        assert result["git_changes"]["nodes_added"] == ["node1", "node2"]
        assert result["git_changes"]["nodes_removed"] == ["old-node"]
