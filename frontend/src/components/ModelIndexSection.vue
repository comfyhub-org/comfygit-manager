<template>
  <div class="model-index-section">
    <div class="title-row">
      <h3 class="view-title">WORKSPACE MODEL INDEX</h3>
      <button
        ref="infoButton"
        class="info-icon"
        @click="togglePopover"
        title="About this section"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.5" fill="none"/>
          <text x="8" y="11" text-anchor="middle" font-size="10" font-weight="bold" fill="currentColor">i</text>
        </svg>
      </button>
    </div>

    <!-- Info Popover -->
    <div v-if="showPopover" class="popover-overlay" @click="showPopover = false">
      <div
        ref="popover"
        class="popover"
        @click.stop
      >
        <div class="popover-header">
          <h4 class="popover-title">About Workspace Model Index</h4>
          <button class="popover-close" @click="showPopover = false">✕</button>
        </div>
        <div class="popover-content">
          <p class="popover-text">
            Content-addressable model storage shared across <strong>all environments</strong>.
            Models are deduplicated by SHA256 hash.
          </p>
        </div>
      </div>
    </div>

    <div class="section-header">
      <div class="header-actions">
        <button class="action-btn" @click="scanForModels">
          Scan for Models
        </button>
        <button class="action-btn" @click="addDirectory">
          Add Directory
        </button>
        <button class="action-btn primary" @click="downloadNewModel">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 12L3 7h3V1h4v6h3L8 12z"/>
            <path d="M14 14H2v-2h12v2z"/>
          </svg>
          DOWNLOAD +
        </button>
      </div>
    </div>

    <!-- Search bar -->
    <div class="search-bar">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="🔍 Search all indexed models..."
        class="search-input"
      />
    </div>

    <!-- Loading state -->
    <div v-if="loading" class="loading">Loading workspace models...</div>

    <!-- Error state -->
    <div v-else-if="error" class="error-message">{{ error }}</div>

    <!-- Content -->
    <div v-else class="models-content">
      <!-- Summary -->
      <div v-if="models.length" class="summary-header">
        Total: {{ models.length }} models • {{ formatSize(totalSize) }} •
        Used in {{ environmentsWithModels }} environments
      </div>

      <!-- Checkpoints -->
      <section v-if="filteredCheckpoints.length" class="model-group">
        <h4 class="group-title">/* CHECKPOINTS ({{ filteredCheckpoints.length }}) */</h4>
        <div
          v-for="model in filteredCheckpoints"
          :key="model.sha256_hash || model.hash"
          class="model-card"
        >
          <div class="model-header">
            <span class="model-icon">📦</span>
            <div class="model-info">
              <div class="model-name">{{ model.filename }}</div>
              <div class="model-size">{{ formatSize(model.size_mb) }}</div>
            </div>
          </div>
          <div class="model-details">
            <div class="detail-row">
              <span class="label">SHA256:</span>
              <span class="value hash">{{ model.sha256_hash?.substring(0, 16) || model.hash }}...</span>
            </div>
            <div class="detail-row">
              <span class="label">Used in:</span>
              <span class="value">{{ getUsageText(model) }}</span>
            </div>
            <div v-if="model.sources && model.sources.length" class="detail-row">
              <span class="label">Source URL:</span>
              <span class="value">{{ model.sources[0] }}</span>
            </div>
            <div v-else class="detail-row">
              <span class="label">Source URL:</span>
              <span class="value warning">(none)</span>
            </div>
          </div>
          <div class="model-actions">
            <button class="action-btn-small" @click="editUrl(model)">
              Edit URL
            </button>
            <button class="action-btn-small" @click="copyHash(model.sha256_hash || model.hash)">
              Copy Hash
            </button>
            <button class="action-btn-small destructive" @click="deleteModel(model)">
              Delete
            </button>
          </div>
        </div>
      </section>

      <!-- LoRAs -->
      <section v-if="filteredLoras.length" class="model-group">
        <h4 class="group-title">/* LORAS ({{ filteredLoras.length }}) */</h4>
        <div
          v-for="model in filteredLoras"
          :key="model.sha256_hash || model.hash"
          class="model-card"
        >
          <div class="model-header">
            <span class="model-icon">📦</span>
            <div class="model-info">
              <div class="model-name">{{ model.filename }}</div>
              <div class="model-size">{{ formatSize(model.size_mb) }}</div>
            </div>
          </div>
          <div class="model-details">
            <div class="detail-row">
              <span class="label">SHA256:</span>
              <span class="value hash">{{ model.sha256_hash?.substring(0, 16) || model.hash }}...</span>
            </div>
            <div class="detail-row">
              <span class="label">Used in:</span>
              <span class="value">{{ getUsageText(model) }}</span>
            </div>
            <div v-if="model.sources && model.sources.length" class="detail-row">
              <span class="label">Source URL:</span>
              <span class="value">{{ model.sources[0] }}</span>
            </div>
            <div v-else class="detail-row">
              <span class="label">Source URL:</span>
              <span class="value warning">(none)</span>
            </div>
          </div>
          <div class="model-actions">
            <button class="action-btn-small" @click="editUrl(model)">
              Edit URL
            </button>
            <button class="action-btn-small" @click="copyHash(model.sha256_hash || model.hash)">
              Copy Hash
            </button>
            <button class="action-btn-small destructive" @click="deleteModel(model)">
              Delete
            </button>
          </div>
        </div>
      </section>

      <!-- Other Models -->
      <section v-if="filteredOther.length" class="model-group">
        <h4 class="group-title">/* OTHER ({{ filteredOther.length }}) */</h4>
        <div
          v-for="model in filteredOther"
          :key="model.sha256_hash || model.hash"
          class="model-card"
        >
          <div class="model-header">
            <span class="model-icon">📦</span>
            <div class="model-info">
              <div class="model-name">{{ model.filename }}</div>
              <div class="model-size">{{ formatSize(model.size_mb) }}</div>
            </div>
          </div>
          <div class="model-details">
            <div class="detail-row">
              <span class="label">Type:</span>
              <span class="value">{{ model.type }}</span>
            </div>
            <div class="detail-row">
              <span class="label">SHA256:</span>
              <span class="value hash">{{ model.sha256_hash?.substring(0, 16) || model.hash }}...</span>
            </div>
            <div class="detail-row">
              <span class="label">Used in:</span>
              <span class="value">{{ getUsageText(model) }}</span>
            </div>
          </div>
          <div class="model-actions">
            <button class="action-btn-small" @click="editUrl(model)">
              Edit URL
            </button>
            <button class="action-btn-small" @click="copyHash(model.sha256_hash || model.hash)">
              Copy Hash
            </button>
            <button class="action-btn-small destructive" @click="deleteModel(model)">
              Delete
            </button>
          </div>
        </div>
      </section>

      <!-- Empty state -->
      <div v-if="!filteredModels.length" class="empty-state">
        <p v-if="searchQuery">No models match "{{ searchQuery }}"</p>
        <p v-else>No models in workspace index.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { ModelInfo } from '@/types/comfygit'

