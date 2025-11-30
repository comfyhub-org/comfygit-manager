<template>
  <div :class="['base-input-wrapper', { 'full-width': fullWidth, error: !!error }]">
    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="['base-input', { error: !!error }]"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      @keyup.enter="$emit('enter')"
      @keyup.escape="$emit('escape')"
    />
    <span v-if="error" class="base-input-error">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  modelValue: string
  placeholder?: string
  disabled?: boolean
  error?: string
  fullWidth?: boolean
  type?: 'text' | 'email' | 'password' | 'search'
}>(), {
  type: 'text',
  fullWidth: false,
  disabled: false
})

defineEmits<{
  'update:modelValue': [value: string]
  enter: []
  escape: []
}>()
</script>

<style scoped>
.base-input-wrapper {
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
}

.base-input-wrapper.full-width {
  width: 100%;
}

.base-input {
  padding: 10px 12px;
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border);
  border-radius: var(--cg-radius-md);
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
  font-family: var(--cg-font-mono);
  transition: all var(--cg-transition-fast);
  width: 100%;
}

.base-input:focus {
  outline: none;
  border-color: var(--cg-color-accent);
  box-shadow: 0 0 0 2px var(--cg-color-accent-muted);
}

.base-input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.base-input.error {
  border-color: var(--cg-color-error);
}

.base-input-error {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-error);
}
</style>
