<template>
  <span class="commit-hash">{{ displayHash }}</span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  hash: string
  length?: number
}>(), {
  length: 7
})

const displayHash = computed(() => {
  return props.hash.slice(0, props.length)
})
</script>

<style scoped>
.commit-hash {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-info);
  font-weight: var(--cg-font-weight-medium, 500);
  flex-shrink: 0;
}
</style>
