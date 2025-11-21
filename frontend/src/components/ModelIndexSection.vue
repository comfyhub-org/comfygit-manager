<template>
  <PanelLayout>
    <template #header>
      <PanelHeader
        title="WORKSPACE MODEL INDEX"
        :show-info="true"
        :stacked="true"
        @info-click="showPopover = true"
      >
        <template #actions>
          <ActionButton variant="primary" size="sm" @click="scanForModels">
            Scan for Models
          </ActionButton>
          <ActionButton variant="primary" size="sm" @click="addDirectory">
            Add Directory
          </ActionButton>
          <ActionButton variant="primary" size="sm" @click="downloadNewModel">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 12L3 7h3V1h4v6h3L8 12z"/>
              <path d="M14 14H2v-2h12v2z"/>
            </svg>
            DOWNLOAD +
          </ActionButton>
        </template>
      </PanelHeader>
    </template>

    <template #search>
      <SearchBar
        v-model="searchQuery"
        placeholder="🔍 Search all indexed models..."
      />
    </template>

    <template #content>
      <template v-if="loading">
        <LoadingState message="Loading workspace models..." />
      </template>
      <template v-else-if="error">
        <ErrorState :message="error" :retry="true" @retry="loadModels" />
      </template>
      <template v-else>
        <!-- Summary at top -->
        <SummaryBar v-if="models.length" variant="compact">
          Total: {{ models.length }} models • {{ formatSize(totalSize) }} •
          Used in {{ environmentsWithModels }} environments
        </SummaryBar>

        <!-- Checkpoints -->
        <SectionGroup v-if="filteredCheckpoints.length" title="CHECKPOINTS" :count="filteredCheckpoints.length">
          <ItemCard
            v-for="model in filteredCheckpoints"
            :key="model.sha256 || model.filename"
            status="synced"
          >
            <template #icon>📦</template>
            <template #title>{{ model.filename }}</template>
            <template #subtitle>{{ formatSize((model as any).size_mb || model.size) }}</template>
            <template #details>
              <DetailRow
                v-if="model.sha256 || (model as any).sha256_hash"
                label="SHA256:"
                :value="(model.sha256 || (model as any).sha256_hash).substring(0, 16) + '...'"
                :mono="true"
                value-variant="hash"
              />
              <DetailRow label="Used in:" :value="getUsageText(model)" />
              <DetailRow
                v-if="model.source_url || (model as any).sources?.[0]"
                label="Source URL:"
                :value="model.source_url || (model as any).sources?.[0]"
              />
              <DetailRow v-else label="Source URL:" value-variant="warning">
                <template #value>(none)</template>
              </DetailRow>
            </template>
            <template #actions>
              <ActionButton variant="secondary" size="xs" @click="editUrl(model)">
                Edit URL
              </ActionButton>
              <ActionButton v-if="model.sha256 || (model as any).sha256_hash" variant="secondary" size="xs" @click="copyHash(model.sha256 || (model as any).sha256_hash)">
                Copy Hash
              </ActionButton>
              <ActionButton variant="destructive" size="xs" @click="deleteModel(model)">
                Delete
              </ActionButton>
            </template>
          </ItemCard>
        </SectionGroup>

        <!-- LoRAs -->
        <SectionGroup v-if="filteredLoras.length" title="LORAS" :count="filteredLoras.length">
          <ItemCard
            v-for="model in filteredLoras"
            :key="model.sha256 || model.filename"
            status="synced"
          >
            <template #icon>📦</template>
            <template #title>{{ model.filename }}</template>
            <template #subtitle>{{ formatSize((model as any).size_mb || model.size) }}</template>
            <template #details>
              <DetailRow
                v-if="model.sha256 || (model as any).sha256_hash"
                label="SHA256:"
                :value="(model.sha256 || (model as any).sha256_hash).substring(0, 16) + '...'"
                :mono="true"
                value-variant="hash"
              />
              <DetailRow label="Used in:" :value="getUsageText(model)" />
              <DetailRow
                v-if="model.source_url || (model as any).sources?.[0]"
                label="Source URL:"
                :value="model.source_url || (model as any).sources?.[0]"
              />
              <DetailRow v-else label="Source URL:" value-variant="warning">
                <template #value>(none)</template>
              </DetailRow>
            </template>
            <template #actions>
              <ActionButton variant="secondary" size="xs" @click="editUrl(model)">
                Edit URL
              </ActionButton>
              <ActionButton v-if="model.sha256 || (model as any).sha256_hash" variant="secondary" size="xs" @click="copyHash(model.sha256 || (model as any).sha256_hash)">
                Copy Hash
              </ActionButton>
              <ActionButton variant="destructive" size="xs" @click="deleteModel(model)">
                Delete
              </ActionButton>
            </template>
          </ItemCard>
        </SectionGroup>

        <!-- Other Models -->
        <SectionGroup v-if="filteredOther.length" title="OTHER" :count="filteredOther.length">
          <ItemCard
            v-for="model in filteredOther"
            :key="model.sha256 || model.filename"
            status="synced"
          >
            <template #icon>📦</template>
            <template #title>{{ model.filename }}</template>
            <template #subtitle>{{ formatSize((model as any).size_mb || model.size) }}</template>
            <template #details>
              <DetailRow label="Type:" :value="model.type" />
              <DetailRow
                v-if="model.sha256 || (model as any).sha256_hash"
                label="SHA256:"
                :value="(model.sha256 || (model as any).sha256_hash).substring(0, 16) + '...'"
                :mono="true"
                value-variant="hash"
              />
              <DetailRow label="Used in:" :value="getUsageText(model)" />
            </template>
            <template #actions>
              <ActionButton variant="secondary" size="xs" @click="editUrl(model)">
                Edit URL
              </ActionButton>
              <ActionButton v-if="model.sha256 || (model as any).sha256_hash" variant="secondary" size="xs" @click="copyHash(model.sha256 || (model as any).sha256_hash)">
                Copy Hash
              </ActionButton>
              <ActionButton variant="destructive" size="xs" @click="deleteModel(model)">
                Delete
              </ActionButton>
            </template>
          </ItemCard>
        </SectionGroup>

        <!-- Empty state -->
        <EmptyState
          v-if="!filteredModels.length"
          icon="📭"
          :message="searchQuery ? `No models match '${searchQuery}'` : 'No models in workspace index'"
        />
      </template>
    </template>
  </PanelLayout>

  <!-- Info Popover -->
  <InfoPopover
    :show="showPopover"
    title="About Workspace Model Index"
    @close="showPopover = false"
  >
    <template #content>
      <p>
        Content-addressable model storage shared across <strong>all environments</strong>.
        Models are deduplicated by SHA256 hash.
      </p>
    </template>
  </InfoPopover>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { ModelInfo } from '@/types/comfygit'
