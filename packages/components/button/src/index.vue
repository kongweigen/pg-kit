<template>
  <button ref="_ref" :class="['pg-button', `bg-${_color}-500`, 'py-2']">
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
type ButtonTypes = 'default' | 'primary' | 'success' | 'danger'

const props = defineProps<{
  loading: boolean
  disabled: boolean
  type: ButtonTypes
  color: string
}>()

const _ref = ref<HTMLButtonElement>()
const _color = ref('')
onMounted(() => {
  _color.value = props.color
  _color.value =
    props.type == 'primary'
      ? 'blue'
      : props.type == 'success'
      ? 'green'
      : props.type == 'danger'
      ? 'red'
      : ''
})
defineExpose({
  ref: _ref
})
</script>
<style lang="scss" scoped></style>
