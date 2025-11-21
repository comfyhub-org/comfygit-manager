<template>
  <div class="models-env-section">
    <div class="title-row">
      <h3 class="view-title">MODELS IN THIS ENVIRONMENT</h3>
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
          <h4 class="popover-title">About Environment Models</h4>
          <button class="popover-close" @click="showPopover = false">✕</button>
        </div>
        <div class="popover-content">
          <p class="popover-text">
            These are models currently used by workflows in <strong>"{{ environmentName }}"</strong>.
            All models are symlinked from the workspace model index.
          </p>
          <button class="popover-link-btn" @click="navigateToIndex">
            View Workspace Model Index ↗
          </button>
        </div>
      </div>
    </div>

    <!-- Search bar -->
    <div class="search-bar">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="🔍 Search models used in this environment..."
        class="search-input"
      />
    </div>

    <!-- Loading state -->
    <div v-if="loading" class="loading">Loading models...</div>

    <!-- Error state -->
    <div v-else-if="error" class="error-message">{{ error }}</div>

    <!-- Content -->
    <div v-else class="models-content">
      <!-- Checkpoints -->
      <section v-if="filteredCheckpoints.length" class="model-group">
        <h4 class="group-title">CHECKPOINTS ({{ filteredCheckpoints.length }})</h4>
        <div
          v-for="model in filteredCheckpoints"
          :key="model.hash"
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
              <span class="label">Used by:</span>
              <span class="value">{{ model.used_by.join(', ') }}</span>
            </div>
            <div class="detail-row">
              <span class="label">Source:</span>
              <span class="value">Workspace index</span>
            </div>
          </div>
          <div class="model-actions">
            <button class="action-btn secondary" @click="viewInWorkspace(model.hash)">
              View in Workspace Index ↗
            </button>
          </div>
        </div>
      </section>

      <!-- LoRAs -->
      <section v-if="filteredLoras.length" class="model-group">
        <h4 class="group-title">LORAS ({{ filteredLoras.length }})</h4>
        <div
          v-for="model in filteredLoras"
          :key="model.hash"
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
              <span class="label">Used by:</span>
              <span class="value">{{ model.used_by.join(', ') }}</span>
            </div>
            <div class="detail-row">
              <span class="label">Source:</span>
              <span class="value">Workspace index</span>
            </div>
          </div>
          <div class="model-actions">
            <button class="action-btn secondary" @click="viewInWorkspace(model.hash)">
              View in Workspace Index ↗
            </button>
          </div>
        </div>
      </section>

      <!-- Other Models -->
      <section v-if="filteredOther.length" class="model-group">
        <h4 class="group-title">OTHER ({{ filteredOther.length }})</h4>
        <div
          v-for="model in filteredOther"
          :key="model.hash"
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
              <span class="label">Used by:</span>
              <span class="value">{{ model.used_by.join(', ') }}</span>
            </div>
          </div>
          <div class="model-actions">
            <button class="action-btn secondary" @click="viewInWorkspace(model.hash)">
              View in Workspace Index ↗
            </button>
          </div>
        </div>
      </section>

      <!-- Missing Models -->
      <section v-if="filteredMissing.length" class="model-group">
        <h4 class="group-title">MISSING ({{ filteredMissing.length }})</h4>
        <div
          v-for="model in filteredMissing"
          :key="model.filename"
          class="model-card missing"
        >
          <div class="model-header">
            <span class="model-icon">⚠</span>
            <div class="model-info">
              <div class="model-name">{{ model.filename }}</div>
              <div class="model-status error">Not found in workspace index</div>
            </div>
          </div>
          <div class="model-details">
            <div class="detail-row">
              <span class="label">Required by:</span>
              <span class="value">{{ model.workflow_names?.join(', ') || 'Unknown' }}</span>
            </div>
          </div>
          <div class="model-actions">
            <button class="action-btn" @click="downloadModel(model.filename)">
              Download
            </button>
            <button class="action-btn secondary" @click="searchInWorkspace(model.filename)">
              Search Workspace Index
            </button>
          </div>
        </div>
      </section>

      <!-- Empty state -->
      <div v-if="!filteredModels.length" class="empty-state">
        <p v-if="searchQuery">No models match "{{ searchQuery }}"</p>
        <p v-else>No models in this environment.</p>
      </div>

      <!-- Summary -->
      <div v-if="models.length" class="summary">
        Total: {{ models.length }} models • {{ formatSize(totalSize) }} (symlinked from workspace)
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { ModelInfo, MissingModelInfo } from '@/types/comfygit'

const emit = defineEmits<{
  navigate: [view: string]
}>()

const { getEnvironmentModels, getStatus } = useComfyGitService()

const models = ref<ModelInfo[]>([])
const missingModels = ref<MissingModelInfo[]>([])
const environmentName = ref('production')
const loading = ref(false)
const error = ref<string | null>(null)
const searchQuery = ref('')
const showPopover = ref(false)
const infoButton = ref<HTMLElement | null>(null)
const popover = ref<HTMLElement | null>(null)

function togglePopover() {
  showPopover.value = !showPopover.value
}

function navigateToIndex() {
  showPopover.value = false
  emit('navigate', 'model-index')
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

// Search filtering
const filteredModels = computed(() => {
  if (!searchQuery.value.trim()) return models.value
  const query = searchQuery.value.toLowerCase()
  return models.value.filter(m => m.filename.toLowerCase().includes(query))
})

const filteredMissing = computed(() => {
  if (!searchQuery.value.trim()) return missingModels.value
  const query = searchQuery.value.toLowerCase()
  return missingModels.value.filter(m => m.filename.toLowerCase().includes(query))
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

function viewInWorkspace(hash: string) {
  // TODO: Navigate to model index with hash filter
  emit('navigate', 'model-index')
}

function searchInWorkspace(filename: string) {
  // TODO: Navigate to model index with search query
  emit('navigate', 'model-index')
}

function downloadModel(filename: string) {
  // TODO: Open download modal
  alert(`Download functionality not yet implemented for ${filename}`)
}

async function loadModels() {
  loading.value = true
  error.value = null
  try {
    const [envModels, status] = await Promise.all([
      getEnvironmentModels(),
      getStatus()
    ])
    models.value = envModels
    missingModels.value = status.missing_models || []
    environmentName.value = status.environment || 'production'
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load models'
  } finally {
    loading.value = false
  }
}

onMounted(loadModels)
</script>

<style scoped>
.models-env-section {
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
}

.model-card.missing {
  border-left: 3px solid var(--cg-color-error);
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

.model-status {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
}

.model-status.error {
  color: var(--cg-color-error);
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
  word-break: break-word;
}

.model-actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.action-btn {
  padding: 6px 12px;
  background: transparent;
  color: var(--cg-color-accent);
  border: 1px solid var(--cg-color-accent);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  cursor: pointer;
}

.action-btn:hover {
  background: var(--cg-color-bg-hover);
  box-shadow: 0 0 8px rgba(0, 255, 65, 0.3);
}

.action-btn.secondary {
  color: var(--cg-color-text-secondary);
  border-color: var(--cg-color-border);
}

.action-btn.secondary:hover {
  color: var(--cg-color-text-primary);
  border-color: var(--cg-color-text-primary);
}

.summary {
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
  margin-top: var(--cg-space-4);
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
