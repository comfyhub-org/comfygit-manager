<template>
  <div :class="['node-resolution-item', { selected: isSelected, ambiguous: hasMultipleOptions, resolved: hasChoice }]">
    <!-- Header: Node type and status -->
    <div class="item-header">
      <div class="item-title">
        <code class="node-type">{{ nodeType }}</code>
        <span v-if="hasChoice" class="choice-status">
          <span v-if="choiceAction === 'install'" class="status-badge install">Installing: {{ choicePackageId }}</span>
          <span v-else-if="choiceAction === 'optional'" class="status-badge optional">Marked Optional</span>
          <span v-else-if="choiceAction === 'skip'" class="status-badge skip">Skipped</span>
        </span>
      </div>
      <div v-if="!hasChoice" class="item-status">
        <span v-if="hasMultipleOptions" class="status-badge ambiguous">{{ options?.length }} matches</span>
        <span v-else-if="!packageId" class="status-badge unresolved">Not Found</span>
      </div>
    </div>

    <div class="item-body">
      <!-- Already resolved state - show change option -->
      <div v-if="hasChoice" class="resolved-state">
        <BaseButton variant="ghost" size="sm" @click="emit('clear-choice')">
          Change Selection
        </BaseButton>
      </div>

      <!-- Multiple options (ambiguous) - show radio selection -->
      <div v-else-if="hasMultipleOptions && options" class="multiple-options">
        <p class="options-prompt">Select a package to install:</p>
        <div class="options-list">
          <label
            v-for="(option, index) in options"
            :key="option.package_id"
            :class="['option-card', { selected: selectedOptionIndex === index }]"
            @click="handleOptionClick(index)"
          >
            <input
              type="radio"
              :name="`node-option-${nodeType}`"
              :value="index"
              :checked="selectedOptionIndex === index"
              @change="handleOptionClick(index)"
            />
            <div class="option-content">
              <div class="option-header">
                <span class="option-package-id">{{ option.package_id }}</span>
                <ConfidenceBadge :confidence="option.match_confidence" size="sm" />
              </div>
              <div v-if="option.title && option.title !== option.package_id" class="option-title">
                {{ option.title }}
              </div>
              <div class="option-meta">
                <span v-if="option.is_installed" class="installed-badge">Already Installed</span>
              </div>
            </div>
          </label>
        </div>

        <!-- Action buttons for ambiguous -->
        <div class="action-buttons">
          <BaseButton variant="ghost" size="sm" @click="emit('search')">
            Search Registry
          </BaseButton>
          <BaseButton variant="ghost" size="sm" @click="emit('manual-entry')">
            Enter Manually
          </BaseButton>
          <BaseButton variant="secondary" size="sm" @click="emit('mark-optional')">
            Mark Optional
          </BaseButton>
        </div>
      </div>

      <!-- Unresolved - show action options -->
      <div v-else class="unresolved">
        <div class="unresolved-message">
          <span class="warning-icon">⚠</span>
          <span>No matching package found in registry</span>
        </div>

        <div class="action-buttons">
          <BaseButton variant="primary" size="sm" @click="emit('search')">
            Search Registry
          </BaseButton>
          <BaseButton variant="secondary" size="sm" @click="emit('manual-entry')">
            Enter Manually
          </BaseButton>
          <BaseButton variant="secondary" size="sm" @click="emit('mark-optional')">
            Mark Optional
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ConfidenceBadge from '../atoms/ConfidenceBadge.vue'
import BaseButton from '../BaseButton.vue'

interface NodeOption {
  package_id: string
  title?: string
  match_confidence: number
  match_type: string
  description?: string
  repository?: string
  is_installed: boolean
}

interface NodeChoice {
  action: 'install' | 'optional' | 'skip' | 'manual'
  package_id?: string
}

const props = defineProps<{
  nodeType: string
  packageId?: string
  confidence?: number
  matchType?: string
  description?: string
  repository?: string
  source?: string
  isInstalled?: boolean
  isOptional?: boolean
  isSelected?: boolean
  hasMultipleOptions?: boolean
  options?: NodeOption[]
  selectedOptionIndex?: number
  choice?: NodeChoice
}>()

