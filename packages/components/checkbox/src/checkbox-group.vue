<script setup lang="ts">
import { createNamespace } from '@coderjc-ui/utils'
import {
  checkboxGroupEmits,
  checkboxGroupProps,
  provideCheckboxGroupKey
} from './checkbox-group'
import { computed, getCurrentInstance, onMounted, provide, ref } from 'vue'

defineOptions({ name: 'CCheckboxGroup' })

const bem = createNamespace('checkbox-group')
const props = defineProps(checkboxGroupProps)
const emits = defineEmits(checkboxGroupEmits)

const model = computed(() => props.modelValue)

const instance: any = getCurrentInstance()
const childrenVNode = ref([])
// 根据当前实例获取 slot 的数量，通过这个数量得出实际轮播图有多少张
function getItemLen() {
  const defaultVNodes = instance.slots.default()
  childrenVNode.value = defaultVNodes
}

const handleChange = (state: any, value?: any) => {
  let result = []
  // 为 true 则表示需要选中
  if (state === true) {
    result = [...model.value, value]
  }
  // false 则表示从选中的列表中移除
  else {
    result = model.value.filter((item: any) => item !== value)
  }
  emits('update:modelValue', result)
  emits('change', result)
}

// 处理默认选中
function handleDefaultChecked() {}

onMounted(() => {
  getItemLen()
})

// 注入数据
provide(provideCheckboxGroupKey, {
  checkedList: model,
  onChange: handleChange
})
</script>

<template>
  <div :class="[bem.b()]">
    <slot></slot>
  </div>
</template>

<style scoped></style>
