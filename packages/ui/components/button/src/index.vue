<template>
  <button
    ref="_ref"
    :class="[
      'pg-button',
      `${roundClass}`,
      'cursor-pointer',
      'py-8px px-15px',
      `bg-${_color}-500`,
      `hover:bg-${_color}-400`
    ]"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
import { useButton } from './useButton'

type TypeEnum = '' | 'default' | 'primary' | 'success' | 'danger'
type SizeEnum = '' | 'small' | 'default' | 'large'
const emit = defineEmits(['click'])
const props = withDefaults(
  defineProps<{
    loading?: boolean // 是否为加载状态
    disabled?: boolean // 按钮是否为禁用
    round?: boolean // 是否圆角
    type?: TypeEnum
    size?: SizeEnum
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

const { _ref, _color, roundClass, handleClick } = useButton(props, emit)

defineExpose({
  ref: _ref
})
</script>
<style lang="scss" scoped></style>
