<template>
  <button ref="_ref" :class="['pg-button', 'pg-button--' + type]">
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
import { ref } from 'vue'
type ButtonTypes =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'info'
  | 'danger'
  | 'text'

defineProps<{
  loading: Boolean
  disabled: Boolean
  type: ButtonTypes
}>()

const _ref = ref<HTMLButtonElement>()
defineExpose({
  ref: _ref
})
</script>
<style lang="scss" scoped></style>
