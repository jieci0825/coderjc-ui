<script setup lang="ts">
import { ref } from 'vue'

interface Tree {
  label: string
  children?: Tree[]
}

const data: Tree[] = [
  {
    label: 'Level one 1',
    children: [
      {
        label: 'Level two 1-1',
        children: [
          {
            label: 'Level three 1-1-1'
          }
        ]
      }
    ]
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        children: [
          {
            label: 'Level three 2-1-1'
          }
        ]
      },
      {
        label: 'Level two 2-2',
        children: [
          {
            label: 'Level three 2-2-1'
          }
        ]
      }
    ]
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1'
          }
        ]
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1'
          }
        ]
      }
    ]
  }
]

const checkedKyes = ref([])

const defaultCheckedKeys = ref(['Level one 1', 'Level one 3'])
const defaultExpandedKeys = ref(['Level one 3'])
</script>

<template>
  <c-tree
    v-model:selected-keys="checkedKyes"
    :default-checked-keys="defaultCheckedKeys"
    :default-expanded-keys="defaultExpandedKeys"
    show-checkbox
    :data="data"
  />
</template>
