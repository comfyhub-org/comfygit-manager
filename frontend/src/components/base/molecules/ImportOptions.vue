<template>
  <div class="import-options">
    <SectionTitle>Import Options</SectionTitle>

    <div class="options-container">
      <!-- Conflict Resolution -->
      <div class="option-section">
        <Label>Conflict Resolution</Label>
        <div class="conflict-options">
          <label
            v-for="mode in conflictModes"
            :key="mode.value"
            :class="['conflict-option', { active: conflictMode === mode.value }]"
          >
            <input
              type="radio"
              name="conflict-mode"
              :value="mode.value"
              :checked="conflictMode === mode.value"
              @change="emit('update:conflictMode', mode.value)"
            />
            <div class="conflict-content">
              <span class="conflict-label">{{ mode.label }}</span>
              <span class="conflict-description">{{ mode.description }}</span>
            </div>
          </label>
        </div>
      </div>

      <!-- Component Toggles -->
      <div class="option-section">
        <Label>Components to Import</Label>
        <div class="component-toggles">
          <SettingRow
            label="Workflows"
            description="Import workflow JSON files"
          >
            <Toggle
              :model-value="includeWorkflows"
              @update:model-value="emit('update:includeWorkflows', $event)"
            />
          </SettingRow>

          <SettingRow
            label="Models"
            description="Import model files (may be large)"
          >
            <Toggle
              :model-value="includeModels"
              @update:model-value="emit('update:includeModels', $event)"
            />
          </SettingRow>

          <SettingRow
            label="Custom Nodes"
            description="Install custom node dependencies"
          >
            <Toggle
              :model-value="includeNodes"
              @update:model-value="emit('update:includeNodes', $event)"
            />
          </SettingRow>

          <SettingRow
            label="Git History"
            description="Import git commits and branches"
          >
            <Toggle
              :model-value="includeGitHistory"
              @update:model-value="emit('update:includeGitHistory', $event)"
            />
          </SettingRow>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/base/atoms/SectionTitle.vue'
import Label from '@/components/base/atoms/Label.vue'
import SettingRow from '@/components/base/molecules/SettingRow.vue'
import Toggle from '@/components/base/atoms/Toggle.vue'

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

const conflictModes = [
  {
    value: 'overwrite' as const,
    label: 'Overwrite Existing',
    description: 'Replace existing workflows and models'
  },
  {
    value: 'keep' as const,
    label: 'Keep Existing',
    description: 'Skip files that already exist'
  },
  {
    value: 'rename' as const,
    label: 'Rename New',
    description: 'Add suffix to imported files'
  }
]
</script>

<style scoped>
.import-options {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  padding: var(--cg-space-4);
}

.options-container {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-5);
  margin-top: var(--cg-space-3);
}

.option-section {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
}

.conflict-options {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.conflict-option {
  display: flex;
  align-items: flex-start;
  gap: var(--cg-space-2);
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border-subtle);
  cursor: pointer;
  transition: all var(--cg-transition-fast);
}

.conflict-option:hover {
  background: var(--cg-color-bg-hover);
  border-color: var(--cg-color-border);
}

.conflict-option.active {
  border-color: var(--cg-color-accent);
  background: var(--cg-color-accent-muted);
}

.conflict-option input[type="radio"] {
  margin-top: 2px;
  flex-shrink: 0;
  cursor: pointer;
  accent-color: var(--cg-color-accent);
}

.conflict-content {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
  flex: 1;
}

.conflict-label {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-base);
  font-weight: var(--cg-font-weight-medium);
}

.conflict-description {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
}

.component-toggles {
  display: flex;
  flex-direction: column;
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border-subtle);
  padding: 0 var(--cg-space-3);
}
</style>
