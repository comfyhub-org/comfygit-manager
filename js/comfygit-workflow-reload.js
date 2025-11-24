/**
 * ComfyGit Workflow Hot Reload Extension
 *
 * Automatically reloads workflows from disk after git operations (branch switch, checkout, etc.)
 * Works by detecting server reconnect after restart and reloading previously open workflows.
 */

console.log("[ComfyGit] Workflow reload extension script loaded!");

import { app } from "../../scripts/app.js";
import { api } from "../../scripts/api.js";

app.registerExtension({
  name: "comfygit.workflow.reload",

  async setup() {
    console.log("[ComfyGit] Workflow reload extension setup() called");

    // Track connection state to detect reconnects
    let wasConnected = false;
    let reconnectTimeout = null;

    // Listen for status messages (indicates connection state)
    api.addEventListener("status", async (event) => {
      const isConnected = event.detail != null;

      // Detect reconnection after disconnect
      if (isConnected && !wasConnected) {
        console.log("[ComfyGit] Server reconnected, checking for pending workflow reload...");

        // Clear any pending timeout
        if (reconnectTimeout) {
          clearTimeout(reconnectTimeout);
          reconnectTimeout = null;
        }

        // Wait a moment for server to fully initialize
        reconnectTimeout = setTimeout(async () => {
          await checkAndReloadWorkflows();
        }, 500);
      }

      wasConnected = isConnected;
    });

    /**
     * Check if we have pending workflows to reload and reload them
     */
    async function checkAndReloadWorkflows() {
      try {
        // Check if we have a pending git reload flag
        const pendingReload = sessionStorage.getItem('ComfyGit.PendingGitReload');
        if (!pendingReload) {
          console.log("[ComfyGit] No pending reload detected");
          return;
        }

        // Get stored workflow paths
        const workflowPathsJson = sessionStorage.getItem('ComfyGit.WorkflowsToReload');
        if (!workflowPathsJson) {
          console.log("[ComfyGit] No workflows to reload");
          sessionStorage.removeItem('ComfyGit.PendingGitReload');
          return;
        }

        console.log("[ComfyGit] Found workflows to reload:", workflowPathsJson);

        // Parse the workflow paths (stored as JSON array)
        let workflowPaths;
        try {
          workflowPaths = JSON.parse(workflowPathsJson);
        } catch (e) {
          console.error("[ComfyGit] Failed to parse workflow paths:", e);
          sessionStorage.removeItem('ComfyGit.PendingGitReload');
          sessionStorage.removeItem('ComfyGit.WorkflowsToReload');
          return;
        }

        // Reload workflows from disk
        if (Array.isArray(workflowPaths) && workflowPaths.length > 0) {
          console.log(`[ComfyGit] Reloading ${workflowPaths.length} workflow(s)...`);

          // Reload the first workflow (active one)
          const primaryWorkflow = workflowPaths[0];
          await reloadWorkflowFromPath(primaryWorkflow);

          // If there are multiple workflows, reload them in background
          if (workflowPaths.length > 1) {
            for (let i = 1; i < workflowPaths.length; i++) {
              setTimeout(() => {
                reloadWorkflowFromPath(workflowPaths[i]);
              }, i * 200); // Stagger reloads
            }
          }
        }

        // Clear the flags
        sessionStorage.removeItem('ComfyGit.PendingGitReload');
        sessionStorage.removeItem('ComfyGit.WorkflowsToReload');

        console.log("[ComfyGit] Workflow reload completed");
      } catch (error) {
        console.error("[ComfyGit] Error during workflow reload:", error);
        // Clear flags even on error to prevent repeated attempts
        sessionStorage.removeItem('ComfyGit.PendingGitReload');
        sessionStorage.removeItem('ComfyGit.WorkflowsToReload');
      }
    }

    /**
     * Reload a specific workflow from the ComfyUI workflows directory
     */
    async function reloadWorkflowFromPath(workflowPath) {
      try {
        console.log(`[ComfyGit] Loading workflow: ${workflowPath}`);

        // Extract just the filename without directory prefix and extension
        // ComfyUI stores paths like "workflows/default.json" but we need just "default"
        const workflowName = workflowPath
          .replace(/^workflows\//, '')  // Remove "workflows/" prefix
          .replace(/\.json$/, '');      // Remove ".json" extension

        console.log(`[ComfyGit] Fetching workflow: ${workflowName}`);

        // Fetch the workflow from the server via ComfyGit API
        const response = await fetch(`/api/v2/comfygit/workflow/${encodeURIComponent(workflowName)}/content`);

        if (!response.ok) {
          console.warn(`[ComfyGit] Failed to fetch workflow ${workflowName}: ${response.status}`);
          return;
        }

        const workflowData = await response.json();

        // Load the workflow into the canvas
        await app.loadGraphData(
          workflowData,
          true,  // clean - clear current graph
          true,  // restore_view - restore saved view position
          workflowName,  // workflow name
          {
            showMissingNodesDialog: true,
            showMissingModelsDialog: true,
            openSource: 'comfygit_reload'
          }
        );

        console.log(`[ComfyGit] Successfully reloaded workflow: ${workflowName}`);
      } catch (error) {
        console.error(`[ComfyGit] Error reloading workflow ${workflowPath}:`, error);
      }
    }
  }
});
