<script setup lang="ts">
import { CMessage } from '@coderjc-ui/components'
import { h } from 'vue'

const showMessage = () => {
  CMessage({
    message: '<i>半醒半迷半率直，半痴半醉半天真</i>',
    type: 'success',
    isHTML: true,
    duration: 0,
    showClose: true
  })
}
</script>

<template>
  <div class="show-row">
    <c-button @click="showMessage">一直在</c-button>
  </div>
</template>
