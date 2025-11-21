<template>
  <PanelLayout>
    <template #header>
      <PanelHeader
        title="NODES (GIT-TRACKED)"
        :show-info="true"
        @info-click="showPopover = true"
      />
    </template>

    <template #search>
      <SearchBar
        v-model="searchQuery"
        placeholder="🔍 Search git-tracked custom nodes..."
      />
    </template>

    <template #content>
      <template v-if="loading">
        <LoadingState message="Loading git-tracked nodes..." />
      </template>
      <template v-else-if="error">
        <ErrorState :message="error" :retry="true" @retry="loadNodes" />
      </template>
      <template v-else>
        <!-- Summary at top -->
        <SummaryBar v-if="nodesData.total_count" variant="compact">
          Total: {{ nodesData.total_count }} nodes •
          {{ nodesData.installed_count }} installed •
          {{ nodesData.missing_count }} missing
        </SummaryBar>

        <!-- Installed Nodes -->
        <SectionGroup
          v-if="filteredInstalled.length"
          title="INSTALLED"
          :count="filteredInstalled.length"
          collapsible
          :initially-expanded="true"
        >
          <ItemCard
            v-for="node in filteredInstalled"
            :key="node.name"
            status="synced"
          >
            <template #icon>📦</template>
            <template #title>{{ node.name }}</template>
            <template #subtitle>
              <span v-if="node.version">v{{ node.version }}</span>
              <span v-else style="color: var(--cg-color-text-muted)">version unknown</span>
              <span v-if="node.source" style="color: var(--cg-color-text-muted); margin-left: 8px;">
                • {{ getSourceLabel(node.source) }}
              </span>
            </template>
            <template #details>
              <DetailRow
                v-if="node.description"
                label="Description:"
                :value="node.description"
              />
              <DetailRow
                v-if="node.repository"
                label="Repository:"
                :value="node.repository"
              />
              <DetailRow
                label="Used by:"
                :value="getUsageLabel(node)"
              />
            </template>
            <template #actions>
              <ActionButton
                v-if="node.repository"
                variant="secondary"
                size="xs"
                @click="viewRepository(node.repository)"
              >
                View Repository ↗
              </ActionButton>
              <ActionButton
                v-if="node.source === 'registry'"
                variant="secondary"
                size="xs"
                @click="handleUpdateNode(node.name)"
              >
                Check for Updates
              </ActionButton>
              <ActionButton
                v-if="node.source !== 'unknown'"
                variant="destructive"
                size="xs"
                @click="handleUninstallNode(node.name)"
              >
                Uninstall
              </ActionButton>
            </template>
          </ItemCard>
        </SectionGroup>

        <!-- Missing Nodes -->
        <SectionGroup
          v-if="filteredMissing.length"
          title="MISSING"
          :count="filteredMissing.length"
          collapsible
          :initially-expanded="true"
        >
          <ItemCard
            v-for="node in filteredMissing"
            :key="node.name"
            status="missing"
          >
            <template #icon>⚠</template>
            <template #title>{{ node.name }}</template>
            <template #subtitle>
              <span style="color: var(--cg-color-warning)">Not installed</span>
            </template>
            <template #details>
              <DetailRow
                v-if="node.description"
                label="Description:"
                :value="node.description"
              />
              <DetailRow
                v-if="node.repository"
                label="Repository:"
                :value="node.repository"
              />
              <DetailRow
                label="Required by:"
                :value="getUsageLabel(node)"
              />
            </template>
            <template #actions>
              <ActionButton
                v-if="node.download_url"
                variant="primary"
                size="sm"
                @click="handleInstallNode(node.name)"
              >
                Install
              </ActionButton>
              <ActionButton
                v-if="node.repository"
                variant="secondary"
                size="sm"
                @click="viewRepository(node.repository)"
              >
                View Repository ↗
              </ActionButton>
            </template>
          </ItemCard>
        </SectionGroup>

        <!-- Empty state -->
        <EmptyState
          v-if="!filteredInstalled.length && !filteredMissing.length"
          icon="📭"
          :message="searchQuery ? `No nodes match '${searchQuery}'` : 'No git-tracked nodes found.'"
        />
      </template>
    </template>
  </PanelLayout>

  <!-- Info Popover -->
  <InfoPopover
    :show="showPopover"
    title="About Git-Tracked Nodes"
    @close="showPopover = false"
  >
    <template #content>
      <p>
        These are custom nodes tracked in your git repository. They are version-controlled
        and synced across environments.
      </p>
      <p style="margin-top: var(--cg-space-2)">
        <strong>Installed:</strong> Nodes currently available in this environment<br>
        <strong>Missing:</strong> Nodes referenced in workflows but not yet installed
      </p>
    </template>
    <template #actions>
      <ActionButton variant="primary" @click="showPopover = false">
        Got it
      </ActionButton>
    </template>
  </InfoPopover>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { NodeInfo, NodesResult } from '@/types/comfygit'
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

