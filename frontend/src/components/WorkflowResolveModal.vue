<template>
  <div class="dialog-overlay" @click.self="emit('close')">
    <div class="dialog-content workflow-resolve-modal">
      <div class="dialog-header">
        <h3 class="dialog-title">RESOLVE DEPENDENCIES: {{ workflowName }}</h3>
        <button class="icon-btn" @click="emit('close')">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z"/>
          </svg>
        </button>
      </div>

      <div class="dialog-body">
        <div v-if="loading" class="loading">Analyzing dependencies...</div>
        <div v-else-if="error" class="error-message">{{ error }}</div>
        <template v-else-if="resolution">
          <div class="intro-message">
            This workflow needs the following to work:
          </div>

          <!-- Nodes Section -->
          <section v-if="resolution.nodes_unresolved.length > 0" class="resolve-section">
            <h4 class="section-title">/* NODES ({{ resolution.nodes_unresolved.length }}) */</h4>
            <div class="resolve-card success-card">
              <div class="card-header">
                <span class="status-icon">✓</span>
                <span class="card-title">Can install automatically</span>
              </div>
              <div class="items-list">
                <div
                  v-for="node in resolution.nodes_unresolved"
                  :key="node.node_type"
                  class="item"
                >
                  <div class="item-info">
                    <div class="item-name">{{ getBestMatch(node)?.package_id || node.node_type }}</div>
                    <div v-if="getBestMatch(node)" class="item-meta">
                      <span class="confidence-badge" :class="getConfidenceClass(getBestMatch(node)!.match_confidence)">
                        {{ Math.round(getBestMatch(node)!.match_confidence * 100) }}% match
                      </span>
                      <span class="match-type">{{ getBestMatch(node)!.match_type }}</span>
                      <span class="source">Source: {{ getNodeSource(node) }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Models Section -->
          <section v-if="resolution.models_unresolved.length > 0" class="resolve-section">
            <h4 class="section-title">/* MODELS ({{ resolution.models_unresolved.length }}) */</h4>
            <div class="resolve-card warning-card">
              <div class="card-header">
                <span class="status-icon">⚠</span>
                <span class="card-title">Manual download required</span>
              </div>
              <div class="items-list">
                <div
                  v-for="model in resolution.models_unresolved"
                  :key="model.filename"
                  class="item"
                >
                  <div class="item-info">
                    <div class="item-name">{{ model.filename }}</div>
                    <div class="item-meta">
                      <span v-if="model.expected_category">Type: {{ model.expected_category }}</span>
                      <span v-if="getDownloadInfo(model.filename)">
                        Size: ~{{ getDownloadInfo(model.filename)!.estimated_size_mb }} MB
                      </span>
                    </div>
                    <div v-if="!canDownload(model.filename)" class="item-warning">
                      No auto-download source configured
                    </div>
                  </div>
                  <div v-if="getDownloadUrl(model.filename)" class="item-action">
                    <button class="link-btn" @click="openDownloadUrl(getDownloadUrl(model.filename)!)">
                      Open Source ↗
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Already Resolved -->
          <section v-if="resolution.nodes_resolved.length > 0 || resolution.models_resolved.length > 0" class="resolve-section">
            <h4 class="section-title">
              /* ALREADY AVAILABLE ({{ resolution.nodes_resolved.length + resolution.models_resolved.length }}) */
            </h4>
            <div class="info-text">
              {{ resolution.nodes_resolved.length }} nodes and {{ resolution.models_resolved.length }} models are already installed
            </div>
          </section>

          <!-- Actions Summary -->
          <div class="actions-summary">
            <div class="summary-title">This will:</div>
            <ol class="summary-list">
              <li v-if="resolution.nodes_to_install.length">
                Install {{ resolution.nodes_to_install.length }} nodes (~{{ resolution.estimated_time_seconds }}s)
              </li>
              <li v-if="resolution.nodes_to_install.length">
                Restart ComfyUI to load new nodes
              </li>
              <li v-if="resolution.models_to_download.length">
                You'll still need to download {{ resolution.models_to_download.length }} model(s) manually
              </li>
            </ol>
            <div v-if="resolution.estimated_size_mb" class="estimated-size">
              Estimated download: {{ resolution.estimated_size_mb }} MB
            </div>
          </div>
        </template>
      </div>

      <div class="dialog-footer">
        <button class="btn secondary" @click="emit('close')">Cancel</button>
        <button
          v-if="resolution && resolution.nodes_to_install.length && resolution.models_to_download.length"
          class="btn primary"
          :disabled="installing"
          @click="handleInstallNodesOnly"
        >
          {{ installing ? 'Installing...' : 'Install Nodes Only' }}
        </button>
        <button
          v-if="resolution && (resolution.nodes_to_install.length || resolution.models_to_download.length)"
          class="btn primary"
          :disabled="installing || (resolution.models_to_download.length > 0 && !allModelsCanDownload)"
          @click="handleInstallAll"
        >
          {{ installing ? 'Installing...' : 'Install All' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { WorkflowResolutionPlan, UnresolvedNode } from '@/types/comfygit'

const props = defineProps<{
  workflowName: string
}>()

const emit = defineEmits<{
  close: []
  install: []
  refresh: []
}>()

const { resolveWorkflow, installWorkflowDeps } = useComfyGitService()

const resolution = ref<WorkflowResolutionPlan | null>(null)
const loading = ref(false)
const installing = ref(false)
const error = ref<string | null>(null)

const allModelsCanDownload = computed(() => {
  if (!resolution.value) return false
  return resolution.value.download_results?.every(d => d.can_download) ?? false
})

async function loadResolution() {
  loading.value = true
  error.value = null
  try {
    resolution.value = await resolveWorkflow(props.workflowName)
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to analyze workflow'
  } finally {
    loading.value = false
  }
}

function getBestMatch(node: UnresolvedNode) {
  if (!node.possible_matches || node.possible_matches.length === 0) return null
  return node.possible_matches.reduce((best, current) =>
    current.match_confidence > best.match_confidence ? current : best
  )
}

function getConfidenceClass(confidence: number): string {
  if (confidence >= 0.9) return 'high'
  if (confidence >= 0.7) return 'medium'
  return 'low'
}

function getNodeSource(node: UnresolvedNode): string {
  const match = getBestMatch(node)
  if (!match) return 'Unknown'
  if (match.package_id.startsWith('http')) return 'GitHub'
  return 'ComfyUI Registry'
}

function getDownloadInfo(filename: string) {
  return resolution.value?.download_results?.find(d => d.model === filename)
}

function canDownload(filename: string): boolean {
  const info = getDownloadInfo(filename)
  return info?.can_download ?? false
}

function getDownloadUrl(filename: string): string | null {
  const info = getDownloadInfo(filename)
  return info?.source_url || null
}

function openDownloadUrl(url: string) {
  window.open(url, '_blank')
}

async function handleInstallNodesOnly() {
  if (!resolution.value || installing.value) return

  installing.value = true
  error.value = null

  try {
    await installWorkflowDeps(
      props.workflowName,
      resolution.value.nodes_to_install,
      []
    )
    emit('install')
    emit('refresh')
    emit('close')
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Installation failed'
  } finally {
    installing.value = false
  }
}

async function handleInstallAll() {
  if (!resolution.value || installing.value) return

  installing.value = true
  error.value = null

  try {
    await installWorkflowDeps(
      props.workflowName,
      resolution.value.nodes_to_install,
      resolution.value.models_to_download
    )
    emit('install')
    emit('refresh')
    emit('close')
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Installation failed'
  } finally {
    installing.value = false
  }
}

onMounted(loadResolution)
</script>

<style scoped>
.dialog-overlay {
  position: fixed;
  inset: 0;
  background: var(--cg-color-bg-overlay);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10003;
}

.dialog-content {
  background: var(--cg-color-bg-primary);
  border: 2px solid var(--cg-color-border);
  box-shadow: var(--cg-shadow-xl);
  max-width: 700px;
  width: 90vw;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
}

.dialog-header {
  padding: var(--cg-space-4);
  border-bottom: 1px solid var(--cg-color-border);
  background: var(--cg-color-bg-tertiary);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dialog-title {
  color: var(--cg-color-accent);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  font-size: var(--cg-font-size-sm);
  text-shadow: 0 0 8px var(--cg-color-accent);
  margin: 0;
}

.icon-btn {
  background: transparent;
  border: 1px solid transparent;
  color: var(--cg-color-text-primary);
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-btn:hover {
  background: var(--cg-color-bg-hover);
  border-color: var(--cg-color-border-subtle);
}

.dialog-body {
  flex: 1;
  overflow-y: auto;
  padding: var(--cg-space-4);
}

.loading,
.error-message {
  text-align: center;
  padding: var(--cg-space-4);
  color: var(--cg-color-text-muted);
}

.error-message {
  color: var(--cg-color-error);
  border: 1px solid var(--cg-color-error);
  background: transparent;
}

.intro-message {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-base);
  margin-bottom: var(--cg-space-4);
}

.resolve-section {
  margin-bottom: var(--cg-space-4);
}

.section-title {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  margin: 0 0 var(--cg-space-2) 0;
  font-weight: var(--cg-font-weight-normal);
}

.resolve-card {
  border: 1px solid;
  padding: var(--cg-space-3);
}

.success-card {
  border-color: var(--cg-color-success);
  background: var(--cg-color-bg-tertiary);
}

.warning-card {
  border-color: var(--cg-color-warning);
  background: var(--cg-color-bg-tertiary);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: var(--cg-space-3);
}

.status-icon {
  font-size: var(--cg-font-size-lg);
}

.card-title {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-base);
  font-weight: var(--cg-font-weight-semibold);
}

.items-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: var(--cg-space-3);
  border-left: 2px solid var(--cg-color-border-subtle);
}

.item-info {
  flex: 1;
}

.item-name {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-base);
  margin-bottom: 4px;
}

.item-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
}

