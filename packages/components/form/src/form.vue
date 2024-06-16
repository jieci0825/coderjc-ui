<script setup lang="ts">
import { computed, provide, reactive, toRefs } from 'vue'
import { createNamespace, ensureArray, isFunction } from '@coderjc-ui/utils'
import { formProps } from './form'
import {
  FormContext,
  FormContextKey,
  FormItemContext,
  FormValidateCallback
} from './types'
import { filterFields } from './utils'
import { ValidateFieldsError } from 'async-validator'

defineOptions({ name: 'c-form' })

const bem = createNamespace('form')
const props = defineProps(formProps)

// 维护表单字段列表
const fields: FormItemContext[] = []

const getField: FormContext['getField'] = prop => {
  return fields.find(field => field.prop === prop)
}

const addField: FormContext['addField'] = formItemContext => {
  fields.push(formItemContext)
}

const removeField: FormContext['removeField'] = formItemContext => {
  if (formItemContext.prop) {
    fields.splice(fields.indexOf(formItemContext), 1)
  }
}

// 重置表单的字段
const resetFields: FormContext['resetFields'] = (properties = []) => {
  if (!props.model) {
    console.warn('c-form', 'model 是进行表单验证的必要参数')
  }

  // 将值统一为数组
  properties = ensureArray(properties)

  // 如果为空数组则重置所有字段
  if (properties.length === 0) {
    for (const field of fields) {
      field.resetField()
    }
  }
  // 否则清空指定的字段
  else {
    for (const prop of properties) {
      const field = getField(prop as string)
      field && field.resetField()
    }
  }
}

// 清理某个字段的表单验证信息
const clearValidates: FormContext['clearValidates'] = (properties = []) => {
  // 将值统一为数组
  properties = ensureArray(properties)

  // 如果为空数组则重置所有字段
  if (properties.length === 0) {
    for (const field of fields) {
      field.clearValidate()
    }
  }
  // 否则清空指定的字段
  else {
    for (const prop of properties) {
      const field = getField(prop as string)
      field && field.clearValidate()
    }
  }
}

// 是否可以验证
const isValidatable = computed(() => {
  const hasModel = !!props.model
  if (!hasModel) {
    console.warn('c-form', 'model 是进行表单验证的必要参数')
  }
  return hasModel
})

// 校验整个表单
const validate = async (callback?: FormValidateCallback): Promise<boolean> => {
  if (!isValidatable.value) return false

  if (fields.length === 0) return true

  const _fileds = obtainValidateFields()
  if (_fileds.length === 0) return true

  let validationErrors: ValidateFieldsError = {}
  for (const field of _fileds) {
    try {
      await field.validate('')
    } catch (fields) {
      // 将上一次字段的校验结果叠加
      validationErrors = {
        ...validationErrors,
        ...(fields as ValidateFieldsError)
      }
    }
  }

  const hasCallback = isFunction(callback)

  if (Object.keys(validationErrors).length === 0) {
    callback?.(true)
    return true
  }

  callback?.(false, validationErrors)
  return hasCallback ? false : Promise.reject(validationErrors)
}

// 获取所有需要校验的字段
function obtainValidateFields() {
  if (fields.length === 0) return []

  const formItemFields = Object.keys(props.rules as object)

  const filteredFields = filterFields(fields, formItemFields)

  return filteredFields
}

// 验证具体的某个字段
const validateField = async (
  field: string,
  callback?: FormValidateCallback
) => {
  if (!field) return console.warn('c-form', 'validateField 必须传入字段名')

  if (!isValidatable.value) return false

  const formItemContext = getField(field)
  if (!formItemContext) return console.warn('c-form', `${field} 不存在`)

  try {
    await formItemContext.validate('')
    callback?.(true)
    return true
  } catch (fields) {
    const validationErrors = fields as ValidateFieldsError
    callback?.(false, validationErrors)
    return Promise.reject(validationErrors)
  }
}

const context = reactive({
  ...toRefs(props),
  addField,
  getField,
  removeField,
  resetFields,
  clearValidates
})
provide(FormContextKey, context)

defineExpose({
  fields,
  validate,
  validateField,
  resetFields,
  clearValidates
})
</script>

<template>
  <div :class="bem.b()">
    <slot />
  </div>
</template>
