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
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </template>
    </PgTooltip>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import { PgTooltip } from '../../tooltip'
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
</style>
