<template>
  <BaseModal
    title="CREATE NEW ENVIRONMENT"
    size="sm"
    @close="emit('close')"
  >
    <template #body>
      <div class="create-env-form">
        <!-- Environment Name -->
        <div class="form-field">
          <label class="form-label">Name</label>
          <input
            ref="nameInput"
            v-model="name"
            type="text"
            class="form-input"
            placeholder="my-environment"
            @keyup.enter="handleCreate"
          />
        </div>

        <!-- Python Version -->
        <div class="form-field">
          <label class="form-label">Python Version</label>
          <select v-model="pythonVersion" class="form-select">
            <option v-for="version in PYTHON_VERSIONS" :key="version" :value="version">
              {{ version }}
            </option>
          </select>
        </div>

        <!-- ComfyUI Version -->
        <div class="form-field">
          <label class="form-label">ComfyUI Version</label>
          <select v-model="comfyUIVersion" class="form-select" :disabled="loadingReleases">
            <option v-for="release in releases" :key="release.tag_name" :value="release.tag_name">
              {{ release.name }}
            </option>
          </select>
        </div>

        <!-- Torch Backend -->
        <div class="form-field">
          <label class="form-label">PyTorch Backend</label>
          <select v-model="torchBackend" class="form-select">
            <option v-for="backend in TORCH_BACKENDS" :key="backend" :value="backend">
              {{ backend }}{{ backend === 'auto' ? ' (detect GPU)' : '' }}
            </option>
          </select>
        </div>

        <!-- Switch After Create -->
        <div class="form-field form-field--checkbox">
          <label class="form-checkbox">
            <input type="checkbox" v-model="switchAfter" />
            <span>Switch to this environment after creation</span>
          </label>
        </div>
      </div>
    </template>

    <template #footer>
      <BaseButton
        variant="primary"
        :disabled="!name.trim()"
        @click="handleCreate"
      >
        Create
      </BaseButton>
      <BaseButton variant="secondary" @click="emit('close')">
        Cancel
      </BaseButton>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import type { ComfyUIRelease, CreateEnvironmentRequest } from '@/types/comfygit'
import { PYTHON_VERSIONS, DEFAULT_PYTHON_VERSION, TORCH_BACKENDS, DEFAULT_TORCH_BACKEND } from '@/constants/environment'
import { useComfyGitService } from '@/composables/useComfyGitService'
import BaseModal from './base/BaseModal.vue'
import BaseButton from './base/BaseButton.vue'

const emit = defineEmits<{
  close: []
  create: [request: CreateEnvironmentRequest]
}>()

const { getComfyUIReleases } = useComfyGitService()

// Form state
const name = ref('')
const pythonVersion = ref(DEFAULT_PYTHON_VERSION)
const comfyUIVersion = ref('latest')
const torchBackend = ref(DEFAULT_TORCH_BACKEND)
const switchAfter = ref(false)

// Releases loading
const releases = ref<ComfyUIRelease[]>([{ tag_name: 'latest', name: 'Latest', published_at: '' }])
const loadingReleases = ref(false)

// Input ref for autofocus
const nameInput = ref<HTMLInputElement | null>(null)

function handleCreate() {
  const trimmedName = name.value.trim()
  if (!trimmedName) return

  const request: CreateEnvironmentRequest = {
    name: trimmedName,
    python_version: pythonVersion.value,
    comfyui_version: comfyUIVersion.value,
    torch_backend: torchBackend.value,
    switch_after: switchAfter.value
  }

  emit('create', request)
}

async function loadReleases() {
  loadingReleases.value = true
  try {
    releases.value = await getComfyUIReleases()
  } catch (err) {
    console.error('Failed to load ComfyUI releases:', err)
  } finally {
    loadingReleases.value = false
  }
}

onMounted(async () => {
  // Focus the name input when modal opens
  await nextTick()
  nameInput.value?.focus()

  // Load releases
  loadReleases()
})
</script>

<style scoped>
.create-env-form {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
}

.form-field--checkbox {
  flex-direction: row;
  align-items: center;
  margin-top: var(--cg-space-2);
}

.form-label {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.form-input,
.form-select {
  background: var(--cg-color-bg-primary);
  border: 1px solid var(--cg-color-border-subtle);
  color: var(--cg-color-text-primary);
  padding: var(--cg-space-2) var(--cg-space-3);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
}

.form-input:hover,
.form-select:hover {
  border-color: var(--cg-color-border);
}

.form-input:focus,
.form-select:focus {
  outline: none;
  border-color: var(--cg-color-accent);
}

.form-select {
  cursor: pointer;
}

.form-select:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.form-checkbox {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  cursor: pointer;
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-secondary);
}

.form-checkbox input[type="checkbox"] {
  width: 16px;
  height: 16px;
  accent-color: var(--cg-color-accent);
  cursor: pointer;
}
</style>
