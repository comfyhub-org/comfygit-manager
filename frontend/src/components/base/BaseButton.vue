<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="['base-btn', variant, size, { 'full-width': fullWidth, loading }]"
    @click="$emit('click', $event)"
  >
    <span v-if="loading" class="spinner"></span>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'link'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  disabled?: boolean
  fullWidth?: boolean
  type?: 'button' | 'submit' | 'reset'
}>(), {
  variant: 'primary',
  size: 'md',
  loading: false,
  disabled: false,
  fullWidth: false,
  type: 'button'
})

defineEmits<{
  click: [event: MouseEvent]
}>()
</script>

<style scoped>
.base-btn {
  border-radius: var(--cg-radius-md);
  font-family: var(--cg-font-mono);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  font-weight: var(--cg-font-weight-medium);
  cursor: pointer;
  transition: all var(--cg-transition-fast);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  position: relative;
}

.base-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.base-btn.loading {
  pointer-events: none;
}

.spinner {
  width: 12px;
  height: 12px;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Sizes */
.base-btn.sm {
  padding: 6px 12px;
  font-size: var(--cg-font-size-xs);
}

.base-btn.md {
  padding: 8px 16px;
  font-size: var(--cg-font-size-sm);
}

.base-btn.lg {
  padding: 10px 20px;
  font-size: var(--cg-font-size-base);
}

.base-btn.full-width {
  width: 100%;
}

/* Primary variant */
.base-btn.primary {
  background: var(--cg-color-accent);
  color: var(--cg-color-text-inverse);
  border: none;
}

.base-btn.primary:hover:not(:disabled) {
  background: var(--cg-color-accent-hover);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px var(--cg-color-accent-muted);
}

/* Secondary variant */
.base-btn.secondary {
  background: transparent;
  color: var(--cg-color-text-secondary);
  border: 1px solid var(--cg-color-border);
}

.base-btn.secondary:hover:not(:disabled) {
  background: var(--cg-color-bg-hover);
  border-color: var(--cg-color-border-strong);
  color: var(--cg-color-text-primary);
}

/* Danger variant */
.base-btn.danger {
  background: var(--cg-color-error);
  color: var(--cg-color-text-inverse);
  border: none;
}

.base-btn.danger:hover:not(:disabled) {
  background: #dc2626;
  transform: translateY(-1px);
}

/* Ghost variant */
.base-btn.ghost {
  background: transparent;
  color: var(--cg-color-text-muted);
  border: 1px solid transparent;
}

.base-btn.ghost:hover:not(:disabled) {
  background: var(--cg-color-bg-hover);
  border-color: var(--cg-color-border-subtle);
  color: var(--cg-color-accent);
}

/* Link variant */
.base-btn.link {
  background: transparent;
  color: var(--cg-color-info);
  border: none;
  text-decoration: underline;
  padding: 0;
}

.base-btn.link:hover:not(:disabled) {
  color: var(--cg-color-accent);
}
</style>
