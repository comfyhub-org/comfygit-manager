<template>
  <PanelLayout>
    <template #header>
      <PanelHeader title="WORKSPACE SETTINGS">
        <template #actions>
          <ActionButton
            variant="primary"
            size="sm"
            :disabled="!hasChanges"
            @click="saveSettings"
          >
            Save Changes
          </ActionButton>
          <ActionButton
            v-if="hasChanges"
            variant="ghost"
            size="sm"
            @click="resetSettings"
          >
            Reset
          </ActionButton>
        </template>
      </PanelHeader>
    </template>

    <template #content>
      <template v-if="loading">
        <LoadingState message="Loading workspace settings..." />
      </template>
      <template v-else-if="error">
        <ErrorState :message="error" :retry="true" @retry="loadSettings" />
      </template>
      <template v-else>
        <!-- Workspace Paths Section -->
        <SectionGroup title="WORKSPACE PATHS">
          <div class="settings-section">
            <div class="path-setting">
              <div class="path-label">Workspace Root</div>
              <div class="path-description">Root directory of this workspace (read-only)</div>
              <div class="path-value">{{ config?.workspace_path || 'Loading...' }}</div>
            </div>

            <div class="path-setting">
              <div class="path-label">Models Directory</div>
              <div class="path-description">Where model files are indexed and stored</div>
              <div class="path-value">{{ config?.models_path || 'Not configured' }}</div>
            </div>
          </div>
        </SectionGroup>

        <!-- API Credentials Section -->
        <SectionGroup title="API CREDENTIALS">
          <div class="settings-section">
            <SettingRow
              label="CivitAI API Key"
              description="API key for downloading models from CivitAI"
            >
              <TextInput
                v-model="civitaiToken"
                type="password"
                placeholder="Enter CivitAI API key..."
                :style="{ minWidth: '300px' }"
              />
            </SettingRow>

            <SettingRow
              label="HuggingFace Token"
              description="Token for accessing HuggingFace models (not yet supported)"
              :disabled="true"
            >
              <TextInput
                v-model="huggingfaceToken"
                type="password"
                placeholder="Not yet supported"
                disabled
                :style="{ minWidth: '300px' }"
              />
            </SettingRow>
          </div>
        </SectionGroup>

        <!-- Future Settings (Disabled) -->
        <SectionGroup title="ADDITIONAL SETTINGS (Coming Soon)">
          <div class="settings-section">
            <SettingRow
              label="Auto-Sync Models"
              description="Automatically sync models when switching environments (not yet supported)"
              :disabled="true"
            >
              <Toggle v-model="autoSyncModels" disabled />
            </SettingRow>

            <SettingRow
              label="Confirm Destructive Actions"
              description="Show confirmation dialogs for destructive operations (not yet supported)"
              :disabled="true"
            >
              <Toggle v-model="confirmDestructive" disabled />
            </SettingRow>
          </div>
        </SectionGroup>

        <!-- Save Status -->
        <SummaryBar v-if="saveStatus" :variant="saveStatus.type === 'success' ? 'compact' : 'compact'">
          <span :style="{ color: saveStatus.type === 'success' ? 'var(--cg-color-success)' : 'var(--cg-color-error)' }">
            {{ saveStatus.message }}
          </span>
        </SummaryBar>
      </template>
    </template>
  </PanelLayout>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import PanelLayout from '@/components/base/organisms/PanelLayout.vue'
import PanelHeader from '@/components/base/molecules/PanelHeader.vue'
import SectionGroup from '@/components/base/molecules/SectionGroup.vue'
import SettingRow from '@/components/base/molecules/SettingRow.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'
import TextInput from '@/components/base/atoms/TextInput.vue'
import Toggle from '@/components/base/atoms/Toggle.vue'
import Value from '@/components/base/atoms/Value.vue'
import SummaryBar from '@/components/base/molecules/SummaryBar.vue'
import LoadingState from '@/components/base/organisms/LoadingState.vue'
import ErrorState from '@/components/base/organisms/ErrorState.vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { ConfigSettings } from '@/types/comfygit'

const { getConfig, updateConfig } = useComfyGitService()

const loading = ref(false)
const error = ref<string | null>(null)
const saveStatus = ref<{ type: 'success' | 'error', message: string } | null>(null)

// Config state
const config = ref<ConfigSettings | null>(null)
const originalConfig = ref<ConfigSettings | null>(null)

// Editable fields
const civitaiToken = ref<string>('')
const huggingfaceToken = ref<string>('')  // Not yet supported
const autoSyncModels = ref(true)          // Not yet supported
const confirmDestructive = ref(true)      // Not yet supported

// Check if settings have changed
const hasChanges = computed(() => {
  if (!originalConfig.value) return false

  // Only check fields that are actually editable
  return civitaiToken.value !== (originalConfig.value.civitai_api_key || '')
})

async function loadSettings() {
  loading.value = true
  error.value = null

  try {
    config.value = await getConfig()
    originalConfig.value = { ...config.value }

    // Populate editable fields
    civitaiToken.value = config.value.civitai_api_key || ''
    huggingfaceToken.value = config.value.huggingface_token || ''
    autoSyncModels.value = config.value.auto_sync_models
    confirmDestructive.value = config.value.confirm_destructive
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load settings'
  } finally {
    loading.value = false
  }
}

async function saveSettings() {
  saveStatus.value = null

  try {
    // Only send changed fields
    const updates: Partial<ConfigSettings> = {}

    if (civitaiToken.value !== (originalConfig.value?.civitai_api_key || '')) {
      updates.civitai_api_key = civitaiToken.value || null
    }

    // Send update
    await updateConfig(updates)

    // Reload to get latest state
    await loadSettings()

    saveStatus.value = { type: 'success', message: 'Settings saved successfully' }

    // Clear status after 3 seconds
    setTimeout(() => {
      saveStatus.value = null
    }, 3000)
  } catch (err) {
    saveStatus.value = {
      type: 'error',
      message: err instanceof Error ? err.message : 'Failed to save settings'
    }
  }
}

function resetSettings() {
  if (originalConfig.value) {
    civitaiToken.value = originalConfig.value.civitai_api_key || ''
    huggingfaceToken.value = originalConfig.value.huggingface_token || ''
    autoSyncModels.value = originalConfig.value.auto_sync_models
    confirmDestructive.value = originalConfig.value.confirm_destructive
    saveStatus.value = null
  }
}

onMounted(loadSettings)
</script>

<style scoped>
.settings-section {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  padding: var(--cg-space-3);
}

.path-setting {
  padding: var(--cg-space-3) 0;
  border-bottom: 1px solid var(--cg-color-border-subtle);
}

.path-setting:last-child {
  border-bottom: none;
}

.path-label {
  font-size: var(--cg-font-size-sm);
  font-weight: 500;
  color: var(--cg-color-text-primary);
  margin-bottom: var(--cg-space-1);
}

.path-description {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-secondary);
  margin-bottom: var(--cg-space-2);
}

.path-value {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-primary);
  background: var(--cg-color-bg-primary);
  padding: var(--cg-space-2);
  border-radius: var(--cg-border-radius-sm);
  border: 1px solid var(--cg-color-border-subtle);
  word-break: break-all;
}
</style>
