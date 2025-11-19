# ComfyUI Built-in Manager UI Integration Guide

This document provides comprehensive information on how the built-in Manager UI works in the ComfyUI frontend and how custom nodes can interface with it.

## Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Activation Methods](#activation-methods)
4. [Backend API Reference](#backend-api-reference)
5. [Registry API Reference](#registry-api-reference)
6. [WebSocket Events](#websocket-events)
7. [Custom Node Integration Patterns](#custom-node-integration-patterns)
8. [Code Examples](#code-examples)
9. [Key File References](#key-file-references)

---

## Overview

The built-in Manager UI is a new feature in ComfyUI that provides native package management directly in the frontend. It replaces the need for the legacy ComfyUI-Manager extension's frontend while using the same backend infrastructure.

### Key Differences from Legacy ComfyUI-Manager

| Aspect | Legacy Manager | Built-in Manager UI |
|--------|----------------|---------------------|
| Frontend | Custom JS/HTML via extension | Native Vue.js components |
| Activation | Extension button | Commands, menu items, programmatic |
| Search | Extension-provided | Algolia + Registry API with fallback |
| State | Extension-managed | Pinia stores |

### Requirements

- ComfyUI server started with `--enable-manager` CLI flag
- Both client and server must support Manager v4 protocol
- Client feature flag: `supports_manager_v4_ui: true`
- Server feature flag: `extension.manager.supports_v4`

---

## Architecture

### State Determination Flow

The Manager UI state is determined by the `useManagerState` composable:

```
Source: src/workbench/extensions/manager/composables/useManagerState.ts:28-85
```

```typescript
enum ManagerUIState {
  DISABLED = 'disabled',      // Manager not available
  LEGACY_UI = 'legacy_ui',    // Uses old ComfyUI-Manager extension
  NEW_UI = 'new_ui'           // Uses built-in frontend manager
}
```

**State Determination Logic:**

1. Check for `--enable-manager` CLI flag (required)
2. Check for `--enable-manager-legacy-ui` flag (forces legacy)
3. Check client `supports_manager_v4_ui` and server `extension.manager.supports_v4`
4. Both must support v4 for `NEW_UI` mode

### Core Components

#### 1. Manager State Composable
```
File: src/workbench/extensions/manager/composables/useManagerState.ts
```

Central entry point for:
- Checking manager availability
- Opening the manager dialog
- Managing UI state

#### 2. Manager Store
```
File: src/workbench/extensions/manager/stores/comfyManagerStore.ts
```

Pinia store managing:
- `installedPacks` - Map of installed packages
- `enabledPacksIds` / `disabledPacksIds` - Package states
- `installingPacksIds` - Currently installing packages
- `taskLogs`, `taskHistory`, `taskQueue` - Task management

#### 3. Registry Store
```
File: src/stores/comfyRegistryStore.ts
```

Manages remote custom nodes from Comfy Registry (api.comfy.org).

#### 4. Manager Service
```
File: src/workbench/extensions/manager/services/comfyManagerService.ts
```

Handles all communication with the ComfyUI backend `/v2/` endpoints.

#### 5. Registry Service
```
File: src/services/comfyRegistryService.ts
```

Handles communication with the external Comfy Registry API.

#### 6. Search Gateway
```
File: src/services/gateway/registrySearchGateway.ts
```

Implements circuit breaker pattern with Algolia as primary and Registry API as fallback.

---

## Activation Methods

### 1. Commands

```
Source: src/composables/useCoreCommands.ts
```

| Command ID | Line | Description |
|------------|------|-------------|
| `Comfy.OpenManagerDialog` | 1038 | Opens main manager dialog |
| `Comfy.Manager.CustomNodesManager.ShowCustomNodesMenu` | 877 | Opens manager with legacy fallback |
| `Comfy.Manager.ShowUpdateAvailablePacks` | 888 | Opens manager to Update tab |
| `Comfy.Manager.ShowMissingPacks` | 914 | Opens manager to Missing tab |
| `Comfy.Manager.ToggleManagerProgressDialog` | 926 | Toggles progress dialog |

### 2. Programmatic Activation

```typescript
import { useManagerState } from '@/workbench/extensions/manager/composables/useManagerState'
import { ManagerTab } from '@/workbench/extensions/manager/types/comfyManagerTypes'

const managerState = useManagerState()

// Open to specific tab
await managerState.openManager({
  initialTab: ManagerTab.All,  // All, Installed, Workflow, Missing, UpdateAvailable
  showToastOnLegacyError: true
})

// Check availability
if (managerState.isNewManagerUI.value) {
  // New manager is available
}
```

### 3. Dialog Service

```
Source: src/services/dialogService.ts:143-167, 232-254
```

```typescript
import { useDialogService } from '@/services/dialogService'

const dialogService = useDialogService()

// Show main manager dialog
dialogService.showManagerDialog({ initialTab: ManagerTab.Missing })

// Show progress dialog
dialogService.showManagerProgressDialog()

// Toggle dialogs
dialogService.toggleManagerDialog()
dialogService.toggleManagerProgressDialog()
```

### Manager Tabs

```typescript
// Source: src/workbench/extensions/manager/types/comfyManagerTypes.ts:15-21
enum ManagerTab {
  All = 'all',
  Installed = 'installed',
  Workflow = 'workflow',
  Missing = 'missing',
  UpdateAvailable = 'updateAvailable'
}
```

---

## Backend API Reference

### Base URL

```typescript
// Source: src/workbench/extensions/manager/services/comfyManagerService.ts:40
const baseURL = api.apiURL('/v2/')
```

### Task Queue Operations

#### Start Queue
```http
GET /v2/manager/queue/start
```
Starts processing queued tasks.

#### Get Queue Status
```http
GET /v2/manager/queue/status?client_id={client_id}
```
Returns current queue status including running and pending tasks.

#### Get Task History
```http
GET /v2/manager/queue/history?ui_id={ui_id}&max_items={max_items}&client_id={client_id}&offset={offset}
```
Returns completed task history.

#### Queue Task
```http
POST /v2/manager/queue/task
Content-Type: application/json

{
  "kind": "install" | "uninstall" | "update" | "update-all" | "enable" | "disable" | "fix" | "install-model",
  "params": { ... },
  "ui_id": "uuid",
  "client_id": "client-id"
}
```

### Pack Management

#### List Installed Packs
```http
GET /v2/customnode/installed
```

**Response:**
```typescript
type InstalledPacksResponse = Record<string, ManagerPackInstalled>

interface ManagerPackInstalled {
  cnr_id?: string      // Comfy Registry ID
  aux_id?: string      // Alternative ID (for non-registry packs)
  ver?: string         // Installed version
  enabled?: boolean    // Is pack enabled
  // ... additional fields
}
```

#### Install Pack
```http
POST /v2/manager/queue/task
```

**Parameters:**
```typescript
interface InstallPackParams {
  id: string              // Pack ID (e.g., "comfyui-impact-pack")
  version?: string        // Specific version to install
  selected_version?: string  // Display version (e.g., "latest", "1.0.0")
  channel?: string        // Release channel (e.g., "dev", "stable")
  mode?: string           // Install mode (e.g., "cache", "fresh")
  repository?: string     // GitHub repository URL
}
```

#### Uninstall Pack
```typescript
interface UninstallPackParams {
  node_name: string    // Pack ID to uninstall
  is_unknown: boolean  // Whether pack is from registry
}
```

#### Update Pack
```typescript
interface UpdatePackParams {
  node_name: string    // Pack ID to update
  node_ver?: string    // Target version
}
```

#### Enable/Disable Pack
```typescript
interface EnablePackParams {
  cnr_id: string       // Pack ID to enable
}

interface DisablePackParams {
  node_name: string    // Pack ID to disable
  is_unknown: boolean
}
```

### Query Operations

#### Get Import Failure Info
```http
GET /v2/customnode/import_fail_info
```
Returns information about packs that failed to import.

#### Bulk Import Failure Info
```http
POST /v2/customnode/import_fail_info_bulk
Content-Type: application/json

{
  "cnr_ids": ["pack-id-1", "pack-id-2"],
  "urls": ["https://github.com/..."]
}
```

### System Operations

#### Reboot ComfyUI
```http
GET /v2/manager/reboot
```
Requires `security_level` of middle or below.

#### Check Legacy UI Mode
```http
GET /v2/manager/is_legacy_manager_ui
```

**Response:**
```json
{
  "is_legacy_manager_ui": false
}
```

---

## Registry API Reference

### Base URL

```typescript
// Source: src/services/comfyRegistryService.ts:8
const API_BASE_URL = 'https://api.comfy.org'
```

### Pack Queries

#### List All Packs
```http
GET /nodes?limit={limit}&page={page}&status={status}&node_id[]={id1}&node_id[]={id2}
```

**Response:**
```typescript
interface ListNodesResponse {
  nodes: Node[]
  total: number
  page: number
  limit: number
}
```

#### Get Pack by ID
```http
GET /nodes/{packId}
```

**Response:** `Node` schema

#### Get Pack Versions
```http
GET /nodes/{packId}/versions
```

**Response:** `NodeVersion[]`

#### Bulk Get Versions
```http
POST /bulk/nodes/versions
Content-Type: application/json

{
  "node_versions": [
    { "node_id": "pack-id-1", "version": "1.0.0" },
    { "node_id": "pack-id-2", "version": "latest" }
  ]
}
```

### Search

#### Search Packs
```http
GET /nodes/search?search={query}&comfy_node_search={nodeQuery}&limit={limit}&page={page}
```

### Node Mapping

#### Infer Pack from Node Name
```http
GET /comfy-nodes/{nodeName}/node
```
Finds which pack contains a specific ComfyUI node.

#### Get Node Definitions
```http
GET /nodes/{packId}/versions/{version}/comfy-nodes
```

### Publisher

#### Get Publisher
```http
GET /publishers/{publisherId}
```

#### List Publisher's Packs
```http
GET /publishers/{publisherId}/nodes?include_banned={boolean}
```

---

## WebSocket Events

```
Source: src/workbench/extensions/manager/composables/useManagerQueue.ts:22-24, 109-141
```

### Event Names

```typescript
const MANAGER_WS_TASK_DONE_NAME = 'cm-task-completed'
const MANAGER_WS_TASK_STARTED_NAME = 'cm-task-started'
```

### Task Completed Event

```typescript
interface MessageTaskDone {
  state: TaskStateMessage
}

interface TaskStateMessage {
  history: Record<string, TaskHistoryItem>
  running_queue: QueueTaskItem[]
  pending_queue: QueueTaskItem[]
  installed_packs: Record<string, ManagerPackInstalled>
}
```

### Task Started Event

```typescript
interface MessageTaskStarted {
  state: TaskStateMessage
}
```

### Listening to Events

```typescript
import { useEventListener } from '@vueuse/core'
import { app } from '@/scripts/app'

// Listen for task completion
useEventListener(
  app.api,
  'cm-task-completed',
  (event: CustomEvent) => {
    const { state } = event.detail
    // state.history - completed tasks
    // state.running_queue - currently running
    // state.pending_queue - queued
    // state.installed_packs - updated pack list
  }
)

// Listen for task start
useEventListener(
  app.api,
  'cm-task-started',
  (event: CustomEvent) => {
    const { state } = event.detail
    // Handle task start
  }
)
```

---

## Custom Node Integration Patterns

### Pattern 1: Opening Manager UI from Custom Node

A custom node can open the Manager UI programmatically:

```typescript
// In your custom node's frontend JavaScript
import { useManagerState } from '@/workbench/extensions/manager/composables/useManagerState'
import { useCommandStore } from '@/stores/commandStore'
import { ManagerTab } from '@/workbench/extensions/manager/types/comfyManagerTypes'

// Method 1: Via composable
async function openManagerToMissing() {
  const managerState = useManagerState()

  if (managerState.isNewManagerUI.value) {
    await managerState.openManager({
      initialTab: ManagerTab.Missing
    })
  }
}

// Method 2: Via command
async function openManagerViaCommand() {
  const commandStore = useCommandStore()
  await commandStore.execute('Comfy.OpenManagerDialog')
}
```

### Pattern 2: Listening to Install/Uninstall Events

Monitor when packs are installed or uninstalled:

```typescript
import { useEventListener } from '@vueuse/core'
import { app } from '@/scripts/app'

function setupPackEventListeners() {
  // Track completed tasks
  useEventListener(
    app.api,
    'cm-task-completed',
    (event: CustomEvent) => {
      const { state } = event.detail

      // Check history for install tasks
      for (const [taskId, task] of Object.entries(state.history)) {
        if (task.kind === 'install' && task.result === 'success') {
          console.log(`Pack installed: ${task.params?.id}`)
        }
        if (task.kind === 'uninstall' && task.result === 'success') {
          console.log(`Pack uninstalled: ${task.params?.node_name}`)
        }
      }

      // Access updated installed packs
      console.log('Updated packs:', state.installed_packs)
    }
  )
}
```

### Pattern 3: Programmatic Pack Installation

Install a pack programmatically:

```typescript
import { useComfyManagerStore } from '@/workbench/extensions/manager/stores/comfyManagerStore'

async function installPack(packId: string, version: string = 'latest') {
  const managerStore = useComfyManagerStore()

  await managerStore.installPack.call({
    id: packId,
    selected_version: version,
    channel: 'stable',
    mode: 'cache'
  })
}

// Example usage
await installPack('comfyui-impact-pack', '5.0.0')
```

### Pattern 4: Checking Pack Installation Status

```typescript
import { useComfyManagerStore } from '@/workbench/extensions/manager/stores/comfyManagerStore'

function checkPackStatus(packId: string) {
  const managerStore = useComfyManagerStore()

  const isInstalled = managerStore.isPackInstalled(packId)
  const isEnabled = managerStore.isPackEnabled(packId)
  const isInstalling = managerStore.isPackInstalling(packId)
  const version = managerStore.getInstalledPackVersion(packId)

  return { isInstalled, isEnabled, isInstalling, version }
}
```

### Pattern 5: Providing Custom Pack Data

To provide your own pack data source, you would need to:

1. **Create a custom search provider:**

```typescript
import type { NodePackSearchProvider, SearchPacksResult } from '@/types/searchServiceTypes'
import type { SearchNodePacksParams } from '@/types/algoliaTypes'

export const useCustomSearchProvider = (): NodePackSearchProvider => {
  const searchPacks = async (
    query: string,
    params: SearchNodePacksParams
  ): Promise<SearchPacksResult> => {
    // Fetch from your custom data source
    const response = await fetch('https://your-api.com/packs/search', {
      method: 'POST',
      body: JSON.stringify({ query, ...params })
    })

    const data = await response.json()

    return {
      nodePacks: data.packs,  // Must match RegistryNodePack schema
      querySuggestions: data.suggestions
    }
  }

  const clearSearchCache = () => {
    // Clear any caches
  }

  const getSortValue = (pack, sortField) => {
    // Return sort value for field
  }

  const getSortableFields = () => {
    return [
      { id: 'downloads', label: 'Downloads', direction: 'desc' },
      { id: 'name', label: 'Name', direction: 'asc' }
    ]
  }

  return { searchPacks, clearSearchCache, getSortValue, getSortableFields }
}
```

2. **Modify the search gateway** to use your provider (requires frontend modification).

### Pattern 6: Custom Backend Endpoints

If you want to completely replace the manager backend, implement these endpoints:

#### Required Endpoints

```python
# Python backend example using Flask/FastAPI

from fastapi import FastAPI
app = FastAPI()

@app.get("/v2/customnode/installed")
async def list_installed():
    """Return installed packs"""
    return {
        "pack-id-1": {
            "cnr_id": "pack-id-1",
            "ver": "1.0.0",
            "enabled": True
        }
    }

@app.post("/v2/manager/queue/task")
async def queue_task(task: dict):
    """Queue a task for execution"""
    kind = task["kind"]  # install, uninstall, update, etc.
    params = task["params"]
    ui_id = task["ui_id"]
    client_id = task["client_id"]

    # Process the task
    # Emit WebSocket events for progress

    return None

@app.get("/v2/manager/queue/start")
async def start_queue():
    """Start processing queued tasks"""
    return None

@app.get("/v2/manager/queue/status")
async def queue_status(client_id: str = None):
    """Return current queue status"""
    return {
        "running_queue": [],
        "pending_queue": [],
        "history": {}
    }
```

#### WebSocket Events to Emit

```python
# Emit when task starts
await websocket.send_json({
    "type": "cm-task-started",
    "data": {
        "state": {
            "history": {...},
            "running_queue": [...],
            "pending_queue": [...],
            "installed_packs": {...}
        }
    }
})

# Emit when task completes
await websocket.send_json({
    "type": "cm-task-completed",
    "data": {
        "state": {
            "history": {...},
            "running_queue": [...],
            "pending_queue": [...],
            "installed_packs": {...}
        }
    }
})
```

---

## Code Examples

### Complete Example: Custom Node Manager Integration

```typescript
// custom-node-manager-integration.ts

import { useEventListener } from '@vueuse/core'
import { watch } from 'vue'
import { app } from '@/scripts/app'
import { useManagerState } from '@/workbench/extensions/manager/composables/useManagerState'
import { useComfyManagerStore } from '@/workbench/extensions/manager/stores/comfyManagerStore'
import { useDialogService } from '@/services/dialogService'
import { ManagerTab } from '@/workbench/extensions/manager/types/comfyManagerTypes'

export class CustomNodeManagerIntegration {
  private managerState = useManagerState()
  private managerStore = useComfyManagerStore()
  private dialogService = useDialogService()

  constructor() {
    this.setupEventListeners()
  }

  /**
   * Check if new Manager UI is available
   */
  get isManagerAvailable(): boolean {
    return this.managerState.isNewManagerUI.value
  }

  /**
   * Open Manager UI to a specific tab
   */
  async openManager(tab: ManagerTab = ManagerTab.All): Promise<void> {
    if (!this.isManagerAvailable) {
      console.warn('Manager UI not available')
      return
    }

    await this.managerState.openManager({
      initialTab: tab,
      showToastOnLegacyError: true
    })
  }

  /**
   * Install a pack by ID
   */
  async installPack(
    packId: string,
    options: {
      version?: string
      channel?: string
      mode?: string
      repository?: string
    } = {}
  ): Promise<void> {
    await this.managerStore.installPack.call({
      id: packId,
      selected_version: options.version || 'latest',
      channel: options.channel || 'stable',
      mode: options.mode || 'cache',
      repository: options.repository
    })
  }

  /**
   * Uninstall a pack by ID
   */
  async uninstallPack(packId: string): Promise<void> {
    await this.managerStore.uninstallPack({
      id: packId,
      version: this.managerStore.getInstalledPackVersion(packId)
    })
  }

  /**
   * Check if a pack is installed
   */
  isPackInstalled(packId: string): boolean {
    return this.managerStore.isPackInstalled(packId)
  }

  /**
   * Get installed pack version
   */
  getPackVersion(packId: string): string | undefined {
    return this.managerStore.getInstalledPackVersion(packId)
  }

  /**
   * Setup event listeners for pack changes
   */
  private setupEventListeners(): void {
    // Listen for task completion
    useEventListener(
      app.api,
      'cm-task-completed',
      (event: CustomEvent) => {
        this.onTaskCompleted(event.detail)
      }
    )

    // Listen for task start
    useEventListener(
      app.api,
      'cm-task-started',
      (event: CustomEvent) => {
        this.onTaskStarted(event.detail)
      }
    )

    // Watch for installed packs changes
    watch(
      () => this.managerStore.installedPacksIds,
      (newIds, oldIds) => {
        this.onInstalledPacksChanged(newIds, oldIds)
      },
      { deep: true }
    )
  }

  /**
   * Handler for task completion
   */
  private onTaskCompleted(detail: any): void {
    const { state } = detail

    for (const task of Object.values(state.history)) {
      const typedTask = task as any

      if (typedTask.result === 'success') {
        switch (typedTask.kind) {
          case 'install':
            console.log(`Pack installed: ${typedTask.params?.id}`)
            break
          case 'uninstall':
            console.log(`Pack uninstalled: ${typedTask.params?.node_name}`)
            break
          case 'update':
            console.log(`Pack updated: ${typedTask.params?.node_name}`)
            break
        }
      } else if (typedTask.result === 'failed') {
        console.error(`Task failed: ${typedTask.kind}`, typedTask.status?.messages)
      }
    }
  }

  /**
   * Handler for task start
   */
  private onTaskStarted(detail: any): void {
    const { state } = detail
    console.log('Task started, queue:', state.running_queue.length, 'running,', state.pending_queue.length, 'pending')
  }

  /**
   * Handler for installed packs changes
   */
  private onInstalledPacksChanged(
    newIds: Set<string>,
    oldIds: Set<string>
  ): void {
    // Find newly installed
    for (const id of newIds) {
      if (!oldIds.has(id)) {
        console.log(`New pack available: ${id}`)
      }
    }

    // Find removed
    for (const id of oldIds) {
      if (!newIds.has(id)) {
        console.log(`Pack removed: ${id}`)
      }
    }
  }
}

// Usage
const manager = new CustomNodeManagerIntegration()

// Open manager to missing packs tab
await manager.openManager(ManagerTab.Missing)

// Install a pack
await manager.installPack('comfyui-impact-pack', { version: 'latest' })

// Check status
if (manager.isPackInstalled('comfyui-impact-pack')) {
  console.log('Version:', manager.getPackVersion('comfyui-impact-pack'))
}
```

### Python Backend: Complete Manager Implementation

```python
# manager_backend.py

from fastapi import FastAPI, WebSocket
from typing import Dict, Any, List, Optional
import asyncio
import uuid

app = FastAPI()

# In-memory state
installed_packs: Dict[str, Dict] = {}
task_queue: List[Dict] = []
task_history: Dict[str, Dict] = {}
running_task: Optional[Dict] = None
connected_websockets: List[WebSocket] = []


async def broadcast_event(event_type: str, data: Dict):
    """Broadcast WebSocket event to all connected clients"""
    message = {
        "type": event_type,
        "data": data
    }
    for ws in connected_websockets:
        try:
            await ws.send_json(message)
        except:
            connected_websockets.remove(ws)


def get_current_state():
    """Get current task state for WebSocket events"""
    return {
        "history": task_history,
        "running_queue": [running_task] if running_task else [],
        "pending_queue": task_queue,
        "installed_packs": installed_packs
    }


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    connected_websockets.append(websocket)
    try:
        while True:
            await websocket.receive_text()
    except:
        connected_websockets.remove(websocket)


@app.get("/v2/customnode/installed")
async def list_installed():
    """Return installed packs"""
    return installed_packs


@app.post("/v2/manager/queue/task")
async def queue_task(task: Dict[str, Any]):
    """Queue a task for execution"""
    task_queue.append(task)
    return None


@app.get("/v2/manager/queue/start")
async def start_queue():
    """Start processing queued tasks"""
    global running_task

    while task_queue:
        running_task = task_queue.pop(0)

        # Broadcast task started
        await broadcast_event("cm-task-started", {
            "state": get_current_state()
        })

        # Process the task
        result = await process_task(running_task)

        # Add to history
        task_history[running_task["ui_id"]] = {
            **running_task,
            "result": result["status"],
            "status": result,
            "timestamp": "2024-01-01T00:00:00Z"
        }

        running_task = None

        # Broadcast task completed
        await broadcast_event("cm-task-completed", {
            "state": get_current_state()
        })

    return None


async def process_task(task: Dict) -> Dict:
    """Process a single task"""
    kind = task["kind"]
    params = task["params"]

    try:
        if kind == "install":
            pack_id = params.get("id")
            version = params.get("selected_version", "latest")

            # Simulate installation
            await asyncio.sleep(2)

            installed_packs[pack_id] = {
                "cnr_id": pack_id,
                "ver": version,
                "enabled": True
            }

            return {
                "status_str": "success",
                "completed": True,
                "messages": [f"Successfully installed {pack_id}@{version}"]
            }

        elif kind == "uninstall":
            node_name = params.get("node_name")

            # Simulate uninstallation
            await asyncio.sleep(1)

            if node_name in installed_packs:
                del installed_packs[node_name]

            return {
                "status_str": "success",
                "completed": True,
                "messages": [f"Successfully uninstalled {node_name}"]
            }

        elif kind == "enable":
            cnr_id = params.get("cnr_id")
            if cnr_id in installed_packs:
                installed_packs[cnr_id]["enabled"] = True

            return {
                "status_str": "success",
                "completed": True,
                "messages": [f"Enabled {cnr_id}"]
            }

        elif kind == "disable":
            node_name = params.get("node_name")
            if node_name in installed_packs:
                installed_packs[node_name]["enabled"] = False

            return {
                "status_str": "success",
                "completed": True,
                "messages": [f"Disabled {node_name}"]
            }

        else:
            return {
                "status_str": "error",
                "completed": True,
                "messages": [f"Unknown task kind: {kind}"]
            }

    except Exception as e:
        return {
            "status_str": "error",
            "completed": True,
            "messages": [str(e)]
        }


@app.get("/v2/manager/queue/status")
async def queue_status(client_id: str = None):
    """Return current queue status"""
    return get_current_state()


@app.get("/v2/manager/queue/history")
async def get_history(
    ui_id: str = None,
    max_items: int = 64,
    client_id: str = None,
    offset: int = 0
):
    """Return task history"""
    return {"history": task_history}


@app.get("/v2/manager/reboot")
async def reboot():
    """Reboot ComfyUI"""
    # Implement reboot logic
    return None


@app.get("/v2/manager/is_legacy_manager_ui")
async def is_legacy():
    """Check if legacy UI is enabled"""
    return {"is_legacy_manager_ui": False}


@app.get("/v2/customnode/import_fail_info")
async def import_fail_info():
    """Return import failure information"""
    return {}


@app.post("/v2/customnode/import_fail_info_bulk")
async def import_fail_info_bulk(params: Dict):
    """Return bulk import failure information"""
    return {}
```

---

## Key File References

### Core Architecture

| File | Description |
|------|-------------|
| `src/workbench/extensions/manager/composables/useManagerState.ts` | Central state management, UI mode determination (lines 28-85), `openManager()` function (line 142) |
| `src/workbench/extensions/manager/stores/comfyManagerStore.ts` | Pinia store for installed packs, task queue, pack actions (lines 32-394) |
| `src/stores/comfyRegistryStore.ts` | Store for remote registry data (lines 29-156) |

### Services

| File | Description |
|------|-------------|
| `src/workbench/extensions/manager/services/comfyManagerService.ts` | Backend API client, all `/v2/` endpoints (lines 24-341) |
| `src/services/comfyRegistryService.ts` | Registry API client for api.comfy.org (lines 24-428) |
| `src/services/gateway/registrySearchGateway.ts` | Search gateway with circuit breaker (lines 34-224) |
| `src/services/providers/algoliaSearchProvider.ts` | Algolia search implementation (lines 114-247) |

### Types

| File | Description |
|------|-------------|
| `src/workbench/extensions/manager/types/comfyManagerTypes.ts` | Manager types, `ManagerTab` enum (lines 15-21) |
| `src/workbench/extensions/manager/types/generatedManagerTypes.ts` | Auto-generated types from OpenAPI schema |
| `src/types/comfyRegistryTypes.ts` | Registry API types |
| `src/types/searchServiceTypes.ts` | Search provider interface (lines 26-49) |
| `src/types/algoliaTypes.ts` | Algolia-specific types (lines 17-90) |

### WebSocket & Events

| File | Description |
|------|-------------|
| `src/workbench/extensions/manager/composables/useManagerQueue.ts` | WebSocket event handling, task state updates (lines 22-170) |

### Commands & Activation

| File | Description |
|------|-------------|
| `src/composables/useCoreCommands.ts` | Manager commands (lines 877-932, 1038) |
| `src/services/dialogService.ts` | Dialog management (lines 143-167, 232-254) |

### Feature Flags

| File | Description |
|------|-------------|
| `src/config/clientFeatureFlags.json` | Client feature flags including `supports_manager_v4_ui` |
| `src/composables/useFeatureFlags.ts` | Feature flag composable (line 11 for `MANAGER_SUPPORTS_V4`) |

### Components (for reference)

| File | Description |
|------|-------------|
| `src/workbench/extensions/manager/components/dialog/ManagerDialogContent.vue` | Main dialog container |
| `src/workbench/extensions/manager/components/card/PackCard.vue` | Pack card component |
| `src/workbench/extensions/manager/components/card/PackInstallButton.vue` | Install button |
| `src/workbench/extensions/manager/components/progress/ManagerProgressDialogContent.vue` | Progress dialog |

---

## Summary

The built-in Manager UI provides a comprehensive system for managing ComfyUI custom nodes with:

- **Feature flag-based availability** - Both client and server must support v4
- **Rich API surface** - Backend endpoints for task management, registry API for pack data
- **Real-time updates** - WebSocket events for task progress
- **Extensible architecture** - Search gateway pattern allows custom providers

For custom node integration:

1. **Use composables** to open Manager UI and check availability
2. **Use stores** to install/uninstall packs and check status
3. **Listen to WebSocket events** to track task progress
4. **Implement backend endpoints** for complete custom manager functionality

All code references point to the ComfyUI Frontend repository at the `/home/akatzfey/.claude-explore/workspaces/1c9ba904` workspace.
