<template>
  <div
    :class="['commit-item', { clickable }]"
    @click="handleClick"
  >
    <CommitHash :hash="hash" />

    <span class="commit-message">{{ message }}</span>

    <span class="commit-date">{{ relativeDate }}</span>

    <div v-if="$slots.actions" class="commit-actions" @click.stop>
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import CommitHash from '../atoms/CommitHash.vue'

const props = withDefaults(defineProps<{
  hash: string
  message: string
  relativeDate: string
  clickable?: boolean
}>(), {
  clickable: true
})

const emit = defineEmits<{
  click: []
}>()

function handleClick() {
  if (props.clickable) {
    emit('click')
  }
}
</script>

<style scoped>
.commit-item {
  display: flex;
  align-items: baseline;
  gap: var(--cg-space-2);
  padding: var(--cg-space-2) var(--cg-space-3);
  border-bottom: 1px solid var(--cg-color-border-subtle);
  position: relative;
  transition: background var(--cg-transition-fast), border-color var(--cg-transition-fast);
}

.commit-item:last-child {
  border-bottom: none;
}

.commit-item.clickable {
  cursor: pointer;
}

.commit-item.clickable:hover {
  background: var(--cg-color-bg-hover);
}

.commit-item:hover .commit-actions {
  opacity: 1;
}

.commit-message {
  flex: 1;
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-xs);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
}

.commit-date {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  white-space: nowrap;
  flex-shrink: 0;
  margin-right: 32px; /* Space for actions */
}

.commit-actions {
  position: absolute;
  right: var(--cg-space-2);
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  transition: opacity 0.15s;
  display: flex;
  gap: var(--cg-space-1);
}
</style>
