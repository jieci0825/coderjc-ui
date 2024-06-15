<script setup lang="ts">
import { ref } from 'vue'
import { Search, Calendar } from '@vicons/ionicons5'

const value1 = ref('')
const value2 = ref('')
</script>

<template>
  <div class="show-row">
    <c-input v-model="value1" style="width: 240px" placeholder="Please keyword">
      <template #prefix>
        <c-icon :icon="Search"> </c-icon>
      </template>
    </c-input>

    <c-input v-model="value2" style="width: 240px" placeholder="Please input">
      <template #suffix>
        <c-icon :icon="Calendar"> </c-icon>
      </template>
    </c-input>
  </div>
</template>
