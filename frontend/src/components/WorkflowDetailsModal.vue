<template>
  <div class="dialog-overlay" @click.self="emit('close')">
    <div class="dialog-content workflow-details-modal">
      <div class="dialog-header">
        <h3 class="dialog-title">WORKFLOW DETAILS: {{ workflowName }}</h3>
        <button class="icon-btn" @click="emit('close')">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z"/>
          </svg>
        </button>
      </div>

      <div class="dialog-body">
        <div v-if="loading" class="loading">Loading workflow details...</div>
        <div v-else-if="error" class="error-message">{{ error }}</div>
        <template v-else-if="details">
          <!-- Models Section -->
          <section class="detail-section">
            <h4 class="section-title">/* MODELS USED ({{ details.models.length }}) */</h4>
            <div v-if="details.models.length === 0" class="empty-message">
              No models used in this workflow
            </div>
            <div
              v-for="model in details.models"
              :key="model.hash"
              class="model-card"
            >
              <div class="model-header">
                <span class="model-icon">📦</span>
                <span class="model-name">{{ model.filename }}</span>
              </div>
              <div class="model-details">
                <div class="model-row">
                  <span class="label">Status:</span>
                  <span :class="['value', model.status === 'available' ? 'success' : 'error']">
                    {{ model.status === 'available' ? '✓ Available' : '⚠ Missing' }}
                  </span>
                </div>
                <div class="model-row">
                  <span class="label">Importance:</span>
                  <select
                    :value="model.importance"
                    class="importance-select"
                    @change="handleImportanceChange(model.hash, ($event.target as HTMLSelectElement).value)"
                  >
                    <option value="required">Required</option>
                    <option value="flexible">Flexible</option>
                    <option value="optional">Optional</option>
                  </select>
                </div>
                <div v-if="model.node_type" class="model-row">
                  <span class="label">Used in:</span>
                  <span class="value">{{ model.node_type }} (Node {{ model.node_id }})</span>
                </div>
                <div v-if="model.size_mb" class="model-row">
                  <span class="label">Size:</span>
                  <span class="value">{{ model.size_mb }} MB</span>
                </div>
              </div>
              <div v-if="model.status === 'missing'" class="model-actions">
                <button class="action-btn" @click="emit('resolve')">
                  Resolve
                </button>
              </div>
            </div>
          </section>

          <!-- Importance Info -->
          <div class="info-box">
            <div class="info-title">Importance options:</div>
            <ul class="info-list">
              <li><strong>Required</strong> — Must have for workflow to run</li>
              <li><strong>Flexible</strong> — Workflow adapts if missing</li>
              <li><strong>Optional</strong> — Nice to have, can be skipped</li>
            </ul>
          </div>

          <!-- Nodes Section -->
          <section class="detail-section">
            <h4 class="section-title">/* NODES USED ({{ details.nodes.length }}) */</h4>
            <div v-if="details.nodes.length === 0" class="empty-message">
              No custom nodes used in this workflow
            </div>
            <div
              v-for="node in details.nodes"
              :key="node.name"
              class="node-item"
            >
              <span :class="['node-status', node.installed ? 'installed' : 'missing']">
                {{ node.installed ? '✓' : '✕' }}
              </span>
              <span class="node-name">{{ node.name }}</span>
              <span v-if="node.version" class="node-version">v{{ node.version }}</span>
            </div>
          </section>
        </template>
      </div>

      <div class="dialog-footer">
        <button class="btn secondary" @click="emit('close')">Close</button>
        <button
          v-if="hasChanges"
          class="btn primary"
          @click="handleSave"
        >
          Save Changes
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { WorkflowDetails } from '@/types/comfygit'

const props = defineProps<{
  workflowName: string
}>()

const emit = defineEmits<{
  close: []
  resolve: []
}>()

const { getWorkflowDetails, setModelImportance } = useComfyGitService()

const details = ref<WorkflowDetails | null>(null)
const loading = ref(false)
const error = ref<string | null>(null)
const hasChanges = ref(false)
const importanceChanges = ref<Record<string, string>>({})

async function loadDetails() {
  loading.value = true
  error.value = null
  try {
    details.value = await getWorkflowDetails(props.workflowName)
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load workflow details'
  } finally {
    loading.value = false
  }
}

function handleImportanceChange(hash: string, importance: string) {
  importanceChanges.value[hash] = importance
  hasChanges.value = true
}

async function handleSave() {
  if (!hasChanges.value) {
    emit('close')
    return
  }

  loading.value = true
  error.value = null

  try {
    // Save all importance changes
    for (const [hash, importance] of Object.entries(importanceChanges.value)) {
      await setModelImportance(props.workflowName, hash, importance as any)
    }
    emit('close')
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to save changes'
  } finally {
    loading.value = false
  }
}

onMounted(loadDetails)
</script>

<style scoped>
.dialog-overlay {
  position: fixed;
  inset: 0;
  background: var(--cg-color-bg-overlay);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10003;
}

.dialog-content {
  background: var(--cg-color-bg-primary);
  border: 2px solid var(--cg-color-border);
  box-shadow: 0 0 16px rgba(0, 255, 65, 0.5);
  max-width: 700px;
  width: 90vw;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
}

