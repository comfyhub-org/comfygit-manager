<template>
  <div class="model-resolution-step">
    <!-- Section Header -->
    <div class="step-header">
      <div class="step-info">
        <h3 class="step-title">Resolve Missing Models</h3>
        <p class="step-description">
          Browse unresolved models and choose how to handle each one.
          Unaddressed items will be skipped.
        </p>
      </div>
      <div class="step-stats">
        <span class="stat resolved">{{ resolvedCount }} resolved</span>
        <span class="stat pending">{{ pendingCount }} pending</span>
      </div>
    </div>

    <!-- Item Navigator - browse all models -->
    <div class="item-navigator">
      <button
        class="nav-arrow"
        :disabled="currentIndex === 0"
        @click="goToItem(currentIndex - 1)"
      >
        ←
      </button>

      <div class="item-indicators">
        <button
          v-for="(model, index) in models"
          :key="model.filename"
          :class="['item-dot', {
            active: index === currentIndex,
            resolved: modelChoices.has(model.filename)
          }]"
          :title="model.filename"
          @click="goToItem(index)"
        >
          <span v-if="modelChoices.has(model.filename)" class="dot-check">✓</span>
        </button>
      </div>

      <button
        class="nav-arrow"
        :disabled="currentIndex === models.length - 1"
        @click="goToItem(currentIndex + 1)"
      >
        →
      </button>

      <span class="nav-position">{{ currentIndex + 1 }} / {{ models.length }}</span>
    </div>

    <!-- Current Model Card -->
    <div v-if="currentModel" class="step-body">
      <ModelResolutionItem
        :filename="currentModel.filename"
        :node-type="currentModel.reference?.node_type || 'Unknown'"
        :has-multiple-options="!!currentModel.options?.length"
        :options="currentModel.options"
        :choice="modelChoices?.get(currentModel.filename)"
        @mark-optional="handleMarkOptional"
        @skip="handleSkip"
        @download-url="handleDownloadUrl"
        @search="handleSearch"
        @option-selected="handleOptionSelected"
        @clear-choice="handleClearChoice"
      />
    </div>

    <!-- Empty state if no models -->
    <div v-else class="empty-state">
      <p>No models need resolution.</p>
    </div>

    <!-- Section Navigation Footer -->
    <div class="step-footer">
      <BaseButton variant="secondary" @click="emit('back-section')">
        ← Back
      </BaseButton>

      <BaseButton variant="primary" @click="emit('next-section')">
        Continue to Review →
      </BaseButton>
    </div>

    <!-- Search Modal -->
    <Teleport to="body">
      <div v-if="showSearch" class="model-resolution-modal-overlay" @click.self="closeSearch">
        <div class="model-search-modal">
          <div class="model-modal-header">
            <h4>Search Workspace Models</h4>
            <button class="model-modal-close-btn" @click="closeSearch">✕</button>
          </div>
          <div class="model-modal-body">
            <BaseInput
              v-model="searchQuery"
              placeholder="Search by filename, category..."
              @input="handleSearchInput"
            />
            <div v-if="searchResults.length > 0" class="model-search-results">
              <div
                v-for="result in searchResults"
                :key="result.hash"
                class="model-search-result-item"
                @click="selectSearchResult(result)"
              >
                <div class="model-result-header">
                  <code class="model-result-filename">{{ result.filename }}</code>
                </div>
                <div class="model-result-meta">
                  <span class="model-result-category">{{ result.category }}</span>
                  <span class="model-result-size">{{ formatSize(result.size) }}</span>
                </div>
                <div v-if="result.relative_path" class="model-result-path">{{ result.relative_path }}</div>
              </div>
            </div>
            <div v-else-if="searchQuery && !isSearching" class="model-no-results">
              No models found matching "{{ searchQuery }}"
            </div>
            <div v-if="isSearching" class="model-searching">Searching...</div>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- Download URL Modal -->
    <Teleport to="body">
      <div v-if="showDownloadUrl" class="model-resolution-modal-overlay" @click.self="closeDownloadUrl">
        <div class="model-download-url-modal">
          <div class="model-modal-header">
            <h4>Enter Download URL</h4>
            <button class="model-modal-close-btn" @click="closeDownloadUrl">✕</button>
          </div>
          <div class="model-modal-body">
            <BaseInput
              v-model="downloadUrl"
              label="Download URL"
              placeholder="https://civitai.com/api/download/..."
            />
            <BaseInput
              v-model="downloadPath"
              label="Target Path (relative to models folder)"
              :placeholder="suggestedPath"
            />
            <div class="model-modal-actions">
              <BaseButton variant="secondary" @click="closeDownloadUrl">Cancel</BaseButton>
              <BaseButton
                variant="primary"
                :disabled="!downloadUrl.trim()"
                @click="submitDownloadUrl"
              >
                Queue Download
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ModelResolutionItem from '../molecules/ModelResolutionItem.vue'
import BaseButton from '../BaseButton.vue'
import BaseInput from '../BaseInput.vue'
import type { ModelSearchResult, ModelChoice } from '@/types/comfygit'

