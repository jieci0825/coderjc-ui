<script setup lang="ts">
import { ref } from 'vue'

const checkAll = ref(false)
const isIndeterminate = ref(true)

const roleChecked = ref(['帝皇侠', '修罗铠甲'])

const roleList = ['帝皇侠', '修罗铠甲', '雷霆雅塔莱斯', '捕王']

const handleCheckAllChange = (val: boolean) => {
  roleChecked.value = val ? roleList : []
  isIndeterminate.value = false
}

const handleGroupChange = (val: string[] | number[]) => {
  const len = val.length
  checkAll.value = len === roleList.length
  isIndeterminate.value = len > 0 && len < roleList.length
}
</script>

<template>
  <c-checkbox
    v-model="checkAll"
    style="margin-bottom: 20px"
    :indeterminate="isIndeterminate"
    @change="handleCheckAllChange"
    >全选</c-checkbox
  >

  <c-checkbox-group v-model="roleChecked" @change="handleGroupChange">
    <c-checkbox
      v-for="(role, index) in roleList"
      :key="index"
      :label="role"
      :value="role"
    />
  </c-checkbox-group>
</template>
