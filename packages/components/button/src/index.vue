<template>
  <button>我是按钮</button>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
onMounted(() => {
  console.log('onMounted')
})
</script>
