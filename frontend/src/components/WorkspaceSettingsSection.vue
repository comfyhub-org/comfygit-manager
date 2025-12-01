<template>
  <PanelLayout>
    <template #header>
      <PanelHeader title="WORKSPACE SETTINGS">
        <template #actions>
          <ActionButton
            variant="primary"
            size="sm"
            :disabled="!contentRef?.hasChanges"
            @click="contentRef?.saveSettings()"
          >
            Save Changes
          </ActionButton>
          <ActionButton
            v-if="contentRef?.hasChanges"
            variant="ghost"
            size="sm"
            @click="contentRef?.resetSettings()"
          >
            Reset
          </ActionButton>
        </template>
      </PanelHeader>
    </template>

    <template #content>
      <WorkspaceSettingsContent ref="contentRef" @saved="handleSaved" />
    </template>
  </PanelLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PanelLayout from '@/components/base/organisms/PanelLayout.vue'
import PanelHeader from '@/components/base/molecules/PanelHeader.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'
import WorkspaceSettingsContent from './WorkspaceSettingsContent.vue'

const contentRef = ref<InstanceType<typeof WorkspaceSettingsContent> | null>(null)

function handleSaved() {
  console.log('[ComfyGit] Settings saved')
}
</script>
