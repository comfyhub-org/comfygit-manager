<template>
  <div class="history-section">
    <h3 class="view-title">HISTORY</h3>
    <div v-if="commits.length === 0" class="empty">
      No commits yet
    </div>
    <div v-else class="commit-list">
      <div
        v-for="commit in commits"
        :key="commit.hash"
        class="commit-item"
        @click="$emit('select', commit)"
      >
        <span class="commit-hash">{{ commit.short_hash || commit.hash?.slice(0, 7) }}</span>
        <span class="commit-message">{{ commit.message }}</span>
        <span class="commit-date">{{ commit.date_relative || commit.relative_date }}</span>
        <div class="commit-actions" @click.stop>
          <button
            class="action-btn"
            @click="$emit('checkout', commit)"
            title="Checkout this commit"
          >
            <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 12L3 7h3V1h4v6h3L8 12z"/>
            </svg>
          </button>
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

defineEmits<{
  select: [commit: CommitInfo]
  checkout: [commit: CommitInfo]
}>()
</script>

<style scoped>
.history-section {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.view-title {
  color: var(--cg-color-accent);
  font-size: var(--cg-font-size-lg);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  margin: 0 0 var(--cg-space-4) 0;
}

.empty {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
  text-align: center;
  padding: var(--cg-space-6);
}

.commit-list {
  flex: 1;
  overflow-y: auto;
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
}

.commit-item {
  display: flex;
  align-items: baseline;
  padding: 8px 10px;
  border-bottom: 1px solid var(--cg-color-border-subtle);
  cursor: pointer;
  position: relative;
}

.commit-item:last-child {
  border-bottom: none;
}

.commit-item:hover {
  background: var(--cg-color-bg-hover);
}

.commit-item:hover .commit-actions {
  opacity: 1;
}

.commit-hash {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-info);
  margin-right: 10px;
  flex-shrink: 0;
}

.commit-message {
  flex: 1;
  color: var(--cg-color-text-secondary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: var(--cg-font-size-xs);
}

.commit-date {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  white-space: nowrap;
  margin-left: 10px;
  margin-right: 32px;
  flex-shrink: 0;
}

.commit-actions {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  transition: opacity 0.15s;
}

.action-btn {
  background: transparent;
  border: 1px solid var(--cg-color-border);
  color: var(--cg-color-text-primary);
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.action-btn:hover {
  background: var(--cg-color-bg-hover);
  border-color: var(--cg-color-accent);
  color: var(--cg-color-accent);
}

/* Scrollbar */
.commit-list::-webkit-scrollbar {
  width: 8px;
}

.commit-list::-webkit-scrollbar-track {
  background: var(--cg-color-bg-tertiary);
}

.commit-list::-webkit-scrollbar-thumb {
  background: var(--cg-color-border-subtle);
  border: 1px solid var(--cg-color-bg-tertiary);
}

.commit-list::-webkit-scrollbar-thumb:hover {
  background: var(--cg-color-accent);
}
</style>