const emit = defineEmits<{
  (e: 'mark-optional'): void
  (e: 'skip'): void
  (e: 'manual-entry'): void
  (e: 'search'): void
  (e: 'option-selected', index: number): void
  (e: 'clear-choice'): void
}>()

// Computed properties for choice state
const hasChoice = computed(() => !!props.choice)
const choiceAction = computed(() => props.choice?.action)
const choicePackageId = computed(() => props.choice?.package_id)

function handleOptionClick(index: number) {
  emit('option-selected', index)
}
</script>

<style scoped>
.node-resolution-item {
  border: 1px solid var(--cg-color-border);
  border-radius: var(--cg-radius-lg);
  background: var(--cg-color-bg-secondary);
  overflow: hidden;
  transition: all var(--cg-transition-fast);
}

.node-resolution-item.ambiguous {
  border-color: var(--cg-color-warning);
}

.node-resolution-item.resolved {
  border-color: var(--cg-color-success);
  background: var(--cg-color-success-muted);
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-tertiary);
  border-bottom: 1px solid var(--cg-color-border-subtle);
}

.item-title {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  flex-wrap: wrap;
}

.node-type {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-accent);
  background: var(--cg-color-bg-primary);
  padding: var(--cg-space-1) var(--cg-space-2);
  border-radius: var(--cg-radius-sm);
}

.choice-status {
  display: flex;
  align-items: center;
}

.item-status {
  display: flex;
  align-items: center;
}

.status-badge {
  padding: var(--cg-space-1) var(--cg-space-2);
  border-radius: var(--cg-radius-sm);
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-medium);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.status-badge.install {
  background: var(--cg-color-success-muted);
  color: var(--cg-color-success);
}

.status-badge.optional {
  background: var(--cg-color-info-muted);
  color: var(--cg-color-info);
}

.status-badge.skip {
  background: var(--cg-color-bg-hover);
  color: var(--cg-color-text-muted);
}

.status-badge.ambiguous {
  background: var(--cg-color-warning-muted);
  color: var(--cg-color-warning);
}

.status-badge.unresolved {
  background: var(--cg-color-error-muted);
  color: var(--cg-color-error);
}

.item-body {
  padding: var(--cg-space-3);
}

.resolved-state {
  display: flex;
  justify-content: center;
}

.multiple-options {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
}

.options-prompt {
  margin: 0;
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-secondary);
}

.options-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.option-card {
  display: flex;
  gap: var(--cg-space-2);
  padding: var(--cg-space-2) var(--cg-space-3);
  border: 1px solid var(--cg-color-border-subtle);
  border-radius: var(--cg-radius-md);
  background: var(--cg-color-bg-primary);
  cursor: pointer;
  transition: all var(--cg-transition-fast);
}

.option-card:hover {
  border-color: var(--cg-color-accent);
  background: var(--cg-color-bg-hover);
}

.option-card.selected {
  border-color: var(--cg-color-success);
  background: var(--cg-color-success-muted);
}

.option-card input[type="radio"] {
  margin-top: 4px;
  accent-color: var(--cg-color-accent);
}

.option-content {
  flex: 1;
  min-width: 0;
}

.option-header {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  flex-wrap: wrap;
}

.option-package-id {
  font-family: var(--cg-font-mono);
  font-weight: var(--cg-font-weight-semibold);
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-primary);
}

.option-title {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-secondary);
}

.option-meta {
  display: flex;
  gap: var(--cg-space-2);
  align-items: center;
  margin-top: var(--cg-space-1);
}

.installed-badge {
  padding: 2px var(--cg-space-2);
  border-radius: var(--cg-radius-sm);
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-medium);
  background: var(--cg-color-success-muted);
  color: var(--cg-color-success);
}

.action-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: var(--cg-space-2);
  justify-content: flex-start;
  padding-top: var(--cg-space-2);
  border-top: 1px solid var(--cg-color-border-subtle);
}

.unresolved {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
}

.unresolved-message {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  padding: var(--cg-space-2) var(--cg-space-3);
  background: var(--cg-color-warning-muted);
  border: 1px solid var(--cg-color-warning);
  border-radius: var(--cg-radius-md);
  color: var(--cg-color-warning);
  font-size: var(--cg-font-size-sm);
}

.warning-icon {
  font-size: var(--cg-font-size-lg);
}
</style>
