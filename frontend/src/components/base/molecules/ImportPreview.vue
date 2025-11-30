<template>
  <div class="import-preview">
    <div class="preview-header">
      <SectionTitle>Import Preview</SectionTitle>
      <span v-if="sourceEnvironment" class="source-env">
        From: <Value>{{ sourceEnvironment }}</Value>
      </span>
    </div>

    <div class="preview-content">
      <!-- Workflows Summary -->
      <div class="preview-section">
        <div class="section-header">
          <div class="section-icon">📄</div>
          <div class="section-info">
            <div class="section-title">Workflows</div>
            <div class="section-count">{{ workflowCount }} file{{ workflowCount !== 1 ? 's' : '' }}</div>
          </div>
        </div>
        <div v-if="workflows.length > 0" class="item-list">
          <div v-for="workflow in workflows.slice(0, maxPreviewItems)" :key="workflow" class="preview-item">
            <span class="item-bullet">•</span>
            <span class="item-name">{{ workflow }}</span>
          </div>
          <div v-if="workflows.length > maxPreviewItems" class="item-more">
            +{{ workflows.length - maxPreviewItems }} more
          </div>
        </div>
      </div>

      <!-- Models Summary -->
      <div class="preview-section">
        <div class="section-header">
          <div class="section-icon">🎨</div>
          <div class="section-info">
            <div class="section-title">Models</div>
            <div class="section-count">{{ modelCount }} file{{ modelCount !== 1 ? 's' : '' }}</div>
          </div>
        </div>
        <div v-if="models.length > 0" class="item-list">
          <div v-for="model in models.slice(0, maxPreviewItems)" :key="model.filename" class="preview-item">
            <span class="item-bullet">•</span>
            <div class="item-details">
              <span class="item-name">{{ model.filename }}</span>
              <span class="item-meta">{{ formatSize(model.size) }} • {{ model.type }}</span>
            </div>
          </div>
          <div v-if="models.length > maxPreviewItems" class="item-more">
            +{{ models.length - maxPreviewItems }} more
          </div>
        </div>
      </div>

      <!-- Nodes Summary -->
      <div class="preview-section">
        <div class="section-header">
          <div class="section-icon">🔌</div>
          <div class="section-info">
            <div class="section-title">Custom Nodes</div>
            <div class="section-count">{{ nodeCount }} node{{ nodeCount !== 1 ? 's' : '' }}</div>
          </div>
        </div>
        <div v-if="nodes.length > 0" class="item-list">
          <div v-for="node in nodes.slice(0, maxPreviewItems)" :key="node" class="preview-item">
            <span class="item-bullet">•</span>
            <span class="item-name">{{ node }}</span>
          </div>
          <div v-if="nodes.length > maxPreviewItems" class="item-more">
            +{{ nodes.length - maxPreviewItems }} more
          </div>
        </div>
      </div>

      <!-- Git Info -->
      <div v-if="gitBranch || gitCommit" class="preview-section">
        <div class="section-header">
          <div class="section-icon">🌿</div>
          <div class="section-info">
            <div class="section-title">Git Information</div>
          </div>
        </div>
        <div class="git-info">
          <DetailRow v-if="gitBranch" label="Branch">
            <Value>{{ gitBranch }}</Value>
          </DetailRow>
          <DetailRow v-if="gitCommit" label="Commit">
            <CommitHash :hash="gitCommit" />
          </DetailRow>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SectionTitle from '@/components/base/atoms/SectionTitle.vue'
import Value from '@/components/base/atoms/Value.vue'
import DetailRow from '@/components/base/molecules/DetailRow.vue'
import CommitHash from '@/components/base/atoms/CommitHash.vue'

interface ModelPreview {
  filename: string
  size: number
  type: string
}

const props = withDefaults(defineProps<{
  sourceEnvironment?: string
  workflows?: string[]
  models?: ModelPreview[]
  nodes?: string[]
  gitBranch?: string
  gitCommit?: string
  maxPreviewItems?: number
}>(), {
  workflows: () => [],
  models: () => [],
  nodes: () => [],
  maxPreviewItems: 5
})

const workflowCount = computed(() => props.workflows.length)
const modelCount = computed(() => props.models.length)
const nodeCount = computed(() => props.nodes.length)

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`
}
</script>

<style scoped>
.import-preview {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  padding: var(--cg-space-4);
}

.preview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--cg-space-4);
  padding-bottom: var(--cg-space-3);
  border-bottom: 1px solid var(--cg-color-border-subtle);
}

.source-env {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-sm);
}

.preview-content {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}

.preview-section {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.section-header {
  display: flex;
  align-items: center;
  gap: var(--cg-space-3);
}

.section-icon {
  font-size: var(--cg-font-size-2xl);
  flex-shrink: 0;
}

.section-info {
  flex: 1;
}

.section-title {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-base);
  font-weight: var(--cg-font-weight-semibold);
}

.section-count {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
}

.item-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
  padding-left: var(--cg-space-6);
}

.preview-item {
  display: flex;
  align-items: flex-start;
  gap: var(--cg-space-2);
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-sm);
}

.item-bullet {
  color: var(--cg-color-accent);
  flex-shrink: 0;
}

.item-name {
  font-family: var(--cg-font-mono);
  word-break: break-all;
}

.item-details {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
  min-width: 0;
}

.item-meta {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  font-family: var(--cg-font-mono);
}

.item-more {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
  font-style: italic;
  padding-left: var(--cg-space-3);
}

.git-info {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
  padding-left: var(--cg-space-6);
}
</style>