.dialog-header {
  padding: var(--cg-space-4);
  border-bottom: 1px solid var(--cg-color-border);
  background: var(--cg-color-bg-tertiary);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dialog-title {
  color: var(--cg-color-accent);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  font-size: var(--cg-font-size-sm);
  text-shadow: 0 0 8px var(--cg-color-accent);
  margin: 0;
}

.icon-btn {
  background: transparent;
  border: 1px solid transparent;
  color: var(--cg-color-text-primary);
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-btn:hover {
  background: var(--cg-color-bg-hover);
  border-color: var(--cg-color-border-subtle);
}

.dialog-body {
  flex: 1;
  overflow-y: auto;
  padding: var(--cg-space-4);
}

.loading,
.error-message,
.empty-message {
  text-align: center;
  padding: var(--cg-space-4);
  color: var(--cg-color-text-muted);
}

.error-message {
  color: var(--cg-color-error);
  border: 1px solid var(--cg-color-error);
  background: transparent;
}

.detail-section {
  margin-bottom: var(--cg-space-5);
}

.section-title {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  margin: 0 0 var(--cg-space-3) 0;
  font-weight: var(--cg-font-weight-normal);
}

.model-card {
  border: 1px solid var(--cg-color-border-subtle);
  background: var(--cg-color-bg-tertiary);
  padding: var(--cg-space-3);
  margin-bottom: var(--cg-space-3);
}

.model-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: var(--cg-space-2);
}

.model-icon {
  font-size: var(--cg-font-size-lg);
}

.model-name {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-base);
  font-weight: var(--cg-font-weight-semibold);
}

.model-details {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: var(--cg-space-2);
}

.model-row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: var(--cg-font-size-sm);
}

.model-row .label {
  color: var(--cg-color-text-muted);
  min-width: 80px;
}

.model-row .value {
  color: var(--cg-color-text-secondary);
}

.model-row .value.success {
  color: var(--cg-color-success);
}

.model-row .value.error {
  color: var(--cg-color-error);
}

.importance-select {
  background: var(--cg-color-bg-primary);
  border: 1px solid var(--cg-color-border-subtle);
  color: var(--cg-color-text-primary);
  padding: 4px 8px;
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
  cursor: pointer;
}

.importance-select:hover {
  border-color: var(--cg-color-accent);
}

.importance-select:focus {
  outline: none;
  border-color: var(--cg-color-accent);
  box-shadow: 0 0 8px rgba(0, 255, 65, 0.2);
}

.model-actions {
  margin-top: var(--cg-space-2);
}

.action-btn {
  padding: 6px 12px;
  background: transparent;
  color: var(--cg-color-accent);
  border: 1px solid var(--cg-color-accent);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  cursor: pointer;
}

.action-btn:hover {
  background: var(--cg-color-bg-hover);
  box-shadow: 0 0 8px rgba(0, 255, 65, 0.3);
}

.info-box {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  padding: var(--cg-space-3);
  margin-bottom: var(--cg-space-4);
}

.info-title {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
  margin-bottom: var(--cg-space-2);
}

.info-list {
  margin: 0;
  padding-left: var(--cg-space-4);
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-sm);
  list-style-type: '• ';
}

.info-list li {
  margin-bottom: 4px;
}

.node-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border: 1px solid var(--cg-color-border-subtle);
  background: var(--cg-color-bg-tertiary);
  margin-bottom: 4px;
  font-size: var(--cg-font-size-sm);
}

.node-status {
  font-weight: bold;
  font-size: var(--cg-font-size-base);
}

.node-status.installed {
  color: var(--cg-color-success);
}

.node-status.missing {
  color: var(--cg-color-error);
}

.node-name {
  color: var(--cg-color-text-primary);
  flex: 1;
}

.node-version {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
}

.dialog-footer {
  padding: var(--cg-space-4);
  border-top: 1px solid var(--cg-color-border);
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  background: var(--cg-color-bg-tertiary);
}

.btn {
  padding: 8px 16px;
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  cursor: pointer;
  border: 1px solid;
}

.btn.secondary {
  background: transparent;
  color: var(--cg-color-text-secondary);
  border-color: var(--cg-color-border);
}

.btn.secondary:hover {
  color: var(--cg-color-text-primary);
  border-color: var(--cg-color-text-primary);
}

.btn.primary {
  background: transparent;
  color: var(--cg-color-accent);
  border-color: var(--cg-color-accent);
}

.btn.primary:hover {
  background: var(--cg-color-bg-hover);
  box-shadow: 0 0 8px rgba(0, 255, 65, 0.3);
}

/* Scrollbar */
.dialog-body::-webkit-scrollbar {
  width: 8px;
}

.dialog-body::-webkit-scrollbar-track {
  background: var(--cg-color-bg-tertiary);
}

.dialog-body::-webkit-scrollbar-thumb {
  background: var(--cg-color-border-subtle);
  border: 1px solid var(--cg-color-bg-tertiary);
}

.dialog-body::-webkit-scrollbar-thumb:hover {
  background: var(--cg-color-accent);
}
</style>
