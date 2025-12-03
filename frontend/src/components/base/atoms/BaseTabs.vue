<template>
  <div class="base-tabs">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      :class="[
        'base-tabs__tab',
        {
          active: modelValue === tab.id,
          disabled: tab.disabled
        }
      ]"
      :disabled="tab.disabled"
      @click="selectTab(tab.id)"
    >
      {{ tab.label }}
      <span v-if="tab.badge" class="base-tabs__badge">{{ tab.badge }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
interface Tab {
  id: string
  label: string
  disabled?: boolean
  badge?: string
}

const props = defineProps<{
  tabs: Tab[]
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [id: string]
}>()

function selectTab(id: string) {
  if (props.tabs.find(t => t.id === id)?.disabled) return
  emit('update:modelValue', id)
}
</script>

<style scoped>
.base-tabs {
  display: flex;
  gap: var(--cg-space-1);
  border-bottom: 1px solid var(--cg-color-border-subtle);
  margin-bottom: var(--cg-space-3);
}

.base-tabs__tab {
  padding: var(--cg-space-2) var(--cg-space-3);
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  color: var(--cg-color-text-secondary);
  font-family: var(--cg-font-body);
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-medium);
  cursor: pointer;
  transition: all var(--cg-transition-fast);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.base-tabs__tab:hover:not(.disabled) {
  color: var(--cg-color-text-primary);
}

.base-tabs__tab.active {
  color: var(--cg-color-accent);
  border-bottom-color: var(--cg-color-accent);
}

.base-tabs__tab.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.base-tabs__badge {
  margin-left: var(--cg-space-1);
  padding: 1px 6px;
  background: var(--cg-color-accent-muted);
  color: var(--cg-color-accent);
  border-radius: var(--cg-radius-sm);
  font-size: var(--cg-font-size-xs);
}
</style>
