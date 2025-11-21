<template>
  <div class="branch-section">
    <div class="section-header">
      <h3 class="view-title">BRANCHES</h3>
      <button class="add-btn" @click="showCreateInput = true" title="New Branch">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 2v12M2 8h12" stroke="currentColor" stroke-width="2" fill="none"/>
        </svg>
      </button>
    </div>

    <!-- Create branch input -->
    <div v-if="showCreateInput" class="create-branch-row">
      <input
        ref="createInput"
        v-model="newBranchName"
        class="branch-input"
        placeholder="Branch name..."
        @keyup.enter="handleCreate"
        @keyup.escape="cancelCreate"
      >
      <button class="action-btn create" @click="handleCreate" :disabled="!newBranchName.trim()">
        Create
      </button>
      <button class="action-btn cancel" @click="cancelCreate">
        Cancel
      </button>
    </div>

    <!-- Branch list -->
    <div v-if="branches.length === 0" class="empty">
      No branches found
    </div>
    <div v-else class="branch-list">
      <div
        v-for="branch in branches"
        :key="branch.name"
        class="branch-item"
        :class="{ current: branch.is_current }"
      >
        <span class="branch-indicator">{{ branch.is_current ? '●' : '○' }}</span>
        <span class="branch-name">{{ branch.name }}</span>
        <button
          v-if="!branch.is_current"
          class="switch-btn"
          @click="$emit('switch', branch.name)"
        >
          Switch
        </button>
        <span v-else class="current-label">current</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import type { BranchInfo } from '@/types/comfygit'

defineProps<{
  branches: BranchInfo[]
  current: string | null
}>()

const emit = defineEmits<{
  switch: [branch: string]
  create: [name: string]
}>()

const showCreateInput = ref(false)
const newBranchName = ref('')
const createInput = ref<HTMLInputElement | null>(null)

function handleCreate() {
  if (newBranchName.value.trim()) {
    emit('create', newBranchName.value.trim())
    cancelCreate()
  }
}

function cancelCreate() {
  showCreateInput.value = false
  newBranchName.value = ''
}

// Focus input when shown
nextTick(() => {
  if (showCreateInput.value && createInput.value) {
    createInput.value.focus()
  }
})
</script>

<style scoped>
.branch-section {
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

.add-btn {
  background: transparent;
  border: 1px solid transparent;
  color: var(--cg-color-text-muted);
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.add-btn:hover {
  background: var(--cg-color-bg-hover);
  border-color: var(--cg-color-border-subtle);
  color: var(--cg-color-accent);
}

.create-branch-row {
  display: flex;
  gap: 8px;
  padding: var(--cg-space-3);
  margin-bottom: var(--cg-space-3);
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
}

.branch-input {
  flex: 1;
  padding: 8px 12px;
  background: var(--cg-color-bg-primary);
  border: 1px solid var(--cg-color-border-subtle);
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
  font-family: var(--cg-font-mono);
}

.branch-input:focus {
  outline: none;
  border-color: var(--cg-color-accent);
  box-shadow: 0 0 8px rgba(0, 255, 65, 0.2);
}

.action-btn {
  padding: 8px 14px;
  font-size: var(--cg-font-size-xs);
  font-family: var(--cg-font-mono);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  cursor: pointer;
  border: 1px solid;
}

.action-btn.create {
  background: transparent;
  color: var(--cg-color-accent);
  border-color: var(--cg-color-accent);
}

.action-btn.create:hover:not(:disabled) {
  background: var(--cg-color-bg-hover);
  box-shadow: 0 0 8px rgba(0, 255, 65, 0.3);
}

.action-btn.create:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.action-btn.cancel {
  background: transparent;
  color: var(--cg-color-text-secondary);
  border-color: var(--cg-color-border);
}

.action-btn.cancel:hover {
  color: var(--cg-color-text-primary);
  border-color: var(--cg-color-text-primary);
}

.empty {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
  text-align: center;
  padding: var(--cg-space-6);
}

.branch-list {
  flex: 1;
  overflow-y: auto;
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
}

.branch-item {
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border-bottom: 1px solid var(--cg-color-border-subtle);
  font-size: var(--cg-font-size-sm);
}

.branch-item:last-child {
  border-bottom: none;
}

.branch-item:hover {
  background: var(--cg-color-bg-hover);
}

.branch-item.current {
  background: rgba(0, 255, 65, 0.1);
  border-left: 3px solid var(--cg-color-accent);
  padding-left: 9px;
}

.branch-indicator {
  font-size: 10px;
  margin-right: 10px;
  color: var(--cg-color-text-muted);
}

.branch-item.current .branch-indicator {
  color: var(--cg-color-accent);
}

.branch-name {
  flex: 1;
  color: var(--cg-color-text-primary);
  font-family: var(--cg-font-mono);
}

.switch-btn {
  padding: 4px 10px;
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  cursor: pointer;
  background: transparent;
  color: var(--cg-color-text-secondary);
  border: 1px solid var(--cg-color-border);
  font-family: var(--cg-font-mono);
}

.switch-btn:hover {
  color: var(--cg-color-text-primary);
  border-color: var(--cg-color-text-primary);
}

.current-label {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  padding: 4px 10px;
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

/* Scrollbar */
.branch-list::-webkit-scrollbar {
  width: 8px;
}

.branch-list::-webkit-scrollbar-track {
  background: var(--cg-color-bg-tertiary);
}

.branch-list::-webkit-scrollbar-thumb {
  background: var(--cg-color-border-subtle);
  border: 1px solid var(--cg-color-bg-tertiary);
}

.branch-list::-webkit-scrollbar-thumb:hover {
  background: var(--cg-color-accent);
}
</style>
