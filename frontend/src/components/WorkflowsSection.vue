<template>
  <div class="workflows-section">
    <div class="section-header">
      <h3 class="view-title">WORKFLOWS</h3>
      <button
        v-if="brokenWorkflows.length > 0"
        class="resolve-all-btn"
        @click="handleResolveAll"
      >
        RESOLVE ALL ISSUES
      </button>
    </div>

    <!-- Search bar -->
    <div class="search-bar">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="🔍 Search workflows..."
        class="search-input"
      />
    </div>

    <!-- Loading state -->
    <div v-if="loading" class="loading">Loading workflows...</div>

    <!-- Error state -->
    <div v-else-if="error" class="error-message">{{ error }}</div>

    <!-- Content -->
    <div v-else class="workflows-content">
      <!-- Broken workflows (priority) -->
      <section v-if="filteredBroken.length" class="workflow-group">
        <h4 class="group-title">BROKEN ({{ filteredBroken.length }})</h4>
        <div
          v-for="wf in filteredBroken"
          :key="wf.name"
          class="workflow-item broken"
        >
          <div class="workflow-info">
            <div class="workflow-name">⚠ {{ wf.name }}</div>
            <div class="workflow-status">
              Missing: {{ wf.missing_nodes }} nodes, {{ wf.missing_models }} models
            </div>
          </div>
          <div class="workflow-actions">
            <button class="action-btn" @click="handleResolve(wf.name)">
              Resolve ▸
            </button>
            <button class="action-btn secondary" @click="handleDetails(wf.name)">
              Details ▸
            </button>
          </div>
        </div>
      </section>

      <!-- New workflows -->
      <section v-if="filteredNew.length" class="workflow-group">
        <h4 class="group-title">NEW ({{ filteredNew.length }})</h4>
        <div
          v-for="wf in filteredNew"
          :key="wf.name"
          class="workflow-item new"
        >
          <div class="workflow-info">
            <div class="workflow-name">● {{ wf.name }}</div>
            <div class="workflow-status">✓ Ready</div>
          </div>
          <div class="workflow-actions">
            <button class="action-btn secondary" @click="handleDetails(wf.name)">
              Details
            </button>
          </div>
        </div>
      </section>

      <!-- Modified workflows -->
      <section v-if="filteredModified.length" class="workflow-group">
        <h4 class="group-title">MODIFIED ({{ filteredModified.length }})</h4>
        <div
          v-for="wf in filteredModified"
          :key="wf.name"
          class="workflow-item modified"
        >
          <div class="workflow-info">
            <div class="workflow-name">⚡ {{ wf.name }}</div>
            <div class="workflow-status">✓ Ready</div>
          </div>
          <div class="workflow-actions">
            <button class="action-btn secondary" @click="handleDetails(wf.name)">
              Details
            </button>
          </div>
        </div>
      </section>

      <!-- Synced workflows (collapsible) -->
      <section v-if="filteredSynced.length" class="workflow-group">
        <h4 class="group-title clickable" @click="syncedExpanded = !syncedExpanded">
          SYNCED ({{ filteredSynced.length }}) {{ syncedExpanded ? '▼' : '▸' }}
        </h4>
        <template v-if="syncedExpanded">
          <div
            v-for="wf in filteredSynced.slice(0, showAllSynced ? undefined : 5)"
            :key="wf.name"
            class="workflow-item synced"
          >
            <div class="workflow-info">
              <div class="workflow-name">{{ wf.name }}</div>
              <div class="workflow-status">✓ Ready</div>
            </div>
            <div class="workflow-actions">
              <button class="action-btn secondary" @click="handleDetails(wf.name)">
                Details
              </button>
            </div>
          </div>
          <button
            v-if="!showAllSynced && filteredSynced.length > 5"
            class="show-more-btn"
            @click="showAllSynced = true"
          >
            View all {{ filteredSynced.length }} →
          </button>
        </template>
      </section>

      <!-- Empty state -->
      <div v-if="!filteredWorkflows.length" class="empty-state">
        <p v-if="searchQuery">No workflows match "{{ searchQuery }}"</p>
        <p v-else>No workflows found in this environment.</p>
      </div>
    </div>

    <!-- Workflow Details Modal -->
    <WorkflowDetailsModal
      v-if="showDetailsModal && selectedWorkflow"
      :workflow-name="selectedWorkflow"
      @close="showDetailsModal = false"
      @resolve="handleResolve(selectedWorkflow)"
    />

    <!-- Workflow Resolve Modal -->
    <WorkflowResolveModal
      v-if="showResolveModal && selectedWorkflow"
      :workflow-name="selectedWorkflow"
      @close="showResolveModal = false"
      @install="handleInstall"
      @refresh="emit('refresh')"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import WorkflowDetailsModal from './WorkflowDetailsModal.vue'