interface ModelOption {
  model: {
    filename: string
    hash: string
    size: number
    category: string
    relative_path: string
  }
  match_confidence: number
  match_type: string
  has_download_source?: boolean
}

interface ModelToResolve {
  filename: string
  reference?: {
    workflow: string
    node_id: string
    node_type: string
    widget_name: string
    widget_value: string
  }
  reason?: string
  is_unresolved?: boolean
  options?: ModelOption[]
}

const props = defineProps<{
  models: ModelToResolve[]
  modelChoices: Map<string, ModelChoice>
}>()

const emit = defineEmits<{
  (e: 'back-section'): void
  (e: 'next-section'): void
  (e: 'mark-optional', filename: string): void
  (e: 'skip', filename: string): void
  (e: 'option-selected', filename: string, index: number): void
  (e: 'download-url', filename: string, url: string, targetPath?: string): void
  (e: 'clear-choice', filename: string): void
}>()

// Local state
const currentIndex = ref(0)
const showSearch = ref(false)
const showDownloadUrl = ref(false)
const searchQuery = ref('')
const downloadUrl = ref('')
const downloadPath = ref('')
const searchResults = ref<ModelSearchResult[]>([])
const isSearching = ref(false)

// Computed
const currentModel = computed(() => props.models[currentIndex.value])

const resolvedCount = computed(() => {
  return props.models.filter(m => props.modelChoices.has(m.filename)).length
})

const pendingCount = computed(() => {
  return props.models.length - resolvedCount.value
})

const suggestedPath = computed(() => {
  if (!currentModel.value) return 'checkpoints/'
  return `checkpoints/${currentModel.value.filename}`
})

// Item navigation (within section)
function goToItem(index: number) {
  if (index >= 0 && index < props.models.length) {
    currentIndex.value = index
  }
}

// Handlers - no auto-advance, user navigates manually
function handleMarkOptional() {
  if (!currentModel.value) return
  emit('mark-optional', currentModel.value.filename)
}

function handleSkip() {
  if (!currentModel.value) return
  emit('skip', currentModel.value.filename)
}

function handleOptionSelected(index: number) {
  if (!currentModel.value) return
  emit('option-selected', currentModel.value.filename, index)
}

function handleClearChoice() {
  if (!currentModel.value) return
  emit('clear-choice', currentModel.value.filename)
}

function handleSearch() {
  if (!currentModel.value) return
  searchQuery.value = currentModel.value.filename
  showSearch.value = true
}

function handleDownloadUrl() {
  downloadUrl.value = ''
  downloadPath.value = suggestedPath.value
  showDownloadUrl.value = true
}

function closeSearch() {
  showSearch.value = false
  searchQuery.value = ''
  searchResults.value = []
}

function closeDownloadUrl() {
  showDownloadUrl.value = false
  downloadUrl.value = ''
  downloadPath.value = ''
}

function handleSearchInput() {
  // TODO: Connect to actual search API via composable
  isSearching.value = true
  setTimeout(() => {
    isSearching.value = false
  }, 300)
}

function selectSearchResult(result: ModelSearchResult) {
  if (!currentModel.value) return
  // TODO: emit proper selection
  closeSearch()
}

function submitDownloadUrl() {
  if (!currentModel.value || !downloadUrl.value.trim()) return
  emit('download-url', currentModel.value.filename, downloadUrl.value.trim(), downloadPath.value.trim() || undefined)
  closeDownloadUrl()
}

function formatSize(bytes: number): string {
  if (!bytes) return 'Unknown'
  const gb = bytes / (1024 * 1024 * 1024)
  if (gb >= 1) return `${gb.toFixed(2)} GB`
  const mb = bytes / (1024 * 1024)
  return `${mb.toFixed(1)} MB`
}
</script>

<style scoped>
.model-resolution-step {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
  min-height: 400px;
}

.step-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--cg-space-4);
  padding-bottom: var(--cg-space-3);
  border-bottom: 1px solid var(--cg-color-border);
}

.step-info {
  flex: 1;
}

.step-title {
  font-size: var(--cg-font-size-lg);
  font-weight: var(--cg-font-weight-semibold);
  color: var(--cg-color-text-primary);
  margin: 0 0 var(--cg-space-1) 0;
}

.step-description {
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-muted);
  margin: 0;
}

.step-stats {
  display: flex;
  gap: var(--cg-space-3);
}

