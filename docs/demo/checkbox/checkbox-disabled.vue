<script setup lang="ts">
import { ref } from 'vue'

const checked1 = ref(false)
const checked2 = ref(true)
</script>

<template>
  <div class="show-row">
    <c-checkbox v-model="checked1" label="修罗铠甲" disabled />
    <c-checkbox v-model="checked2" label="帝皇侠" disabled />
  </div>
</template>
