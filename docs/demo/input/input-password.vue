<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
</script>

<template>
  <c-input
    type="password"
    v-model="value"
    style="width: 240px"
    placeholder="Please input"
  />
</template>
