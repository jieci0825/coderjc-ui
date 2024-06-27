<script setup lang="ts">
import { CMessage } from '@coderjc-ui/components'
import { h } from 'vue'

const showMessage = () => {
  CMessage({
    message: '醉后不知天在水，满船清梦压星河',
    type: 'success'
  })
}

const showVNode = () => {
  CMessage({
    message: h(
      'span',
      { style: 'color: #9c88ff; font-weight: bold;' },
      '这是 VNode 内容'
    ),
    type: 'warning'
  })
}
</script>

<template>
  <div class="show-row">
    <c-button @click="showMessage">显示消息</c-button>
    <c-button @click="showVNode">显示 VNode</c-button>
  </div>
</template>
