<template>
  <button
    ref="_ref"
    :class="[
      'pg-button',
      `bg-${_color}-500`,
      `hover:bg-${_color}-400`,
      `${roundClass}`,
      'cursor-pointer',
      'py-2 px-3'
    ]"
  >
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
type ButtonTypes = 'default' | 'primary' | 'success' | 'danger'

const props = withDefaults(
  defineProps<{
    loading?: boolean // 是否为加载状态
    disabled?: boolean // 按钮是否为禁用
    round?: boolean // 是否圆角
    type?: ButtonTypes
    color?: string
  }>(),
  {
    loading: false,
    disabled: false,
    type: 'default',
    color: '',
    round: false
  }
)

const roundClass = computed(() => (props.round ? 'rd-4' : 'rd-1'))
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
  // _color.value = _color.value || props.color
})
defineExpose({
  ref: _ref
})
</script>
<style lang="scss" scoped></style>