const { getNodes, installNode, updateNode, uninstallNode } = useComfyGitService()

const nodesData = ref<NodesResult>({
  nodes: [],
  total_count: 0,
  installed_count: 0,
  missing_count: 0
})

const loading = ref(false)
const error = ref<string | null>(null)
const searchQuery = ref('')
const showPopover = ref(false)

// Computed properties for filtering
const filteredNodes = computed(() => {
  if (!searchQuery.value.trim()) return nodesData.value.nodes
  const query = searchQuery.value.toLowerCase()
  return nodesData.value.nodes.filter(node =>
    node.name.toLowerCase().includes(query) ||
    node.description?.toLowerCase().includes(query) ||
    node.repository?.toLowerCase().includes(query)
  )
})

const filteredInstalled = computed(() =>
  filteredNodes.value.filter(n => n.installed)
)

const filteredMissing = computed(() =>
  filteredNodes.value.filter(n => !n.installed)
)

// Helper functions
function getSourceLabel(source: string): string {
  const labels: Record<string, string> = {
    registry: 'Registry',
    git: 'Git',
    development: 'Dev',
    unknown: 'Unknown'
  }
  return labels[source] || source
}

function getUsageLabel(node: NodeInfo): string {
  if (!node.used_in_workflows || node.used_in_workflows.length === 0) {
    return 'Not used in any workflows'
  }
  if (node.used_in_workflows.length === 1) {
    return node.used_in_workflows[0]
  }
  return `${node.used_in_workflows.length} workflows`
}

function viewRepository(repoUrl: string) {
  window.open(repoUrl, '_blank')
}

async function handleInstallNode(nodeName: string) {
  if (!confirm(`Install node "${nodeName}"?\n\nThis will download and install the node from its repository.`)) {
    return
  }

  try {
    loading.value = true
    const result = await installNode(nodeName)
    if (result.status === 'success') {
      alert(`Node "${nodeName}" installed successfully!`)
      await loadNodes() // Refresh the list
    } else {
      alert(`Failed to install node: ${result.message || 'Unknown error'}`)
    }
  } catch (err) {
    alert(`Error installing node: ${err instanceof Error ? err.message : 'Unknown error'}`)
  } finally {
    loading.value = false
  }
}

async function handleUpdateNode(nodeName: string) {
  if (!confirm(`Check for updates for "${nodeName}"?`)) {
    return
  }

  try {
    loading.value = true
    const result = await updateNode(nodeName)
    if (result.status === 'success') {
      alert(`Node "${nodeName}" is up to date or has been updated!`)
      await loadNodes() // Refresh the list
    } else {
      alert(`Update check failed: ${result.message || 'Unknown error'}`)
    }
  } catch (err) {
    alert(`Error checking for updates: ${err instanceof Error ? err.message : 'Unknown error'}`)
  } finally {
    loading.value = false
  }
}

async function handleUninstallNode(nodeName: string) {
  if (!confirm(`Uninstall node "${nodeName}"?\n\nThis will remove the node from this environment.`)) {
    return
  }

  try {
    loading.value = true
    const result = await uninstallNode(nodeName)
    if (result.status === 'success') {
      alert(`Node "${nodeName}" uninstalled successfully!`)
      await loadNodes() // Refresh the list
    } else {
      alert(`Failed to uninstall node: ${result.message || 'Unknown error'}`)
    }
  } catch (err) {
    alert(`Error uninstalling node: ${err instanceof Error ? err.message : 'Unknown error'}`)
  } finally {
    loading.value = false
  }
}

async function loadNodes() {
  loading.value = true
  error.value = null
  try {
    nodesData.value = await getNodes()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load nodes'
  } finally {
    loading.value = false
  }
}

onMounted(loadNodes)
</script>

<style scoped>
/* Minimal to no custom CSS! Everything is in components */
</style>
