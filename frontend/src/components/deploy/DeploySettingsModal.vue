<template>
  <BaseModal
    title="DEPLOY SETTINGS"
    size="sm"
    @close="$emit('close')"
  >
    <template #body>
      <div class="settings-content">
        <!-- GitHub Authentication Section -->
        <div class="settings-section">
          <div class="section-header">
            <span class="section-title">GitHub Authentication</span>
          </div>
          <p class="section-description">
            Required for push/pull to private repositories on cloud instances.
          </p>

          <!-- SSH Remote Warning -->
          <div v-if="hasSshRemote" class="ssh-warning">
            <span class="warning-icon">!</span>
            <div class="warning-content">
              <strong>SSH remote detected</strong>
              <p>PAT authentication only works with HTTPS remotes. Consider converting your remote URL from <code>git@github.com:...</code> to <code>https://github.com/...</code></p>
            </div>
          </div>

          <div class="form-row">
            <label class="form-label">Personal Access Token</label>
            <div class="token-wrapper">
              <input
                v-model="token"
                :type="showToken ? 'text' : 'password'"
                class="form-input"
                placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
              />
              <button
                type="button"
                class="toggle-visibility"
                @click="showToken = !showToken"
              >
                {{ showToken ? 'Hide' : 'Show' }}
              </button>
            </div>
            <div class="form-help">
              Token is stored in your browser only. Never saved to the server.
            </div>
          </div>

          <!-- Test Result -->
          <div v-if="testResult" :class="['test-result', testResult.type]">
            <span class="result-icon">{{ testResult.type === 'success' ? '✓' : '✕' }}</span>
            <span class="result-message">{{ testResult.message }}</span>
          </div>

          <!-- Actions -->
          <div class="token-actions">
            <ActionButton
              variant="ghost"
              size="sm"
              :loading="isTesting"
              :disabled="!token || isTesting"
              @click="handleTest"
            >
              Test Connection
            </ActionButton>
            <ActionButton
              v-if="hasStoredToken"
              variant="destructive"
              size="xs"
              @click="handleClear"
            >
              Clear
            </ActionButton>
          </div>
        </div>
      </div>
    </template>

    <template #footer>
      <ActionButton
        variant="primary"
        size="sm"
        :disabled="!token"
        @click="handleSave"
      >
        Save
      </ActionButton>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useGitAuth, isRemoteSsh } from '@/composables/useGitAuth'
import { useComfyGitService } from '@/composables/useComfyGitService'
import BaseModal from '@/components/base/BaseModal.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'

const emit = defineEmits<{
  close: []
  saved: []
}>()

const { getToken, setToken, clearToken, hasToken } = useGitAuth()
const { getRemotes, testGitAuth } = useComfyGitService()

// Form state
const token = ref('')
const showToken = ref(false)
const isTesting = ref(false)
const testResult = ref<{
  type: 'success' | 'error'
  message: string
} | null>(null)

// Remote state for SSH warning
const hasSshRemote = ref(false)

// Computed
const hasStoredToken = computed(() => hasToken())

// Load existing token and check remotes on mount
onMounted(async () => {
  const storedToken = getToken()
  if (storedToken) {
    token.value = storedToken
  }

  // Check if origin remote uses SSH
  try {
    const result = await getRemotes()
    const origin = result.remotes?.find(r => r.name === 'origin')
    if (origin && isRemoteSsh(origin.url)) {
      hasSshRemote.value = true
    }
  } catch {
    // Ignore - just won't show warning
  }
})

async function handleTest() {
  if (!token.value) return

  isTesting.value = true
  testResult.value = null

  try {
    const result = await testGitAuth(token.value)
    testResult.value = {
      type: result.status === 'success' ? 'success' : 'error',
      message: result.message
    }
  } catch (err) {
    testResult.value = {
      type: 'error',
      message: err instanceof Error ? err.message : 'Connection test failed'
    }
  } finally {
    isTesting.value = false
  }
}

function handleSave() {
  if (token.value) {
    setToken(token.value)
    emit('saved')
    emit('close')
  }
}

function handleClear() {
  clearToken()
  token.value = ''
  testResult.value = null
}
</script>

<style scoped>
.settings-content {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}

.settings-section {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
}

.section-header {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
}

.section-title {
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-medium);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  color: var(--cg-color-text-primary);
}

.section-description {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  margin: 0;
  line-height: 1.5;
}

/* SSH Warning */
.ssh-warning {
  display: flex;
  align-items: flex-start;
  gap: var(--cg-space-2);
  padding: var(--cg-space-3);
  background: var(--cg-color-warning-muted);
  border: 1px solid var(--cg-color-warning);
}

.warning-icon {
  color: var(--cg-color-warning);
  font-weight: bold;
  font-size: var(--cg-font-size-sm);
}

.warning-content {
  font-size: var(--cg-font-size-xs);
  line-height: 1.5;
}

.warning-content strong {
  color: var(--cg-color-text-primary);
}

.warning-content p {
  margin: var(--cg-space-1) 0 0 0;
  color: var(--cg-color-text-secondary);
}

.warning-content code {
  padding: 1px 4px;
  background: var(--cg-color-bg-secondary);
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

.token-wrapper {
  display: flex;
  align-items: center;
  gap: var(--cg-space-1);
}

.form-input {
  flex: 1;
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

.toggle-visibility {
  padding: var(--cg-space-2) var(--cg-space-3);
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border);
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  cursor: pointer;
}

.toggle-visibility:hover {
  color: var(--cg-color-text-primary);
  border-color: var(--cg-color-border-strong);
}

.form-help {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  font-style: italic;
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

/* Token Actions */
.token-actions {
  display: flex;
  gap: var(--cg-space-2);
}
</style>
