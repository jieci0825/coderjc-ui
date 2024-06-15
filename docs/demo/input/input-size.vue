<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@vicons/ionicons5'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
</script>

<template>
  <div class="show-row">
    <c-input
      v-model="value1"
      style="width: 240px"
      size="large"
      placeholder="Please input"
    />
    <c-input v-model="value2" style="width: 240px" placeholder="Please input" />
    <c-input
      v-model="value3"
      style="width: 240px"
      size="small"
      placeholder="Please input"
    />
  </div>

  <div class="show-row">
    <c-input
      v-model="value1"
      style="width: 240px"
      size="large"
      placeholder="Please input"
    >
      <template #prefix>
        <c-icon :icon="Search"> </c-icon>
      </template>
    </c-input>
    <c-input v-model="value2" style="width: 240px" placeholder="Please input">
      <template #prefix>
        <c-icon :icon="Search"> </c-icon>
      </template>
    </c-input>
    <c-input
      v-model="value3"
      style="width: 240px"
      size="small"
      placeholder="Please input"
    >
      <template #prefix>
        <c-icon :icon="Search"> </c-icon>
      </template>
    </c-input>
  </div>

  <div class="show-row">
    <c-input
      v-model="value1"
      style="width: 240px"
      size="large"
      placeholder="Please input"
    >
      <template #suffix>
        <c-icon :icon="Search"> </c-icon>
      </template>
    </c-input>
    <c-input v-model="value2" style="width: 240px" placeholder="Please input">
      <template #suffix>
        <c-icon :icon="Search"> </c-icon>
      </template>
    </c-input>
    <c-input
      v-model="value3"
      style="width: 240px"
      size="small"
      placeholder="Please input"
    >
      <template #suffix>
        <c-icon :icon="Search"> </c-icon>
      </template>
    </c-input>
  </div>
</template>
