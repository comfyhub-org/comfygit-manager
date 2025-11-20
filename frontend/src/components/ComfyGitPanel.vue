<template>
  <div class="comfygit-panel">
    <div class="panel-header">
      <div>
        <h2 class="panel-title">ComfyGit Control Panel</h2>
        <div class="panel-subtitle">
          {{ status ? `${status.environment} (${status.branch || 'detached'})` : 'Loading...' }}
        </div>
      </div>
      <button class="refresh-btn" :class="{ spinning: isLoading }" @click="refresh" title="Refresh">
        ↻
      </button>
    </div>

    <div class="panel-content">
      <div v-if="error" class="error-message">
        {{ error }}
      </div>
      <div v-else-if="!status" class="loading">
        Loading status...
      </div>
      <template v-else>
        <StatusSection :status="status" />
        <CommitSection :status="status" @committed="refresh" />
        <HistorySection :commits="commits" />
      </template>
    </div>

    <div class="panel-footer">
      <button class="export-btn" @click="handleExport" :disabled="!status">
        Export Environment
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import StatusSection from './StatusSection.vue'
import CommitSection from './CommitSection.vue'
import HistorySection from './HistorySection.vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { ComfyGitStatus, CommitInfo } from '@/types/comfygit'

const { getStatus, getHistory, exportEnv } = useComfyGitService()

const status = ref<ComfyGitStatus | null>(null)
const commits = ref<CommitInfo[]>([])
const isLoading = ref(false)
const error = ref<string | null>(null)

async function refresh() {
  isLoading.value = true
  error.value = null

  try {
    const [statusRes, historyRes] = await Promise.all([
      getStatus(),
      getHistory()
    ])
    status.value = statusRes
    commits.value = historyRes.commits
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load status'
    status.value = null
    commits.value = []
  } finally {
    isLoading.value = false
  }
}

async function handleExport() {
  try {
    const result = await exportEnv()
    if (result.status === 'success') {
      alert(`Export successful!\n\nSaved to: ${result.path}\n\nModels without sources: ${result.models_without_sources}`)
    } else {
      alert(`Export failed: ${result.message}`)
    }
  } catch (err) {
    alert(`Export error: ${err instanceof Error ? err.message : 'Unknown error'}`)
  }
}

onMounted(refresh)
</script>

<style scoped>
.comfygit-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--comfy-menu-bg, #353535);
  color: var(--input-text, #ddd);
}

.panel-header {
  padding: 16px 20px;
  border-bottom: 1px solid var(--border-color, #4a4a4a);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.panel-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
}

.panel-subtitle {
  font-size: 12px;
  color: var(--descrip-text, #999);
  margin-top: 4px;
}

.refresh-btn {
  background: transparent;
  border: none;
  color: var(--input-text, #ddd);
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 18px;
}

.refresh-btn:hover {
  background: var(--comfy-input-bg, #222);
}

.refresh-btn.spinning {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.panel-content {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

.loading {
  text-align: center;
  padding: 20px;
  color: var(--descrip-text, #999);
}

.error-message {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid #ef4444;
  border-radius: 4px;
  padding: 12px;
  color: #fca5a5;
  font-size: 13px;
}

.panel-footer {
  padding: 16px 20px;
  border-top: 1px solid var(--border-color, #4a4a4a);
}

.export-btn {
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  background: var(--comfy-input-bg, #222);
  color: var(--input-text, #ddd);
  border: 1px solid var(--border-color, #4a4a4a);
}

.export-btn:hover:not(:disabled) {
  background: var(--border-color, #4a4a4a);
}

.export-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
