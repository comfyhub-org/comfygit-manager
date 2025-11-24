# ComfyGit Manager API Testing Collection

Bruno API collection for manually testing all ComfyGit Manager server endpoints.

## Collection Structure

```
api-testing/
├── bruno.json                    # Collection config
├── environments/
│   └── local.bru                 # Local dev environment (localhost:8188)
├── Manager API/                  # ComfyUI Manager compatibility layer
│   ├── Custom Nodes/             # (3 endpoints)
│   ├── Task Queue/               # (4 endpoints)
│   └── System/                   # (3 endpoints)
└── Control Panel API/            # ComfyGit control panel
    ├── Status/                   # (1 endpoint)
    ├── Git/                      # (6 endpoints)
    ├── Workflows/                # (4 endpoints)
    ├── Models/                   # (1 endpoint)
    ├── Environments/             # (4 endpoints)
    ├── Operations/               # (2 endpoints)
    ├── Debug/                    # (2 endpoints)
    └── Config/                   # (2 endpoints)
```

**Total: 32 endpoints** (10 Manager API + 22 Control Panel API)

## Getting Started

### Prerequisites

1. **Install Bruno**: Download from [usebruno.com](https://www.usebruno.com/)
2. **Running ComfyUI instance** with ComfyGit Manager loaded (default: `http://127.0.0.1:8188`)

### Setup

1. Open Bruno
2. Click "Open Collection"
3. Navigate to `comfygit-manager/api-testing/`
4. Select the folder

### Environment Variables

Edit `environments/local.bru` to customize:

```
baseUrl: http://127.0.0.1:8188       # ComfyUI server URL
workflowName: example_workflow.json   # Workflow for testing
branchName: main                      # Git branch for testing
envName: default                      # Environment name for testing
```

## API Overview

### Manager API (`/v2/`)

ComfyUI Manager UI compatibility layer. Provides task queue system for node operations.

**Key Endpoints:**
- `GET /v2/customnode/installed` - List installed nodes
- `POST /v2/manager/queue/task` - Queue install/uninstall/update tasks
- `GET /v2/manager/queue/start` - Process task queue
- `GET /v2/manager/reboot` - Restart server (exit code 42)

### Control Panel API (`/v2/comfygit/`)

ComfyGit-specific operations organized by domain.

**Git Operations:**
- Commit workflows with safety checks
- Branch management (create, switch, list)
- Checkout commits with restart handling
- Paginated commit log

**Workflow Management:**
- List workflows with analysis
- Get detailed workflow info (missing nodes/models)
- Resolve dependencies (auto-installable vs manual)
- Install missing node packages

**Environment Management:**
- List all environments
- Switch between environments (spawns orchestrator on first switch)
- Track switch progress via polling
- Get orchestrator control port

**Model Operations:**
- List models with workflow usage tracking
- Status: available, path_mismatch, downloadable, missing

**Operations:**
- Export environment to tarball
- Sync environment to match git state

**Debug & Config:**
- View environment/workspace logs (matches CLI format)
- Get/update workspace configuration (models path, API keys)

## Testing Workflows

### Basic Status Check

1. **Get Status** → `GET /v2/comfygit/status`
   - Verify environment detection
   - Check git branch, workflow sync state
   - Review missing nodes/models

### Commit Workflow

1. **Get Status** → Check `has_uncommitted_changes`
2. **Create Commit** → `POST /v2/comfygit/commit`
   - Try without `allow_issues` to see safety checks
   - Add `"allow_issues": true` to bypass
3. **Get Log** → `GET /v2/comfygit/log` to verify commit

### Workflow Dependency Resolution

1. **List Workflows** → `GET /v2/comfygit/workflows`
2. **Get Details** → `GET /v2/comfygit/workflow/{name}/details`
   - Check `uninstalled_count` and resolution data
3. **Resolve** → `POST /v2/comfygit/workflow/{name}/resolve`
   - Review auto-installable vs manual nodes/models
4. **Install** → `POST /v2/comfygit/workflow/{name}/install`
   - Installs auto-installable nodes only

### Environment Switch

1. **List Environments** → `GET /v2/comfygit/environments`
2. **Switch Environment** → `POST /v2/comfygit/switch_environment`
   - Server restarts after 2s delay
3. **Poll Switch Status** → `GET /v2/comfygit/switch_status`
   - Keep polling until `state: "idle"`

### Branch Operations

1. **List Branches** → `GET /v2/comfygit/branches`
2. **Create Branch** → `POST /v2/comfygit/branch`
3. **Switch Branch** → `POST /v2/comfygit/switch`
   - Server restarts after 300ms delay
   - Check for uncommitted changes warning

## Important Notes

### Server Restart Endpoints

These endpoints trigger server restarts - you'll need to wait for server to come back online:

- `GET /v2/manager/reboot` (exit code 42)
- `POST /v2/comfygit/switch` (exit code 42)
- `POST /v2/comfygit/checkout` (exit code 42)
- `POST /v2/comfygit/switch_environment` (exit code 43)

**Restart delays:**
- Branch switch/checkout: 300ms
- Environment switch: 2000ms
- Manual reboot: 300ms

### Environment Context

Most Control Panel endpoints require a valid ComfyGit environment:
- Server must be running from `{workspace}/environments/{env_name}/ComfyUI`
- Returns 500 error if environment not detected

### Orchestrator Integration

Environment switching spawns an orchestrator daemon on first switch:
- Becomes permanent supervisor process
- Manages environment lifecycle
- Check status: `GET /v2/comfygit/switch_status`
- Get control port: `GET /v2/comfygit/orchestrator_port`

## Tips

### Testing Pagination

Git log supports pagination:
```
GET /v2/comfygit/log?limit=5&offset=0   # First page
GET /v2/comfygit/log?limit=5&offset=5   # Second page
```

Check `has_more` field in response to detect more results.

### Testing Error Cases

Try these to see error responses:
- Commit without changes → `status: "no_changes"`
- Commit with workflow issues + `allow_issues: false` → `status: "blocked"`
- Switch branch with uncommitted changes → `status: "warning"`
- Switch to non-existent environment → 404 error
- Concurrent environment switch → 409 conflict

### Log Filtering

Debug endpoints support level filtering:
```
GET /v2/comfygit/debug/logs?level=ERROR&lines=50
```

Valid levels: `ERROR`, `WARNING`, `INFO`, `DEBUG`

### Variable Substitution

Use Bruno variables in request URLs:
```
GET {{baseUrl}}/v2/comfygit/workflow/{{workflowName}}/details
```

Edit variables in `environments/local.bru`.

## Troubleshooting

**Connection refused:**
- Ensure ComfyUI server is running
- Check `baseUrl` in environment config
- Verify port is correct (default: 8188)

**500 "No environment detected":**
- ComfyUI must be running from managed environment
- Check CWD matches: `{workspace}/environments/{env_name}/ComfyUI`
- Use orchestrator or run via `cg run`

**Endpoints hang on restart triggers:**
- Expected behavior for switch/checkout/reboot endpoints
- Server exits intentionally to trigger orchestrator restart
- Wait 5-10s and retry requests

## Development

This collection mirrors the test suite in `testing/integration/panel/`:
- 69 automated tests cover all Control Panel endpoints
- Bruno collection for manual/exploratory testing
- Both verify same HTTP contracts

When adding new endpoints:
1. Add route handler to `server/api/v2/{module}.py`
2. Create corresponding `.bru` file in appropriate category
3. Add automated test in `testing/integration/panel/`

## Reference

- **Server Implementation**: `server/comfygit_server.py`, `server/comfygit_panel.py`
- **Route Modules**: `server/api/v2/*.py`
- **Architecture Map**: `docs/server-map.md`
- **Test Suite**: `testing/integration/panel/` (69 automated tests)
