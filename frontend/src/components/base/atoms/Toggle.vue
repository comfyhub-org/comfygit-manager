<template>
  <label class="toggle">
    <input
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
      class="toggle-input"
    />
    <span class="toggle-slider"></span>
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
.toggle {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 22px;
  cursor: pointer;
}

.toggle-input {
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
}

.toggle-slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border);
  transition: all var(--cg-transition-fast);
  border-radius: var(--cg-radius-full);
}

.toggle-slider::before {
  content: '';
  position: absolute;
  height: 14px;
  width: 14px;
  left: 3px;
  bottom: 3px;
  background: var(--cg-color-text-muted);
  transition: all var(--cg-transition-fast);
  border-radius: 50%;
}

.toggle-input:checked + .toggle-slider {
  background: var(--cg-color-accent);
  border-color: var(--cg-color-accent);
}

.toggle-input:checked + .toggle-slider::before {
  transform: translateX(18px);
  background: var(--cg-color-text-primary);
}

.toggle-input:disabled + .toggle-slider {
  opacity: 0.5;
  cursor: not-allowed;
}

.toggle-input:focus + .toggle-slider {
  box-shadow: 0 0 0 2px var(--cg-color-accent-muted);
}

.toggle-input:not(:disabled) + .toggle-slider:hover {
  border-color: var(--cg-color-accent);
}
</style>
