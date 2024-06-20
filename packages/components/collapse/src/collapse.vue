<script setup lang="ts">
import { provide, reactive, ref, toRef, toRefs, watch } from 'vue'
import { createNamespace, ensureArray } from '@coderjc-ui/utils'
import { collapseEmits, collapseProps } from './collapse'
import type { NameType } from './collapse.type'
import { CollapseContextKey } from './constants'

defineOptions({ name: 'CCollapse' })

const bem = createNamespace('collapse')
const props = defineProps(collapseProps)
const emits = defineEmits(collapseEmits)

const activeNames = ref<NameType[]>(ensureArray(props.modelValue))

watch(
  () => props.modelValue,
  value => {
    activeNames.value = ensureArray(value)
  },
  { deep: true }
)

const setActiveNames = (_activeNames: NameType[]) => {
  activeNames.value = _activeNames

  // 手风琴模式则传递一个单值
  const value = props.accordion ? _activeNames[0] : _activeNames
  emits('change', value)
  emits('update:modelValue', value)
}

const handleItemClick = (name: NameType) => {
  // 手风琴模式单独处理
  if (props.accordion) {
    // 如果是当前激活的项，则传递一个包含一个空字符的数组，否则传递当前激活名称的数组
    const value = activeNames.value[0] === name ? [''] : [name]
    setActiveNames(value)
  } else {
    const _activeNames = [...activeNames.value]
    const index = _activeNames.indexOf(name)
    if (index > -1) {
      _activeNames.splice(index, 1)
    } else {
      _activeNames.push(name)
    }
    setActiveNames(_activeNames)
  }
}

provide(CollapseContextKey, {
  activeNames,
  handleItemClick
})
</script>

<template>
  <div :class="[bem.b()]">
    <slot />
  </div>
</template>
