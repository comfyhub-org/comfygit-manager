<template>
  <div :class="['base-form-field', { 'full-width': fullWidth }]">
    <label v-if="label" :for="fieldId" class="base-form-field-label">
      {{ label }}
      <span v-if="required" class="base-form-field-required">*</span>
    </label>
    <div class="base-form-field-input">
      <slot></slot>
    </div>
    <span v-if="error" class="base-form-field-error">{{ error }}</span>
    <span v-else-if="hint" class="base-form-field-hint">{{ hint }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  label?: string
  error?: string
  hint?: string
  required?: boolean
  fullWidth?: boolean
  id?: string
}>(), {
  required: false,
  fullWidth: true
})

const fieldId = computed(() => props.id || `field-${Math.random().toString(36).substr(2, 9)}`)
</script>

<style scoped>
.base-form-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.base-form-field.full-width {
  width: 100%;
}

.base-form-field-label {
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-secondary);
  font-weight: var(--cg-font-weight-medium);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.base-form-field-required {
  color: var(--cg-color-error);
  margin-left: 2px;
}

.base-form-field-input {
  width: 100%;
}

.base-form-field-error {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-error);
}

.base-form-field-hint {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
}
</style>