.stat {
  font-size: var(--cg-font-size-sm);
  font-family: var(--cg-font-mono);
  padding: var(--cg-space-1) var(--cg-space-2);
  border-radius: var(--cg-radius-sm);
}

.stat.resolved {
  background: var(--cg-color-success-muted);
  color: var(--cg-color-success);
}

.stat.pending {
  background: var(--cg-color-warning-muted);
  color: var(--cg-color-warning);
}

/* Item Navigator */
.item-navigator {
  display: flex;
  align-items: center;
  gap: var(--cg-space-3);
  padding: var(--cg-space-2) var(--cg-space-3);
  background: var(--cg-color-bg-tertiary);
  border-radius: var(--cg-radius-md);
  border: 1px solid var(--cg-color-border-subtle);
}

.nav-arrow {
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border);
  color: var(--cg-color-text-primary);
  width: 32px;
  height: 32px;
  border-radius: var(--cg-radius-sm);
  cursor: pointer;
  font-size: var(--cg-font-size-base);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--cg-transition-fast);
}

.nav-arrow:hover:not(:disabled) {
  background: var(--cg-color-bg-hover);
  border-color: var(--cg-color-accent);
  color: var(--cg-color-accent);
}

.nav-arrow:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.item-indicators {
  display: flex;
  gap: var(--cg-space-1);
  flex-wrap: wrap;
  flex: 1;
  justify-content: center;
}

.item-dot {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid var(--cg-color-border);
  background: var(--cg-color-bg-secondary);
  cursor: pointer;
  transition: all var(--cg-transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: transparent;
}

.item-dot:hover {
  border-color: var(--cg-color-accent);
  transform: scale(1.1);
}

.item-dot.active {
  border-color: var(--cg-color-accent);
  background: var(--cg-color-accent);
  box-shadow: 0 0 0 2px var(--cg-color-accent-muted);
}

.item-dot.resolved {
  border-color: var(--cg-color-success);
  background: var(--cg-color-success);
  color: white;
}

.item-dot.resolved.active {
  box-shadow: 0 0 0 2px var(--cg-color-success-muted);
}

.dot-check {
  font-weight: bold;
}

.nav-position {
  font-size: var(--cg-font-size-sm);
  font-family: var(--cg-font-mono);
  color: var(--cg-color-text-muted);
  min-width: 50px;
  text-align: right;
}

.step-body {
  flex: 1;
  overflow-y: auto;
}

.empty-state {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--cg-color-text-muted);
}

.step-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--cg-space-3);
  border-top: 1px solid var(--cg-color-border);
}
</style>

<!-- Unscoped styles for Teleported modal content -->
<style>
.model-resolution-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10010;
}

.model-search-modal,
.model-download-url-modal {
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  background: var(--cg-color-bg-primary, #1a1a2e);
  border: 1px solid var(--cg-color-border, #333);
  border-radius: var(--cg-radius-lg, 8px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.model-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid var(--cg-color-border, #333);
  background: var(--cg-color-bg-secondary, #252542);
}

.model-modal-header h4 {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: var(--cg-color-text-primary, #fff);
}

.model-modal-close-btn {
  background: none;
  border: none;
  font-size: 18px;
  color: var(--cg-color-text-muted, #888);
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.15s ease;
}

.model-modal-close-btn:hover {
  color: var(--cg-color-text-primary, #fff);
  background: var(--cg-color-bg-hover, #333);
}

.model-modal-body {
  padding: 16px;
  overflow-y: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.model-modal-actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  margin-top: 8px;
}

.model-search-results {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.model-search-result-item {
  padding: 8px 12px;
  border: 1px solid var(--cg-color-border-subtle, #444);
  border-radius: 6px;
  background: var(--cg-color-bg-secondary, #252542);
  cursor: pointer;
  transition: all 0.15s ease;
}

.model-search-result-item:hover {
  border-color: var(--cg-color-accent, #7c3aed);
  background: var(--cg-color-bg-hover, #333);
}

.model-result-header {
  margin-bottom: 4px;
}

.model-result-filename {
  font-family: var(--cg-font-mono, monospace);
  font-weight: 600;
  font-size: 13px;
  color: var(--cg-color-accent, #7c3aed);
}

.model-result-meta {
  display: flex;
  gap: 8px;
  font-size: 12px;
  color: var(--cg-color-text-muted, #888);
  margin-bottom: 4px;
}

.model-result-category {
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.model-result-size {
  font-family: var(--cg-font-mono, monospace);
}

.model-result-path {
  font-size: 12px;
  font-family: var(--cg-font-mono, monospace);
  color: var(--cg-color-text-muted, #888);
}

.model-no-results,
.model-searching {
  padding: 16px;
  text-align: center;
  color: var(--cg-color-text-muted, #888);
  font-size: 13px;
}
</style>
