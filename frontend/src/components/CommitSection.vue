<template>
  <div class="commit-section">
    <h3 class="section-title">Commit</h3>
    <div class="commit-card">
      <input
        v-model="message"
        type="text"
        class="commit-input"
        :placeholder="hasChanges ? 'Enter commit message...' : 'No changes to commit'"
        :disabled="!hasChanges || isLoading"
        @keyup.enter="handleCommit"
      >
      <button
        class="commit-btn"
        :disabled="!hasChanges || !message.trim() || isLoading"
        @click="handleCommit"
      >
        {{ isLoading ? 'Committing...' : 'Commit' }}
      </button>
      <div v-if="result" :class="['result', result.type]">
        {{ result.message }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { ComfyGitStatus } from '@/types/comfygit'
import { useComfyGitService } from '@/composables/useComfyGitService'

const props = defineProps<{
  status: ComfyGitStatus
}>()

const emit = defineEmits<{
  committed: []
}>()

const { commit } = useComfyGitService()

const message = ref('')
const isLoading = ref(false)
const result = ref<{ type: 'success' | 'error', message: string } | null>(null)

const hasChanges = computed(() => {
  const wf = props.status.workflows
  return wf.new.length > 0 || wf.modified.length > 0 || wf.deleted.length > 0 || props.status.has_changes
})

async function handleCommit() {
  if (!hasChanges.value || !message.value.trim() || isLoading.value) return

  isLoading.value = true
  result.value = null

  try {
    const res = await commit(message.value.trim())

    if (res.status === 'success') {
      result.value = {
        type: 'success',
        message: `Committed: ${res.summary?.new || 0} new, ${res.summary?.modified || 0} modified, ${res.summary?.deleted || 0} deleted`
      }
      message.value = ''
      emit('committed')
    } else if (res.status === 'no_changes') {
      result.value = { type: 'error', message: 'No changes to commit' }
    } else {
      result.value = { type: 'error', message: res.message || 'Commit failed' }
    }
  } catch (err) {
    result.value = { type: 'error', message: err instanceof Error ? err.message : 'Commit failed' }
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.commit-section {
  margin-bottom: 20px;
}

.section-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--input-text, #ddd);
  margin: 0 0 12px 0;
}

.commit-card {
  background: var(--comfy-input-bg, #222);
  border: 1px solid var(--border-color, #4a4a4a);
  border-radius: 6px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.commit-input {
  width: 100%;
  padding: 10px 12px;
  background: var(--comfy-menu-bg, #353535);
  border: 1px solid var(--border-color, #4a4a4a);
  border-radius: 4px;
  color: var(--input-text, #ddd);
  font-size: 13px;
  box-sizing: border-box;
}

.commit-input:focus {
  outline: none;
  border-color: #3b82f6;
}

.commit-input:disabled {
  opacity: 0.5;
}

.commit-btn {
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  background: #3b82f6;
  color: white;
  transition: background 0.2s;
}

.commit-btn:hover:not(:disabled) {
  background: #2563eb;
}

.commit-btn:disabled {
  background: #1e40af;
  opacity: 0.5;
  cursor: not-allowed;
}

.result {
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 13px;
}

.result.success {
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid #22c55e;
  color: #86efac;
}

.result.error {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid #ef4444;
  color: #fca5a5;
}
</style>
