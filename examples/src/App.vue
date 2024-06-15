<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const value = ref('111')
</script>

<template>
  <div class="container">
    <c-input
      v-model="value"
      disabled
      style="width: 240px"
      placeholder="Please input"
    />
  </div>
</template>

<style scoped>
.container {
  width: 80vw;
  margin-top: 20px;
  border: 1px solid #999;
  overflow: auto;
  padding: 20px;
  user-select: none;
}
</style>
