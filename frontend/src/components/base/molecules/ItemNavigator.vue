<template>
  <div class="item-navigator">
    <!-- Left side: Item name with tooltip for truncated names -->
    <div class="nav-item-info">
      <code class="item-name" :title="itemName">{{ itemName }}</code>
    </div>

    <!-- Right side: Navigation controls -->
    <div class="nav-controls">
      <div class="nav-arrows">
        <button
          class="nav-arrow"
          :disabled="currentIndex === 0"
          @click="emit('prev')"
          title="Previous item"
        >
          ←
        </button>
        <button
          class="nav-arrow"
          :disabled="currentIndex === totalItems - 1"
          @click="emit('next')"
          title="Next item"
        >
          →
        </button>
      </div>
      <span class="nav-position">{{ currentIndex + 1 }}/{{ totalItems }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
// Status type exported for use by other components
export type ResolutionStatus =
  | 'not-found'
  | 'ambiguous'
  | 'install'
  | 'select'
  | 'download'
  | 'optional'
  | 'skip'

defineProps<{
  itemName: string
  currentIndex: number
  totalItems: number
}>()

const emit = defineEmits<{
  prev: []
  next: []
}>()
</script>

<style scoped>
.item-navigator {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--cg-space-3);
  padding: var(--cg-space-2) var(--cg-space-3);
  background: var(--cg-color-bg-tertiary);
  border-radius: var(--cg-radius-sm);
  border: 1px solid var(--cg-color-border-subtle);
}

.nav-item-info {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  flex: 1;
  min-width: 0;
  overflow: hidden;
}

.item-name {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-accent);
  background: var(--cg-color-bg-primary);
  padding: var(--cg-space-1) var(--cg-space-2);
  border-radius: var(--cg-radius-sm);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* Tooltip shows full name on hover */
  cursor: default;
}

.nav-controls {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  flex-shrink: 0;
}

.nav-arrows {
  display: flex;
  gap: 4px;
}

.nav-arrow {
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border);
  color: var(--cg-color-text-primary);
  width: 48px;
  height: 24px;
  border-radius: var(--cg-radius-sm);
  cursor: pointer;
  font-size: var(--cg-font-size-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--cg-transition-fast);
}

.nav-arrow:first-child {
  border-radius: var(--cg-radius-sm) 0 0 var(--cg-radius-sm);
}

.nav-arrow:last-child {
  border-radius: 0 var(--cg-radius-sm) var(--cg-radius-sm) 0;
}

.nav-arrow:hover:not(:disabled) {
  background: var(--cg-color-bg-hover);
  border-color: var(--cg-color-accent);
  color: var(--cg-color-accent);
}

.nav-arrow:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.nav-position {
  font-size: var(--cg-font-size-xs);
  font-family: var(--cg-font-mono);
  color: var(--cg-color-text-muted);
  min-width: 36px;
  text-align: right;
}
</style>
