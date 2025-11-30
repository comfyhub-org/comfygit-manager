<template>
  <span :class="['confidence-badge', confidenceClass, size]">
    {{ displayText }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  confidence: number  // 0.0-1.0
  size?: 'sm' | 'md'
  showPercentage?: boolean
}>(), {
  size: 'sm',
  showPercentage: true
})

const confidenceLevel = computed(() => {
  if (props.confidence >= 0.9) return 'high'
  if (props.confidence >= 0.7) return 'medium'
  return 'low'
})

const confidenceClass = computed(() => `confidence-${confidenceLevel.value}`)

const displayText = computed(() => {
  if (props.showPercentage) {
    return `${Math.round(props.confidence * 100)}%`
  }
  return confidenceLevel.value.charAt(0).toUpperCase() + confidenceLevel.value.slice(1)
})
</script>

<style scoped>
.confidence-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--cg-spacing-xs) var(--cg-spacing-sm);
  border-radius: var(--cg-border-radius-sm);
  font-weight: var(--cg-font-weight-semibold);
  white-space: nowrap;
}

.confidence-badge.sm {
  font-size: var(--cg-font-size-xs);
  padding: 2px var(--cg-spacing-xs);
}

.confidence-badge.md {
  font-size: var(--cg-font-size-sm);
}

.confidence-high {
  background-color: var(--cg-color-success-bg);
  color: var(--cg-color-success);
  border: 1px solid var(--cg-color-success);
}

.confidence-medium {
  background-color: var(--cg-color-warning-bg);
  color: var(--cg-color-warning);
  border: 1px solid var(--cg-color-warning);
}

.confidence-low {
  background-color: var(--cg-color-error-bg);
  color: var(--cg-color-error);
  border: 1px solid var(--cg-color-error);
}
</style>
