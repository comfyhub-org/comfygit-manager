<template>
  <PanelLayout>
    <template #header>
      <PanelHeader title="BRANCHES">
        <template #actions>
          <ActionButton
            v-if="!showCreateInput"
            variant="primary"
            size="sm"
            @click="showCreateInput = true"
          >
            + Create Branch
          </ActionButton>
        </template>
      </PanelHeader>
    </template>

    <template #content>
      <!-- Create Branch Form -->
      <BranchCreateForm
        v-if="showCreateInput"
        @create="handleCreate"
        @cancel="cancelCreate"
      />

      <!-- Empty State -->
      <EmptyState
        v-if="branches.length === 0"
        icon="○"
        message="No branches found"
      />

      <!-- Branch List -->
      <div v-else class="branch-list">
        <BranchListItem
          v-for="branch in branches"
          :key="branch.name"
          :branch-name="branch.name"
          :is-current="branch.is_current"
        >
          <template #actions>
            <ActionButton
              v-if="!branch.is_current"
              variant="destructive"
              size="xs"
              @click="$emit('delete', branch.name)"
            >
              Delete
            </ActionButton>
            <ActionButton
              v-if="!branch.is_current"
              variant="secondary"
              size="xs"
              @click="$emit('switch', branch.name)"
            >
              Switch
            </ActionButton>
          </template>
        </BranchListItem>
      </div>
    </template>
  </PanelLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { BranchInfo } from '@/types/comfygit'
import PanelLayout from '@/components/base/organisms/PanelLayout.vue'
import PanelHeader from '@/components/base/molecules/PanelHeader.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'
import EmptyState from '@/components/base/molecules/EmptyState.vue'
import BranchCreateForm from '@/components/base/molecules/BranchCreateForm.vue'
import BranchListItem from '@/components/base/molecules/BranchListItem.vue'

defineProps<{
  branches: BranchInfo[]
  current: string | null
}>()

const emit = defineEmits<{
  switch: [branch: string]
  create: [name: string]
  delete: [branch: string]
}>()

const showCreateInput = ref(false)

function handleCreate(name: string) {
  emit('create', name)
  cancelCreate()
}

function cancelCreate() {
  showCreateInput.value = false
}
</script>

<style scoped>
.branch-list {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
}
</style>
