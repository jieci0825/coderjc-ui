<script setup lang="ts">
import { ref } from 'vue'

interface Tree {
  id: number
  name: string
  childs?: Tree[]
}

const data: Tree[] = [
  {
    id: 1,
    name: 'Level one 1',
    childs: [
      {
        id: 2,
        name: 'Level two 1-1',
        childs: [
          {
            id: 3,
            name: 'Level three 1-1-1'
          }
        ]
      }
    ]
  },
  {
    id: 4,
    name: 'Level one 2',
    childs: [
      {
        id: 5,
        name: 'Level two 2-1',
        childs: [
          {
            id: 6,
            name: 'Level three 2-1-1'
          }
        ]
      },
      {
        id: 7,
        name: 'Level two 2-2',
        childs: [
          {
            id: 8,
            name: 'Level three 2-2-1'
          }
        ]
      }
    ]
  },
  {
    id: 9,
    name: 'Level one 3',
    childs: [
      {
        id: 10,
        name: 'Level two 3-1',
        childs: [
          {
            id: 11,
            name: 'Level three 3-1-1'
          }
        ]
      },
      {
        id: 12,
        name: 'Level two 3-2',
        childs: [
          {
            id: 13,
            name: 'Level three 3-2-1'
          }
        ]
      }
    ]
  }
]

const checkedKyes = ref([])
</script>

<template>
  <c-tree
    v-model:selected-keys="checkedKyes"
    label-field="name"
    children-field="childs"
    node-key="id"
    show-checkbox
    :data="data"
  />
</template>