import PanelLayout from '@/components/base/organisms/PanelLayout.vue'
import PanelHeader from '@/components/base/molecules/PanelHeader.vue'
import SearchBar from '@/components/base/molecules/SearchBar.vue'
import SectionGroup from '@/components/base/molecules/SectionGroup.vue'
import ItemCard from '@/components/base/molecules/ItemCard.vue'
import DetailRow from '@/components/base/molecules/DetailRow.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'
import SummaryBar from '@/components/base/molecules/SummaryBar.vue'
import EmptyState from '@/components/base/molecules/EmptyState.vue'
import LoadingState from '@/components/base/organisms/LoadingState.vue'
import ErrorState from '@/components/base/organisms/ErrorState.vue'
import InfoPopover from '@/components/base/molecules/InfoPopover.vue'

const { getWorkspaceModels } = useComfyGitService()

const models = ref<ModelInfo[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
const searchQuery = ref('')
const showPopover = ref(false)

const totalSize = computed(() =>
  models.value.reduce((sum, m) => sum + ((m as any).size_mb || m.size || 0), 0)
)

const environmentsWithModels = computed(() => {
  const envs = new Set<string>()
  models.value.forEach(m => {
    const modelAny = m as any
    if (m.used_in_environments && m.used_in_environments.length > 0) {
      m.used_in_environments.forEach(env => envs.add(env.env_name))
    }
  })
  return envs.size
})

// Search filtering
const filteredModels = computed(() => {
  if (!searchQuery.value.trim()) return models.value
  const query = searchQuery.value.toLowerCase()
  return models.value.filter(m => {
    const modelAny = m as any
    const sha256 = m.sha256 || modelAny.sha256_hash || ''
    return (
      m.filename.toLowerCase().includes(query) ||
      sha256.toLowerCase().includes(query)
    )
  })
})

const filteredCheckpoints = computed(() =>
  filteredModels.value.filter(m => m.type === 'checkpoints')
)

const filteredLoras = computed(() =>
  filteredModels.value.filter(m => m.type === 'loras')
)

const filteredOther = computed(() =>
  filteredModels.value.filter(m => m.type !== 'checkpoints' && m.type !== 'loras')
)

function formatSize(mb: number | undefined): string {
  if (!mb) return 'Unknown'
  if (mb >= 1024) {
    return `${(mb / 1024).toFixed(1)} GB`
  }
  return `${mb.toFixed(0)} MB`
}

function getUsageText(model: ModelInfo): string {
  const modelAny = model as any
  // Check both used_in_workflows and used_by (mock data uses used_by)
  const workflows = model.used_in_workflows || modelAny.used_by || []
  if (!workflows || workflows.length === 0) {
    return 'Not used'
  }
  return `${workflows.length} workflow(s)`
}

function copyHash(hash: string) {
  navigator.clipboard.writeText(hash)
  alert('Hash copied to clipboard')
}

function editUrl(model: ModelInfo) {
  const newUrl = prompt('Enter model source URL:', model.source_url || '')
  if (newUrl !== null) {
    alert('URL update not yet implemented')
  }
}

function deleteModel(model: ModelInfo) {
  const modelAny = model as any
  const workflows = model.used_in_workflows || modelAny.used_by || []
  const usageWarning = workflows && workflows.length > 0
    ? `\n\n⚠ WARNING: This model is used by ${workflows.length} workflow(s):\n${workflows.join(', ')}\n\nDeleting will break these workflows!`
    : ''

  const confirmed = confirm(
    `Delete ${model.filename}?${usageWarning}\n\nThis will free ${formatSize(modelAny.size_mb || model.size)} of space.`
  )
  if (confirmed) {
    alert('Model deletion not yet implemented')
  }
}

function scanForModels() {
  alert('Scan for models not yet implemented')
}

function addDirectory() {
  alert('Add directory not yet implemented')
}

function downloadNewModel() {
  alert('Download new model not yet implemented')
}

async function loadModels() {
  loading.value = true
  error.value = null
  try {
    models.value = await getWorkspaceModels()
    console.log('Loaded models:', models.value)
    console.log('Filtered checkpoints:', filteredCheckpoints.value)
    console.log('Filtered loras:', filteredLoras.value)
    console.log('Filtered other:', filteredOther.value)
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load workspace models'
  } finally {
    loading.value = false
  }
}

onMounted(loadModels)
</script>

<style scoped>
/* Minimal to no custom CSS! Everything is in components */
</style>
