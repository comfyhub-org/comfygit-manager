<template>
  <BaseModal
    :title="title"
    size="sm"
    @close="$emit('cancel')"
  >
    <template #body>
      <p class="dialog-message">{{ message }}</p>

      <div v-if="details && details.length" class="dialog-details">
        <div v-for="(detail, i) in details" :key="i" class="detail-item">
          • {{ detail }}
        </div>
      </div>

      <p v-if="warning" class="dialog-warning">
        <span class="warning-icon">⚠</span>
        {{ warning }}
      </p>
    </template>

    <template #footer>
      <BaseButton variant="secondary" @click="$emit('cancel')">
        {{ cancelLabel }}
      </BaseButton>
      <BaseButton
        v-if="secondaryAction"
        variant="secondary"
        @click="$emit('secondary')"
      >
        {{ secondaryLabel }}
      </BaseButton>
      <BaseButton
        :variant="destructive ? 'danger' : 'primary'"
        @click="$emit('confirm')"
      >
        {{ confirmLabel }}
      </BaseButton>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from './base/BaseModal.vue'
import BaseButton from './base/BaseButton.vue'

withDefaults(defineProps<{
  title: string
  message: string
  details?: string[]
  warning?: string
  confirmLabel?: string
  cancelLabel?: string
  secondaryLabel?: string
  secondaryAction?: boolean
  destructive?: boolean
}>(), {
  confirmLabel: 'Confirm',
  cancelLabel: 'Cancel',
  secondaryLabel: 'Alternative',
  secondaryAction: false,
  destructive: false
})

defineEmits<{
  confirm: []
  cancel: []
  secondary: []
}>()
</script>

<style scoped>
.dialog-message {
  margin: 0 0 12px 0;
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-primary);
  line-height: var(--cg-line-height-normal);
}

.dialog-details {
  background: var(--cg-color-bg-tertiary);
  border-radius: var(--cg-radius-md);
  padding: 8px 12px;
  margin-bottom: 12px;
}

.detail-item {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-secondary);
  padding: 2px 0;
}

.dialog-warning {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin: 0;
  padding: 8px 10px;
  background: var(--cg-color-warning-muted);
  border: 1px solid var(--cg-color-warning);
  border-radius: var(--cg-radius-md);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-warning);
}

.warning-icon {
  flex-shrink: 0;
}
</style>
