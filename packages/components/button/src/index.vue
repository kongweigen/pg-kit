<template>
  <button
    ref="_ref"
    :class="[
      'pg-button',
      `${_color ? 'has-color' : ''}`,
      `bg-${_color}-500`,
      'py-2'
    ]"
  >
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
type ButtonTypes = 'default' | 'primary' | 'success' | 'danger'

const props = withDefaults(
  defineProps<{
    loading?: boolean
    disabled?: boolean
    type?: ButtonTypes
    color?: string
  }>(),
  {
    loading: false,
    disabled: false,
    type: 'default',
    color: ''
  }
)

const _ref = ref<HTMLButtonElement>()
const _color = ref('')
onMounted(() => {
  _color.value =
    props.type == 'primary'
      ? 'blue'
      : props.type == 'success'
      ? 'green'
      : props.type == 'danger'
      ? 'red'
      : ''
  _color.value = _color.value || props.color
})
defineExpose({
  ref: _ref
})
</script>
<style lang="scss" scoped></style>
