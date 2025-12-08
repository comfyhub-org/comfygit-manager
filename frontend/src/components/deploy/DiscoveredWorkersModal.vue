<template>
  <BaseModal
    title="DISCOVERED WORKERS"
    size="md"
    @close="$emit('close')"
  >
    <template #body>
      <div class="discovered-content">
        <!-- Workers List -->
        <div v-if="workers.length > 0" class="workers-list">
          <div
            v-for="worker in workers"
            :key="`${worker.host}:${worker.port}`"
            class="worker-item"
          >
            <div class="worker-info">
              <span class="worker-name">{{ worker.name }}</span>
              <span class="worker-address">{{ worker.host }}:{{ worker.port }}</span>
              <span v-if="worker.gpu_info" class="worker-gpu">{{ worker.gpu_info }}</span>
            </div>
            <ActionButton
              variant="primary"
              size="xs"
              @click="selectWorker(worker)"
            >
              Add
            </ActionButton>
          </div>
        </div>

        <!-- No workers found -->
        <div v-else class="empty-state">
          <span class="empty-icon">📡</span>
          <span class="empty-text">No workers found on the network</span>
          <span class="empty-help">Make sure workers are running with <code>--broadcast</code></span>
        </div>

        <!-- API Key Entry (shown when worker selected) -->
        <div v-if="selectedWorker" class="api-key-section">
          <div class="selected-worker">
            <span class="selected-label">Adding:</span>
            <span class="selected-name">{{ selectedWorker.name }}</span>
            <span class="selected-address">({{ selectedWorker.host }}:{{ selectedWorker.port }})</span>
          </div>

          <div class="form-row">
            <label class="form-label">API Key</label>
            <div class="api-key-wrapper">
              <input
                ref="apiKeyInput"
                v-model="apiKey"
                :type="showApiKey ? 'text' : 'password'"
                class="form-input"
                placeholder="cg_wk_*********************************"
                @keyup.enter="handleAdd"
              />
              <button
                class="toggle-visibility"
                @click="showApiKey = !showApiKey"
                type="button"
              >
                {{ showApiKey ? '👁' : '👁‍🗨' }}
              </button>
            </div>
            <div class="form-help">
              <span class="help-icon">ⓘ</span>
              Run <code>cg-deploy worker setup</code> on the worker to get the key
            </div>
          </div>

          <!-- Test Result -->
          <div v-if="testResult" :class="['test-result', testResult.type]">
            <span class="result-icon">{{ testResult.type === 'success' ? '✓' : '✕' }}</span>
            <span class="result-message">{{ testResult.message }}</span>
          </div>
        </div>
      </div>
    </template>

    <template #footer>
      <div class="modal-actions">
        <ActionButton
          v-if="selectedWorker"
          variant="ghost"
          size="sm"
          @click="selectedWorker = null; apiKey = ''; testResult = null"
        >
          Back
        </ActionButton>
        <ActionButton
          v-if="selectedWorker"
          variant="primary"
          size="sm"
          :loading="isAdding"
          :disabled="!apiKey || isAdding"
          @click="handleAdd"
        >
          Add Worker
        </ActionButton>
      </div>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { DiscoveredWorker, AddWorkerRequest } from '@/types/comfygit'
import BaseModal from '@/components/base/BaseModal.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'

const props = defineProps<{
  workers: DiscoveredWorker[]
}>()

const emit = defineEmits<{
  close: []
  add: [request: AddWorkerRequest]
}>()

const { testWorkerConnection } = useComfyGitService()

const selectedWorker = ref<DiscoveredWorker | null>(null)
const apiKey = ref('')
const showApiKey = ref(false)
const isAdding = ref(false)
const apiKeyInput = ref<HTMLInputElement | null>(null)
const testResult = ref<{
  type: 'success' | 'error'
  message: string
} | null>(null)

async function selectWorker(worker: DiscoveredWorker) {
  selectedWorker.value = worker
  apiKey.value = ''
  testResult.value = null
  await nextTick()
  apiKeyInput.value?.focus()
}

