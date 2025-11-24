<template>
  <div class="node-resolution-step">
    <!-- Progress Header -->
    <div class="step-header">
      <div class="step-info">
        <h3 class="step-title">Resolve Missing Nodes</h3>
        <p class="step-description">Choose how to handle each unresolved node dependency</p>
      </div>
      <div class="step-progress">
        <span class="progress-text">{{ resolvedCount }} / {{ totalNodes }} resolved</span>
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: `${progressPercentage}%` }"></div>
        </div>
      </div>
    </div>

    <!-- Current Node Card -->
    <div v-if="currentNode" class="step-body">
      <div class="current-indicator">
        <span class="indicator-label">Currently resolving:</span>
        <span class="indicator-count">{{ currentIndex + 1 }} of {{ totalNodes }}</span>
      </div>

      <NodeResolutionItem
        :node-type="currentNode.node_type"
        :has-multiple-options="!!currentNode.options?.length"
        :options="currentNode.options"
        :choice="nodeChoices?.get(currentNode.node_type)"
        @mark-optional="handleMarkOptional"
        @skip="handleSkip"
        @manual-entry="handleManualEntry"
        @search="handleSearch"
        @option-selected="handleOptionSelected"
        @clear-choice="handleClearChoice"
      />
    </div>

    <!-- Navigation Footer -->
    <div class="step-footer">
      <BaseButton
        variant="secondary"
        :disabled="currentIndex === 0"
        @click="emit('previous')"
      >
        ← Previous
      </BaseButton>

      <div class="footer-right">
        <BaseButton
          v-if="!allResolved"
          variant="ghost"
          @click="skipRemaining"
        >
          Skip All Remaining
        </BaseButton>

        <BaseButton
          v-if="isLastNode || allResolved"
          variant="primary"
          :disabled="!allResolved"
          @click="emit('complete')"
        >
          Continue to {{ hasModels ? 'Models' : 'Review' }} →
        </BaseButton>
        <BaseButton
          v-else
          variant="primary"
          :disabled="!currentNodeResolved"
          @click="emit('next')"
        >
          Next →
        </BaseButton>
      </div>
    </div>

    <!-- Search Modal -->
    <Teleport to="body">
      <div v-if="showSearch" class="node-resolution-modal-overlay" @click.self="closeSearch">
        <div class="node-search-modal">
          <div class="node-modal-header">
            <h4>Search Node Packages</h4>
            <button class="node-modal-close-btn" @click="closeSearch">✕</button>
          </div>
          <div class="node-modal-body">
            <BaseInput
              v-model="searchQuery"
              placeholder="Search by node type, package name..."
              @input="handleSearchInput"
            />
            <div v-if="searchResults.length > 0" class="node-search-results">
              <div
                v-for="result in searchResults"
                :key="result.package_id"
                class="node-search-result-item"
                @click="selectSearchResult(result)"
              >
                <div class="node-result-header">
                  <code class="node-result-package-id">{{ result.package_id }}</code>
                  <ConfidenceBadge v-if="result.match_confidence" :confidence="result.match_confidence" size="sm" />
                </div>
                <div v-if="result.description" class="node-result-description">{{ result.description }}</div>
              </div>
            </div>
            <div v-else-if="searchQuery && !isSearching" class="node-no-results">
              No packages found matching "{{ searchQuery }}"
            </div>
            <div v-if="isSearching" class="node-searching">Searching...</div>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- Manual Entry Modal -->
    <Teleport to="body">
      <div v-if="showManualEntry" class="node-resolution-modal-overlay" @click.self="closeManualEntry">
        <div class="node-manual-entry-modal">
          <div class="node-modal-header">
            <h4>Enter Package Manually</h4>
            <button class="node-modal-close-btn" @click="closeManualEntry">✕</button>
          </div>
          <div class="node-modal-body">
            <BaseInput
              v-model="manualPackageInput"
              label="Package ID or GitHub URL"
              placeholder="e.g., comfyui-my-package"
            />
            <div class="node-modal-actions">
              <BaseButton variant="secondary" @click="closeManualEntry">Cancel</BaseButton>
              <BaseButton
                variant="primary"
                :disabled="!manualPackageInput.trim()"
                @click="submitManualEntry"
              >
                Add Package
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'
import NodeResolutionItem from '../molecules/NodeResolutionItem.vue'
import ConfidenceBadge from '../atoms/ConfidenceBadge.vue'
import BaseButton from '../BaseButton.vue'
import BaseInput from '../BaseInput.vue'
import type { NodeSearchResult, NodeChoice } from '@/types/comfygit'

