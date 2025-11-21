<template>
  <label :class="['base-radio', { disabled }]">
    <input
      type="radio"
      :name="name"
      :value="value"
      :checked="modelValue === value"
      :disabled="disabled"
      class="base-radio-input"
      @change="$emit('update:modelValue', value)"
    />
    <span class="base-radio-circle">
      <span v-if="modelValue === value" class="base-radio-dot"></span>
    </span>
    <span v-if="$slots.default" class="base-radio-label">
      <slot></slot>
    </span>
  </label>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  modelValue: string | number | boolean
  value: string | number | boolean
  name?: string
  disabled?: boolean
}>(), {
  disabled: false
})

defineEmits<{
  'update:modelValue': [value: string | number | boolean]
}>()
</script>

<style scoped>
.base-radio {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
}

.base-radio.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.base-radio-input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.base-radio-circle {
  width: 18px;
  height: 18px;
  border: 2px solid var(--cg-color-border);
  border-radius: 50%;
  background: var(--cg-color-bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--cg-transition-fast);
  flex-shrink: 0;
}

.base-radio:hover:not(.disabled) .base-radio-circle {
  border-color: var(--cg-color-accent);
}

.base-radio-input:checked + .base-radio-circle {
  border-color: var(--cg-color-accent);
}

.base-radio-input:focus + .base-radio-circle {
  box-shadow: 0 0 0 2px var(--cg-color-accent-muted);
}

.base-radio-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--cg-color-accent);
}

.base-radio-label {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
}
</style>