const { getWorkspaceModels } = useComfyGitService()

const models = ref<ModelInfo[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
const searchQuery = ref('')
const showPopover = ref(false)
const infoButton = ref<HTMLElement | null>(null)
const popover = ref<HTMLElement | null>(null)

function togglePopover() {
  showPopover.value = !showPopover.value
}

// Computed filters
const checkpoints = computed(() =>
  models.value.filter(m => m.type === 'checkpoints' || m.category === 'checkpoints')
)

const loras = computed(() =>
  models.value.filter(m => m.type === 'loras' || m.category === 'loras')
)

const otherModels = computed(() =>
  models.value.filter(m =>
    m.type !== 'checkpoints' && m.category !== 'checkpoints' &&
    m.type !== 'loras' && m.category !== 'loras'
  )
)

const totalSize = computed(() =>
  models.value.reduce((sum, m) => sum + (m.size_mb || 0), 0)
)

const environmentsWithModels = computed(() => {
  const envs = new Set<string>()
  models.value.forEach(m => {
    if (m.used_by && m.used_by.length > 0) {
      // Count unique environments (simplified - would need env data)
      envs.add('production') // Placeholder
    }
  })
  return envs.size
})

// Search filtering
const filteredModels = computed(() => {
  if (!searchQuery.value.trim()) return models.value
  const query = searchQuery.value.toLowerCase()
  return models.value.filter(m =>
    m.filename.toLowerCase().includes(query) ||
    (m.sha256_hash && m.sha256_hash.toLowerCase().includes(query)) ||
    m.hash.toLowerCase().includes(query)
  )
})

const filteredCheckpoints = computed(() =>
  filteredModels.value.filter(m => m.type === 'checkpoints' || m.category === 'checkpoints')
)

const filteredLoras = computed(() =>
  filteredModels.value.filter(m => m.type === 'loras' || m.category === 'loras')
)

const filteredOther = computed(() =>
  filteredModels.value.filter(m =>
    m.type !== 'checkpoints' && m.category !== 'checkpoints' &&
    m.type !== 'loras' && m.category !== 'loras'
  )
)

function formatSize(mb: number): string {
  if (mb >= 1024) {
    return `${(mb / 1024).toFixed(1)} GB`
  }
  return `${mb} MB`
}

function getUsageText(model: ModelInfo): string {
  if (!model.used_by || model.used_by.length === 0) {
    return 'Not used'
  }
  // Simplified - would need environment grouping
  const workflowCount = model.used_by.length
  return `${workflowCount} workflow(s)`
}

function copyHash(hash: string) {
  navigator.clipboard.writeText(hash)
  alert('Hash copied to clipboard')
}

function editUrl(model: ModelInfo) {
  const newUrl = prompt('Enter model source URL:', model.sources?.[0] || '')
  if (newUrl !== null) {
    // TODO: Update model source URL
    alert('URL update not yet implemented')
  }
}

function deleteModel(model: ModelInfo) {
  const usageWarning = model.used_by && model.used_by.length > 0
    ? `\n\n⚠ WARNING: This model is used by ${model.used_by.length} workflow(s):\n${model.used_by.join(', ')}\n\nDeleting will break these workflows!`
    : ''

  const confirmed = confirm(
    `Delete ${model.filename}?${usageWarning}\n\nThis will free ${formatSize(model.size_mb || 0)} of space.`
  )
  if (confirmed) {
    // TODO: Delete model
    alert('Model deletion not yet implemented')
  }
}

function scanForModels() {
  alert('Scan for models not yet implemented')
}

function addDirectory() {
  alert('Add directory not yet implemented')
}

function downloadNewModel() {
  alert('Download new model not yet implemented')
}

async function loadModels() {
  loading.value = true
  error.value = null
  try {
    models.value = await getWorkspaceModels()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load workspace models'
  } finally {
    loading.value = false
  }
}

onMounted(loadModels)
</script>

<style scoped>
.model-index-section {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.title-row {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  margin-bottom: var(--cg-space-4);
}

.view-title {
  color: var(--cg-color-accent);
  font-size: var(--cg-font-size-lg);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  margin: 0;
}

.view-title::before {
  content: '> ';
  opacity: 0.7;
}

.info-icon {
  background: transparent;
  border: none;
  color: var(--cg-color-text-muted);
  cursor: pointer;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--cg-transition-fast);
}

.info-icon:hover {
  color: var(--cg-color-accent);
  transform: scale(1.1);
}

/* Popover styles */
.popover-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--cg-color-bg-overlay);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--cg-z-modal);
}

