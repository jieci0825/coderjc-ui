<script setup lang="ts">
import { ref } from 'vue'

const loading1 = ref(false)
const loading2 = ref(false)

const handleClick1 = () => {
  loading1.value = true
  setTimeout(() => {
    loading1.value = false
  }, 3000)
}

const handleClick2 = () => {
  loading2.value = true
  setTimeout(() => {
    loading2.value = false
  }, 3000)
}
</script>

<template>
  <div class="show-row">
    <c-button :loading="loading1" @click="handleClick1" loading-text="..."
      >请点击-1</c-button
    >
    <c-button
      type="primary"
      :loading="loading2"
      @click="handleClick2"
      loading-text="......"
      >请点击-2</c-button
    >
  </div>
</template>
