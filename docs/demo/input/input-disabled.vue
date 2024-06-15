<script setup lang="ts">
import { ref } from 'vue'
const value = ref('**禅定印**')
</script>

<template>
  <c-input
    v-model="value"
    disabled
    style="width: 240px"
    placeholder="Please input"
  />
</template>
