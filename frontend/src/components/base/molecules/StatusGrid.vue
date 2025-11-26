<template>
  <div class="status-grid">
    <div class="status-grid__columns">
      <div class="status-grid__column">
        <h4 class="status-grid__title">{{ leftTitle }}</h4>
        <slot name="left"></slot>
      </div>
      <div class="status-grid__column status-grid__column--right">
        <h4 class="status-grid__title">{{ rightTitle }}</h4>
        <slot name="right"></slot>
      </div>
    </div>
    <div v-if="$slots.footer" class="status-grid__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * StatusGrid Molecule
 *
 * Two-column grid layout for status displays
 * Commonly used in Status view to show Workflows | Git Status
 *
 * Composes: Provides structure for StatusItem atoms
 *
 * @example
 * <StatusGrid left-title="WORKFLOWS" right-title="GIT STATUS">
 *   <template #left>
 *     <StatusItem icon="●" :count="3" label="new" variant="new" />
 *     <StatusItem icon="●" :count="1" label="modified" variant="modified" />
 *     <StatusItem icon="✓" :count="12" label="synced" variant="synced" separator />
 *   </template>
 *   <template #right>
 *     <StatusItem icon="●" :count="2" label="nodes added" variant="new" />
 *     <StatusItem icon="✓" label="Ready to commit" variant="ok" />
 *   </template>
 * </StatusGrid>
 */

interface StatusGridProps {
  /** Title for left column */
  leftTitle: string
  /** Title for right column */
  rightTitle: string
}

defineProps<StatusGridProps>()
</script>

<style scoped>
.status-grid {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  border-radius: var(--cg-radius-md);
  overflow: hidden;
}

.status-grid__columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
}

.status-grid__column {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
  padding: var(--cg-space-3) var(--cg-space-4);
}

.status-grid__column--right {
  border-left: 1px solid var(--cg-color-border-subtle);
}

.status-grid__title {
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-semibold);
  text-transform: uppercase;
  color: var(--cg-color-text-muted);
  margin: 0 0 var(--cg-space-2) 0;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.status-grid__footer {
  border-top: 1px solid var(--cg-color-border-subtle);
  padding: var(--cg-space-3) var(--cg-space-4);
}
</style>
