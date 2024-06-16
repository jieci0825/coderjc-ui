<script setup lang="ts">
import { ref, watchEffect } from 'vue'

interface Tree {
  label: string
  children?: Tree[]
}

function genArray(num: number): Array<number> {
  return [...Array(num).keys()]
}

function createData(level = 4, baseKey = ''): any {
  if (!level) return undefined
  return genArray(20).map((_: any, index: any) => {
    const key = '' + baseKey + level + index
    return {
      label: createLabel(level),
      key,
      children: createData(level - 1, key)
    }
  })
}

function createLabel(level: number): string {
  if (level === 4) return '道生一'
  if (level === 3) return '一生二'
  if (level === 2) return '二生三'
  if (level === 1) return '三生万物'
  return ''
}

const data: Tree[] = createData(undefined, 'coder')

const checkedKyes = ref([])
</script>

<template>
  <c-tree
    v-model:selected-keys="checkedKyes"
    virtual
    node-key="key"
    show-checkbox
    :data="data"
  />
</template>