interface NodeOption {
  package_id: string
  title?: string
  match_confidence: number
  match_type: string
  is_installed: boolean
}

interface NodeToResolve {
  node_type: string
  reason?: string
  is_unresolved?: boolean
  options?: NodeOption[]
}

const props = defineProps<{
  nodes: NodeToResolve[]
  currentIndex: number
  nodeChoices: Map<string, NodeChoice>
  hasModels?: boolean
}>()

const emit = defineEmits<{
  (e: 'previous'): void
  (e: 'next'): void
  (e: 'complete'): void
  (e: 'mark-optional', nodeType: string): void
  (e: 'skip', nodeType: string): void
  (e: 'option-selected', nodeType: string, index: number): void
  (e: 'search', nodeType: string): void
  (e: 'manual-entry', nodeType: string): void
}>()

// Local state for modals
const showSearch = ref(false)
const showManualEntry = ref(false)
const searchQuery = ref('')
const manualPackageInput = ref('')
const searchResults = ref<NodeSearchResult[]>([])
const isSearching = ref(false)

// Computed
const currentNode = computed(() => props.nodes[props.currentIndex])
const totalNodes = computed(() => props.nodes.length)
const isLastNode = computed(() => props.currentIndex === totalNodes.value - 1)

const resolvedCount = computed(() => {
  return props.nodes.filter(n => props.nodeChoices.has(n.node_type)).length
})

const progressPercentage = computed(() =>
  totalNodes.value > 0 ? (resolvedCount.value / totalNodes.value) * 100 : 0
)

const currentNodeResolved = computed(() => {
  if (!currentNode.value) return false
  return props.nodeChoices.has(currentNode.value.node_type)
})

const allResolved = computed(() => resolvedCount.value === totalNodes.value)

// Handlers that set choice and auto-advance
function handleMarkOptional() {
  if (!currentNode.value) return
  emit('mark-optional', currentNode.value.node_type)
  autoAdvance()
}

function handleSkip() {
  if (!currentNode.value) return
  emit('skip', currentNode.value.node_type)
  autoAdvance()
}

function handleOptionSelected(index: number) {
  if (!currentNode.value) return
  emit('option-selected', currentNode.value.node_type, index)
  autoAdvance()
}

function handleClearChoice() {
  // When clearing, we'll need the parent to handle this
  // For now, this would require adding a new emit
}

function handleSearch() {
  if (!currentNode.value) return
  searchQuery.value = currentNode.value.node_type
  showSearch.value = true
}

function handleManualEntry() {
  manualPackageInput.value = ''
  showManualEntry.value = true
}

function closeSearch() {
  showSearch.value = false
  searchQuery.value = ''
  searchResults.value = []
}

function closeManualEntry() {
  showManualEntry.value = false
  manualPackageInput.value = ''
}

function handleSearchInput() {
  // TODO: Connect to actual search API via composable
  isSearching.value = true
  // Simulated delay - in real impl, call searchNodes from useWorkflowResolution
  setTimeout(() => {
    isSearching.value = false
  }, 300)
}

function selectSearchResult(result: NodeSearchResult) {
  if (!currentNode.value) return
  // This would need to emit the selection with the package_id
  emit('search', currentNode.value.node_type)
  closeSearch()
  autoAdvance()
}

