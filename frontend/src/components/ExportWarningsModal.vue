<template>
  <BaseModal
    title="Export Warnings"
    size="md"
    @close="$emit('cancel')"
  >
    <template #body>
      <div class="export-warnings">
        <!-- Warning Header -->
        <div class="warning-header">
          <span class="warning-icon">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M7.47 1.97a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06-1.06L13.44 9H1.75a.75.75 0 0 1 0-1.5h11.69L7.47 3.03a.75.75 0 0 1 0-1.06z"/>
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0z"/>
              <path d="M8 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
            </svg>
          </span>
          <div class="warning-summary">
            <h3 class="warning-title">
              {{ models.length }} model{{ models.length !== 1 ? 's' : '' }} missing source URLs
            </h3>
            <p class="warning-description">
              Recipients won't be able to download these models automatically.
              They'll need to source the models manually.
            </p>
          </div>
        </div>

        <!-- Models List -->
        <div class="models-section">
          <div class="models-list">
            <div
              v-for="model in visibleModels"
              :key="model.hash"
              class="model-item"
            >
              <div class="model-filename">{{ model.filename }}</div>
              <div class="model-workflows">
                Used by: {{ model.workflows.join(', ') }}
              </div>
            </div>
          </div>

          <!-- Show More Button -->
          <button
            v-if="models.length > 3 && !showAllModels"
            class="show-more-btn"
            @click="showAllModels = true"
          >
            Show {{ models.length - 3 }} more model{{ models.length - 3 !== 1 ? 's' : '' }}...
          </button>
        </div>

        <!-- Fix Guidance -->
        <div class="fix-guidance">
          <span class="guidance-icon">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm6.5-.25A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75zM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
            </svg>
          </span>
          <div class="guidance-text">
            <strong>How to fix:</strong> Add source URLs to your models using
            <code>cg model add-source</code> or from the Model Index page.
          </div>
        </div>
      </div>
    </template>

    <template #footer>
      <BaseButton variant="secondary" @click="$emit('cancel')">
        Cancel Export
      </BaseButton>
      <BaseButton variant="primary" @click="$emit('confirm')">
        Export Anyway
      </BaseButton>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseModal from './base/BaseModal.vue'
import BaseButton from './base/BaseButton.vue'
import type { ModelWithoutSource } from '@/types/comfygit'

const props = defineProps<{
  models: ModelWithoutSource[]
}>()

defineEmits<{
  confirm: []
  cancel: []
}>()

const showAllModels = ref(false)

const visibleModels = computed(() => {
  if (showAllModels.value || props.models.length <= 3) {
    return props.models
  }
  return props.models.slice(0, 3)
})
</script>

<style scoped>
.export-warnings {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}

.warning-header {
  display: flex;
  gap: var(--cg-space-3);
  padding: var(--cg-space-3);
  background: var(--cg-color-warning-muted);
  border: 1px solid var(--cg-color-warning);
  border-radius: var(--cg-radius-md);
}

.warning-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: var(--cg-color-warning);
  color: var(--cg-color-bg-primary);
  border-radius: 50%;
  flex-shrink: 0;
}

.warning-summary {
  flex: 1;
}

.warning-title {
  margin: 0 0 var(--cg-space-1) 0;
  font-size: var(--cg-font-size-base);
  font-weight: var(--cg-font-weight-semibold);
  color: var(--cg-color-text-primary);
}

.warning-description {
  margin: 0;
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-secondary);
}

.models-section {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border);
  border-radius: var(--cg-radius-md);
  overflow: hidden;
}

.models-list {
  max-height: 240px;
  overflow-y: auto;
}

.model-item {
  padding: var(--cg-space-3);
  border-bottom: 1px solid var(--cg-color-border-subtle);
}

.model-item:last-child {
  border-bottom: none;
}

.model-filename {
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-medium);
  color: var(--cg-color-text-primary);
  font-family: var(--cg-font-mono);
  word-break: break-all;
}

.model-workflows {
  margin-top: var(--cg-space-1);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
}

.show-more-btn {
  width: 100%;
  padding: var(--cg-space-2);
  background: transparent;
  border: none;
  border-top: 1px solid var(--cg-color-border-subtle);
  color: var(--cg-color-accent);
  font-size: var(--cg-font-size-sm);
  cursor: pointer;
  transition: background var(--cg-transition-base);
}

.show-more-btn:hover {
  background: var(--cg-color-bg-secondary);
}

.fix-guidance {
  display: flex;
  gap: var(--cg-space-2);
  padding: var(--cg-space-3);
  background: var(--cg-color-info-muted);
  border: 1px solid var(--cg-color-accent);
  border-radius: var(--cg-radius-md);
}

.guidance-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: var(--cg-color-accent);
  color: var(--cg-color-bg-primary);
  border-radius: 50%;
  flex-shrink: 0;
}

.guidance-text {
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-secondary);
}

.guidance-text strong {
  color: var(--cg-color-text-primary);
}

.guidance-text code {
  background: var(--cg-color-bg-tertiary);
  padding: 2px 6px;
  border-radius: var(--cg-radius-sm);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
}
</style>
