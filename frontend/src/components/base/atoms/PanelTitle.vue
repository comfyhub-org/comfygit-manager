<template>
  <component
    :is="`h${level}`"
    :class="['panel-title', variant]"
  >
    <span v-if="showPrefix" class="panel-title-prefix">{{ prefix }}</span>
    <span v-else class="panel-title-prefix-theme"></span>
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  level?: 1 | 2 | 3 | 4
  variant?: 'view' | 'dialog'
  showPrefix?: boolean
  prefix?: string
}>(), {
  level: 3,
  variant: 'view',
  showPrefix: false,
  prefix: '> '
})
</script>

<style scoped>
.panel-title {
  margin: 0;
  font-weight: var(--cg-font-weight-normal);
  text-shadow: var(--cg-text-shadow-title);
}

/* View variant - Main panel titles */
.panel-title.view {
  color: var(--cg-color-accent);
  font-size: var(--cg-font-size-lg);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

/* Dialog variant - Modal/popover titles */
.panel-title.dialog {
  color: var(--cg-color-accent);
  font-size: var(--cg-font-size-sm);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.panel-title-prefix {
  opacity: 0.7;
}

/* Theme-controlled prefix via CSS variable */
.panel-title-prefix-theme::before {
  content: var(--cg-decoration-title-prefix);
  opacity: 0.7;
}
</style>
