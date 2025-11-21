<template>
  <BaseModal
    :title="`WORKFLOW DETAILS: ${workflowName}`"
    size="lg"
    :loading="loading"
    :error="error || undefined"
    @close="emit('close')"
  >
    <template #body>
        <template v-if="details">
          <!-- Models Section -->
          <section class="detail-section">
            <BaseTitle variant="section">MODELS USED ({{ details.models.length }})</BaseTitle>
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
                  <BaseSelect
                    :model-value="importanceChanges[model.hash] || model.importance"
                    :options="importanceOptions"
                    @update:model-value="handleImportanceChange(model.hash, $event)"
                  />
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
                <BaseButton variant="secondary" size="sm" @click="emit('resolve')">
                  Resolve
                </BaseButton>
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
            <BaseTitle variant="section">NODES USED ({{ details.nodes.length }})</BaseTitle>
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
    </template>

    <template #footer>
      <BaseButton variant="secondary" @click="emit('close')">
        Close
      </BaseButton>
      <BaseButton
        v-if="hasChanges"
        variant="primary"
        @click="handleSave"
      >
        Save Changes
      </BaseButton>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { WorkflowDetails } from '@/types/comfygit'
import BaseModal from './base/BaseModal.vue'
import BaseButton from './base/BaseButton.vue'
import BaseTitle from './base/BaseTitle.vue'
import BaseSelect from './base/BaseSelect.vue'

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

const importanceOptions = [
  { label: 'Required', value: 'required' },
  { label: 'Flexible', value: 'flexible' },
  { label: 'Optional', value: 'optional' }
]

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
.empty-message {
  text-align: center;
  padding: var(--cg-space-4);
  color: var(--cg-color-text-muted);
}

.detail-section {
  margin-bottom: var(--cg-space-5);
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

.model-actions {
  margin-top: var(--cg-space-2);
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
</style>
