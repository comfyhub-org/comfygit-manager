<template>
  <div class="applying-step">
    <!-- Phase: Resolving -->
    <div v-if="progress.phase === 'resolving'" class="phase-content">
      <div class="phase-header">
        <div class="loading-spinner"></div>
        <h3 class="phase-title">Applying Resolution</h3>
      </div>
      <p class="phase-description">Processing your choices...</p>
    </div>

    <!-- Phase: Complete -->
    <div v-else-if="progress.phase === 'complete'" class="phase-content">
      <div class="phase-header">
        <span class="phase-icon success">✓</span>
        <h3 class="phase-title">Resolution Complete</h3>
      </div>

      <!-- Summary -->
      <div class="completion-summary">
        <div v-if="progress.nodesToInstall.length > 0" class="summary-item info">
          <span class="summary-icon">→</span>
          <span class="summary-text">{{ progress.nodesToInstall.length }} node(s) need installation</span>
        </div>
        <div class="summary-item success">
          <span class="summary-icon">✓</span>
          <span class="summary-text">Workflow dependencies resolved</span>
        </div>
        <p class="summary-note">Model downloads (if any) will continue in the background.</p>
      </div>
    </div>

    <!-- Phase: Error -->
    <div v-else-if="progress.phase === 'error'" class="phase-content error">
      <div class="phase-header">
        <span class="phase-icon error">✗</span>
        <h3 class="phase-title">Resolution Failed</h3>
      </div>
      <p class="error-message">{{ progress.error }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ResolutionProgressState } from '@/types/comfygit'

defineProps<{
  progress: ResolutionProgressState
}>()
</script>

<style scoped>
.applying-step {
  padding: var(--cg-space-4);
}

.phase-content {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}

.phase-header {
  display: flex;
  align-items: center;
  gap: var(--cg-space-3);
}

.phase-icon {
  font-size: var(--cg-font-size-xl);
}

.phase-icon.success {
  color: var(--cg-color-success);
}

.phase-icon.error {
  color: var(--cg-color-error);
}

.phase-title {
  margin: 0;
  font-size: var(--cg-font-size-lg);
  font-weight: var(--cg-font-weight-semibold);
  color: var(--cg-color-text-primary);
}

.phase-description {
  margin: 0;
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
}

/* Loading spinner */
.loading-spinner {
  width: 24px;
  height: 24px;
  border: 3px solid var(--cg-color-border);
  border-top-color: var(--cg-color-accent);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Completion summary */
.completion-summary {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.summary-item {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  padding: var(--cg-space-2) var(--cg-space-3);
  border-radius: var(--cg-radius-md);
  font-size: var(--cg-font-size-sm);
}

.summary-item.success {
  background: var(--cg-color-success-muted);
  color: var(--cg-color-success);
}

.summary-item.info {
  background: var(--cg-color-info-muted);
  color: var(--cg-color-info);
}

.summary-note {
  margin: 0;
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  font-style: italic;
}

.summary-icon {
  font-size: var(--cg-font-size-base);
}

/* Error state */
.phase-content.error .error-message {
  margin: 0;
  padding: var(--cg-space-3);
  background: var(--cg-color-error-muted);
  border: 1px solid var(--cg-color-error);
  border-radius: var(--cg-radius-md);
  color: var(--cg-color-error);
  font-size: var(--cg-font-size-sm);
  font-family: var(--cg-font-mono);
}
</style>
