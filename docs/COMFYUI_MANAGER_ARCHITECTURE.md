# ComfyUI-Manager Architecture Guide

> A comprehensive reference for developers creating custom nodes that need to inject frontend UI, register backend routes, and mimic ComfyUI-Manager's functionality.

## Table of Contents

1. [Overview](#overview)
2. [Custom Node Registration System](#custom-node-registration-system)
3. [Frontend UI Injection](#frontend-ui-injection)
4. [Backend Route Registration](#backend-route-registration)
5. [WebSocket Communication](#websocket-communication)
6. [Complete Code Examples](#complete-code-examples)
7. [Key File References](#key-file-references)

---

## Overview

ComfyUI-Manager demonstrates how a custom node can:
- Inject JavaScript into the ComfyUI frontend
- Add toolbar buttons to the main menu
- Create modal dialogs with complex UI
- Register backend API endpoints
- Communicate via WebSocket events

### Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    Custom Node Package                       │
├──────────────────────┬──────────────────────────────────────┤
│   __init__.py        │   js/                                │
│   - WEB_DIRECTORY    │   - comfyui-manager.js               │
│   - NODE_CLASS_...   │   - custom-nodes-manager.js          │
│                      │   - *.css                            │
├──────────────────────┼──────────────────────────────────────┤
│   glob/              │   (other modules)                    │
│   - manager_server.py│                                      │
│   - manager_core.py  │                                      │
└──────────────────────┴──────────────────────────────────────┘
         │                              │
         ▼                              ▼
   Backend Routes              Frontend Extension
   /manager/*                  app.registerExtension()
   /customnode/*
```

---

## Custom Node Registration System

### Entry Point: `__init__.py`

The `__init__.py` is the main entry point that ComfyUI loads when discovering custom nodes.

**Source**: `/home/akatzfey/.claude-explore/workspaces/d483120b/__init__.py:1-26`

```python
"""
This file is the entry point for the ComfyUI-Manager package
"""

import os
import sys

cli_mode_flag = os.path.join(os.path.dirname(__file__), '.enable-cli-only-mode')

if not os.path.exists(cli_mode_flag):
    sys.path.append(os.path.join(os.path.dirname(__file__), "glob"))
    import manager_server  # noqa: F401  <- Registers backend routes
    import share_3rdparty  # noqa: F401
    import cm_global

    # This tells ComfyUI to serve files from the "js" directory
    if not cm_global.disable_front and not 'DISABLE_COMFYUI_MANAGER_FRONT' in os.environ:
        WEB_DIRECTORY = "js"
else:
    print("\n[ComfyUI-Manager] !! cli-only-mode is enabled !!\n")

NODE_CLASS_MAPPINGS = {}
__all__ = ['NODE_CLASS_MAPPINGS']
```

### Key Variables

| Variable | Purpose |
|----------|---------|
| `WEB_DIRECTORY` | Directory containing JS files to serve at `/extensions/<node-name>/` |
| `NODE_CLASS_MAPPINGS` | Dictionary mapping node names to Python classes |
| `NODE_DISPLAY_NAME_MAPPINGS` | Optional dictionary for human-readable node names |

### How JavaScript Files Are Served

When you set `WEB_DIRECTORY = "js"`, ComfyUI automatically:
1. Serves all `.js` files from that directory
2. Makes them available at `/extensions/<your-custom-node-folder-name>/`
3. Allows them to import from ComfyUI's core scripts using relative paths

---

## Frontend UI Injection

### Extension Registration Pattern

**Source**: `/home/akatzfey/.claude-explore/workspaces/d483120b/js/comfyui-manager.js:1395-1446`

```javascript
import { api } from "../../scripts/api.js";
import { app } from "../../scripts/app.js";
import { $el, ComfyDialog } from "../../scripts/ui.js";

app.registerExtension({
    name: "Comfy.ManagerMenu",

    // Badges shown on About page
    aboutPageBadges: [
        {
            label: `ComfyUI-Manager ${manager_version}`,
            url: 'https://github.com/ltdrdata/ComfyUI-Manager',
            icon: 'pi pi-th-large'
        }
    ],

    // Commands available in command palette
    commands: [
        {
            id: "Comfy.Manager.Menu.ToggleVisibility",
            label: "Toggle Manager Menu Visibility",
            icon: "mdi mdi-puzzle",
            function: () => {
                if (!manager_instance) {
                    setManagerInstance(new ManagerMenuDialog());
                    manager_instance.show();
                } else {
                    manager_instance.toggleVisibility();
                }
            },
        },
    ],

    // Called when extension loads
    init() {
        $el("style", {
            textContent: style,
            parent: document.head,
        });
    },

    // Called after ComfyUI is fully loaded
    async setup() {
        // Add buttons, register handlers, etc.
    },

    // Hook into node registration
    async beforeRegisterNodeDef(nodeType, nodeData, app) {
        this._addExtraNodeContextMenu(nodeType, app);
    },
});
```

### Core Imports

```javascript
// API communication with backend
import { api } from "../../scripts/api.js";

// Main ComfyUI app reference
import { app } from "../../scripts/app.js";

// UI utilities for creating DOM elements and dialogs
import { $el, ComfyDialog } from "../../scripts/ui.js";
```

### Adding Toolbar Buttons

#### Modern Style (ComfyUI 1.2.49+)

**Source**: `/home/akatzfey/.claude-explore/workspaces/d483120b/js/comfyui-manager.js:1463-1529`

```javascript
async setup() {
    try {
        // Dynamically import button components
        let cmGroup = new (await import("../../scripts/ui/components/buttonGroup.js")).ComfyButtonGroup(
            new(await import("../../scripts/ui/components/button.js")).ComfyButton({
                icon: "puzzle",
                action: () => {
                    if(!manager_instance)
                        setManagerInstance(new ManagerMenuDialog());
                    manager_instance.show();
                },
                tooltip: "ComfyUI Manager",
                content: "Manager",
                classList: "comfyui-button comfyui-menu-mobile-collapse primary"
            }).element,
            // Additional buttons...
        );

        // Insert before settings button
        app.menu?.settingsGroup.element.before(cmGroup.element);
    }
    catch(exception) {
        console.log('ComfyUI is outdated. New style menu features disabled.');
    }
}
```

#### Legacy Style (Older ComfyUI versions)

**Source**: `/home/akatzfey/.claude-explore/workspaces/d483120b/js/comfyui-manager.js:1534-1573`

```javascript
async setup() {
    // Get the sidebar menu container
    const menu = document.querySelector(".comfy-menu");

    // Add separator
    const separator = document.createElement("hr");
    separator.style.margin = "20px 0";
    separator.style.width = "100%";
    menu.append(separator);

    // Create and add Manager button
    const managerButton = document.createElement("button");
    managerButton.textContent = "Manager";
    managerButton.onclick = () => {
        if(!manager_instance)
            setManagerInstance(new ManagerMenuDialog());
        manager_instance.show();
    }
    menu.append(managerButton);

    // Styled Share button
    const shareButton = document.createElement("button");
    shareButton.id = "shareButton";
    shareButton.textContent = "Share";
    shareButton.style.background = "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)";
    shareButton.style.color = "black";
    menu.append(shareButton);
}
```

### Creating Modal Dialogs

**Source**: `/home/akatzfey/.claude-explore/workspaces/d483120b/js/comfyui-manager.js:823-1388`

```javascript
class ManagerMenuDialog extends ComfyDialog {
    constructor() {
        super();

        const close_button = $el("button", {
            id: "cm-close-button",
            type: "button",
            textContent: "Close",
            onclick: () => this.close()
        });

        const content = $el("div.comfy-modal-content", [
            $el("tr.cm-title", {}, [
                $el("font", {size:6, color:"white"}, [`ComfyUI Manager ${manager_version}`])
            ]),
            $el("br", {}, []),
            $el("div.cm-menu-container", [
                $el("div.cm-menu-column", [...this.createControlsLeft()]),
                $el("div.cm-menu-column", [...this.createControlsMid()]),
                $el("div.cm-menu-column", [...this.createControlsRight()])
            ]),
            $el("br", {}, []),
            close_button,
        ]);

        content.style.width = '100%';
        content.style.height = '100%';

        this.element = $el("div.comfy-modal", {
            id: 'cm-manager-dialog',
            parent: document.body
        }, [content]);
    }

    get isVisible() {
        return this.element?.style?.display !== "none";
    }

    show() {
        this.element.style.display = "block";
    }

    close() {
        this.element.style.display = "none";
    }

    toggleVisibility() {
        if (this.isVisible) {
            this.close();
        } else {
            this.show();
        }
    }
}
```

### The `$el` Helper Function

The `$el` function is ComfyUI's DOM element factory:

```javascript
// Basic element
$el("div")

// With class
$el("div.my-class")

// With ID
$el("div#my-id")

// With properties and children
$el("button", {
    type: "button",
    textContent: "Click Me",
    onclick: () => console.log("Clicked!"),
    style: {
        backgroundColor: "blue",
        color: "white"
    }
}, [
    $el("span", {}, ["Icon"]),
])

// Append to parent automatically
$el("style", {
    textContent: cssString,
    parent: document.head,
});
```

### Injecting Styles

**Source**: `/home/akatzfey/.claude-explore/workspaces/d483120b/js/comfyui-manager.js:26-190`

```javascript
// Method 1: Create style element and append to head
var docStyle = document.createElement('style');
docStyle.innerHTML = `
    #cm-manager-dialog {
        width: 1000px;
        height: 455px;
        box-sizing: content-box;
        z-index: 1000;
        overflow-y: auto;
    }

    .cm-button {
        width: 310px;
        height: 30px;
        position: relative;
        overflow: hidden;
        font-size: 17px !important;
    }
`;
document.head.appendChild(docStyle);

// Method 2: Using $el in init()
init() {
    $el("style", {
        textContent: style,
        parent: document.head,
    });
}
```

### Adding Context Menu Options to Nodes

**Source**: `/home/akatzfey/.claude-explore/workspaces/d483120b/js/comfyui-manager.js:1576-1633`

```javascript
async beforeRegisterNodeDef(nodeType, nodeData, app) {
    this._addExtraNodeContextMenu(nodeType, app);
},

_addExtraNodeContextMenu(node, app) {
    const origGetExtraMenuOptions = node.prototype.getExtraMenuOptions;
    node.prototype.cm_menu_added = true;

    node.prototype.getExtraMenuOptions = function (_, options) {
        // Call original function first
        origGetExtraMenuOptions?.apply?.(this, arguments);

        // Add custom menu items
        if (someCondition) {
            options.push({
                content: "My Custom Action",
                callback: (obj) => {
                    // Handle the action
                    console.log("Custom action triggered");
                }
            }, null);  // null adds a separator
        }
    }
}
```

---

## Backend Route Registration

### Basic Route Setup

**Source**: `/home/akatzfey/.claude-explore/workspaces/d483120b/glob/manager_server.py:16-38`

```python
from server import PromptServer
from aiohttp import web

# Get the routes object from PromptServer
routes = PromptServer.instance.routes
```

### Route Decorator Examples

#### GET Request

**Source**: `/home/akatzfey/.claude-explore/workspaces/d483120b/glob/manager_server.py:1696-1698`

```python
@routes.get("/manager/version")
async def get_version(request):
    return web.Response(text=core.version_str, status=200)
```

#### GET with Query Parameters

**Source**: `/home/akatzfey/.claude-explore/workspaces/d483120b/glob/manager_server.py:819-828`

```python
@routes.get("/customnode/installed")
async def installed_list(request):
    mode = request.query.get('mode', 'default')

    if mode == 'imported':
        res = startup_time_installed_node_packs
    else:
        res = core.get_installed_node_packs()

    return web.json_response(res, content_type='application/json')
```

#### GET with Path Parameters

**Source**: `/home/akatzfey/.claude-explore/workspaces/d483120b/glob/manager_server.py:1128`

```python
@routes.get("/customnode/versions/{node_name}")
async def get_node_versions(request):
    node_name = request.match_info['node_name']
    # ... handle request
```

#### POST Request with JSON Body

```python
@routes.post("/manager/queue/install")
async def install_package(request):
    json_data = await request.json()
    package_id = json_data.get('id')
    version = json_data.get('version')

    # Process installation...

    return web.json_response({'status': 'success'}, status=200)
```

### Available Route Endpoints (Reference)

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/manager/version` | GET | Get manager version |
| `/manager/reboot` | GET | Reboot ComfyUI server |
| `/customnode/installed` | GET | List installed custom nodes |
| `/customnode/getlist` | GET | Get all available custom nodes |
| `/manager/queue/start` | GET | Start processing task queue |
| `/manager/queue/status` | GET | Get current queue status |
| `/manager/queue/install` | POST | Queue installation task |
| `/manager/queue/uninstall` | POST | Queue uninstallation task |
| `/manager/queue/update` | POST | Queue update task |

---

## WebSocket Communication

### Sending Events from Backend

**Source**: `/home/akatzfey/.claude-explore/workspaces/d483120b/glob/manager_server.py:1709-1710`

```python
from server import PromptServer

# Send synchronous event to all connected clients
PromptServer.instance.send_sync("cm-api-try-install-customnode", {
    "sender": sender,
    "target": target,
    "msg": msg
})
```

### Listening for Events in Frontend

**Source**: `/home/akatzfey/.claude-explore/workspaces/d483120b/js/comfyui-manager.js:764`

```javascript
import { api } from "../../scripts/api.js";

// Listen for custom events
api.addEventListener("cm-queue-status", onQueueStatus);

async function onQueueStatus(event) {
    if(event.detail.status == 'in_progress') {
        // Update UI to show progress
        update_all_button.innerText = `in progress.. (${event.detail.done_count}/${event.detail.total_count})`;
    }
    else if(event.detail.status == 'done') {
        // Handle completion
        reset_action_buttons();
    }
}
```

### Common Event Types

- `cm-queue-status` - Task queue status updates
- `cm-task-completed` - Individual task completed
- `cm-task-started` - Task started processing
- `cm-api-try-install-customnode` - Installation request from API

---

## Complete Code Examples

### Minimal Custom Node with UI Button

#### `__init__.py`

```python
import os

WEB_DIRECTORY = "js"
NODE_CLASS_MAPPINGS = {}
__all__ = ['NODE_CLASS_MAPPINGS']
```

#### `js/my-extension.js`

```javascript
import { app } from "../../scripts/app.js";
import { $el, ComfyDialog } from "../../scripts/ui.js";

// Simple dialog
class MyDialog extends ComfyDialog {
    constructor() {
        super();

        this.element = $el("div.comfy-modal", {
            id: 'my-dialog',
            parent: document.body,
            style: {
                display: 'none',
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#333',
                padding: '20px',
                borderRadius: '8px',
                zIndex: 1000
            }
        }, [
            $el("h2", { style: { color: 'white', margin: '0 0 10px 0' } }, ["My Custom Node"]),
            $el("p", { style: { color: '#ccc' } }, ["This is a custom dialog!"]),
            $el("button", {
                textContent: "Close",
                onclick: () => this.close(),
                style: {
                    padding: '8px 16px',
                    cursor: 'pointer'
                }
            })
        ]);
    }

    show() {
        this.element.style.display = 'block';
    }

    close() {
        this.element.style.display = 'none';
    }
}

let dialogInstance = null;

app.registerExtension({
    name: "My.CustomExtension",

    async setup() {
        // Modern button (ComfyUI 1.2.49+)
        try {
            const { ComfyButton } = await import("../../scripts/ui/components/button.js");
            const { ComfyButtonGroup } = await import("../../scripts/ui/components/buttonGroup.js");

            const myButton = new ComfyButton({
                icon: "star",
                action: () => {
                    if (!dialogInstance) {
                        dialogInstance = new MyDialog();
                    }
                    dialogInstance.show();
                },
                tooltip: "My Custom Feature",
                content: "My Feature",
                classList: "comfyui-button comfyui-menu-mobile-collapse"
            });

            const group = new ComfyButtonGroup(myButton.element);
            app.menu?.settingsGroup.element.before(group.element);
        } catch (e) {
            console.log("Modern menu not available, using legacy");
        }

        // Legacy button (fallback)
        const menu = document.querySelector(".comfy-menu");
        if (menu) {
            const button = document.createElement("button");
            button.textContent = "My Feature";
            button.onclick = () => {
                if (!dialogInstance) {
                    dialogInstance = new MyDialog();
                }
                dialogInstance.show();
            };
            menu.append(button);
        }
    }
});
```

### Custom Node with Backend API

#### `glob/my_server.py`

```python
from server import PromptServer
from aiohttp import web
import json

routes = PromptServer.instance.routes

# Store some state
my_data = {"counter": 0}

@routes.get("/my-extension/status")
async def get_status(request):
    return web.json_response(my_data)

@routes.post("/my-extension/increment")
async def increment_counter(request):
    json_data = await request.json()
    amount = json_data.get('amount', 1)
    my_data["counter"] += amount

    # Notify frontend via WebSocket
    PromptServer.instance.send_sync("my-extension-updated", {
        "counter": my_data["counter"]
    })

    return web.json_response({"success": True, "counter": my_data["counter"]})

@routes.get("/my-extension/reset")
async def reset_counter(request):
    my_data["counter"] = 0
    return web.Response(text="Reset successful", status=200)
```

#### `__init__.py`

```python
import os
import sys

# Add glob directory to path so we can import from it
sys.path.append(os.path.join(os.path.dirname(__file__), "glob"))
import my_server  # noqa: F401

WEB_DIRECTORY = "js"
NODE_CLASS_MAPPINGS = {}
__all__ = ['NODE_CLASS_MAPPINGS']
```

#### `js/my-extension.js`

```javascript
import { api } from "../../scripts/api.js";
import { app } from "../../scripts/app.js";
import { $el } from "../../scripts/ui.js";

// Listen for backend events
api.addEventListener("my-extension-updated", (event) => {
    console.log("Counter updated:", event.detail.counter);
});

app.registerExtension({
    name: "My.APIExtension",

    async setup() {
        // Fetch initial status
        const response = await api.fetchApi('/my-extension/status');
        const data = await response.json();
        console.log("Initial counter:", data.counter);

        // Create UI
        const menu = document.querySelector(".comfy-menu");
        if (menu) {
            const container = $el("div", {
                style: { padding: '10px', textAlign: 'center' }
            }, [
                $el("button", {
                    textContent: "Increment Counter",
                    onclick: async () => {
                        await api.fetchApi('/my-extension/increment', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ amount: 1 })
                        });
                    }
                })
            ]);
            menu.append(container);
        }
    }
});
```

---

## Key File References

### ComfyUI-Manager Source Files

| File | Lines | Description |
|------|-------|-------------|
| `__init__.py` | 1-26 | Entry point, WEB_DIRECTORY setup |
| `js/comfyui-manager.js` | 1-1635 | Main frontend extension |
| `js/comfyui-manager.js` | 1-3 | Core imports (api, app, $el) |
| `js/comfyui-manager.js` | 26-415 | CSS styles injection |
| `js/comfyui-manager.js` | 823-1388 | ManagerMenuDialog class |
| `js/comfyui-manager.js` | 1395-1446 | Extension registration |
| `js/comfyui-manager.js` | 1463-1529 | Modern button creation |
| `js/comfyui-manager.js` | 1534-1573 | Legacy button creation |
| `js/comfyui-manager.js` | 1576-1633 | Node context menu hooks |
| `glob/manager_server.py` | 1-400 | Server initialization, utilities |
| `glob/manager_server.py` | 38 | Routes object acquisition |
| `glob/manager_server.py` | 819-828 | Example GET route |
| `glob/manager_server.py` | 1696-1698 | Simple version endpoint |
| `glob/manager_server.py` | 1709-1710 | WebSocket event sending |

### Workspace Path

```
/home/akatzfey/.claude-explore/workspaces/d483120b/
```

### Additional Resources

- **TurboGrid**: Used for displaying data grids in custom-nodes-manager.js
- **LiteGraph**: For context menus (`LiteGraph.ContextMenu`)
- **ComfyUI Docs**: https://docs.comfy.org/
- **Custom Node How-To**: https://github.com/chrisgoringe/Comfy-Custom-Node-How-To/wiki

---

## Best Practices

1. **Version Detection**: Check `window['__COMFYUI_FRONTEND_VERSION__']` for compatibility
2. **Graceful Fallbacks**: Always provide legacy UI support with try/catch
3. **Namespace Your Routes**: Use prefixes like `/my-extension/` to avoid conflicts
4. **Clean Up Styles**: Use unique class names with prefixes to avoid CSS conflicts
5. **Singleton Dialogs**: Cache dialog instances to avoid creating duplicates
6. **Security**: Validate all input and implement proper access controls
7. **Error Handling**: Always handle fetch failures gracefully

---

## Version Compatibility

```javascript
function is_legacy_front() {
    let compareVersion = '1.2.49';
    try {
        const frontendVersion = window['__COMFYUI_FRONTEND_VERSION__'];
        if (typeof frontendVersion !== 'string') {
            return false;
        }

        function parseVersion(versionString) {
            const parts = versionString.split('.').map(Number);
            return parts.length === 3 && parts.every(part => !isNaN(part)) ? parts : null;
        }

        const currentVersion = parseVersion(frontendVersion);
        const comparisonVersion = parseVersion(compareVersion);

        if (!currentVersion || !comparisonVersion) {
            return false;
        }

        for (let i = 0; i < 3; i++) {
            if (currentVersion[i] > comparisonVersion[i]) return false;
            if (currentVersion[i] < comparisonVersion[i]) return true;
        }

        return false;
    } catch {
        return true;
    }
}
```

---

*Document generated from ComfyUI-Manager source code analysis. Last updated: 2024*