async function handleAdd() {
  if (!selectedWorker.value || !apiKey.value) return

  isAdding.value = true
  testResult.value = null

  try {
    // Test connection first
    const result = await testWorkerConnection({
      host: selectedWorker.value.host,
      port: selectedWorker.value.port,
      api_key: apiKey.value
    })

    if (result.status === 'success') {
      emit('add', {
        name: selectedWorker.value.name,
        host: selectedWorker.value.host,
        port: selectedWorker.value.port,
        api_key: apiKey.value
      })
    } else {
      testResult.value = {
        type: 'error',
        message: result.message
      }
    }
  } catch (err) {
    testResult.value = {
      type: 'error',
      message: err instanceof Error ? err.message : 'Connection failed'
    }
  } finally {
    isAdding.value = false
  }
}
</script>

<style scoped>
.discovered-content {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}

.workers-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.worker-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border);
}

.worker-info {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
}

.worker-name {
  color: var(--cg-color-text-primary);
  font-weight: var(--cg-font-weight-medium);
  font-size: var(--cg-font-size-sm);
}

.worker-address {
  color: var(--cg-color-text-muted);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
}

.worker-gpu {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-xs);
}

/* Empty State */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--cg-space-2);
  padding: var(--cg-space-6);
  text-align: center;
}

.empty-icon {
  font-size: 24px;
  opacity: 0.5;
}

.empty-text {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
}

.empty-help {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
}

.empty-help code {
  padding: 1px 4px;
  background: var(--cg-color-bg-secondary);
  font-family: var(--cg-font-mono);
  color: var(--cg-color-accent);
}

/* API Key Section */
.api-key-section {
  border-top: 1px solid var(--cg-color-border-subtle);
  padding-top: var(--cg-space-4);
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
}

.selected-worker {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  font-size: var(--cg-font-size-sm);
}

.selected-label {
  color: var(--cg-color-text-muted);
}

.selected-name {
  color: var(--cg-color-text-primary);
  font-weight: var(--cg-font-weight-medium);
}

.selected-address {
  color: var(--cg-color-text-muted);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
}

/* Form */
.form-row {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
}

.form-label {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-secondary);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.form-input {
  padding: var(--cg-space-2) var(--cg-space-3);
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border);
  color: var(--cg-color-text-primary);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
}

.form-input:focus {
  outline: none;
  border-color: var(--cg-color-accent);
}

.api-key-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.api-key-wrapper .form-input {
  width: 100%;
  padding-right: 40px;
}

.toggle-visibility {
  position: absolute;
  right: 8px;
  background: transparent;
  border: none;
  color: var(--cg-color-text-muted);
  cursor: pointer;
  padding: 4px;
  font-size: 14px;
}

.toggle-visibility:hover {
  color: var(--cg-color-text-primary);
}

.form-help {
  display: flex;
  align-items: center;
  gap: var(--cg-space-1);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
}

.help-icon {
  font-size: 10px;
}

.form-help code {
  padding: 1px 4px;
  background: var(--cg-color-bg-secondary);
  font-family: var(--cg-font-mono);
  color: var(--cg-color-accent);
}

/* Test Result */
.test-result {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  padding: var(--cg-space-2) var(--cg-space-3);
  font-size: var(--cg-font-size-sm);
}

.test-result.success {
  background: var(--cg-color-success-muted);
  border: 1px solid var(--cg-color-success);
}

.test-result.error {
  background: var(--cg-color-error-muted);
  border: 1px solid var(--cg-color-error);
}

.result-icon {
  font-weight: bold;
}

.test-result.success .result-icon {
  color: var(--cg-color-success);
}

.test-result.error .result-icon {
  color: var(--cg-color-error);
}

.result-message {
  color: var(--cg-color-text-primary);
}

/* Modal Actions */
.modal-actions {
  display: flex;
  gap: var(--cg-space-2);
  justify-content: flex-end;
}
</style>
