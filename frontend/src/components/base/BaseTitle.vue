<template>
  <component
    :is="`h${level}`"
    :class="['base-title', variant]"
  >
    <slot></slot>
    <span v-if="count !== undefined" class="base-title-count">({{ count }})</span>
  </component>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  level?: 1 | 2 | 3 | 4
  variant?: 'view' | 'section' | 'group' | 'dialog'
  count?: number
}>(), {
  level: 3,
  variant: 'section'
})
</script>

<style scoped>
.base-title {
  font-weight: var(--cg-font-weight-normal);
}

/* View variant - Main view titles */
.base-title.view {
  color: var(--cg-color-accent);
  font-size: var(--cg-font-size-lg);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  font-weight: var(--cg-font-weight-semibold);
  margin: 0 0 var(--cg-space-4) 0;
}

/* Section variant - Modal/dialog section headers */
.base-title.section {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  margin: 0 0 var(--cg-space-2) 0;
}

/* Group variant - Collapsible group headers */
.base-title.group {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-sm);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  font-weight: var(--cg-font-weight-medium);
  margin: 0 0 var(--cg-space-2) 0;
}

/* Dialog variant - Modal/dialog main titles */
.base-title.dialog {
  color: var(--cg-color-accent);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  font-size: var(--cg-font-size-sm);
  margin: 0;
}

.base-title-count {
  margin-left: 4px;
}
</style>
