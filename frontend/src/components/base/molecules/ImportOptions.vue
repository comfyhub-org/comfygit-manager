<template>
  <div class="import-options">
    <SectionTitle>Import Options</SectionTitle>

    <div class="options-list">
      <!-- Conflict Resolution -->
      <div class="option-group">
        <Label>Conflict Resolution</Label>
        <div class="option-items">
          <label class="option-item">
            <input
              type="radio"
              :checked="conflictMode === 'overwrite'"
              @change="emit('update:conflictMode', 'overwrite')"
            />
            <div class="option-content">
              <span class="option-label">Overwrite Existing</span>
              <span class="option-description">Replace existing workflows and models</span>
            </div>
          </label>

          <label class="option-item">
            <input
              type="radio"
              :checked="conflictMode === 'keep'"
              @change="emit('update:conflictMode', 'keep')"
            />
            <div class="option-content">
              <span class="option-label">Keep Existing</span>
              <span class="option-description">Skip files that already exist</span>
            </div>
          </label>

          <label class="option-item">
            <input
              type="radio"
              :checked="conflictMode === 'rename'"
              @change="emit('update:conflictMode', 'rename')"
            />
            <div class="option-content">
              <span class="option-label">Rename New</span>
              <span class="option-description">Add suffix to imported files</span>
            </div>
          </label>
        </div>
      </div>

      <!-- Import Components -->
      <div class="option-group">
        <Label>Components to Import</Label>
        <div class="option-items">
          <label class="option-item checkbox-item">
            <input
              type="checkbox"
              :checked="includeWorkflows"
              @change="emit('update:includeWorkflows', ($event.target as HTMLInputElement).checked)"
            />
            <div class="option-content">
              <span class="option-label">Workflows</span>
              <span class="option-description">Import workflow JSON files</span>
            </div>
          </label>

          <label class="option-item checkbox-item">
            <input
              type="checkbox"
              :checked="includeModels"
              @change="emit('update:includeModels', ($event.target as HTMLInputElement).checked)"
            />
            <div class="option-content">
              <span class="option-label">Models</span>
              <span class="option-description">Import model files (may be large)</span>
            </div>
          </label>

          <label class="option-item checkbox-item">
            <input
              type="checkbox"
              :checked="includeNodes"
              @change="emit('update:includeNodes', ($event.target as HTMLInputElement).checked)"
            />
            <div class="option-content">
              <span class="option-label">Custom Nodes</span>
              <span class="option-description">Install custom node dependencies</span>
            </div>
          </label>

          <label class="option-item checkbox-item">
            <input
              type="checkbox"
              :checked="includeGitHistory"
              @change="emit('update:includeGitHistory', ($event.target as HTMLInputElement).checked)"
            />
            <div class="option-content">
              <span class="option-label">Git History</span>
              <span class="option-description">Import git commits and branches</span>
            </div>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/base/atoms/SectionTitle.vue'
import Label from '@/components/base/atoms/Label.vue'

defineProps<{
  conflictMode: 'overwrite' | 'keep' | 'rename'
  includeWorkflows: boolean
  includeModels: boolean
  includeNodes: boolean
  includeGitHistory: boolean
}>()

const emit = defineEmits<{
  'update:conflictMode': [mode: 'overwrite' | 'keep' | 'rename']
  'update:includeWorkflows': [value: boolean]
  'update:includeModels': [value: boolean]
  'update:includeNodes': [value: boolean]
  'update:includeGitHistory': [value: boolean]
}>()
</script>

<style scoped>
.import-options {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  padding: var(--cg-space-4);
}

.options-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
  margin-top: var(--cg-space-3);
}

.option-group {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.option-items {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
  padding-left: var(--cg-space-2);
}

.option-item {
  display: flex;
  align-items: flex-start;
  gap: var(--cg-space-2);
  padding: var(--cg-space-2);
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border-subtle);
  cursor: pointer;
  transition: all var(--cg-transition-fast);
}

.option-item:hover {
  background: var(--cg-color-bg-hover);
  border-color: var(--cg-color-border);
}

.option-item input[type="radio"],
.option-item input[type="checkbox"] {
  margin-top: 2px;
  flex-shrink: 0;
  cursor: pointer;
  accent-color: var(--cg-color-accent);
}

.option-content {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
  flex: 1;
}

.option-label {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-base);
  font-weight: var(--cg-font-weight-medium);
}

.option-description {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
}
</style>
