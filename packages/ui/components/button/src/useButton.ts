import { ref, onMounted, computed } from 'vue'

export const useButton = (props: any, emit: any) => {
  const _ref = ref<HTMLButtonElement>()
  const _color = ref('')
  const roundClass = computed(() => (props.round ? 'rd-4' : 'rd-1'))

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

  const handleClick = (evt: MouseEvent) => {
    emit('click', evt)
  }
  

  return {
    _ref,
    _color,
    roundClass,
    handleClick
  }
}
