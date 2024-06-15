<script setup lang="ts">
import { computed } from 'vue'
import { CaretForward } from '@vicons/ionicons5'
import { Loading3QuartersOutlined } from '@vicons/antd'
import { CIcon, CCheckbox } from '@coderjc-ui/components'
import { createNamespace } from '@coderjc-ui/utils'
import { treeNodeEmits, treeNodeProps } from './tree'
import CTreeNodeContent from './tree-node-content.vue'

defineOptions({ name: 'c-tree-node' })
const bem = createNamespace('tree-node')
const props = defineProps(treeNodeProps)
const emits = defineEmits(treeNodeEmits)

const handleExpand = () => {
  emits('toggleExpanded', props.node)
}

// 是否在加载
const isLoading = computed((): boolean => {
  return !!props.loadingKeys?.has(props.node.key)
})
// 是否选中
const isSelected = computed((): boolean => {
  return props.selectedKeys?.includes(props.node.key)
})
// 是否是半选
const isIndeterminate = computed((): boolean => {
  return props.indeterminateKeys?.has(props.node.key)!
})

// 操作是否选中
const handleSelected = () => {
  if (props.node.disabled) return
  emits('select', props.node)
}
</script>

<template>
  <div
    :class="[bem.b(), bem.is('expanded', true), bem.is('selected', isSelected)]"
    :style="{ paddingLeft: `${props.node.level * 20}px` }"
  >
    <div :class="[bem.e('content')]">
      <c-icon
        @click="handleExpand"
        :size="14"
        :class="[
          bem.e('expand-icon'),
          { expanded: props.expanded && !props.node.isLeaf },
          bem.is('leaf', props.node.isLeaf),
          bem.is('loading', isLoading)
        ]"
      >
        <CaretForward v-if="!isLoading"></CaretForward>
        <Loading3QuartersOutlined v-else></Loading3QuartersOutlined>
      </c-icon>
      <template v-if="props.showCheckbox">
        <CCheckbox
          @change="handleSelected"
          :model-value="isSelected"
          :indeterminate="isIndeterminate"
          :disabled="props.node.disabled"
        ></CCheckbox>
      </template>
      <CTreeNodeContent :node="props.node"></CTreeNodeContent>
    </div>
  </div>
</template>
