<template>
  <BaseModal
    :title="`Resolve Conflicts: ${operationType === 'pull' ? 'Pull' : 'Merge'}`"
    size="lg"
    :fixed-height="true"
    @close="handleClose"
  >
    <template #body>
      <div class="resolution-content">
        <!-- Header summary -->
        <div class="resolution-header">
          <div class="header-stats">
            <div class="stat">
              <span class="stat-value">{{ conflicts.length }}</span>
              <span class="stat-label">total conflicts</span>
            </div>
            <div class="stat resolved">
              <span class="stat-value">{{ resolvedCount }}</span>
              <span class="stat-label">resolved</span>
            </div>
            <div v-if="pendingCount > 0" class="stat pending">
              <span class="stat-value">{{ pendingCount }}</span>
              <span class="stat-label">pending</span>
            </div>
          </div>
          <p class="header-hint">
            Select a resolution for each conflict. You can keep your local changes
            or accept incoming changes.
          </p>
        </div>

        <!-- Conflicts by category -->
        <div class="conflicts-list">
          <!-- Workflow Conflicts -->
          <div v-if="workflowConflicts.length > 0" class="conflict-category">
            <h4 class="category-title">Workflows ({{ workflowConflicts.length }})</h4>
            <ConflictItem
              v-for="conflict in workflowConflicts"
              :key="conflict.identifier"
              :conflict="conflict"
              :resolution="getResolution(conflict.identifier)"
              @resolve="(res) => handleResolve(conflict, res)"
            />
          </div>

          <!-- Node Conflicts -->
          <div v-if="nodeConflicts.length > 0" class="conflict-category">
            <h4 class="category-title">Nodes ({{ nodeConflicts.length }})</h4>
            <ConflictItem
              v-for="conflict in nodeConflicts"
              :key="conflict.identifier"
              :conflict="conflict"
              :resolution="getResolution(conflict.identifier)"
              @resolve="(res) => handleResolve(conflict, res)"
            />
          </div>

          <!-- Dependency Conflicts -->
          <div v-if="dependencyConflicts.length > 0" class="conflict-category">
            <h4 class="category-title">Dependencies ({{ dependencyConflicts.length }})</h4>
            <ConflictItem
              v-for="conflict in dependencyConflicts"
              :key="conflict.identifier"
              :conflict="conflict"
              :resolution="getResolution(conflict.identifier)"
              @resolve="(res) => handleResolve(conflict, res)"
            />
          </div>
        </div>

        <!-- All resolved message -->
        <div v-if="allResolved" class="all-resolved-message">
          <span class="resolved-icon">✓</span>
          <span>All conflicts resolved! Click "{{ actionLabel }}" to continue.</span>
        </div>
      </div>
    </template>

    <template #footer>
      <BaseButton variant="secondary" @click="handleClose">
        Cancel
      </BaseButton>
      <div class="footer-spacer"></div>
      <BaseButton
        variant="primary"
        :disabled="!allResolved || applying"
        :loading="applying"
        @click="handleApply"
      >
        {{ actionLabel }}
      </BaseButton>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { AnyConflict, ConflictResolution } from '@/types/comfygit'
import BaseModal from './base/BaseModal.vue'
import BaseButton from './base/BaseButton.vue'
import ConflictItem from './base/molecules/ConflictItem.vue'

const props = defineProps<{
  conflicts: AnyConflict[]
  resolutions: Map<string, ConflictResolution>
  operationType: 'pull' | 'merge'
  applying?: boolean
}>()

const emit = defineEmits<{
  close: []
  resolve: [conflict: AnyConflict, resolution: 'take_base' | 'take_target']
  apply: []
}>()

// Computed: Categorized conflicts
const workflowConflicts = computed(() =>
  props.conflicts.filter(c => c.category === 'workflow')
)

const nodeConflicts = computed(() =>
  props.conflicts.filter(c => c.category === 'node')
)

const dependencyConflicts = computed(() =>
  props.conflicts.filter(c => c.category === 'dependency')
)

// Computed: Resolution stats
const resolvedCount = computed(() => props.resolutions.size)
const pendingCount = computed(() => props.conflicts.length - resolvedCount.value)
const allResolved = computed(() => resolvedCount.value === props.conflicts.length)

// Computed: Action label
const actionLabel = computed(() => {
  if (props.operationType === 'pull') return 'Pull with Resolutions'
  return 'Merge with Resolutions'
})

// Methods
function getResolution(identifier: string): 'take_base' | 'take_target' | null {
  const res = props.resolutions.get(identifier)
  return res?.resolution ?? null
}

function handleResolve(conflict: AnyConflict, resolution: 'take_base' | 'take_target') {
  emit('resolve', conflict, resolution)
}

function handleClose() {
  emit('close')
}

function handleApply() {
  emit('apply')
}
</script>

<style scoped>
.resolution-content {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
  height: 100%;
  min-height: 0; /* Allow flex child to shrink below content size */
}

.resolution-header {
  flex-shrink: 0;
  padding-bottom: var(--cg-space-3);
  border-bottom: 1px solid var(--cg-color-border-subtle);
}

.header-stats {
  display: flex;
  gap: var(--cg-space-4);
  margin-bottom: var(--cg-space-2);
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-value {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xl);
  font-weight: var(--cg-font-weight-bold);
  color: var(--cg-color-text-primary);
}

.stat.resolved .stat-value {
  color: var(--cg-color-success);
}

.stat.pending .stat-value {
  color: var(--cg-color-warning);
}

.stat-label {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.header-hint {
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-secondary);
  margin: 0;
  line-height: 1.5;
}

.conflicts-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
  flex: 1;
  min-height: 0; /* Critical for flex child to scroll */
  overflow-y: auto;
  padding-right: var(--cg-space-2);
}

.conflict-category {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.category-title {
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-semibold);
  color: var(--cg-color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  margin: 0;
  padding-bottom: var(--cg-space-1);
  border-bottom: 1px solid var(--cg-color-border-subtle);
}

.all-resolved-message {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--cg-space-2);
  padding: var(--cg-space-3);
  background: var(--cg-color-success-muted);
  border: 1px solid var(--cg-color-success);
  border-radius: var(--cg-radius-md);
  color: var(--cg-color-success);
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-medium);
}

.resolved-icon {
  font-size: var(--cg-font-size-lg);
}

.footer-spacer {
  flex: 1;
}
</style>
