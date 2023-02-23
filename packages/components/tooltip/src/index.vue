<!--
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2023-02-22 22:05:05
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2023-02-23 23:16:11
 * @FilePath: \pg-kit\packages\components\tooltip\src\index.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div>
    <div class="trigger" ref="triggerRef" @click="trigger">
      <slot name="default"></slot>
    </div>
    <teleport to="body">
      <div v-show="tooltipShow" class="tooltip" ref="tooltipRef">
        <slot name="content"></slot>
        <div ref="arrowRef" class="arrow"></div>
      </div>
    </teleport>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
import { ref, nextTick } from 'vue'
import {
  computePosition,
  autoPlacement,
  autoUpdate,
  arrow,
  offset
} from '@floating-ui/vue'

const triggerRef = ref(null)
const tooltipRef = ref(null)
const arrowRef = ref(null)
const tooltipShow = ref(false)
// 清理
let clean = () => {}

// 显示隐藏
const trigger = async () => {
  debugger
  tooltipShow.value = !tooltipShow.value
  // 保证节点已经渲染
  await nextTick()
  if (tooltipShow.value) {
    clean = autoUpdate(triggerRef.value, tooltipRef.value, updatePosition)
  } else {
    clean && clean()
  }
}

function updatePosition() {
  computePosition(triggerRef.value, tooltipRef.value, {
    middleware: [
      offset(10),
      autoPlacement({
        allowedPlacements: ['top', 'bottom']
      }),
      arrow({
        element: arrowRef.value
      })
    ]
  }).then(({ x, y, middlewareData }) => {
    Object.assign(tooltipRef.value.style, {
      left: `${x}px`,
      top: `${y}px`
    })
    // 计算箭头位置
    if (middlewareData.arrow) {
      let ay = -arrowRef.value.offsetHeight / 2
      if (y < 0) {
        ay = -(y + arrowRef.value.offsetHeight + 5)
      }
      // const { x } = middlewareData.arrow
      const { x, y } = middlewareData.arrow
      Object.assign(arrowRef.value.style, {
        left: x != null ? `${x}px` : '',
        top: y != null ? `${y}px` : ''
        // top: `${ay}px`
      })
    }
  })
}
</script>
<style scoped lang="scss">
button {
  padding: 5px;
}
.trigger {
  width: min-content;
}
.tooltip {
  background: #222;
  color: white;
  font-weight: bold;
  padding: 5px;
  border-radius: 4px;
  font-size: 90%;

  position: absolute;
  width: 50px;
  top: 0;
  left: 0;
  .arrow {
    position: absolute;
    width: 10px;
    height: 10px;
    background: #222;
    transform: rotate(45deg);
  }
}
</style>
