<script setup lang="ts">
import { CMessage } from '@coderjc-ui/components'
import { h } from 'vue'

const showMessage = () => {
  const { close } = CMessage({
    message: '时光清浅处，一步一安然',
    type: 'success',
    showClose: true
  })
}
</script>

<template>
  <div class="show-row">
    <c-button @click="showMessage">可关闭</c-button>
  </div>
</template>
