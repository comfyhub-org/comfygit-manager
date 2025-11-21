<template>
  <div class="file-input-wrapper">
    <input
      ref="fileInputRef"
      type="file"
      :accept="accept"
      :multiple="multiple"
      :disabled="disabled"
      class="file-input-hidden"
      @change="handleFileChange"
    />
    <ActionButton
      :variant="variant"
      :size="size"
      :disabled="disabled"
      @click="triggerFileInput"
    >
      <slot>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 4L4 8h3v4h2V8h3L8 4z"/>
          <path d="M2 14h12v-2H2v2z"/>
        </svg>
        {{ label }}
      </slot>
    </ActionButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ActionButton from './ActionButton.vue'

const props = withDefaults(defineProps<{
  accept?: string
  multiple?: boolean
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'destructive' | 'ghost' | 'link'
  size?: 'xs' | 'sm' | 'md'
  label?: string
}>(), {
  accept: '*/*',
  multiple: false,
  disabled: false,
  variant: 'primary',
  size: 'sm',
  label: 'Choose File'
})

const emit = defineEmits<{
  change: [files: FileList]
}>()

const fileInputRef = ref<HTMLInputElement | null>(null)

function triggerFileInput() {
  fileInputRef.value?.click()
}

function handleFileChange(event: Event) {
  const input = event.target as HTMLInputElement
  if (input.files && input.files.length > 0) {
    emit('change', input.files)
    // Reset input to allow selecting the same file again
    input.value = ''
  }
}

defineExpose({
  triggerInput: triggerFileInput
})
</script>

<style scoped>
.file-input-wrapper {
  display: inline-block;
}

.file-input-hidden {
  display: none;
}
</style>
