<script setup lang="ts">
import { createNamespace } from '@coderjc-ui/utils'
import type { RendererElement } from '@vue/runtime-core'

defineOptions({ name: 'CCollapseTransition' })

const bem = createNamespace('collapse-transition')

const reset = (el: RendererElement) => {
  el.style.height = ''
  el.style.overflow = el.store.oldOverflow
}

const transitionEvents = {
  // 在元素插入到 dom 之前调用
  beforeEnter(el: RendererElement) {
    // 创建 store 对象存储 dom 需要的数据
    if (!el.store) el.store = {}

    // 如果存在高度，则把高度存储起来
    if (el.style.height) el.store.elExistHeight = el.style.height

    // 设置初始高度
    el.style.height = 0
  },

  // 在元素被插入到 DOM 之后的下一帧被调用
  // 用这个来开始进入动画
  enter(el: RendererElement) {
    requestAnimationFrame(() => {
      el.store.oldOverflow = el.style.overflow

      // 设置元素的最终高度
      if (el.store.elExistHeight) {
        el.style.height = el.store.elExistHeight
      } else if (el.scrollHeight) {
        el.style.height = `${el.scrollHeight}px`
      } else {
        el.style.height = 0
      }

      el.style.overflow = 'hidden'
    })
  },

  // 当进入过渡完成时调用
  afterEnter(el: RendererElement) {
    el.style.height = ''
    el.style.overflow = el.store.oldOverflow
  },

  // 当进入过渡在完成之前被取消时调用
  enterCancelled(el: RendererElement) {
    reset(el)
  },

  // 在 leave 钩子之前调用
  beforeLeave(el: RendererElement) {
    if (!el.store) el.store = {}
    el.store.oldOverflow = el.style.overflow

    el.style.height = `${el.scrollHeight}px`
    el.style.overflow = 'hidden'
  },

  // 在离开过渡开始时调用
  leave(el: RendererElement) {
    if (el.scrollHeight !== 0) {
      el.style.height = 0
    }
  },

  // 在离开过渡完成、
  // 且元素已从 DOM 中移除时调用
  afterLeave(el: RendererElement) {
    reset(el)
  },

  // 仅在 v-show 过渡中可用
  leaveCancelled(el: RendererElement) {
    reset(el)
  }
}
</script>

<template>
  <Transition :name="bem.b()" v-on="transitionEvents">
    <slot />
  </Transition>
</template>