.popover {
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border);
  border-radius: var(--cg-radius-md);
  box-shadow: var(--cg-shadow-lg);
  max-width: 400px;
  width: 90%;
  animation: popoverFadeIn var(--cg-transition-normal);
}

@keyframes popoverFadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.popover-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--cg-space-3) var(--cg-space-4);
  border-bottom: 1px solid var(--cg-color-border-subtle);
}

.popover-title {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-base);
  font-weight: var(--cg-font-weight-semibold);
  margin: 0;
}

.popover-close {
  background: transparent;
  border: none;
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-lg);
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--cg-transition-fast);
}

.popover-close:hover {
  color: var(--cg-color-text-primary);
}

.popover-content {
  padding: var(--cg-space-4);
}

.popover-text {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-sm);
  line-height: var(--cg-line-height-normal);
  margin: 0 0 var(--cg-space-3) 0;
}

.popover-text strong {
  color: var(--cg-color-accent);
  font-weight: var(--cg-font-weight-semibold);
}

.popover-link-btn {
  padding: 6px 12px;
  background: transparent;
  color: var(--cg-color-info);
  border: 1px solid var(--cg-color-info);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  cursor: pointer;
  transition: all var(--cg-transition-fast);
  width: 100%;
}

.popover-link-btn:hover {
  background: var(--cg-color-bg-hover);
  box-shadow: 0 0 8px rgba(59, 130, 246, 0.3);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--cg-space-4);
}

