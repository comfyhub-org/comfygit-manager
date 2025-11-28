<template>
  <div :class="['conflict-item', { resolved: isResolved }]">
    <div class="conflict-header">
      <span class="conflict-icon">⚠</span>
      <div class="conflict-info">
        <div class="conflict-identifier">
          <span class="category-badge">{{ categoryLabel }}</span>
          <code class="identifier-name">{{ conflict.identifier }}</code>
        </div>
        <div class="conflict-description">{{ conflictDescription }}</div>
      </div>
      <div v-if="isResolved" class="resolved-badge">
        <span class="resolved-icon">✓</span>
        <span class="resolved-text">{{ resolutionLabel }}</span>
      </div>
    </div>

    <!-- Version/spec comparison for nodes and dependencies -->
    <div v-if="showComparison" class="conflict-comparison">
      <div class="comparison-item mine">
        <span class="comparison-label">Your version:</span>
        <code class="comparison-value">{{ baseValue || '(deleted)' }}</code>
      </div>
      <span class="comparison-arrow">→</span>
      <div class="comparison-item theirs">
        <span class="comparison-label">Their version:</span>
        <code class="comparison-value">{{ targetValue || '(deleted)' }}</code>
      </div>
    </div>

    <!-- Hash comparison for workflows -->
    <div v-if="conflict.category === 'workflow'" class="conflict-hashes">
      <span class="hash-item">Your: <code>{{ (conflict as WorkflowConflict).base_hash?.slice(0, 8) || 'n/a' }}</code></span>
      <span class="hash-item">Theirs: <code>{{ (conflict as WorkflowConflict).target_hash?.slice(0, 8) || 'n/a' }}</code></span>
    </div>

    <div class="conflict-actions">
      <ResolutionChoiceGroup
        v-model="localResolution"
        :disabled="disabled"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { AnyConflict, WorkflowConflict, NodeConflict, DependencyConflict } from '@/types/comfygit'
import ResolutionChoiceGroup from '@/components/base/atoms/ResolutionChoiceGroup.vue'

const props = defineProps<{
  conflict: AnyConflict
  resolution: 'take_base' | 'take_target' | null
  disabled?: boolean
}>()

const emit = defineEmits<{
  resolve: [resolution: 'take_base' | 'take_target']
}>()

const localResolution = ref(props.resolution)

watch(() => props.resolution, (val) => {
  localResolution.value = val
})

watch(localResolution, (val) => {
  if (val) emit('resolve', val)
})

const isResolved = computed(() => localResolution.value !== null)

const categoryLabel = computed(() => {
  switch (props.conflict.category) {
    case 'workflow': return 'Workflow'
    case 'node': return 'Node'
    case 'dependency': return 'Dependency'
  }
})

const conflictDescription = computed(() => {
  if (props.conflict.conflict_type === 'both_modified') {
    return 'Both you and remote modified this'
  }
  // delete_modify
  if (props.conflict.category === 'node') {
    const nc = props.conflict as NodeConflict
    if (nc.base_deleted) return 'You deleted, remote modified'
    if (nc.target_deleted) return 'You modified, remote deleted'
  }
  return 'Conflicting changes detected'
})

const showComparison = computed(() =>
  props.conflict.category === 'node' || props.conflict.category === 'dependency'
)

const baseValue = computed(() => {
  if (props.conflict.category === 'node') {
    return (props.conflict as NodeConflict).base_version
  }
  if (props.conflict.category === 'dependency') {
    return (props.conflict as DependencyConflict).base_spec
  }
  return null
})

const targetValue = computed(() => {
  if (props.conflict.category === 'node') {
    return (props.conflict as NodeConflict).target_version
  }
  if (props.conflict.category === 'dependency') {
    return (props.conflict as DependencyConflict).target_spec
  }
  return null
})

const resolutionLabel = computed(() => {
  switch (localResolution.value) {
    case 'take_base': return 'Keep Mine'
    case 'take_target': return 'Keep Theirs'
    default: return ''
  }
})
</script>

<style scoped>
.conflict-item {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
  padding: var(--cg-space-3);
  background: var(--cg-color-warning-muted);
  border: 1px solid var(--cg-color-warning);
  border-radius: var(--cg-radius-md);
  transition: all 0.2s ease;
}

.conflict-item.resolved {
  background: var(--cg-color-bg-secondary);
  border-color: var(--cg-color-border);
}

.conflict-header {
  display: flex;
  align-items: flex-start;
  gap: var(--cg-space-3);
}

.conflict-icon {
  font-size: var(--cg-font-size-lg);
  color: var(--cg-color-warning);
  flex-shrink: 0;
}

.conflict-item.resolved .conflict-icon {
  color: var(--cg-color-text-muted);
}

.conflict-info {
  flex: 1;
  min-width: 0;
}

.conflict-identifier {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  margin-bottom: var(--cg-space-1);
}

.category-badge {
  padding: 2px var(--cg-space-2);
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  background: var(--cg-color-bg-tertiary);
  border-radius: var(--cg-radius-xs);
  color: var(--cg-color-text-muted);
}

.identifier-name {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.conflict-description {
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-secondary);
}

.resolved-badge {
  display: flex;
  align-items: center;
  gap: var(--cg-space-1);
  padding: var(--cg-space-1) var(--cg-space-2);
  background: var(--cg-color-success-muted);
  border-radius: var(--cg-radius-sm);
  color: var(--cg-color-success);
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-medium);
  flex-shrink: 0;
}

.conflict-comparison {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  padding: var(--cg-space-2);
  background: var(--cg-color-bg-tertiary);
  border-radius: var(--cg-radius-sm);
  font-size: var(--cg-font-size-sm);
}

.comparison-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.comparison-label {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
}

.comparison-value {
  font-family: var(--cg-font-mono);
  color: var(--cg-color-text-primary);
}

.comparison-item.mine .comparison-value {
  color: var(--cg-color-info);
}

.comparison-item.theirs .comparison-value {
  color: var(--cg-color-success);
}

.comparison-arrow {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-lg);
}

.conflict-hashes {
  display: flex;
  gap: var(--cg-space-4);
  padding: var(--cg-space-2);
  background: var(--cg-color-bg-tertiary);
  border-radius: var(--cg-radius-sm);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
}

.hash-item code {
  font-family: var(--cg-font-mono);
  color: var(--cg-color-text-secondary);
}

.conflict-actions {
  display: flex;
  justify-content: flex-end;
}
</style>
