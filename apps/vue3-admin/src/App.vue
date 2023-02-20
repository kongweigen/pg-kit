<!--
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2023-02-02 22:42:59
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2023-02-07 22:39:21
 * @FilePath: \webpack-learne:\webProject\Monerepo\pg-kit\apps\vue3-admin\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<script setup lang="ts">
import UnoTest from './components/uno-test/index.vue'
</script>

<template>
  <div>
    <pg-button>Default</pg-button>
    <pg-button color="yellow">Primary</pg-button>
    <pg-button type="primary" :round="true">Primary</pg-button>
    <pg-button type="success">Success</pg-button>
    <pg-button type="danger">Danger</pg-button>
  </div>
</template>

<style scoped></style>