.confidence-badge {
  padding: 2px 6px;
  border: 1px solid;
  font-family: var(--cg-font-mono);
}

.confidence-badge.high {
  color: var(--cg-color-success);
  border-color: var(--cg-color-success);
}

.confidence-badge.medium {
  color: var(--cg-color-warning);
  border-color: var(--cg-color-warning);
}

.confidence-badge.low {
  color: var(--cg-color-error);
  border-color: var(--cg-color-error);
}

.match-type {
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.source {
  font-style: italic;
}

.item-warning {
  color: var(--cg-color-warning);
  font-size: var(--cg-font-size-xs);
  margin-top: 4px;
}

.item-action {
  margin-left: var(--cg-space-2);
}

.link-btn {
  padding: 4px 8px;
  background: transparent;
  color: var(--cg-color-info);
  border: 1px solid var(--cg-color-info);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  cursor: pointer;
  white-space: nowrap;
}

.link-btn:hover {
  background: var(--cg-color-bg-hover);
  box-shadow: 0 0 8px rgba(0, 168, 255, 0.3);
}

.info-text {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-sm);
  padding: var(--cg-space-2);
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
}

.actions-summary {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border);
  padding: var(--cg-space-3);
  margin-top: var(--cg-space-4);
}

.summary-title {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-base);
  font-weight: var(--cg-font-weight-semibold);
  margin-bottom: var(--cg-space-2);
}

