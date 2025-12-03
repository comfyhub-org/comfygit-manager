"""Unit test fixtures."""
import sys
from pathlib import Path

# Add server directory to path for API imports
server_dir = Path(__file__).parent.parent.parent / "server"
if str(server_dir) not in sys.path:
    sys.path.insert(0, str(server_dir))
