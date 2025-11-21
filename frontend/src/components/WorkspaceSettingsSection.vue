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
        <!-- Git Configuration Section -->
        <SectionGroup title="GIT CONFIGURATION">
          <div class="settings-section">
            <SettingRow
              label="User Name"
              description="Your name for git commits"
              required
            >
              <TextInput
                v-model="settings.git.userName"
                placeholder="John Doe"
                :style="{ minWidth: '250px' }"
              />
            </SettingRow>

            <SettingRow
              label="User Email"
              description="Your email for git commits"
              required
            >
              <TextInput
                v-model="settings.git.userEmail"
                placeholder="john@example.com"
                :style="{ minWidth: '250px' }"
              />
            </SettingRow>

            <SettingRow
              label="Default Branch"
              description="Default branch name for new environments"
            >
              <TextInput
                v-model="settings.git.defaultBranch"
                placeholder="main"
                :style="{ minWidth: '150px' }"
              />
            </SettingRow>

            <SettingRow
              label="Auto Commit"
              description="Automatically commit workflow changes"
            >
              <Toggle v-model="settings.git.autoCommit" />
            </SettingRow>
          </div>
        </SectionGroup>

        <!-- Workspace Paths Section -->
        <SectionGroup title="WORKSPACE PATHS">
          <div class="settings-section">
            <SettingRow
              label="Workspace Root"
              description="Root directory of this workspace (read-only)"
            >
              <Value mono truncate>{{ settings.paths.workspaceRoot }}</Value>
            </SettingRow>

            <SettingRow
              label="Environments Directory"
              description="Where environment folders are stored"
            >
              <Value mono truncate>{{ settings.paths.environmentsDir }}</Value>
            </SettingRow>

            <SettingRow
              label="Models Directory"
              description="Where model files are indexed"
            >
              <Value mono truncate>{{ settings.paths.modelsDir }}</Value>
            </SettingRow>
          </div>
        </SectionGroup>

        <!-- Model Index Settings Section -->
        <SectionGroup title="MODEL INDEX">
          <div class="settings-section">
            <SettingRow
              label="Auto-Index Models"
              description="Automatically scan and index model files"
            >
              <Toggle v-model="settings.modelIndex.autoIndex" />
            </SettingRow>

            <SettingRow
              label="Index on Startup"
              description="Run model indexing when ComfyUI starts"
              :disabled="!settings.modelIndex.autoIndex"
            >
              <Toggle
                v-model="settings.modelIndex.indexOnStartup"
                :disabled="!settings.modelIndex.autoIndex"
              />
            </SettingRow>

            <SettingRow
              label="Scan Interval"
              description="How often to check for new models (minutes)"
              :disabled="!settings.modelIndex.autoIndex"
            >
              <BaseSelect
                v-model="settings.modelIndex.scanInterval"
                :options="scanIntervalOptions"
                :disabled="!settings.modelIndex.autoIndex"
                :style="{ minWidth: '120px' }"
              />
            </SettingRow>

            <SettingRow
              label="Deep Scan"
              description="Use SHA256 hashing for model verification (slower)"
            >
              <Toggle v-model="settings.modelIndex.deepScan" />
            </SettingRow>
          </div>
        </SectionGroup>

        <!-- Environment Defaults Section -->
        <SectionGroup title="ENVIRONMENT DEFAULTS">
          <div class="settings-section">
            <SettingRow
              label="ComfyUI Version"
              description="Default ComfyUI version for new environments"
            >
              <BaseSelect
                v-model="settings.environment.defaultComfyUIVersion"
                :options="comfyUIVersionOptions"
                placeholder="Select version..."
                :style="{ minWidth: '150px' }"
              />
            </SettingRow>

            <SettingRow
              label="Python Version"
              description="Python version for new virtual environments"
            >
              <BaseSelect
                v-model="settings.environment.pythonVersion"
                :options="pythonVersionOptions"
                :style="{ minWidth: '120px' }"
              />
            </SettingRow>

            <SettingRow
              label="Auto Create Virtualenv"
              description="Automatically create Python virtual environment"
            >
              <Toggle v-model="settings.environment.autoCreateVenv" />
            </SettingRow>

            <SettingRow
              label="Install Dependencies"
              description="Auto-install requirements.txt on environment creation"
            >
              <Toggle v-model="settings.environment.autoInstallDeps" />
            </SettingRow>
          </div>
        </SectionGroup>

        <!-- UI Preferences Section -->
        <SectionGroup title="UI PREFERENCES">
          <div class="settings-section">
            <SettingRow
              label="Theme"
              description="Visual theme for the ComfyGit panel"
            >
              <BaseSelect
                v-model="settings.ui.theme"
                :options="themeOptions"
                :style="{ minWidth: '150px' }"
              />
            </SettingRow>

            <SettingRow
              label="Compact Mode"
              description="Use smaller spacing and fonts"
            >
              <Toggle v-model="settings.ui.compactMode" />
            </SettingRow>

            <SettingRow
              label="Show File Extensions"
              description="Display file extensions in workflow lists"
            >
              <Toggle v-model="settings.ui.showFileExtensions" />
            </SettingRow>

            <SettingRow
              label="Confirm Destructive Actions"
              description="Show confirmation dialogs for destructive operations"
            >
              <Toggle v-model="settings.ui.confirmDestructive" />
            </SettingRow>
          </div>
        </SectionGroup>

        <!-- Advanced Section -->
        <SectionGroup title="ADVANCED">
          <div class="settings-section">
            <SettingRow
              label="Debug Mode"
              description="Enable debug logging and verbose output"
            >
              <Toggle v-model="settings.advanced.debugMode" />
            </SettingRow>

            <SettingRow
              label="Max History Items"
              description="Maximum number of commits to show in history"
            >
              <BaseSelect
                v-model="settings.advanced.maxHistoryItems"
                :options="historyLimitOptions"
                :style="{ minWidth: '100px' }"
              />
            </SettingRow>

            <SettingRow
              label="Cache Duration"
              description="How long to cache API responses (seconds)"
            >
              <BaseSelect
                v-model="settings.advanced.cacheDuration"
                :options="cacheDurationOptions"
                :style="{ minWidth: '120px' }"
              />
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
import BaseSelect from '@/components/base/BaseSelect.vue'
import SummaryBar from '@/components/base/molecules/SummaryBar.vue'
import LoadingState from '@/components/base/organisms/LoadingState.vue'
import ErrorState from '@/components/base/organisms/ErrorState.vue'

