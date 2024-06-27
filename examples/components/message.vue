<script setup lang="ts">
import { CMessage } from '@coderjc-ui/components'
import { getCurrentInstance, h } from 'vue'

CMessage({
  message: `<i>Hello World</i>`,
  isHTML: true,
  type: 'info',
  duration: 0,
  offset: 20
})

CMessage({
  message: h('p', { style: 'line-height: 1; font-size: 14px' }, [
    h('span', { style: 'color:blue' }, 'Message can be '),
    h('i', { style: 'color: teal' }, 'VNode')
  ]),
  type: 'success',
  duration: 0,
  offset: 20
})
const res = CMessage({
  message: '我还会回来的',
  type: 'error',
  duration: 0,
  offset: 20
})
CMessage({
  message: '大师兄，师傅被妖怪抓走了',
  type: 'warning',
  duration: 0,
  offset: 20
})
const instance = getCurrentInstance()

const handle = instance?.appContext.config.globalProperties

// handle?.$CMessage({
//   message: '测试function111调用',
//   duration: 3000,
//   offset: 50
// })
</script>

<template></template>

<style scoped></style>
