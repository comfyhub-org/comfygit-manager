# Quick Start Guide

Get up and running with the Bruno API collection in 2 minutes.

## 1. Install Bruno

Download from: https://www.usebruno.com/

Or install via package manager:
```bash
# macOS
brew install bruno

# Linux (snap)
snap install bruno

# Windows (winget)
winget install usebruno.bruno
```

## 2. Start ComfyUI with ComfyGit

Ensure ComfyUI is running with ComfyGit Manager loaded:

```bash
# If using orchestrator
cg run

# Or direct launch
cd /path/to/workspace/environments/default/ComfyUI
python main.py
```

Default URL: `http://127.0.0.1:8188`

## 3. Open Collection in Bruno

1. Launch Bruno
2. Click **"Open Collection"**
3. Navigate to `comfygit-manager/api-testing/`
4. Click **"Select Folder"**

## 4. Try Your First Request

### Check Server Health

**GET** `Status > Get Status`

Click **"Send"** → Should return 200 with environment status:
```json
{
  "environment": "default",
  "git": { "current_branch": "main", ... },
  "workflow": { "analyzed_workflows": [...] },
  ...
}
```

### List Installed Nodes

**GET** `Manager API > Custom Nodes > List Installed`

Returns all installed custom nodes with registry IDs and versions.

### View Workflows

**GET** `Control Panel API > Workflows > List Workflows`

Shows all workflows with sync status and missing dependencies.

## 5. Test Common Operations

### Create a Commit

1. Make changes to a workflow in ComfyUI
2. **POST** `Git > Create Commit`
   - Body: `{ "message": "Test commit", "allow_issues": false }`
   - Returns commit summary or safety warnings

### Switch Branch

1. **GET** `Git > List Branches` to see available branches
2. **POST** `Git > Switch Branch`
   - Body: `{ "branch": "main", "force": false }`
   - **WARNING:** Server restarts after 300ms

### Resolve Workflow Dependencies

1. **GET** `Workflows > List Workflows`
2. Pick workflow with missing nodes/models
3. **POST** `Workflows > Resolve Workflow`
   - Shows auto-installable vs manual dependencies
4. **POST** `Workflows > Install Workflow`
   - Installs auto-resolvable nodes

## Environment Variables

Customize in `environments/local.bru`:

```
baseUrl: http://127.0.0.1:8188       # Your ComfyUI URL
workflowName: my_workflow.json       # Workflow for testing
branchName: main                      # Git branch
envName: default                      # Environment name
```

Use variables in requests: `{{baseUrl}}/v2/comfygit/workflow/{{workflowName}}/details`

## Collection Organization

```
Manager API/           → ComfyUI Manager compatibility (10 endpoints)
  Custom Nodes/        → List installed, import failures
  Task Queue/          → Queue/process node operations
  System/              → Reboot, debug info

Control Panel API/     → ComfyGit-specific operations (22 endpoints)
  Status/              → Environment status
  Git/                 → Commit, branch, checkout operations
  Workflows/           → Workflow management and resolution
  Models/              → Model tracking and status
  Environments/        → Multi-environment switching
  Operations/          → Export, sync
  Debug/               → Logs (environment/workspace)
  Config/              → Configuration management
```

## Tips

### Sequential Folder Execution

Bruno can run all requests in a folder sequentially:
1. Right-click folder → **"Run"**
2. Great for testing full workflows

### Response Assertions

Add tests to requests:
```javascript
test("Status is 200", function() {
  expect(res.status).to.equal(200);
});

test("Has environment field", function() {
  expect(res.body.environment).to.be.a('string');
});
```

### Environment Switching

For different servers, duplicate `local.bru`:
- `local.bru` → `localhost:8188`
- `production.bru` → `production-server:8188`

Switch between them in Bruno's environment dropdown.

## Next Steps

- Read `README.md` for comprehensive documentation
- Explore all 32 endpoints organized by category
- Check endpoint docs (each `.bru` file has detailed docs section)
- Review error cases and edge cases in documentation
- Compare with automated tests in `testing/integration/panel/`

## Troubleshooting

**"Connection refused"**
→ Ensure ComfyUI is running on port 8188

**"No environment detected" (500 error)**
→ ComfyUI must run from managed environment: `{workspace}/environments/{env_name}/ComfyUI`

**Requests hang after switch/checkout**
→ Expected! Server restarts intentionally. Wait 5-10s and retry.

## Need Help?

- Full docs: `api-testing/README.md`
- Server architecture: `docs/server-map.md`
- Automated tests: `testing/integration/panel/` (69 tests)
- Test documentation: `testing/README.md`
