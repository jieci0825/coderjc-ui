<script setup lang="ts">
import { ref } from 'vue'
const text = ref('')
</script>

<template>
  <c-input
    type="textarea"
    :rows="3"
    v-model="text"
    style="width: 300px"
    placeholder="开始你的表演吧..."
  />
</template>
