<template>
  <div :class="['status-item', variantClass, { 'is-separator': separator }]">
    <span v-if="icon" class="status-item__icon">{{ icon }}</span>
    <span v-if="count !== undefined" class="status-item__count">{{ count }}</span>
    <span class="status-item__label">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

/**
 * StatusItem Atom
 *
 * Individual status line item showing icon, count, and label
 * Used in StatusGrid for workflow and git status displays
 *
 * @example
 * <StatusItem icon="●" :count="3" label="new" variant="new" />
 * <StatusItem icon="✓" label="No uncommitted changes" variant="ok" />
 */

interface StatusItemProps {
  /** Icon/emoji to display (e.g., "●", "✓") */
  icon?: string
  /** Numeric count to display */
  count?: number
  /** Label text */
  label: string
  /** Visual variant affecting color scheme */
  variant?: 'new' | 'modified' | 'deleted' | 'synced' | 'ok' | 'default'
  /** Add visual separator (top border) */
  separator?: boolean
}

const props = withDefaults(defineProps<StatusItemProps>(), {
  variant: 'default',
  separator: false
})

const variantClass = computed(() => `status-item--${props.variant}`)
</script>

<style scoped>
.status-item {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-primary);
  line-height: 1.4;
}

.status-item.is-separator {
  margin-top: var(--cg-space-1);
  padding-top: var(--cg-space-1);
  border-top: 1px solid var(--cg-color-border-subtle);
}

.status-item__icon {
  font-size: var(--cg-font-size-xs);
  opacity: 0.7;
  flex-shrink: 0;
}

.status-item__count {
  font-weight: var(--cg-font-weight-semibold);
  min-width: 16px;
  flex-shrink: 0;
}

.status-item__label {
  color: var(--cg-color-text-secondary);
  flex: 1;
}

/* Variant-specific colors for counts */
.status-item--new .status-item__count {
  color: var(--cg-color-success);
}

.status-item--modified .status-item__count {
  color: var(--cg-color-warning);
}

.status-item--deleted .status-item__count {
  color: var(--cg-color-error);
}

.status-item--synced .status-item__count {
  color: var(--cg-color-text-muted);
}

.status-item--synced .status-item__icon {
  color: var(--cg-color-text-muted);
}

/* OK variant - everything is green */
.status-item--ok {
  color: var(--cg-color-success);
}

.status-item--ok .status-item__icon {
  opacity: 1;
}

.status-item--ok .status-item__label {
  color: var(--cg-color-success);
}
</style>
