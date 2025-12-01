<template>
  <BaseModal
    title="WORKSPACE SETTINGS"
    size="lg"
    :show-close-button="true"
    @close="$emit('close')"
  >
    <template #body>
      <WorkspaceSettingsContent
        ref="contentRef"
        :workspace-path="workspacePath"
        @saved="handleSaved"
      />
    </template>
    <template #footer>
      <BaseButton
        variant="primary"
        :disabled="!contentRef?.hasChanges"
        @click="handleSave"
      >
        Save Changes
      </BaseButton>
      <BaseButton variant="secondary" @click="$emit('close')">
        Close
      </BaseButton>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseModal from './base/BaseModal.vue'
import BaseButton from './base/BaseButton.vue'
import WorkspaceSettingsContent from './WorkspaceSettingsContent.vue'

const props = defineProps<{
  // Optional workspace path for when no environment is running
  workspacePath?: string | null
}>()

const emit = defineEmits<{
  close: []
}>()

const contentRef = ref<InstanceType<typeof WorkspaceSettingsContent> | null>(null)

async function handleSave() {
  await contentRef.value?.saveSettings()
}

function handleSaved() {
  // Settings saved successfully - could auto-close here or stay open
  console.log('[ComfyGit] Settings saved from modal')
}
</script>

<style scoped>
/* Modal needs higher z-index to appear above wizard (10003) */
:deep(.base-modal-overlay) {
  z-index: 10004;
}
</style>
