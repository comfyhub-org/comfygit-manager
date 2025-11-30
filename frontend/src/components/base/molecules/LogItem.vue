<template>
  <div :class="['log-item', levelClass, { clickable }]" @click="clickable && $emit('click')">
    <div class="log-item__header">
      <LogLevel :level="level" />
      <span class="log-item__timestamp">{{ timestamp }}</span>
      <span v-if="context" class="log-item__context">{{ context }}</span>
    </div>
    <div class="log-item__message">
      {{ message }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import LogLevel from '../atoms/LogLevel.vue'

/**
 * LogItem Molecule
 *
 * Displays a single log entry with level badge, timestamp, context, and message
 *
 * @example
 * <LogItem
 *   level="ERROR"
 *   timestamp="2025-11-21 13:45:23"
 *   message="Failed to load workflow"
 *   context="workspace"
 *   :clickable="true"
 *   @click="handleClick"
 * />
 */

interface LogItemProps {
  /** Log level severity */
  level: 'ERROR' | 'WARNING' | 'INFO' | 'DEBUG'
  /** ISO timestamp or formatted time string */
  timestamp: string
  /** Log message content */
  message: string
  /** Optional context (e.g., module name, component) */
  context?: string
  /** Whether the item is clickable */
  clickable?: boolean
}

const props = withDefaults(defineProps<LogItemProps>(), {
  clickable: false
})

const emit = defineEmits<{
  click: []
}>()

const levelClass = computed(() => `log-item--${props.level.toLowerCase()}`)
</script>

<style scoped>
.log-item {
  border-left: 3px solid transparent;
  background: var(--cg-color-bg-tertiary);
  padding: var(--cg-space-2) var(--cg-space-3);
  margin-bottom: var(--cg-space-1);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
}

.log-item.clickable {
  cursor: pointer;
}

.log-item.clickable:hover {
  background: var(--cg-color-bg-hover);
}

/* Border color based on level */
.log-item--error {
  border-left-color: var(--cg-color-error);
}

.log-item--warning {
  border-left-color: var(--cg-color-warning);
}

.log-item--info {
  border-left-color: var(--cg-color-info);
}

.log-item--debug {
  border-left-color: var(--cg-color-border-subtle);
}

.log-item__header {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  margin-bottom: var(--cg-space-1);
  flex-wrap: wrap;
}

.log-item__timestamp {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  font-family: var(--cg-font-mono);
}

.log-item__context {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-xs);
  font-family: var(--cg-font-mono);
  padding: 2px 6px;
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border-subtle);
}

.log-item__message {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
  line-height: 1.5;
  word-break: break-word;
  white-space: pre-wrap;
}
</style>
