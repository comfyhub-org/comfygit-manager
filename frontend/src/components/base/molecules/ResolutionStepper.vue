<template>
  <div class="resolution-stepper">
    <div class="stepper-header">
      <div
        v-for="(step, index) in steps"
        :key="step.id"
        :class="['step', {
          active: currentStep === step.id,
          completed: isStepCompleted(step.id),
          disabled: isStepDisabled(step.id)
        }]"
        @click="!isStepDisabled(step.id) && emit('step-change', step.id)"
      >
        <div class="step-indicator">
          <span v-if="isStepCompleted(step.id)" class="step-icon">✓</span>
          <span v-else class="step-number">{{ index + 1 }}</span>
        </div>
        <div class="step-label">{{ step.label }}</div>
        <div v-if="index < steps.length - 1" class="step-connector"></div>
      </div>
    </div>
    <div class="stepper-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Step {
  id: string
  label: string
}

const props = defineProps<{
  steps: Step[]
  currentStep: string
  completedSteps: string[]
}>()

const emit = defineEmits<{
  (e: 'step-change', stepId: string): void
}>()

function isStepCompleted(stepId: string): boolean {
  return props.completedSteps.includes(stepId)
}

function isStepDisabled(stepId: string): boolean {
  const currentIndex = props.steps.findIndex(s => s.id === props.currentStep)
  const stepIndex = props.steps.findIndex(s => s.id === stepId)
  return stepIndex > currentIndex
}
</script>

<style scoped>
.resolution-stepper {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}

.stepper-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-secondary);
  border-bottom: 1px solid var(--cg-color-border);
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--cg-spacing-xs);
  flex: 1;
  position: relative;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.2s;
}

.step.active {
  opacity: 1;
}

.step.completed {
  opacity: 0.8;
}

.step.disabled {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}

.step-indicator {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--cg-color-bg-tertiary);
  border: 2px solid var(--cg-color-border);
  color: var(--cg-color-text-muted);
  font-weight: var(--cg-font-weight-semibold);
  font-size: var(--cg-font-size-sm);
  transition: all 0.2s;
}

.step.active .step-indicator {
  background: var(--cg-color-primary);
  border-color: var(--cg-color-primary);
  color: white;
}

.step.completed .step-indicator {
  background: var(--cg-color-success);
  border-color: var(--cg-color-success);
  color: white;
}

.step-label {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  text-align: center;
  font-weight: var(--cg-font-weight-medium);
}

.step.active .step-label {
  color: var(--cg-color-text);
  font-weight: var(--cg-font-weight-semibold);
}

.step-connector {
  position: absolute;
  top: 16px;
  left: calc(50% + 16px);
  right: calc(-50% + 16px);
  height: 2px;
  background: var(--cg-color-border);
  z-index: -1;
}

.step.completed .step-connector {
  background: var(--cg-color-success);
}

.stepper-content {
  padding: var(--cg-space-4);
}
</style>
