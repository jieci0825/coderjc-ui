<script setup lang="ts">
import { computed, inject } from 'vue'
import { createNamespace } from '@coderjc-ui/utils'
import { checkboxEmits, checkboxProps } from './checkbox'
import { provideCheckboxGroupKey } from './checkbox-group'
import { FormContextKey, FormItemContextKey } from '@coderjc-ui/components/form'
import { SizeType } from './checkbox.type'

defineOptions({ name: 'c-checkbox' })

// 提取父组件注入的数据
const checkboxGroupInject = inject(provideCheckboxGroupKey, undefined)
// 祖先组件
const formContextInject = inject(FormContextKey, undefined)
const formItemContextInject = inject(FormItemContextKey, undefined)

const bem = createNamespace('checkbox')
const props = defineProps(checkboxProps)
const emits = defineEmits(checkboxEmits)

const model = computed({
  get: () => {
    // 查看如组件是否注入了数据，如果注入了，就使用父组件的判定
    if (checkboxGroupInject) {
      // 如果传递了 value，则使用 value 判定，否则使用 label 判定
      const value = props.value
      return checkboxGroupInject.checkedList.value.includes(value)
    }
    return props.modelValue
  },
  set: val => {
    emits('update:modelValue', val!)
  }
})

function handleChange(e: Event) {
  const target = e.target as HTMLInputElement
  const value = target.checked ? true : false
  if (checkboxGroupInject) {
    const payload = props.value ?? props.label
    checkboxGroupInject.onChange(value, payload)
  } else {
    emits('change', value)
  }
  // 修改值的时候，触发校验
  formItemContextInject?.validate('change').catch(() => {})
}

const compInputCls = computed(() => {
  // 如果是选中状态则只显示选中状态的样式，如果是非选中状态才来判断是否要显示半选样式
  return model.value
    ? bem.is('checked', !!model.value)
    : bem.is('indeterminate', props.indeterminate)
})

const sizeValue = computed(() => {
  // 优先级：props > formItemContextInject > formContextInject
  let size: SizeType = (props.size ||
    formItemContextInject?.size ||
    formContextInject?.size)!
  return size
})
</script>

<template>
  <label :class="[bem.b(), bem.is(sizeValue, !!sizeValue)]">
    <span
      :class="[
        bem.e('input'),
        compInputCls,
        bem.is('disabled', props.disabled)
      ]"
    >
      <input
        v-model="model"
        type="checkbox"
        @change="handleChange"
        :class="[bem.e('original')]"
        :disabled="props.disabled"
        :indeterminate="props.indeterminate"
        @click.stop
      />
      <span :class="[bem.e('inner')]"></span>
    </span>
    <span :class="[bem.e('label')]">
      <template v-if="$slots.default">
        <slot></slot>
      </template>
      <template v-else>
        {{ props.label }}
      </template>
    </span>
  </label>
</template>
