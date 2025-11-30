<template>
  <label :class="['base-checkbox', { disabled }]">
    <input
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      class="base-checkbox-input"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    />
    <span class="base-checkbox-box">
      <svg v-if="modelValue" width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2 6L5 9L10 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
    <span v-if="$slots.default" class="base-checkbox-label">
      <slot></slot>
    </span>
  </label>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  modelValue: boolean
  disabled?: boolean
}>(), {
  disabled: false
})

defineEmits<{
  'update:modelValue': [value: boolean]
}>()
</script>

<style scoped>
.base-checkbox {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
}

.base-checkbox.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.base-checkbox-input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.base-checkbox-box {
  width: 18px;
  height: 18px;
  border: 2px solid var(--cg-color-border);
  border-radius: var(--cg-radius-sm);
  background: var(--cg-color-bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--cg-transition-fast);
  flex-shrink: 0;
}

.base-checkbox:hover:not(.disabled) .base-checkbox-box {
  border-color: var(--cg-color-accent);
}

.base-checkbox-input:checked + .base-checkbox-box {
  background: var(--cg-color-accent);
  border-color: var(--cg-color-accent);
  color: var(--cg-color-text-inverse);
}

.base-checkbox-input:focus + .base-checkbox-box {
  box-shadow: 0 0 0 2px var(--cg-color-accent-muted);
}

.base-checkbox-label {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
}
</style>
