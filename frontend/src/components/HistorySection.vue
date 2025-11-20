<template>
  <div class="history-section">
    <h3 class="section-title">History</h3>
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
  margin-bottom: 20px;
}

.section-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--input-text, #ddd);
  margin: 0 0 12px 0;
}

.history-card {
  background: var(--comfy-input-bg, #222);
  border: 1px solid var(--border-color, #4a4a4a);
  border-radius: 6px;
  padding: 12px;
}

.empty {
  color: var(--descrip-text, #999);
  font-size: 13px;
  text-align: center;
  padding: 8px;
}

.commit-list {
  max-height: 200px;
  overflow-y: auto;
}

.commit-item {
  display: flex;
  align-items: flex-start;
  padding: 8px 0;
  border-bottom: 1px solid var(--border-color, #4a4a4a);
}

.commit-item:last-child {
  border-bottom: none;
}

.commit-hash {
  font-family: monospace;
  font-size: 12px;
  color: #60a5fa;
  margin-right: 8px;
  flex-shrink: 0;
}

.commit-message {
  flex: 1;
  font-size: 13px;
  color: var(--input-text, #ddd);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.commit-date {
  font-size: 11px;
  color: var(--descrip-text, #999);
  white-space: nowrap;
  margin-left: 12px;
  flex-shrink: 0;
}
</style>
