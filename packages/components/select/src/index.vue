<!--
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2023-02-22 20:46:40
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2023-03-02 23:19:48
 * @FilePath: \pg-kit\packages\components\select\src\index.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div>
    <PgTooltip>
      <template #default>
        <div class="pg-select">
          <div class="pg-input__wrapper">
            <input class="pg-input__inner" readonly type="text" />
          </div>
        </div>
      </template>
      <template #content>
        <div class="pg-select-dropdown__wrap">
          <ul>
            <li v-for="i in 5" class="pg-select-dropdown__item">
              <span>Option{{ i }}</span>
            </li>
          </ul>
        </div>
      </template>
    </PgTooltip>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import { PgTooltip } from '../../tooltip'
const props = defineProps()
</script>
<style scoped lang="scss">
.pg-select {
  margin: 8px;
  width: 240px;
  font-size: 14px;
  background-color: #fff;
  border: 1px solid #dfe2e8;
  border-radius: 4px;
  .pg-input__wrapper {
    line-height: 40px;
    cursor: pointer;
    padding: 1px 15px;
    .pg-input__inner {
      border: none;
      height: 38px;
      line-height: 40px;
      outline: none;
      cursor: pointer;
    }
    input {
    }
  }
}
.pg-select-dropdown__wrap {
  max-height: 274px;
  ul {
    padding: 0;
  }
  li {
    list-style: none;
  }
  .pg-select-dropdown__item {
    color: #606266;
    font-weight: 400;
    padding: 0 32px 0 20px;
    height: 34px;
    line-height: 34px;
    box-sizing: border-box;
    cursor: pointer;
    &:hover {
      background-color: #f5f7fa;
    }
  }
}
</style>
