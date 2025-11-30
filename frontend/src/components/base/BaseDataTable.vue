<template>
  <div class="base-data-table">
    <table class="base-data-table-table">
      <thead v-if="columns.length" class="base-data-table-thead">
        <tr>
          <th
            v-for="col in columns"
            :key="col.key"
            :class="['base-data-table-th', col.align ? `align-${col.align}` : '']"
            :style="{ width: col.width }"
          >
            {{ col.label }}
          </th>
        </tr>
      </thead>
      <tbody class="base-data-table-tbody">
        <tr
          v-for="(row, index) in data"
          :key="getRowKey(row, index)"
          :class="['base-data-table-row', { clickable: !!$attrs.onRowClick }]"
          @click="handleRowClick(row, index)"
        >
          <td
            v-for="col in columns"
            :key="col.key"
            :class="['base-data-table-td', col.align ? `align-${col.align}` : '']"
          >
            <slot :name="`cell-${col.key}`" :row="row" :value="getCellValue(row, col.key)" :index="index">
              {{ getCellValue(row, col.key) }}
            </slot>
          </td>
        </tr>
        <tr v-if="!data.length" class="base-data-table-empty">
          <td :colspan="columns.length" class="base-data-table-empty-cell">
            <slot name="empty">{{ emptyText }}</slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
export interface DataTableColumn {
  key: string
  label: string
  width?: string
  align?: 'left' | 'center' | 'right'
}

const props = withDefaults(defineProps<{
  columns: DataTableColumn[]
  data: any[]
  rowKey?: string
  emptyText?: string
}>(), {
  rowKey: 'id',
  emptyText: 'No data available'
})

const emit = defineEmits<{
  rowClick: [row: any, index: number]
}>()

function getRowKey(row: any, index: number): string | number {
  return props.rowKey in row ? row[props.rowKey] : index
}

function getCellValue(row: any, key: string): any {
  return row[key]
}

function handleRowClick(row: any, index: number) {
  emit('rowClick', row, index)
}
</script>

<style scoped>
.base-data-table {
  width: 100%;
  overflow-x: auto;
  border: 1px solid var(--cg-color-border);
  border-radius: var(--cg-radius-md);
  background: var(--cg-color-bg-secondary);
}

.base-data-table-table {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--cg-font-mono);
}

.base-data-table-thead {
  background: var(--cg-color-bg-tertiary);
  border-bottom: 2px solid var(--cg-color-border);
}

.base-data-table-th {
  padding: 12px 16px;
  text-align: left;
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-medium);
  color: var(--cg-color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.base-data-table-th.align-center,
.base-data-table-td.align-center {
  text-align: center;
}

.base-data-table-th.align-right,
.base-data-table-td.align-right {
  text-align: right;
}

.base-data-table-tbody {
  background: var(--cg-color-bg-secondary);
}

.base-data-table-row {
  border-bottom: 1px solid var(--cg-color-border-subtle);
  transition: background var(--cg-transition-fast);
}

.base-data-table-row:last-child {
  border-bottom: none;
}

.base-data-table-row.clickable {
  cursor: pointer;
}

.base-data-table-row.clickable:hover {
  background: var(--cg-color-bg-hover);
}

.base-data-table-td {
  padding: 12px 16px;
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-primary);
}

.base-data-table-empty {
  background: var(--cg-color-bg-secondary);
}

.base-data-table-empty-cell {
  padding: var(--cg-space-6) var(--cg-space-4);
  text-align: center;
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
}

/* Custom scrollbar */
.base-data-table::-webkit-scrollbar {
  height: 8px;
}

.base-data-table::-webkit-scrollbar-track {
  background: var(--cg-color-bg-tertiary);
}

.base-data-table::-webkit-scrollbar-thumb {
  background: var(--cg-color-border-subtle);
  border: 1px solid var(--cg-color-bg-tertiary);
}

.base-data-table::-webkit-scrollbar-thumb:hover {
  background: var(--cg-color-accent);
}
</style>
