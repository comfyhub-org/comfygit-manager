<template>
  <div class="history-section">
    <div class="section-header">
      <h4 class="section-title">Recent Commits</h4>
    </div>
    <div class="history-card">
      <div v-if="commits.length === 0" class="empty">
        No commits yet
      </div>
      <div v-else class="commit-list">
        <div v-for="commit in commits" :key="commit.hash" class="commit-item">
          <span class="commit-hash">{{ commit.short_hash || commit.hash?.slice(0, 7) }}</span>
          <span class="commit-message">{{ commit.message }}</span>
          <span class="commit-date">{{ commit.date_relative || commit.relative_date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CommitInfo } from '@/types/comfygit'

defineProps<{
  commits: CommitInfo[]
}>()
</script>

<style scoped>
.history-section {
  margin-bottom: 16px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.section-title {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--descrip-text, #999);
  margin: 0;
  letter-spacing: 0.5px;
}

.history-card {
  background: var(--comfy-input-bg, #222);
  border: 1px solid var(--border-color, #4a4a4a);
  border-radius: 6px;
  padding: 8px;
}

.empty {
  color: var(--descrip-text, #999);
  font-size: 12px;
  text-align: center;
  padding: 12px;
}

.commit-list {
  max-height: 160px;
  overflow-y: auto;
}

.commit-item {
  display: flex;
  align-items: baseline;
  padding: 6px 4px;
  font-size: 11px;
  border-bottom: 1px solid var(--border-color, #3a3a3a);
}

.commit-item:last-child {
  border-bottom: none;
}

.commit-item:hover {
  background: rgba(255, 255, 255, 0.02);
}

.commit-hash {
  font-family: monospace;
  font-size: 11px;
  color: #60a5fa;
  margin-right: 8px;
  flex-shrink: 0;
}

.commit-message {
  flex: 1;
  color: var(--input-text, #ddd);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.commit-date {
  font-size: 10px;
  color: var(--descrip-text, #999);
  white-space: nowrap;
  margin-left: 8px;
  flex-shrink: 0;
}
</style>
