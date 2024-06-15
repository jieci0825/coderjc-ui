<script setup lang="ts">
import { Alarm } from '@vicons/ionicons5'
const size = 30
</script>

<template>
  <c-icon :size="size" color="green">
    <Alarm></Alarm>
  </c-icon>

  <c-icon :icon="Alarm" :size="size" color="blue" />
</template>