interface WorkspaceSettings {
  git: {
    userName: string
    userEmail: string
    defaultBranch: string
    autoCommit: boolean
  }
  paths: {
    workspaceRoot: string
    environmentsDir: string
    modelsDir: string
  }
  modelIndex: {
    autoIndex: boolean
    indexOnStartup: boolean
    scanInterval: number
    deepScan: boolean
  }
  environment: {
    defaultComfyUIVersion: string
    pythonVersion: string
    autoCreateVenv: boolean
    autoInstallDeps: boolean
  }
  ui: {
    theme: string
    compactMode: boolean
    showFileExtensions: boolean
    confirmDestructive: boolean
  }
  advanced: {
    debugMode: boolean
    maxHistoryItems: number
    cacheDuration: number
  }
}

const loading = ref(false)
const error = ref<string | null>(null)
const saveStatus = ref<{ type: 'success' | 'error', message: string } | null>(null)

// Settings state
const settings = ref<WorkspaceSettings>({
  git: {
    userName: '',
    userEmail: '',
    defaultBranch: 'main',
    autoCommit: false
  },
  paths: {
    workspaceRoot: '/path/to/workspace',
    environmentsDir: 'environments',
    modelsDir: 'models'
  },
  modelIndex: {
    autoIndex: true,
    indexOnStartup: true,
    scanInterval: 30,
    deepScan: false
  },
  environment: {
    defaultComfyUIVersion: 'latest',
    pythonVersion: '3.11',
    autoCreateVenv: true,
    autoInstallDeps: true
  },
  ui: {
    theme: 'comfy',
    compactMode: false,
    showFileExtensions: true,
    confirmDestructive: true
  },
  advanced: {
    debugMode: false,
    maxHistoryItems: 50,
    cacheDuration: 300
  }
})

const originalSettings = ref<WorkspaceSettings | null>(null)

// Check if settings have changed
const hasChanges = computed(() => {
  if (!originalSettings.value) return false
  return JSON.stringify(settings.value) !== JSON.stringify(originalSettings.value)
})

// Options for selects
const scanIntervalOptions = [
  { label: '15 minutes', value: 15 },
  { label: '30 minutes', value: 30 },
  { label: '1 hour', value: 60 },
  { label: '2 hours', value: 120 },
  { label: 'Manual only', value: 0 }
]

const comfyUIVersionOptions = [
  { label: 'Latest', value: 'latest' },
  { label: 'Stable', value: 'stable' },
  { label: 'v0.2.0', value: 'v0.2.0' },
  { label: 'v0.1.0', value: 'v0.1.0' }
]

const pythonVersionOptions = [
  { label: 'Python 3.11', value: '3.11' },
  { label: 'Python 3.10', value: '3.10' },
  { label: 'Python 3.9', value: '3.9' }
]

const themeOptions = [
  { label: 'Comfy (Default)', value: 'comfy' },
  { label: 'Terminal', value: 'terminal' },
  { label: 'Dark', value: 'dark' }
]

const historyLimitOptions = [
  { label: '25', value: 25 },
  { label: '50', value: 50 },
  { label: '100', value: 100 },
  { label: '200', value: 200 }
]

const cacheDurationOptions = [
  { label: '1 minute', value: 60 },
  { label: '5 minutes', value: 300 },
  { label: '10 minutes', value: 600 },
  { label: 'No cache', value: 0 }
]

async function loadSettings() {
  loading.value = true
  error.value = null

  try {
    // TODO: Replace with actual API call when available
    // const response = await fetch('/comfygit/api/workspace/settings')
    // const data = await response.json()
    // settings.value = data

    // For now, simulate loading with mock data
    await new Promise(resolve => setTimeout(resolve, 500))

    // Store original for change detection
    originalSettings.value = JSON.parse(JSON.stringify(settings.value))
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load settings'
  } finally {
    loading.value = false
  }
}

async function saveSettings() {
  saveStatus.value = null

  try {
    // TODO: Replace with actual API call when available
    // await fetch('/comfygit/api/workspace/settings', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(settings.value)
    // })

    // Simulate save
    await new Promise(resolve => setTimeout(resolve, 300))

    originalSettings.value = JSON.parse(JSON.stringify(settings.value))
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
  if (originalSettings.value) {
    settings.value = JSON.parse(JSON.stringify(originalSettings.value))
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
</style>
