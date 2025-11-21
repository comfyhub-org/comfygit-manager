<template>
  <div :class="['panel-header', { stacked }]">
    <div class="header-left">
      <PanelTitle :show-prefix="showPrefix">{{ title }}</PanelTitle>
      <InfoButton v-if="showInfo" @click="$emit('info-click')" />
    </div>
    <div v-if="$slots.actions" class="header-actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import PanelTitle from '../atoms/PanelTitle.vue'
import InfoButton from '../atoms/InfoButton.vue'

withDefaults(defineProps<{
  title: string
  showInfo?: boolean
  showPrefix?: boolean
  stacked?: boolean  // Stack title and actions vertically
}>(), {
  showInfo: false,
  showPrefix: false,
  stacked: false
})

defineEmits<{
  'info-click': []
}>()
</script>

<style scoped>
.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--cg-space-4);
}

/* Stacked layout: title on top, actions below */
.panel-header.stacked {
  flex-direction: column;
  align-items: flex-start;
  gap: var(--cg-space-3);
}

.header-left {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
}

.header-actions {
  display: flex;
  gap: var(--cg-space-2);
  flex-wrap: wrap;
}
</style>
