<template>
  <div class="dialog-overlay" @click.self="$emit('close')">
    <div class="dialog-content">
      <div class="dialog-header">
        <div class="header-info">
          <h3 class="dialog-title">COMMIT DETAILS</h3>
          <span class="commit-hash">{{ detail?.short_hash || commit.short_hash || commit.hash?.slice(0, 7) }}</span>
          <span v-if="detail?.refs?.length" class="commit-refs">
            <span v-for="ref in detail.refs" :key="ref" class="ref-badge">{{ ref }}</span>
          </span>
        </div>
        <button class="icon-btn" @click="$emit('close')">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z"/>
          </svg>
        </button>
      </div>

      <div class="dialog-body">
        <div class="commit-message">{{ detail?.message || commit.message }}</div>
        <div class="commit-date">{{ detail?.date_relative || commit.date_relative || commit.relative_date }}</div>

        <div v-if="isLoading" class="loading">Loading details...</div>

        <div v-else-if="detail" class="changes-section">
          <!-- Stats summary -->
          <div class="stats-row">
            <span class="stat">{{ detail.stats.files_changed }} files</span>
            <span class="stat insertions">+{{ detail.stats.insertions }}</span>
            <span class="stat deletions">-{{ detail.stats.deletions }}</span>
          </div>

          <!-- Workflow changes -->
          <div v-if="hasWorkflowChanges" class="change-group">
            <h4 class="change-title">/* WORKFLOWS */</h4>
            <div v-for="wf in detail.changes.workflows.added" :key="'add-'+wf" class="change-item added">
              <span class="change-icon">+</span>
              <span>{{ wf }}</span>
            </div>
            <div v-for="wf in detail.changes.workflows.modified" :key="'mod-'+wf" class="change-item modified">
              <span class="change-icon">~</span>
              <span>{{ wf }}</span>
            </div>
            <div v-for="wf in detail.changes.workflows.deleted" :key="'del-'+wf" class="change-item deleted">
              <span class="change-icon">-</span>
              <span>{{ wf }}</span>
            </div>
          </div>

          <!-- Node changes -->
          <div v-if="hasNodeChanges" class="change-group">
            <h4 class="change-title">/* NODES */</h4>
            <div v-for="node in detail.changes.nodes.added" :key="'add-'+node.name" class="change-item added">
              <span class="change-icon">+</span>
              <span>{{ node.name }}</span>
              <span v-if="node.version" class="version">({{ node.version }})</span>
            </div>
            <div v-for="node in detail.changes.nodes.removed" :key="'rem-'+node.name" class="change-item deleted">
              <span class="change-icon">-</span>
              <span>{{ node.name }}</span>
            </div>
          </div>

          <!-- Model changes -->
          <div v-if="detail.changes.models.resolved > 0" class="change-group">
            <h4 class="change-title">/* MODELS */</h4>
            <div class="change-item">
              <span class="change-icon">●</span>
              <span>{{ detail.changes.models.resolved }} model(s) resolved</span>
            </div>
          </div>
        </div>
      </div>

      <div class="dialog-footer">
        <button class="btn secondary" @click="$emit('createBranch', commit)">
          Create Branch From Here
        </button>
        <button class="btn primary" @click="$emit('checkout', commit)">
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { CommitInfo, CommitDetail } from '@/types/comfygit'
import { useComfyGitService } from '@/composables/useComfyGitService'

const props = defineProps<{
  commit: CommitInfo
}>()

defineEmits<{
  close: []
  checkout: [commit: CommitInfo]
  createBranch: [commit: CommitInfo]
}>()

const { getCommitDetail } = useComfyGitService()

const detail = ref<CommitDetail | null>(null)
const isLoading = ref(true)

const hasWorkflowChanges = computed(() => {
  if (!detail.value) return false
  const wf = detail.value.changes.workflows
  return wf.added.length > 0 || wf.modified.length > 0 || wf.deleted.length > 0
})

const hasNodeChanges = computed(() => {
  if (!detail.value) return false
  const nodes = detail.value.changes.nodes
  return nodes.added.length > 0 || nodes.removed.length > 0
})

onMounted(async () => {
  try {
    detail.value = await getCommitDetail(props.commit.hash)
  } finally {
    isLoading.value = false
  }
})
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
  max-width: 600px;
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
  align-items: flex-start;
}

.header-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.dialog-title {
  color: var(--cg-color-accent);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  font-size: var(--cg-font-size-sm);
  text-shadow: 0 0 8px var(--cg-color-accent);
  margin: 0;
}

.commit-hash {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-base);
  color: var(--cg-color-info);
  font-weight: var(--cg-font-weight-semibold);
}

.commit-refs {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.ref-badge {
  padding: 2px 8px;
  background: transparent;
  border: 1px solid var(--cg-color-accent);
  color: var(--cg-color-accent);
  font-size: var(--cg-font-size-xs);
  font-family: var(--cg-font-mono);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
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
  margin-left: var(--cg-space-2);
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

.commit-message {
  font-size: var(--cg-font-size-base);
  font-weight: var(--cg-font-weight-semibold);
  color: var(--cg-color-text-primary);
  margin-bottom: 6px;
}

.commit-date {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  margin-bottom: var(--cg-space-4);
}

.loading {
  text-align: center;
  padding: var(--cg-space-6);
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
}

.changes-section {
  margin-top: var(--cg-space-2);
}

.stats-row {
  display: flex;
  gap: 16px;
  padding: 10px 12px;
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  margin-bottom: var(--cg-space-4);
  font-size: var(--cg-font-size-sm);
  font-family: var(--cg-font-mono);
}

.stat {
  color: var(--cg-color-text-muted);
}

.stat.insertions {
  color: var(--cg-color-success);
}

.stat.deletions {
  color: var(--cg-color-error);
}

.change-group {
  margin-bottom: var(--cg-space-4);
}

.change-title {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  margin: 0 0 var(--cg-space-2) 0;
  font-weight: var(--cg-font-weight-normal);
}

.change-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-secondary);
  font-family: var(--cg-font-mono);
  background: var(--cg-color-bg-tertiary);
  border-left: 2px solid transparent;
  margin-bottom: 2px;
}

.change-icon {
  font-family: var(--cg-font-mono);
  font-weight: var(--cg-font-weight-bold);
  width: 14px;
  text-align: center;
  font-size: var(--cg-font-size-base);
}

.change-item.added {
  border-left-color: var(--cg-color-success);
}

.change-item.added .change-icon {
  color: var(--cg-color-success);
}

.change-item.modified {
  border-left-color: var(--cg-color-warning);
}

.change-item.modified .change-icon {
  color: var(--cg-color-warning);
}

.change-item.deleted {
  border-left-color: var(--cg-color-error);
}

.change-item.deleted .change-icon {
  color: var(--cg-color-error);
}

.version {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
}

.dialog-footer {
  padding: var(--cg-space-4);
  border-top: 1px solid var(--cg-color-border);
  background: var(--cg-color-bg-tertiary);
  display: flex;
  justify-content: flex-end;
  gap: 8px;
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
