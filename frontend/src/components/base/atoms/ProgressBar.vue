<template>
  <div class="progress-bar">
    <div
      class="progress-fill"
      :class="variant"
      :style="{ width: progressWidth }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface ProgressBarProps {
  progress: number           // 0-100
  variant?: 'default' | 'success' | 'warning' | 'error'
  height?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<ProgressBarProps>(), {
  variant: 'default',
  height: 'md'
})

const progressWidth = computed(() => {
  const clamped = Math.max(0, Math.min(100, props.progress))
  return `${clamped}%`
})
</script>

<style scoped>
.progress-bar {
  width: 100%;
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  border-radius: 2px;
  overflow: hidden;
  position: relative;
}

.progress-fill {
  height: 100%;
  transition: width 0.3s ease;
  position: relative;
}

.progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* Variants */
.progress-fill.default {
  background: var(--cg-color-accent);
  box-shadow: 0 0 8px rgba(0, 255, 65, 0.4);
}

.progress-fill.success {
  background: var(--cg-color-success);
  box-shadow: 0 0 8px rgba(74, 222, 128, 0.4);
}

.progress-fill.warning {
  background: var(--cg-color-warning);
  box-shadow: 0 0 8px rgba(251, 191, 36, 0.4);
}

.progress-fill.error {
  background: var(--cg-color-error);
  box-shadow: 0 0 8px rgba(239, 68, 68, 0.4);
}

/* Height variants */
.progress-bar {
  height: var(--cg-space-2); /* default md */
}
</style>
