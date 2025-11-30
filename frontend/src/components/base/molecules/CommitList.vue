<template>
  <div class="commit-list">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
// Pure layout component for commit items
</script>

<style scoped>
.commit-list {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  overflow-y: auto;
}

/* Scrollbar styling */
.commit-list::-webkit-scrollbar {
  width: 8px;
}

.commit-list::-webkit-scrollbar-track {
  background: var(--cg-color-bg-tertiary);
}

.commit-list::-webkit-scrollbar-thumb {
  background: var(--cg-color-border-subtle);
  border: 1px solid var(--cg-color-bg-tertiary);
}

.commit-list::-webkit-scrollbar-thumb:hover {
  background: var(--cg-color-accent);
}
</style>
