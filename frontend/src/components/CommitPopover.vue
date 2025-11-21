<template>
  <div class="commit-popover">
    <div class="popover-header">
      <h3 class="popover-title">COMMIT CHANGES</h3>
      <button class="close-btn" @click="emit('close')">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z"/>
        </svg>
      </button>
    </div>

    <div class="popover-body">
      <!-- Changes summary -->
      <div v-if="status && hasChanges" class="changes-summary">
        <div v-if="status.workflows.new.length" class="change-item">
          <span class="change-icon new">+</span>
          <span>{{ status.workflows.new.length }} new workflow(s)</span>
        </div>
        <div v-if="status.workflows.modified.length" class="change-item">
          <span class="change-icon modified">~</span>
          <span>{{ status.workflows.modified.length }} modified</span>
        </div>
        <div v-if="status.workflows.deleted.length" class="change-item">
          <span class="change-icon deleted">-</span>
          <span>{{ status.workflows.deleted.length }} deleted</span>
        </div>
        <div v-if="status.git_changes.nodes_added.length" class="change-item">
          <span class="change-icon new">+</span>
          <span>{{ status.git_changes.nodes_added.length }} node(s) added</span>
        </div>
        <div v-if="status.git_changes.nodes_removed.length" class="change-item">
          <span class="change-icon deleted">-</span>
          <span>{{ status.git_changes.nodes_removed.length }} node(s) removed</span>
        </div>
      </div>
      <div v-else-if="status" class="no-changes">
        No changes to commit
      </div>
      <div v-else class="loading">
        Loading...
      </div>

      <!-- Commit message -->
      <div class="message-section">
        <BaseTextarea
          v-model="message"
          :placeholder="hasChanges ? 'Describe your changes...' : 'No changes'"
          :disabled="!hasChanges || isLoading"
          :rows="3"
          @ctrl-enter="handleCommit"
        />
      </div>

      <!-- Result message -->
      <div v-if="result" :class="['result', result.type]">
        {{ result.message }}
      </div>
    </div>

    <div class="popover-footer">
      <BaseButton variant="secondary" @click="emit('close')">
        Cancel
      </BaseButton>
      <BaseButton
        variant="primary"
        :disabled="!hasChanges || !message.trim() || isLoading"
        :loading="isLoading"
        @click="handleCommit"
      >
        {{ isLoading ? 'Committing...' : 'Commit' }}
      </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { ComfyGitStatus } from '@/types/comfygit'
import { useComfyGitService } from '@/composables/useComfyGitService'
import BaseButton from './base/BaseButton.vue'
import BaseTextarea from './base/BaseTextarea.vue'

const props = defineProps<{
  status: ComfyGitStatus | null
}>()

const emit = defineEmits<{
  close: []
  committed: []
}>()

const { commit } = useComfyGitService()

const message = ref('')
const isLoading = ref(false)
const result = ref<{ type: 'success' | 'error', message: string } | null>(null)

const hasChanges = computed(() => {
  if (!props.status) return false
  const wf = props.status.workflows
  return wf.new.length > 0 || wf.modified.length > 0 || wf.deleted.length > 0 || props.status.has_changes
})

async function handleCommit() {
  if (!hasChanges.value || !message.value.trim() || isLoading.value) return

  isLoading.value = true
  result.value = null

  try {
    const res = await commit(message.value.trim())

    if (res.status === 'success') {
      result.value = {
        type: 'success',
        message: `Committed: ${res.summary?.new || 0} new, ${res.summary?.modified || 0} modified, ${res.summary?.deleted || 0} deleted`
      }
      message.value = ''
      setTimeout(() => emit('committed'), 1000)
    } else if (res.status === 'no_changes') {
      result.value = { type: 'error', message: 'No changes to commit' }
    } else {
      result.value = { type: 'error', message: res.message || 'Commit failed' }
    }
  } catch (err) {
    result.value = { type: 'error', message: err instanceof Error ? err.message : 'Commit failed' }
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.commit-popover {
  background: var(--cg-color-bg-primary);
  border: 2px solid var(--cg-color-border);
  box-shadow: var(--cg-shadow-xl);
  min-width: 400px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
}

.popover-header {
  padding: var(--cg-space-3);
  border-bottom: 1px solid var(--cg-color-border);
  background: var(--cg-color-bg-tertiary);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.popover-title {
  color: var(--cg-color-accent);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  font-size: var(--cg-font-size-sm);
  margin: 0;
  flex: 1;
}

.close-btn {
  background: transparent;
  border: 1px solid transparent;
  color: var(--cg-color-text-primary);
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.close-btn:hover {
  background: var(--cg-color-bg-hover);
  border-color: var(--cg-color-border-subtle);
}

.popover-body {
  padding: var(--cg-space-3);
  max-height: 400px;
  overflow-y: auto;
}

.popover-footer {
  padding: var(--cg-space-3);
  border-top: 1px solid var(--cg-color-border);
  background: var(--cg-color-bg-tertiary);
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

.changes-summary {
  background: var(--cg-color-bg-tertiary);
  border-radius: var(--cg-radius-md);
  padding: 8px;
  margin-bottom: 12px;
  font-size: var(--cg-font-size-xs);
}

.change-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 2px 0;
}

.change-icon {
  font-family: monospace;
  font-weight: 600;
  width: 12px;
  text-align: center;
}

.change-icon.new { color: var(--cg-color-success); }
.change-icon.modified { color: var(--cg-color-warning); }
.change-icon.deleted { color: var(--cg-color-error); }

.no-changes,
.loading {
  text-align: center;
  padding: 12px;
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
}

.message-section {
  margin-bottom: 8px;
}

.result {
  padding: 6px 8px;
  border-radius: var(--cg-radius-md);
  font-size: var(--cg-font-size-xs);
  margin-top: 8px;
}

.result.success {
  background: var(--cg-color-success-muted);
  border: 1px solid var(--cg-color-success);
  color: #86efac;
}

.result.error {
  background: var(--cg-color-error-muted);
  border: 1px solid var(--cg-color-error);
  color: #fca5a5;
}
</style>