.summary-list {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-sm);
  margin: 0;
  padding-left: var(--cg-space-4);
}

.summary-list li {
  margin-bottom: 4px;
}

.estimated-size {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
  margin-top: var(--cg-space-2);
  font-style: italic;
}

.dialog-footer {
  padding: var(--cg-space-4);
  border-top: 1px solid var(--cg-color-border);
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  background: var(--cg-color-bg-tertiary);
}

.btn {
  padding: 8px 16px;
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  cursor: pointer;
  border: 1px solid;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn.secondary {
  background: transparent;
  color: var(--cg-color-text-secondary);
  border-color: var(--cg-color-border);
}

.btn.secondary:hover:not(:disabled) {
  color: var(--cg-color-text-primary);
  border-color: var(--cg-color-text-primary);
}

.btn.primary {
  background: transparent;
  color: var(--cg-color-accent);
  border-color: var(--cg-color-accent);
}

.btn.primary:hover:not(:disabled) {
  background: var(--cg-color-bg-hover);
  box-shadow: 0 0 8px rgba(0, 255, 65, 0.3);
}

/* Scrollbar */
.dialog-body::-webkit-scrollbar {
  width: 8px;
}

.dialog-body::-webkit-scrollbar-track {
  background: var(--cg-color-bg-tertiary);
}

.dialog-body::-webkit-scrollbar-thumb {
  background: var(--cg-color-border-subtle);
  border: 1px solid var(--cg-color-bg-tertiary);
}

.dialog-body::-webkit-scrollbar-thumb:hover {
  background: var(--cg-color-accent);
}
</style>
