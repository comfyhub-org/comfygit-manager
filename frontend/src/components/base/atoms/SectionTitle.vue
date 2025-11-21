<template>
  <component
    :is="`h${level}`"
    :class="['section-title', { clickable }]"
    @click="clickable && $emit('click')"
  >
    <slot></slot>
    <span v-if="count !== undefined" class="section-title-count">({{ count }})</span>
    <span v-if="clickable" class="section-title-icon">{{ expanded ? '▼' : '▸' }}</span>
  </component>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  level?: 3 | 4 | 5
  count?: number
  clickable?: boolean
  expanded?: boolean
}>(), {
  level: 4,
  clickable: false,
  expanded: false
})

defineEmits<{
  click: []
}>()
</script>

<style scoped>
.section-title {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  margin: 0;
  font-weight: var(--cg-font-weight-normal);
  text-shadow: var(--cg-text-shadow-accent);
}

.section-title::before {
  content: var(--cg-decoration-label-prefix);
}

.section-title::after {
  content: var(--cg-decoration-label-suffix);
}

.section-title.clickable {
  cursor: pointer;
  user-select: none;
}

.section-title.clickable:hover {
  color: var(--cg-color-accent);
}

.section-title-count {
  margin-left: var(--cg-space-1);
}

.section-title-icon {
  margin-left: var(--cg-space-2);
  font-size: var(--cg-font-size-xs);
}
</style>
