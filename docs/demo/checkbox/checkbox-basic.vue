<script setup lang="ts">
import { ref } from 'vue'

const checked1 = ref(false)
const checked2 = ref(false)
const checked3 = ref(false)
</script>

<template>
  <div class="show-row">
    <c-checkbox v-model="checked1" label="吃饭" />
    <c-checkbox v-model="checked2" label="睡觉" />
    <c-checkbox v-model="checked3" label="打豆豆" />
  </div>
</template>
