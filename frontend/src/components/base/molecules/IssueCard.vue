<template>
  <div :class="['issue-card', severityClass]">
    <div class="issue-card__header">
      <span class="issue-card__icon">{{ icon }}</span>
      <h4 class="issue-card__title">{{ title }}</h4>
    </div>

    <div v-if="$slots.default || description" class="issue-card__content">
      <p v-if="description" class="issue-card__description">{{ description }}</p>
      <slot></slot>
    </div>

    <div v-if="items && items.length" class="issue-card__items">
      <div v-for="(item, index) in items" :key="index" class="issue-card__item">
        <span class="issue-card__bullet">•</span>
        <span>{{ item }}</span>
      </div>
    </div>

    <div v-if="$slots.actions" class="issue-card__actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

/**
 * IssueCard Molecule
 *
 * Actionable warning/error card with icon, title, description, items list, and action buttons
 * Used in Status view to highlight issues that need attention
 *
 * Composes: ActionButton atoms
 * Provides: Consistent issue/warning display
 *
 * @example
 * <IssueCard
 *   severity="warning"
 *   icon="⚠"
 *   title="3 workflows have missing dependencies"
 *   :items="['workflow-a.json — 2 missing nodes', 'workflow-b.json — 1 missing node']"
 * >
 *   <template #actions>
 *     <ActionButton variant="secondary">View Details</ActionButton>
 *     <ActionButton variant="primary">Resolve All</ActionButton>
 *   </template>
 * </IssueCard>
 */

interface IssueCardProps {
  /** Severity level affecting styling */
  severity?: 'info' | 'warning' | 'error'
  /** Icon/emoji to display (e.g., "⚠", "ℹ", "✕") */
  icon?: string
  /** Issue title */
  title: string
  /** Optional description text */
  description?: string
  /** Array of affected items to list */
  items?: string[]
}

const props = withDefaults(defineProps<IssueCardProps>(), {
  severity: 'warning',
  icon: '⚠'
})

const severityClass = computed(() => `issue-card--${props.severity}`)
</script>

<style scoped>
.issue-card {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
  padding: var(--cg-space-3) var(--cg-space-4);
  border-radius: var(--cg-radius-md);
  border: 1px solid;
  margin-bottom: var(--cg-space-3);
}

/* Severity variants */
.issue-card--info {
  background: var(--cg-color-info-muted);
  border-color: var(--cg-color-accent);
  color: var(--cg-color-text-primary);
}

.issue-card--warning {
  background: var(--cg-color-warning-muted);
  border-color: var(--cg-color-warning);
  color: var(--cg-color-text-primary);
}

.issue-card--error {
  background: var(--cg-color-error-muted);
  border-color: var(--cg-color-error);
  color: var(--cg-color-text-primary);
}

.issue-card__header {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
}

.issue-card__icon {
  font-size: var(--cg-font-size-lg);
  flex-shrink: 0;
}

.issue-card--warning .issue-card__icon {
  color: var(--cg-color-warning);
}

.issue-card--error .issue-card__icon {
  color: var(--cg-color-error);
}

.issue-card--info .issue-card__icon {
  color: var(--cg-color-accent);
}

.issue-card__title {
  font-size: var(--cg-font-size-base);
  font-weight: var(--cg-font-weight-semibold);
  color: var(--cg-color-text-primary);
  margin: 0;
}

.issue-card__content {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.issue-card__description {
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-secondary);
  margin: 0;
  line-height: 1.5;
}

.issue-card__items {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
  padding-left: var(--cg-space-2);
}

.issue-card__item {
  display: flex;
  gap: var(--cg-space-2);
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-secondary);
  line-height: 1.5;
}

.issue-card__bullet {
  color: var(--cg-color-text-muted);
  flex-shrink: 0;
}

.issue-card__actions {
  display: flex;
  gap: var(--cg-space-2);
  flex-wrap: wrap;
}
</style>