.header-actions {
  display: flex;
  gap: 8px;
}


.search-bar {
  margin-bottom: var(--cg-space-4);
}

.search-input {
  width: 100%;
  padding: 8px 12px;
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  color: var(--cg-color-text-primary);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
}

.search-input:focus {
  outline: none;
  border-color: var(--cg-color-accent);
  box-shadow: 0 0 8px rgba(0, 255, 65, 0.2);
}

.models-content {
  flex: 1;
  overflow-y: auto;
}

.loading,
.error-message,
.empty-state {
  text-align: center;
  padding: var(--cg-space-6);
  color: var(--cg-color-text-muted);
}

.error-message {
  color: var(--cg-color-error);
  border: 1px solid var(--cg-color-error);
  background: transparent;
}

.summary-header {
  padding: var(--cg-space-2) var(--cg-space-3);
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
  margin-bottom: var(--cg-space-4);
}

.model-group {
  margin-bottom: var(--cg-space-4);
}

.group-title {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  margin: 0 0 var(--cg-space-2) 0;
  font-weight: var(--cg-font-weight-normal);
}

.model-card {
  border: 1px solid var(--cg-color-border-subtle);
  background: var(--cg-color-bg-tertiary);
  padding: var(--cg-space-3);
  margin-bottom: var(--cg-space-2);
  position: relative;
}


.model-header {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: var(--cg-space-2);
}

.model-icon {
  font-size: var(--cg-font-size-xl);
}

.model-info {
  flex: 1;
}

.model-name {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-base);
  margin-bottom: 2px;
}

.model-size {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
}

.model-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: var(--cg-space-2);
}

.detail-row {
  display: flex;
  gap: 8px;
  font-size: var(--cg-font-size-sm);
}

.detail-row .label {
  color: var(--cg-color-text-muted);
  min-width: 70px;
}

.detail-row .value {
  color: var(--cg-color-text-secondary);
  flex: 1;
  word-break: break-all;
}

.detail-row .value.hash {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
}

.detail-row .value.warning {
  color: var(--cg-color-warning);
}

.model-actions {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.action-btn,
.action-btn-small {
  padding: 6px 12px;
  background: transparent;
  border: 1px solid;
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  cursor: pointer;
}

.action-btn {
  color: var(--cg-color-accent);
  border-color: var(--cg-color-accent);
}

.action-btn:hover {
  background: var(--cg-color-bg-hover);
  box-shadow: 0 0 8px rgba(0, 255, 65, 0.3);
}

.action-btn.primary {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.action-btn.secondary,
.action-btn-small {
  color: var(--cg-color-text-secondary);
  border-color: var(--cg-color-border);
}

.action-btn.secondary:hover,
.action-btn-small:hover {
  color: var(--cg-color-text-primary);
  border-color: var(--cg-color-text-primary);
}

.action-btn-small.destructive {
  color: var(--cg-color-error);
  border-color: var(--cg-color-error);
}

.action-btn-small.destructive:hover {
  background: var(--cg-color-bg-hover);
  box-shadow: 0 0 8px rgba(255, 65, 65, 0.3);
}

/* Scrollbar */
.models-content::-webkit-scrollbar {
  width: 8px;
}

.models-content::-webkit-scrollbar-track {
  background: var(--cg-color-bg-tertiary);
}

.models-content::-webkit-scrollbar-thumb {
  background: var(--cg-color-border-subtle);
  border: 1px solid var(--cg-color-bg-tertiary);
}

.models-content::-webkit-scrollbar-thumb:hover {
  background: var(--cg-color-accent);
}
</style>