function submitManualEntry() {
  if (!currentNode.value || !manualPackageInput.value.trim()) return
  emit('manual-entry', currentNode.value.node_type)
  closeManualEntry()
  autoAdvance()
}

function skipRemaining() {
  // Skip all unresolved nodes
  for (const node of props.nodes) {
    if (!props.nodeChoices.has(node.node_type)) {
      emit('skip', node.node_type)
    }
  }
}

function autoAdvance() {
  // Auto-advance to next unresolved node or complete
  nextTick(() => {
    if (allResolved.value) {
      // All done - user can click complete
      return
    }

    // Find next unresolved
    const nextUnresolvedIndex = props.nodes.findIndex(
      (n, i) => i > props.currentIndex && !props.nodeChoices.has(n.node_type)
    )

    if (nextUnresolvedIndex !== -1) {
      // There's an unresolved node ahead - advance
      emit('next')
    } else if (!isLastNode.value) {
      // Just advance to next
      emit('next')
    }
  })
}
</script>

<style scoped>
.node-resolution-step {
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

.step-progress {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--cg-space-1);
  min-width: 180px;
}

.progress-text {
  font-size: var(--cg-font-size-sm);
  font-family: var(--cg-font-mono);
  color: var(--cg-color-text-secondary);
}

.progress-bar {
  width: 100%;
  height: 6px;
  background: var(--cg-color-bg-tertiary);
  border-radius: var(--cg-radius-full);
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: var(--cg-color-success);
  transition: width var(--cg-transition-base);
}

.step-body {
  flex: 1;
  overflow-y: auto;
}

.current-indicator {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--cg-space-2);
  font-size: var(--cg-font-size-sm);
}

.indicator-label {
  color: var(--cg-color-text-muted);
}

.indicator-count {
  font-family: var(--cg-font-mono);
  color: var(--cg-color-text-secondary);
}

.step-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--cg-space-3);
  border-top: 1px solid var(--cg-color-border);
}

.footer-right {
  display: flex;
  gap: var(--cg-space-2);
  align-items: center;
}
</style>

<!-- Unscoped styles for Teleported modal content -->
<style>
.node-resolution-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10010;
}

.node-search-modal,
.node-manual-entry-modal {
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

.node-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid var(--cg-color-border, #333);
  background: var(--cg-color-bg-secondary, #252542);
}

.node-modal-header h4 {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: var(--cg-color-text-primary, #fff);
}

.node-modal-close-btn {
  background: none;
  border: none;
  font-size: 18px;
  color: var(--cg-color-text-muted, #888);
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.15s ease;
}

.node-modal-close-btn:hover {
  color: var(--cg-color-text-primary, #fff);
  background: var(--cg-color-bg-hover, #333);
}

.node-modal-body {
  padding: 16px;
  overflow-y: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.node-modal-actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  margin-top: 8px;
}

.node-search-results {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.node-search-result-item {
  padding: 8px 12px;
  border: 1px solid var(--cg-color-border-subtle, #444);
  border-radius: 6px;
  background: var(--cg-color-bg-secondary, #252542);
  cursor: pointer;
  transition: all 0.15s ease;
}

.node-search-result-item:hover {
  border-color: var(--cg-color-accent, #7c3aed);
  background: var(--cg-color-bg-hover, #333);
}

.node-result-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}

.node-result-package-id {
  font-family: var(--cg-font-mono, monospace);
  font-weight: 600;
  font-size: 13px;
  color: var(--cg-color-accent, #7c3aed);
}

.node-result-description {
  font-size: 12px;
  color: var(--cg-color-text-muted, #888);
}

.node-no-results,
.node-searching {
  padding: 16px;
  text-align: center;
  color: var(--cg-color-text-muted, #888);
  font-size: 13px;
}
</style>
