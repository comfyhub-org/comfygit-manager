<template>
  <div class="status-section">
    <h3 class="view-title">STATUS</h3>
    <div class="status-grid">
      <!-- Workflow column -->
      <div class="status-column">
        <h4 class="column-title">Workflows</h4>
        <div class="status-item" v-if="status.workflows.new.length">
          <span class="icon">●</span>
          <span class="count new">{{ status.workflows.new.length }}</span>
          <span class="label">new</span>
        </div>
        <div class="status-item" v-if="status.workflows.modified.length">
          <span class="icon">●</span>
          <span class="count modified">{{ status.workflows.modified.length }}</span>
          <span class="label">modified</span>
        </div>
        <div class="status-item" v-if="status.workflows.deleted.length">
          <span class="icon">●</span>
          <span class="count deleted">{{ status.workflows.deleted.length }}</span>
          <span class="label">deleted</span>
        </div>
        <div class="status-item synced-item">
          <span class="icon synced">✓</span>
          <span class="count synced">{{ status.workflows.synced.length }}</span>
          <span class="label">synced</span>
        </div>
      </div>

      <!-- Git status column -->
      <div class="status-column">
        <h4 class="column-title">Git Changes</h4>
        <div v-if="status.git_changes.nodes_added.length" class="status-item">
          <span class="icon">●</span>
          <span class="count new">{{ status.git_changes.nodes_added.length }}</span>
          <span class="label">node added</span>
        </div>
        <div v-if="status.git_changes.nodes_removed.length" class="status-item">
          <span class="icon">●</span>
          <span class="count deleted">{{ status.git_changes.nodes_removed.length }}</span>
          <span class="label">node removed</span>
        </div>
        <div v-if="hasOtherWorkflowChanges" class="status-item">
          <span class="icon">●</span>
          <span class="count modified">●</span>
          <span class="label">other changes</span>
        </div>
        <div v-if="!hasGitChanges" class="status-item ok">
          <span class="icon">✓</span>
          <span class="label">No uncommitted changes</span>
        </div>
      </div>
    </div>

    <!-- Warnings -->
    <div v-if="status.missing_models_count > 0" class="warning-box">
      <span class="warning-icon">⚠</span>
      <span>{{ status.missing_models_count }} missing model(s)</span>
    </div>
    <div v-if="!status.comparison.is_synced" class="warning-box error">
      <span class="warning-icon">⚠</span>
      <span>Environment not synced</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ComfyGitStatus } from '@/types/comfygit'

const props = defineProps<{
  status: ComfyGitStatus
}>()

const hasGitChanges = computed(() => {
  const gc = props.status.git_changes
  return gc.nodes_added.length > 0 || gc.nodes_removed.length > 0 || gc.workflow_changes || gc.has_other_changes
})

const hasOtherWorkflowChanges = computed(() => {
  const gc = props.status.git_changes
  const wf = props.status.workflows
  // Only show "other changes" if there are workflow changes that aren't already shown
  // as new/modified/deleted in the Workflows column
  return (gc.workflow_changes || gc.has_other_changes) &&
         wf.new.length === 0 &&
         wf.modified.length === 0 &&
         wf.deleted.length === 0
})
</script>

<style scoped>
.status-section {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.view-title {
  color: var(--cg-color-accent);
  font-size: var(--cg-font-size-lg);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  margin: 0 0 var(--cg-space-4) 0;
}

.view-title::before {
  content: '> ';
  opacity: 0.7;
}

.status-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  border-radius: var(--cg-radius-md);
}

.status-column {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
  padding: var(--cg-space-3) var(--cg-space-4);
}

.status-column:first-child {
  border-right: 1px solid var(--cg-color-border-subtle);
}

.column-title {
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-semibold);
  text-transform: uppercase;
  color: var(--cg-color-text-muted);
  margin: 0 0 var(--cg-space-2) 0;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.status-item {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-primary);
}

.status-item .icon {
  font-size: var(--cg-font-size-xs);
  opacity: 0.7;
}

.status-item .icon.synced {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
}

.synced-item {
  margin-top: var(--cg-space-1);
  padding-top: var(--cg-space-1);
  border-top: 1px solid var(--cg-color-border-subtle);
}

.count {
  font-weight: var(--cg-font-weight-semibold);
  min-width: 16px;
}

.count.new { color: var(--cg-color-success); }
.count.modified { color: var(--cg-color-warning); }
.count.deleted { color: var(--cg-color-error); }
.count.synced { color: var(--cg-color-text-muted); }

.label {
  color: var(--cg-color-text-secondary);
}

.status-item.ok {
  color: var(--cg-color-success);
}

.status-item.ok .icon {
  font-size: var(--cg-font-size-xs);
  opacity: 1;
}

.status-item.ok .label {
  color: var(--cg-color-success);
}

.warning-box {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  margin-top: var(--cg-space-2);
  padding: var(--cg-space-2) var(--cg-space-3);
  background: var(--cg-color-warning-muted);
  border: 1px solid var(--cg-color-warning);
  border-radius: var(--cg-radius-md);
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-warning);
}

.warning-box.error {
  background: var(--cg-color-error-muted);
  border-color: var(--cg-color-error);
  color: var(--cg-color-error);
}

.warning-icon {
  font-size: var(--cg-font-size-base);
}
</style>
