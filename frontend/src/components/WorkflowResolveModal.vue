<template>
  <BaseModal
    :title="`RESOLVE DEPENDENCIES: ${workflowName}`"
    size="lg"
    :loading="loading"
    :error="error || undefined"
    @close="emit('close')"
  >
    <template #body>
        <template v-if="resolution">
          <div class="intro-message">
            This workflow needs the following to work:
          </div>

          <!-- Nodes Section -->
          <section v-if="resolution.nodes_unresolved.length > 0" class="resolve-section">
            <BaseTitle variant="section">NODES ({{ resolution.nodes_unresolved.length }})</BaseTitle>
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
            <BaseTitle variant="section">MODELS ({{ resolution.models_unresolved.length }})</BaseTitle>
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
            <BaseTitle variant="section">
              ALREADY AVAILABLE ({{ resolution.nodes_resolved.length + resolution.models_resolved.length }})
            </BaseTitle>
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
    </template>

    <template #footer>
      <BaseButton variant="secondary" @click="emit('close')">
        Cancel
      </BaseButton>
      <BaseButton
        v-if="resolution && resolution.nodes_to_install.length && resolution.models_to_download.length"
        variant="secondary"
        :disabled="installing"
        :loading="installing"
        @click="handleInstallNodesOnly"
      >
        Install Nodes Only
      </BaseButton>
      <BaseButton
        v-if="resolution && (resolution.nodes_to_install.length || resolution.models_to_download.length)"
        variant="primary"
        :disabled="installing || (resolution.models_to_download.length > 0 && !allModelsCanDownload)"
        :loading="installing"
        @click="handleInstallAll"
      >
        Install All
      </BaseButton>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { WorkflowResolutionPlan, UnresolvedNode } from '@/types/comfygit'
import BaseModal from './base/BaseModal.vue'
import BaseButton from './base/BaseButton.vue'
import BaseTitle from './base/BaseTitle.vue'

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
.intro-message {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-base);
  margin-bottom: var(--cg-space-4);
}

.resolve-section {
  margin-bottom: var(--cg-space-4);
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
</style>
