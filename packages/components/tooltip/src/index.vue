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
  flip,
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
  tooltipShow.value = !tooltipShow.value // 保证节点已经渲染
  await nextTick()
  debugger
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
      flip(),
      arrow({
        element: arrowRef.value
      })
    ]
  }).then((res) => {
    debugger
    let { x, y, placement, middlewareData } = res
    Object.assign(tooltipRef.value.style, {
      left: `${x}px`,
      top: `${y}px`
    }) // 箭头配置
    debugger
    const staticSide = {
      top: 'bottom',
      bottom: 'top'
    }[placement]
    arrowRef.value.style[placement] = 'unset'
    Object.assign(arrowRef.value.style, {
      left: x != null ? `${middlewareData.arrow.x}px` : '',
      [staticSide]: `${-arrowRef.value.offsetWidth / 2}px`
    })
  })
}
</script>
<style scoped lang="scss">
button {
  padding: 5px;
}
.trigger {
  width: 240px;
}
.tooltip {
  background: #ffff;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  border: 1px solid #e4e7ed;
  color: white;
  font-weight: bold;
  padding: 5px;
  border-radius: 4px;
  font-size: 90%;
  max-height: 274px;

  position: absolute;
  top: 0;
  width: 220px;
  left: 0;
  .arrow {
    position: absolute;
    width: 10px;
    height: 10px;
    background: #ffff;
    transform: rotate(45deg);
  }
}
</style>
