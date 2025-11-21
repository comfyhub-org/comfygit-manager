<template>
  <div class="log-list">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
/**
 * LogList Molecule
 *
 * Container component for log entries
 * Provides consistent styling and layout for log items
 *
 * @example
 * <LogList>
 *   <LogItem v-for="log in logs" :key="log.timestamp" ... />
 * </LogList>
 */
</script>

<style scoped>
.log-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  font-family: var(--cg-font-mono);
}
</style>
