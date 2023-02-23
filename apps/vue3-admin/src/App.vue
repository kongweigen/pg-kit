<!--
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2023-02-02 22:42:59
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2023-02-23 23:17:10
 * @FilePath: \pg-kit\apps\vue3-admin\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<script setup lang="ts">
import UnoTest from './components/uno-test/index.vue'
import { PgSelect } from '../../../packages/components/select'
</script>

<template>
  <div>
    <pg-button>Default</pg-button>
    <pg-button color="yellow">Primary</pg-button>
    <pg-button type="primary" :round="true">Primary</pg-button>
    <pg-button type="success">Success</pg-button>
    <pg-button type="danger">Danger</pg-button>

    <div class="box red">AA</div>
    <div class="box yellow">BB</div>
    <pg-select></pg-select>
  </div>
</template>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  border: 1px solid black;
}
.red {
  background-color: red;
}
.yellow {
  background-color: yellow;
}
</style>
