<script setup lang="ts">
import { ref } from 'vue'

const roleChecked = ref([0, 1])

const roleList = ['帝皇侠', '修罗铠甲', '雷霆雅塔莱斯', '捕王']

const handleGroupChange = (val: string[] | number[]) => {
  console.log(val)
}
</script>

<template>
  <c-checkbox-group v-model="roleChecked" @change="handleGroupChange">
    <c-checkbox
      v-for="(role, index) in roleList"
      :key="index"
      :label="role"
      :value="index"
    />
  </c-checkbox-group>
</template>
