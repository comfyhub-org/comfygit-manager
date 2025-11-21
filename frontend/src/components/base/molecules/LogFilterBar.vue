<template>
  <div class="log-filter-bar">
    <div class="log-filter-bar__label">FILTER:</div>
    <div class="log-filter-bar__options">
      <button
        v-for="level in levels"
        :key="level"
        :class="['filter-option', { active: isActive(level) }]"
        @click="toggleLevel(level)"
      >
        {{ level }}
      </button>
      <button
        class="filter-option filter-option--clear"
        @click="$emit('clear')"
      >
        CLEAR
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * LogFilterBar Molecule
 *
 * Filter controls for log entries by level
 * Allows toggling which log levels are visible
 *
 * @example
 * <LogFilterBar
 *   :active-levels="['ERROR', 'WARNING']"
 *   @toggle="handleToggle"
 *   @clear="handleClear"
 * />
 */

interface LogFilterBarProps {
  /** Currently active/visible log levels */
  activeLevels: string[]
}

const props = defineProps<LogFilterBarProps>()

const emit = defineEmits<{
  toggle: [level: string]
  clear: []
}>()

const levels = ['ERROR', 'WARNING', 'INFO', 'DEBUG']

function isActive(level: string): boolean {
  return props.activeLevels.includes(level)
}

function toggleLevel(level: string) {
  emit('toggle', level)
}
</script>

<style scoped>
.log-filter-bar {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  padding: var(--cg-space-2) var(--cg-space-3);
  background: var(--cg-color-bg-secondary);
  border-bottom: 1px solid var(--cg-color-border-subtle);
  font-family: var(--cg-font-mono);
  margin-bottom: var(--cg-space-2);
}

.log-filter-bar__label {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  font-weight: var(--cg-font-weight-semibold);
}

.log-filter-bar__options {
  display: flex;
  gap: var(--cg-space-1);
  flex-wrap: wrap;
}

.filter-option {
  padding: 4px 8px;
  border: 1px solid var(--cg-color-border);
  background: transparent;
  color: var(--cg-color-text-secondary);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  cursor: pointer;
  transition: all var(--cg-transition-fast);
}

.filter-option:hover {
  background: var(--cg-color-bg-hover);
  border-color: var(--cg-color-accent);
}

.filter-option.active {
  background: var(--cg-color-accent-muted);
  border-color: var(--cg-color-accent);
  color: var(--cg-color-accent);
  font-weight: var(--cg-font-weight-semibold);
}

.filter-option--clear {
  margin-left: var(--cg-space-2);
  color: var(--cg-color-text-muted);
}

.filter-option--clear:hover {
  color: var(--cg-color-text-primary);
}
</style>
