<template>
  <div class="status-section">
    <h3 class="section-title">Status</h3>
    <div class="status-grid">
      <div class="status-column">
        <div class="status-item">
          <span class="count new">{{ status.workflows.new.length }}</span>
          <span>new</span>
        </div>
        <div class="status-item">
          <span class="count modified">{{ status.workflows.modified.length }}</span>
          <span>modified</span>
        </div>
        <div class="status-item">
          <span class="count deleted">{{ status.workflows.deleted.length }}</span>
          <span>deleted</span>
        </div>
        <div class="status-item">
          <span class="count synced">{{ status.workflows.synced.length }}</span>
          <span>synced</span>
        </div>
      </div>
      <div class="status-column">
        <div v-if="status.has_changes" class="status-item warn">
          <span class="icon">⚠</span>
          <span>Uncommitted changes</span>
        </div>
        <div v-else class="status-item ok">
          <span class="icon">✓</span>
          <span>All committed</span>
        </div>
        <div v-if="status.missing_models_count > 0" class="status-item warn">
          <span class="icon">⚠</span>
          <span>{{ status.missing_models_count }} missing model(s)</span>
        </div>
        <div v-if="!status.comparison.is_synced" class="status-item warn">
          <span class="icon">⚠</span>
          <span>Not synced</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ComfyGitStatus } from '@/types/comfygit'

defineProps<{
  status: ComfyGitStatus
}>()
</script>

<style scoped>
.status-section {
  margin-bottom: 20px;
}

.section-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--input-text, #ddd);
  margin: 0 0 12px 0;
}

.status-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  background: var(--comfy-input-bg, #222);
  border: 1px solid var(--border-color, #4a4a4a);
  border-radius: 6px;
  padding: 12px;
}

.status-column {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.status-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--input-text, #ddd);
}

.count {
  font-weight: 600;
  min-width: 20px;
}

.count.new { color: #4ade80; }
.count.modified { color: #fbbf24; }
.count.deleted { color: #f87171; }
.count.synced { color: var(--descrip-text, #999); }

.status-item.ok { color: #4ade80; }
.status-item.warn { color: #fbbf24; }

.icon {
  font-size: 14px;
}
</style>
