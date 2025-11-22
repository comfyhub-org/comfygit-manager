<template>
  <PanelLayout>
    <template #header>
      <PanelHeader title="STATUS" />
    </template>

    <template #content>
      <!-- Environment Health Section -->
      <div class="health-section-wrapper" @mouseenter="showHealthActions = true" @mouseleave="showHealthActions = false">
        <div class="health-section-header">
          <SectionTitle level="4" style="margin-bottom: var(--cg-space-2)">
            ENVIRONMENT HEALTH
          </SectionTitle>
          <transition name="fade">
            <ActionButton
              v-if="showHealthActions"
              variant="ghost"
              size="xs"
              class="show-all-button"
              @click="handleShowAll"
            >
              Show All
            </ActionButton>
          </transition>
        </div>

        <StatusGrid left-title="WORKFLOWS" right-title="GIT CHANGES">
        <template #left>
          <StatusItem
            v-if="status.workflows.new.length"
            icon="●"
            :count="status.workflows.new.length"
            label="new"
            variant="new"
          />
          <StatusItem
            v-if="status.workflows.modified.length"
            icon="●"
            :count="status.workflows.modified.length"
            label="modified"
            variant="modified"
          />
          <StatusItem
            v-if="status.workflows.deleted.length"
            icon="●"
            :count="status.workflows.deleted.length"
            label="deleted"
            variant="deleted"
          />
          <StatusItem
            icon="✓"
            :count="status.workflows.synced.length"
            label="synced"
            variant="synced"
            :separator="hasWorkflowChanges"
          />
        </template>

        <template #right>
          <StatusItem
            v-if="status.git_changes.nodes_added.length"
            icon="●"
            :count="status.git_changes.nodes_added.length"
            :label="status.git_changes.nodes_added.length === 1 ? 'node added' : 'nodes added'"
            variant="new"
          />
          <StatusItem
            v-if="status.git_changes.nodes_removed.length"
            icon="●"
            :count="status.git_changes.nodes_removed.length"
            :label="status.git_changes.nodes_removed.length === 1 ? 'node removed' : 'nodes removed'"
            variant="deleted"
          />
          <StatusItem
            v-if="hasOtherWorkflowChanges"
            icon="●"
            label="other changes"
            variant="modified"
          />
          <StatusItem
            v-if="!hasGitChanges"
            icon="✓"
            label="No uncommitted changes"
            variant="ok"
          />
        </template>
      </StatusGrid>
      </div>

      <!-- Current Branch Section -->
      <div style="margin-top: var(--cg-space-1);">
        <BranchIndicator
          :branch-name="status.current_branch || 'main'"
        >
          <template #actions>
            <ActionButton variant="secondary" size="sm" @click="$emit('switch-branch')">
              Switch Branch
            </ActionButton>
          </template>
        </BranchIndicator>
      </div>

      <!-- Issues Detected Section -->
      <div v-if="hasIssues" style="margin-top: var(--cg-space-4)">
        <SectionTitle level="4" style="margin-bottom: var(--cg-space-2)">
          ISSUES DETECTED
        </SectionTitle>

        <!-- Missing Models Issue -->
        <IssueCard
          v-if="status.missing_models_count > 0"
          severity="warning"
          icon="⚠"
          :title="`${status.missing_models_count} missing model${status.missing_models_count === 1 ? '' : 's'}`"
          description="Some workflows reference models that are not found in the workspace index."
        >
          <template #actions>
            <ActionButton variant="secondary" size="sm" @click="$emit('view-workflows')">
              View Details
            </ActionButton>
            <ActionButton variant="primary" size="sm" @click="$emit('resolve-models')">
              Resolve
            </ActionButton>
          </template>
        </IssueCard>

        <!-- Unsaved Changes Issue -->
        <IssueCard
          v-if="hasGitChanges"
          severity="warning"
          icon="⚠"
          title="You have unsaved changes"
          :description="gitChangesDescription"
        >
          <template #actions>
            <ActionButton variant="secondary" size="sm" @click="handleViewChanges">
              View Changes
            </ActionButton>
            <ActionButton variant="primary" size="sm" @click="$emit('commit-changes')">
              Commit Changes
            </ActionButton>
          </template>
        </IssueCard>

        <!-- Environment Not Synced Issue -->
        <IssueCard
          v-if="!status.comparison.is_synced"
          severity="error"
          icon="⚠"
          title="Environment not synced"
          description="Your environment state does not match the git repository. This may indicate missing installations or configuration issues."
        >
          <template #actions>
            <ActionButton variant="secondary" size="sm" @click="$emit('view-debug')">
              View Logs
            </ActionButton>
            <ActionButton variant="primary" size="sm" @click="$emit('sync-environment')">
              Sync Now
            </ActionButton>
          </template>
        </IssueCard>
      </div>

      <!-- All Good State -->
      <EmptyState
        v-if="!hasIssues && !hasGitChanges"
        icon="✅"
        message="Everything looks good! No issues detected."
        style="margin-top: var(--cg-space-4)"
      />

    </template>
  </PanelLayout>

  <!-- Status Detail Modal -->
  <StatusDetailModal
    :show="showDetailModal"
    :status="status"
    @close="showDetailModal = false"
  />
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { ComfyGitStatus } from '@/types/comfygit'
import PanelLayout from '@/components/base/organisms/PanelLayout.vue'
import PanelHeader from '@/components/base/molecules/PanelHeader.vue'
import SectionTitle from '@/components/base/atoms/SectionTitle.vue'
import StatusGrid from '@/components/base/molecules/StatusGrid.vue'
import StatusItem from '@/components/base/atoms/StatusItem.vue'
import IssueCard from '@/components/base/molecules/IssueCard.vue'
import EmptyState from '@/components/base/molecules/EmptyState.vue'
import BranchIndicator from '@/components/base/molecules/BranchIndicator.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'
import StatusDetailModal from '@/components/base/molecules/StatusDetailModal.vue'

