<script setup lang="ts">
import type {
  Key,
  TreeOptions
} from '@coderjc-ui/components/tree/src/tree.type'
import { watchEffect } from 'vue'
import { ref } from 'vue'

// 需要保证你展开的节点父节点也展开了
const defaultExpandedKeys: string[] = [
  'Level one 1',
  'Level two 1-1',
  'Level one 3',
  'Level two 3-1',
  'Level two 3-2'
]

const data: TreeOptions[] = [
  {
    label: 'Level one 1',
    children: [
      {
        label: 'Level two 1-1',
        children: [
          {
            label: 'Level three 1-1-1',
            disabled: true
          }
        ]
      }
    ]
  },
  {
    label: 'Level one 2',
    disabled: true,
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
          },
          {
            label: 'Level three 3-1-2'
          },
          {
            label: 'Level three 3-1-3'
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

const treeValue = ref<Key[]>([])

watchEffect(() => {
  console.log(treeValue.value)
})

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

// const data = createData(undefined, 'coder')

const defaultCheckedKeys = ref(['Level one 3'])
</script>

<template>
  <div class="container">
    <c-tree
      v-model:selected-keys="treeValue"
      :default-checked-keys="defaultCheckedKeys"
      :default-expanded-keys="defaultExpandedKeys"
      :data="data"
      :show-checkbox="true"
    >
      <template #default="{ node }">
        <span class="custom-tree-node">【{{ node.label }}】</span>
      </template>
    </c-tree>
  </div>
</template>

<style scoped>
.container {
  width: 500px;
  margin-top: 100px;
  border: 1px solid #999;
  overflow: auto;
}
</style>
