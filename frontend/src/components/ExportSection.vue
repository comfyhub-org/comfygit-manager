<template>
  <PanelLayout>
    <template #header>
      <PanelHeader title="EXPORT ENVIRONMENT">
        <template #actions>
          <ActionButton
            variant="ghost"
            size="sm"
            @click="showInfo = true"
            title="About exporting"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
            </svg>
          </ActionButton>
        </template>
      </PanelHeader>
    </template>

    <template #content>
      <!-- What Will Be Exported -->
      <SectionGroup title="WHAT WILL BE EXPORTED">
        <ItemCard status="synced">
          <template #icon>📦</template>
          <template #title>Environment Snapshot</template>
          <template #subtitle>
            Creates a complete snapshot of your current environment including workflows, custom nodes, and model references.
          </template>
          <template #details>
            <DetailRow label="Workflows" value="All workflows in this environment" />
            <DetailRow label="Custom Nodes" value="Node definitions and dependencies" />
            <DetailRow label="Models" value="Model references (not files)" />
            <DetailRow label="Configuration" value="Environment settings and metadata" />
          </template>
        </ItemCard>
      </SectionGroup>

      <!-- Export Configuration -->
      <SectionGroup title="EXPORT OPTIONS">
        <ItemCard status="synced">
          <template #icon>📁</template>
          <template #title>Output Destination</template>
          <template #subtitle>
            Specify where the export bundle should be saved, or leave empty for default location.
          </template>
          <template #details>
            <div class="output-path-input">
              <TextInput
                v-model="outputPath"
                placeholder="/path/to/export/bundle.tar.gz"
              />
            </div>
          </template>
        </ItemCard>
      </SectionGroup>

      <!-- Export Actions -->
      <SectionGroup title="EXPORT">
        <div class="export-actions">
          <ActionButton
            variant="primary"
            size="md"
            :loading="isExporting"
            :disabled="isExporting"
            @click="handleExport"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 12L3 7h3V1h4v6h3L8 12z"/>
              <path d="M14 14H2v-2h12v2z"/>
            </svg>
            {{ isExporting ? 'Exporting...' : 'Export Environment' }}
          </ActionButton>
          <ActionButton
            v-if="outputPath"
            variant="secondary"
            size="md"
            :disabled="isExporting"
            @click="outputPath = ''"
          >
            Clear Path
          </ActionButton>
        </div>
      </SectionGroup>

      <!-- Export Result -->
      <SectionGroup v-if="exportResult" title="LAST EXPORT">
        <ItemCard :status="exportResult.status === 'success' ? 'synced' : 'broken'">
          <template #icon>{{ exportResult.status === 'success' ? '✓' : '✕' }}</template>
          <template #title>
            {{ exportResult.status === 'success' ? 'Export Completed Successfully' : 'Export Failed' }}
          </template>
          <template #subtitle>
            {{ exportResult.status === 'success' ? 'Your environment has been exported' : exportResult.message }}
          </template>
          <template v-if="exportResult.status === 'success'" #details>
            <DetailRow label="Saved to:">
              <FilePath :path="exportResult.path || 'Unknown location'" />
            </DetailRow>
            <DetailRow
              v-if="exportResult.models_without_sources !== undefined"
              label="Models without sources:"
              :value="exportResult.models_without_sources.toString()"
            />
            <div v-if="exportResult.models_without_sources && exportResult.models_without_sources > 0" class="export-warning">
              <span class="warning-icon">!</span>
              <span class="warning-text">
                Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere.
              </span>
            </div>
          </template>
          <template v-if="exportResult.status === 'success'" #actions>
            <ActionButton variant="secondary" size="sm" @click="copyExportPath">
              Copy Path
            </ActionButton>
            <ActionButton variant="ghost" size="sm" @click="exportResult = null">
              Dismiss
            </ActionButton>
          </template>
        </ItemCard>
      </SectionGroup>
    </template>
  </PanelLayout>

  <!-- Info Popover -->
  <InfoPopover
    :show="showInfo"
    title="About Environment Export"
    @close="showInfo = false"
  >
    <template #content>
      <p>
        Exporting creates a portable bundle of your environment that can be:
      </p>
      <ul>
        <li>Shared with collaborators</li>
        <li>Backed up for safekeeping</li>
        <li>Imported into other ComfyGit workspaces</li>
        <li>Version controlled separately</li>
      </ul>
      <p>
        <strong>Note:</strong> Model files themselves are not included in the export, only their references and source information. This keeps export bundles small and portable.
      </p>
    </template>
  </InfoPopover>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { ExportResult } from '@/types/comfygit'
import PanelLayout from '@/components/base/organisms/PanelLayout.vue'
import PanelHeader from '@/components/base/molecules/PanelHeader.vue'
import SectionGroup from '@/components/base/molecules/SectionGroup.vue'
import ItemCard from '@/components/base/molecules/ItemCard.vue'
import DetailRow from '@/components/base/molecules/DetailRow.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'
import TextInput from '@/components/base/atoms/TextInput.vue'
import FilePath from '@/components/base/atoms/FilePath.vue'
import InfoPopover from '@/components/base/molecules/InfoPopover.vue'

const { exportEnv } = useComfyGitService()

const outputPath = ref('')
const isExporting = ref(false)
const exportResult = ref<ExportResult | null>(null)
const showInfo = ref(false)

async function handleExport() {
  isExporting.value = true
  exportResult.value = null

  try {
    const result = await exportEnv(outputPath.value || undefined)
    exportResult.value = result
  } catch (err) {
    exportResult.value = {
      status: 'error',
      message: err instanceof Error ? err.message : 'Unknown error occurred'
    }
  } finally {
    isExporting.value = false
  }
}

async function copyExportPath() {
  if (exportResult.value?.path) {
    try {
      await navigator.clipboard.writeText(exportResult.value.path)
    } catch (err) {
      console.error('Failed to copy path:', err)
    }
  }
}
</script>

<style scoped>
.output-path-input {
  width: 100%;
}

.export-actions {
  display: flex;
  gap: var(--cg-space-3);
  align-items: center;
}

.export-warning {
  display: flex;
  gap: var(--cg-space-2);
  padding: var(--cg-space-2);
  background: var(--cg-color-warning-muted);
  border: 1px solid var(--cg-color-warning);
  margin-top: var(--cg-space-2);
}

.warning-icon {
  color: var(--cg-color-warning);
  font-weight: var(--cg-font-weight-bold);
  flex-shrink: 0;
}

.warning-text {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-xs);
  line-height: 1.4;
}

ul {
  margin: var(--cg-space-2) 0;
  padding-left: var(--cg-space-4);
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-xs);
  line-height: 1.6;
}

li {
  margin-bottom: var(--cg-space-1);
}
</style>