const props = defineProps<{
  status: ComfyGitStatus
}>()

const showDetailModal = ref(false)
const showHealthActions = ref(false)

onMounted(() => {
  console.log('StatusSection mounted with status:', props.status)
  console.log('StatusDetailModal component imported:', StatusDetailModal)
})

function handleShowAll() {
  console.log('Show All clicked, opening modal')
  console.log('showDetailModal before:', showDetailModal.value)
  showDetailModal.value = true
  console.log('showDetailModal after:', showDetailModal.value)
}

function handleViewChanges() {
  console.log('View Changes clicked, opening modal')
  console.log('showDetailModal before:', showDetailModal.value)
  showDetailModal.value = true
  console.log('showDetailModal after:', showDetailModal.value)
}

const emit = defineEmits<{
  'view-workflows': []
  'resolve-models': []
  'view-history': []
  'commit-changes': []
  'view-debug': []
  'sync-environment': []
  'switch-branch': []
}>()

const hasWorkflowChanges = computed(() => {
  return props.status.workflows.new.length > 0 ||
         props.status.workflows.modified.length > 0 ||
         props.status.workflows.deleted.length > 0
})

const hasGitChanges = computed(() => {
  const gc = props.status.git_changes
  return gc.nodes_added.length > 0 ||
         gc.nodes_removed.length > 0 ||
         gc.workflow_changes ||
         gc.has_other_changes
})

const hasOtherWorkflowChanges = computed(() => {
  return props.status.git_changes.has_other_changes
})

const hasIssues = computed(() => {
  return props.status.missing_models_count > 0 ||
         hasGitChanges.value ||
         !props.status.comparison.is_synced
})

const gitChangesDescription = computed(() => {
  const parts: string[] = []

  if (props.status.workflows.new.length > 0) {
    parts.push(`${props.status.workflows.new.length} new workflow${props.status.workflows.new.length === 1 ? '' : 's'}`)
  }
  if (props.status.workflows.modified.length > 0) {
    parts.push(`${props.status.workflows.modified.length} modified workflow${props.status.workflows.modified.length === 1 ? '' : 's'}`)
  }
  if (props.status.workflows.deleted.length > 0) {
    parts.push(`${props.status.workflows.deleted.length} deleted workflow${props.status.workflows.deleted.length === 1 ? '' : 's'}`)
  }
  if (props.status.git_changes.nodes_added.length > 0) {
    parts.push(`${props.status.git_changes.nodes_added.length} node${props.status.git_changes.nodes_added.length === 1 ? '' : 's'} added`)
  }
  if (props.status.git_changes.nodes_removed.length > 0) {
    parts.push(`${props.status.git_changes.nodes_removed.length} node${props.status.git_changes.nodes_removed.length === 1 ? '' : 's'} removed`)
  }

  const description = parts.length > 0
    ? parts.join(', ') + '.'
    : 'You have uncommitted changes.'

  return `${description} Your work could be lost if you switch branches without committing.`
})
</script>

<style scoped>
/* Health Section Wrapper */
.health-section-wrapper {
  position: relative;
}

.health-section-header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.show-all-button {
  position: absolute;
  top: 0;
  right: 0;
}

/* Fade transition for Show All button */
.fade-enter-active, .fade-leave-active {
  transition: opacity var(--cg-transition-fast);
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
