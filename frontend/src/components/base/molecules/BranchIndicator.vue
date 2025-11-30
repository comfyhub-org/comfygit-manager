<template>
  <div class="branch-indicator">
    <div class="branch-indicator__info">
      <span class="branch-indicator__label">{{ label }}</span>
      <span class="branch-indicator__name">{{ branchName }}</span>
      <span v-if="remote" class="branch-indicator__remote">@{{ remote }}</span>
    </div>

    <div v-if="showStatus && (commitsAhead || commitsBehind)" class="branch-indicator__status">
      <span v-if="commitsAhead" class="branch-indicator__ahead">
        ↑ {{ commitsAhead }} ahead
      </span>
      <span v-if="commitsBehind" class="branch-indicator__behind">
        ↓ {{ commitsBehind }} behind
      </span>
    </div>

    <div v-if="$slots.actions" class="branch-indicator__actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * BranchIndicator Molecule
 *
 * Displays current branch information with optional remote tracking and action buttons
 * Used in Status view and Branches view
 *
 * Composes: ActionButton atoms (via slot)
 * Provides: Consistent branch display with status
 *
 * @example
 * <BranchIndicator
 *   branch-name="main"
 *   remote="origin/main"
 *   :commits-ahead="2"
 *   :commits-behind="1"
 *   :show-status="true"
 * >
 *   <template #actions>
 *     <ActionButton variant="secondary" size="sm">Switch Branch</ActionButton>
 *   </template>
 * </BranchIndicator>
 */

interface BranchIndicatorProps {
  /** Label text (e.g., "Current Branch", "Branch") */
  label?: string
  /** Current branch name */
  branchName: string
  /** Remote tracking branch (e.g., "origin/main") */
  remote?: string
  /** Number of commits ahead of remote */
  commitsAhead?: number
  /** Number of commits behind remote */
  commitsBehind?: number
  /** Show ahead/behind status */
  showStatus?: boolean
}

withDefaults(defineProps<BranchIndicatorProps>(), {
  label: 'Current Branch',
  showStatus: false
})
</script>

<style scoped>
.branch-indicator {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--cg-space-3);
  padding: var(--cg-space-2) 0;
  flex-wrap: wrap;
}

.branch-indicator__info {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  flex: 1;
  min-width: 0;
}

.branch-indicator__label {
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-semibold);
  text-transform: uppercase;
  color: var(--cg-color-text-muted);
  letter-spacing: var(--cg-letter-spacing-wide);
  flex-shrink: 0;
}

.branch-indicator__name {
  font-size: var(--cg-font-size-base);
  font-weight: var(--cg-font-weight-semibold);
  color: var(--cg-color-accent);
  font-family: var(--cg-font-mono);
}

.branch-indicator__remote {
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-muted);
  font-family: var(--cg-font-mono);
}

.branch-indicator__status {
  display: flex;
  align-items: center;
  gap: var(--cg-space-3);
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-secondary);
}

.branch-indicator__ahead {
  color: var(--cg-color-success);
}

.branch-indicator__behind {
  color: var(--cg-color-warning);
}

.branch-indicator__actions {
  display: flex;
  gap: var(--cg-space-2);
}
</style>
