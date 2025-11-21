<template>
  <PanelLayout>
    <template #header>
      <PanelHeader title="STATUS" :show-prefix="true" />
    </template>

    <template #content>
      <!-- Environment Health Section -->
      <SectionTitle level="4" style="margin-bottom: var(--cg-space-2)">
        ENVIRONMENT HEALTH
      </SectionTitle>

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
            <ActionButton variant="secondary" size="sm" @click="$emit('view-history')">
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

      <!-- Current Branch Section -->
      <div style="margin-top: var(--cg-space-6); padding-top: var(--cg-space-4); border-top: 1px solid var(--cg-color-border-subtle)">
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
    </template>
  </PanelLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
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

const props = defineProps<{
  status: ComfyGitStatus
}>()

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
  const gc = props.status.git_changes
  const wf = props.status.workflows
  // Only show "other changes" if there are workflow changes that aren't already shown
  // as new/modified/deleted in the Workflows column
  return (gc.workflow_changes || gc.has_other_changes) &&
         wf.new.length === 0 &&
         wf.modified.length === 0 &&
         wf.deleted.length === 0
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
/* Minimal custom styles - everything else comes from components */
</style>
