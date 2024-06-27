<script setup lang="ts">
import { CMessage } from '@coderjc-ui/components'
import { h } from 'vue'

const showMessage = () => {
  CMessage({
    message: '<strong><i>初见乍惊欢，久处仍怦然</i></strong>',
    type: 'success',
    isHTML: true
  })
}
</script>

<template>
  <div class="show-row">
    <c-button @click="showMessage">HTML 字符串</c-button>
  </div>
</template>
