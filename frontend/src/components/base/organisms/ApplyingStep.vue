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

    <!-- Phase: Installing -->
    <div v-else-if="progress.phase === 'installing'" class="phase-content">
      <div class="phase-header">
        <div class="loading-spinner"></div>
        <h3 class="phase-title">Installing Node Packages</h3>
      </div>
      <p class="phase-description">Installing {{ progress.nodesToInstall.length }} package{{ progress.nodesToInstall.length > 1 ? 's' : '' }}...</p>
      <div class="install-list">
        <div v-for="pkg in progress.nodesToInstall" :key="pkg" class="install-item">
          <span class="install-icon">⬇</span>
          <code>{{ pkg }}</code>
        </div>
      </div>
    </div>

    <!-- Phase: Complete -->
    <div v-else-if="progress.phase === 'complete'" class="phase-content">
      <div class="phase-header">
        <span class="phase-icon success">✓</span>
        <h3 class="phase-title">Resolution Complete</h3>
      </div>

      <!-- Summary -->
      <div class="completion-summary">
        <!-- Nodes installed successfully -->
        <div v-if="progress.nodesInstalled.length > 0" class="summary-item success">
          <span class="summary-icon">✓</span>
          <span class="summary-text">{{ progress.nodesInstalled.length }} node package{{ progress.nodesInstalled.length > 1 ? 's' : '' }} installed</span>
        </div>

        <!-- Installation error -->
        <div v-if="progress.installError" class="summary-item error">
          <span class="summary-icon">✗</span>
          <span class="summary-text">Installation error: {{ progress.installError }}</span>
        </div>

        <div class="summary-item success">
          <span class="summary-icon">✓</span>
          <span class="summary-text">Workflow dependencies resolved</span>
        </div>

        <p class="summary-note">Model downloads (if any) will continue in the background.</p>

        <!-- Restart required message -->
        <div v-if="progress.needsRestart" class="restart-prompt">
          <div class="restart-warning">
            <span class="warning-icon">⚠</span>
            <div class="warning-content">
              <strong>Restart Required</strong>
              <p>Node packages were installed. ComfyUI needs to restart to load them.</p>
            </div>
          </div>
          <button class="restart-button" @click="$emit('restart')">
            Restart ComfyUI
          </button>
        </div>
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

defineEmits<{
  restart: []
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

.summary-item.error {
  background: var(--cg-color-error-muted);
  color: var(--cg-color-error);
}

/* Install list */
.install-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
  padding: var(--cg-space-2);
  background: var(--cg-color-bg-secondary);
  border-radius: var(--cg-radius-sm);
  max-height: 150px;
  overflow-y: auto;
}

.install-item {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-secondary);
}

.install-icon {
  color: var(--cg-color-info);
}

.install-item code {
  font-family: var(--cg-font-mono);
  color: var(--cg-color-text-primary);
}

/* Restart prompt */
.restart-prompt {
  margin-top: var(--cg-space-4);
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
}

.restart-warning {
  display: flex;
  align-items: flex-start;
  gap: var(--cg-space-3);
  padding: var(--cg-space-3);
  background: var(--cg-color-warning-muted);
  border: 1px solid var(--cg-color-warning);
  border-radius: var(--cg-radius-md);
  color: var(--cg-color-warning);
}

.restart-warning .warning-icon {
  font-size: var(--cg-font-size-lg);
  flex-shrink: 0;
}

.restart-warning .warning-content {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
}

.restart-warning .warning-content strong {
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-semibold);
}

.restart-warning .warning-content p {
  margin: 0;
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-secondary);
}

.restart-button {
  align-self: flex-end;
  padding: var(--cg-space-2) var(--cg-space-4);
  background: var(--cg-color-warning);
  color: var(--cg-color-bg-primary);
  border: none;
  border-radius: var(--cg-radius-md);
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-semibold);
  cursor: pointer;
  transition: all var(--cg-transition-fast);
}

.restart-button:hover {
  filter: brightness(1.1);
}
</style>
