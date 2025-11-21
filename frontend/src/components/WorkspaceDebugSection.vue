<template>
  <PanelLayout>
    <template #header>
      <PanelHeader
        title="DEBUG (WORKSPACE LOGS)"
        :show-info="true"
        @info-click="showPopover = true"
      />
    </template>

    <template #content>
      <template v-if="loading">
        <LoadingState message="Loading workspace logs..." />
      </template>
      <template v-else-if="error">
        <ErrorState :message="error" :retry="true" @retry="loadLogs" />
      </template>
      <template v-else>
        <!-- Summary bar -->
        <SummaryBar v-if="logs.length > 0" variant="compact">
          Total: {{ logs.length }} entries •
          {{ errorCount }} errors •
          {{ warningCount }} warnings •
          {{ infoCount }} info •
          {{ debugCount }} debug
        </SummaryBar>

        <!-- Filter bar -->
        <LogFilterBar
          :active-levels="activeLevels"
          @toggle="toggleLevel"
          @clear="clearFilters"
        />

        <!-- Log entries -->
        <LogList v-if="filteredLogs.length > 0">
          <LogItem
            v-for="(log, index) in displayedLogs"
            :key="`${log.timestamp}-${index}`"
            :level="log.level"
            :timestamp="formatTimestamp(log.timestamp)"
            :message="log.message"
            :context="log.context"
          />
        </LogList>

        <!-- Load more button -->
        <div v-if="canLoadMore" class="load-more">
          <ActionButton
            variant="secondary"
            @click="loadMoreLogs"
          >
            Load More ({{ filteredLogs.length - displayLimit }} remaining)
          </ActionButton>
        </div>

        <!-- Empty state -->
        <EmptyState
          v-if="logs.length > 0 && filteredLogs.length === 0"
          icon="🔍"
          message="No logs match the current filters"
        />

        <EmptyState
          v-if="logs.length === 0"
          icon="📝"
          message="No workspace logs available"
        />
      </template>
    </template>
  </PanelLayout>

  <!-- Info Popover -->
  <InfoPopover
    :show="showPopover"
    title="About Workspace Logs"
    @close="showPopover = false"
  >
    <template #content>
      <p>
        Workspace logs show system-level events and operations for the entire ComfyGit workspace,
        including operations that affect multiple environments.
      </p>
      <p style="margin-top: var(--cg-space-2)">
        <strong>Log Levels:</strong><br>
        <strong>ERROR:</strong> Critical failures requiring attention<br>
        <strong>WARNING:</strong> Potential issues or deprecated features<br>
        <strong>INFO:</strong> General operational information<br>
        <strong>DEBUG:</strong> Detailed debugging information
      </p>
      <p style="margin-top: var(--cg-space-2)">
        Use the filter bar to show/hide specific log levels.
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
import type { LogEntry } from '@/types/comfygit'
import PanelLayout from '@/components/base/organisms/PanelLayout.vue'
import PanelHeader from '@/components/base/molecules/PanelHeader.vue'
import LogFilterBar from '@/components/base/molecules/LogFilterBar.vue'
import LogList from '@/components/base/molecules/LogList.vue'
import LogItem from '@/components/base/molecules/LogItem.vue'
import SummaryBar from '@/components/base/molecules/SummaryBar.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'
import EmptyState from '@/components/base/molecules/EmptyState.vue'
import LoadingState from '@/components/base/organisms/LoadingState.vue'
import ErrorState from '@/components/base/organisms/ErrorState.vue'
import InfoPopover from '@/components/base/molecules/InfoPopover.vue'

const { getWorkspaceLogs } = useComfyGitService()

const logs = ref<LogEntry[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
const showPopover = ref(false)
const activeLevels = ref<string[]>(['ERROR', 'WARNING', 'INFO', 'DEBUG'])
const displayLimit = ref(100)

// Computed properties for log counts
const errorCount = computed(() => logs.value.filter(l => l.level === 'ERROR').length)
const warningCount = computed(() => logs.value.filter(l => l.level === 'WARNING').length)
const infoCount = computed(() => logs.value.filter(l => l.level === 'INFO').length)
const debugCount = computed(() => logs.value.filter(l => l.level === 'DEBUG').length)

// Filtered logs based on active levels
const filteredLogs = computed(() => {
  return logs.value.filter(log => activeLevels.value.includes(log.level))
})

// Display only up to the limit
const displayedLogs = computed(() => {
  return filteredLogs.value.slice(0, displayLimit.value)
})

// Check if there are more logs to display
const canLoadMore = computed(() => {
  return filteredLogs.value.length > displayLimit.value
})

function toggleLevel(level: string) {
  const index = activeLevels.value.indexOf(level)
  if (index >= 0) {
    activeLevels.value.splice(index, 1)
  } else {
    activeLevels.value.push(level)
  }
}

function clearFilters() {
  activeLevels.value = ['ERROR', 'WARNING', 'INFO', 'DEBUG']
}

function loadMoreLogs() {
  displayLimit.value += 100
}

function formatTimestamp(timestamp: string): string {
  try {
    const date = new Date(timestamp)
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    })
  } catch {
    return timestamp
  }
}

async function loadLogs() {
  loading.value = true
  error.value = null
  try {
    // Load last 500 log lines
    logs.value = await getWorkspaceLogs(undefined, 500)
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load workspace logs'
  } finally {
    loading.value = false
  }
}

onMounted(loadLogs)
</script>

<style scoped>
.load-more {
  display: flex;
  justify-content: center;
  padding: var(--cg-space-4);
  border-top: 1px solid var(--cg-color-border-subtle);
  margin-top: var(--cg-space-2);
}
</style>