import WorkflowResolveModal from './WorkflowResolveModal.vue'
import type { WorkflowInfo } from '@/types/comfygit'

const emit = defineEmits<{
  refresh: []
}>()

const { getWorkflows } = useComfyGitService()

const workflows = ref<WorkflowInfo[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
const searchQuery = ref('')
const syncedExpanded = ref(false)
const showAllSynced = ref(false)
const showDetailsModal = ref(false)
const showResolveModal = ref(false)
const selectedWorkflow = ref<string | null>(null)

// Computed filters
const brokenWorkflows = computed(() =>
  workflows.value.filter(w => w.status === 'broken')
)

const newWorkflows = computed(() =>
  workflows.value.filter(w => w.status === 'new')
)

const modifiedWorkflows = computed(() =>
  workflows.value.filter(w => w.status === 'modified')
)

const syncedWorkflows = computed(() =>
  workflows.value.filter(w => w.status === 'synced')
)

// Search filtering
const filteredWorkflows = computed(() => {
  if (!searchQuery.value.trim()) return workflows.value
  const query = searchQuery.value.toLowerCase()
  return workflows.value.filter(w => w.name.toLowerCase().includes(query))
})

const filteredBroken = computed(() =>
  brokenWorkflows.value.filter(w =>
    !searchQuery.value.trim() || w.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
)

const filteredNew = computed(() =>
  newWorkflows.value.filter(w =>
    !searchQuery.value.trim() || w.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
)

const filteredModified = computed(() =>
  modifiedWorkflows.value.filter(w =>
    !searchQuery.value.trim() || w.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
)

const filteredSynced = computed(() =>
  syncedWorkflows.value.filter(w =>
    !searchQuery.value.trim() || w.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
)

async function loadWorkflows() {
  loading.value = true
  error.value = null
  try {
    workflows.value = await getWorkflows()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load workflows'
  } finally {
    loading.value = false
  }
}

function handleDetails(name: string) {
  selectedWorkflow.value = name
  showDetailsModal.value = true
}

function handleResolve(name: string) {
  selectedWorkflow.value = name
  showResolveModal.value = true
}

function handleResolveAll() {
  // TODO: Implement bulk resolution
  alert('Bulk resolution not yet implemented')
}

function handleInstall() {
  emit('refresh')
}

onMounted(loadWorkflows)
</script>

<style scoped>
.workflows-section {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--cg-space-4);
}

.view-title {
  color: var(--cg-color-accent);
  font-size: var(--cg-font-size-lg);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  margin: 0;
}

.resolve-all-btn {
  padding: 8px 14px;
  background: transparent;
  color: var(--cg-color-accent);
  border: 1px solid var(--cg-color-accent);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  cursor: pointer;
}

.resolve-all-btn:hover {
  background: var(--cg-color-bg-hover);
  box-shadow: 0 0 8px rgba(0, 255, 65, 0.3);
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

.workflows-content {
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

.workflow-group {
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

.group-title.clickable {
  cursor: pointer;
  user-select: none;
}

.group-title.clickable:hover {
  color: var(--cg-color-accent);
}

.workflow-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--cg-space-3);
  border: 1px solid var(--cg-color-border-subtle);
  background: var(--cg-color-bg-tertiary);
  margin-bottom: var(--cg-space-2);
}

.workflow-item.broken {
  border-left: 3px solid var(--cg-color-error);
}

.workflow-item.new {
  border-left: 3px solid var(--cg-color-info);
}

.workflow-item.modified {
  border-left: 3px solid var(--cg-color-warning);
}

.workflow-item.synced {
  border-left: 3px solid var(--cg-color-success);
}

.workflow-info {
  flex: 1;
  min-width: 0;
}

.workflow-name {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-base);
  margin-bottom: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.workflow-status {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
}

.workflow-actions {
  display: flex;
  gap: 8px;
  margin-left: var(--cg-space-3);
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
  white-space: nowrap;
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

.show-more-btn {
  width: 100%;
  padding: 8px;
  background: transparent;
  color: var(--cg-color-text-muted);
  border: 1px solid var(--cg-color-border-subtle);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  cursor: pointer;
  margin-top: var(--cg-space-2);
}

.show-more-btn:hover {
  color: var(--cg-color-text-primary);
  border-color: var(--cg-color-border);
}

/* Scrollbar */
.workflows-content::-webkit-scrollbar {
  width: 8px;
}

.workflows-content::-webkit-scrollbar-track {
  background: var(--cg-color-bg-tertiary);
}

.workflows-content::-webkit-scrollbar-thumb {
  background: var(--cg-color-border-subtle);
  border: 1px solid var(--cg-color-bg-tertiary);
}

.workflows-content::-webkit-scrollbar-thumb:hover {
  background: var(--cg-color-accent);
}
</style>
