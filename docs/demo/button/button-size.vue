<script setup lang="ts">
import { Alarm } from '@vicons/ionicons5'
</script>

<template>
  <div class="show-row">
    <c-button size="large">large</c-button>
    <c-button size="default">default</c-button>
    <c-button size="small">small</c-button>
    <c-button :icon="Alarm" size="large" circle />
    <c-button :icon="Alarm" size="default" circle />
    <c-button :icon="Alarm" size="small" circle />
  </div>
</template>
