<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
</script>

<template>
  <div class="show-row">
    <c-input
      v-model="value1"
      maxlength="30"
      show-word-limit
      style="width: 300px"
      placeholder="Please input"
    />
  </div>

  <div class="show-row">
    <c-input
      type="textarea"
      :rows="3"
      v-model="value2"
      :maxlength="200"
      show-word-limit
      style="width: 300px"
      placeholder="Please input"
    />
  </div>
</template>
