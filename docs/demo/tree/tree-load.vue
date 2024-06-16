<script setup lang="ts">
import { ref } from 'vue'
import type { TreeOptions } from 'coderjc-ui'

const data: TreeOptions[] = [
  {
    label: 'Level one 1',
    isLeaf: false,
    children: []
  },
  {
    label: 'Level one 2',
    isLeaf: false,
    children: []
  }
]

const checkedKyes = ref([])

let count = 1

const loadNode = (node: TreeOptions, resolve: Function, reject: Function) => {
  if (count > 3) return resolve([])

  setTimeout(() => {
    resolve([
      {
        label: `Level load--${count}`,
        isLeaf: false,
        children: []
      }
    ])
    count++
  }, 2000)
}
</script>

<template>
  <c-tree
    v-model:selected-keys="checkedKyes"
    :load="loadNode"
    show-checkbox
    :data="data"
  />
</template>
