<script setup lang="ts">
import {
  computed,
  inject,
  nextTick,
  onMounted,
  provide,
  reactive,
  ref,
  toRefs
} from 'vue'
import { createNamespace, PREFIX, isString } from '@coderjc-ui/utils'
import Schema from 'async-validator'
import type { ValidateError } from 'async-validator'
import { formItemProps } from './form-item'
import { isExistRequiredRule, toJustifyContentProp } from './utils'
import {
  type FormItemValidateStateType,
  type FormItemContext,
  FormItemContextKey,
  FormItemRule,
  FormContextKey,
  Arrayable,
  FormValidateFailure,
  SizeType
} from './types'
import { clone } from 'lodash-unified'

defineOptions({ name: 'c-form-item' })

const bem = createNamespace('form-item')
const props = defineProps(formItemProps)

const formContextInject = inject(FormContextKey, undefined)

// 当前字段在表单model中的值
const fieldValue = computed(() => {
  const model = formContextInject?.model
  if (!model || !props.prop) return
  return model[props.prop]
})

const validateState = ref<FormItemValidateStateType>('')
const validateMessage = ref('')
let initValue: any = undefined
let isResettingField = false

const formItemLabelStyle = computed(() => {
  let w = 100
  const lw = formContextInject?.labelWidth
  if (lw) {
    if (isString(lw)) {
      w = parseInt(lw as string)
    } else {
      w = lw as number
    }
  }

  return {
    width: w + 'px',
    justifyContent: toJustifyContentProp(formContextInject!.labelPosition)
  }
})

// 显示错误消息的条件
const showErrorMessage = computed(() => {
  return (
    validateState.value === 'error' &&
    props.prop &&
    props.showMessage &&
    (formContextInject?.showMessage ?? true)
  )
})

// 合并表单项和表单规则
const _rules = computed(() => {
  const selfRules = getSelfRules()

  const formRules = getFormRules()

  // 查看当前表单项是否直接设置了 required 属性，如果设置了，且规则中没有 required 规则，则添加 required 规则
  const allRules = [...selfRules, ...formRules]
  if (!isExistRequiredRule(allRules)) {
    allRules.push({
      required: true,
      message: `${
        String(props.label).length ? String(props.label) : '当前项'
      }不能为空`
    })
  }

  return allRules
})

// 获取自身规则
function getSelfRules(): FormItemRule[] {
  return (props.rules ? createRuleArray(props.rules) : []) as FormItemRule[]
}

// 获取全局表单规则
function getFormRules(): FormItemRule[] {
  const formRules: FormItemRule[] = []
  if (formContextInject?.rules && props.prop) {
    const globalRules = formContextInject.rules[props.prop]
    globalRules && formRules.push(...createRuleArray(globalRules))
  }
  return formRules
}

function createRuleArray(
  rules: Arrayable<FormItemRule> | undefined
): FormItemRule[] {
  const _rules: FormItemRule[] = []
  if (!rules) return _rules
  Array.isArray(rules) ? _rules.push(...rules) : _rules.push(rules)
  return _rules
}

// 根据触发条件获取符合触发条件的规则
function getCurrentFieldRules(trigger: string): FormItemRule[] {
  // 根据触发时机，获取当前字段的校验规则
  if (!_rules.value.length) return []
  const rules = _rules.value.filter(rule => {
    // 如果没有设置 trigger 或者没有传递 trigger 则默认触发
    if (!rule.trigger || !trigger) return true

    // 设置了则根据设置的规则筛选
    const triggerArr = Array.isArray(rule.trigger)
      ? rule.trigger
      : [rule.trigger]
    return triggerArr.includes(trigger)
  })
  return rules
}

// 处理校验成功
function handleValidateSuccess() {
  validateState.value = 'success'
  validateMessage.value = ''
}

// 处理校验错误
function handleValidateError(errors: ValidateError[]) {
  validateState.value = 'error'
  const errorMessage = (errors[0] ? errors[0].message : '')!
  validateMessage.value = errorMessage
}

// 校验当前字段规则
const validate: FormItemContext['validate'] = async (trigger, callback) => {
  if (isResettingField || !props.prop) return false

  const rules = getCurrentFieldRules(trigger)
  const fieldName = props.prop
  const validator = new Schema({
    [fieldName]: rules
  })

  const curValue = formContextInject?.model

  if (!curValue) return console.warn('请为表单设置 model 属性')

  return validator
    .validate({
      [fieldName]: curValue[fieldName]
    })
    .then(() => {
      callback?.(true)
      handleValidateSuccess()
      return true as const
    })
    .catch((err: FormValidateFailure) => {
      const { errors, fields } = err
      callback?.(false, fields)
      handleValidateError(errors!)
      return Promise.reject(fields)
    })
}

const clearValidate: FormItemContext['clearValidate'] = () => {
  validateState.value = ''
  validateMessage.value = ''
  isResettingField = false
}

// 重置当前字段
const resetField: FormItemContext['resetField'] = async () => {
  if (!formContextInject?.model || !props.prop) return

  // 重置字段时，阻止值改变时验证触发
  isResettingField = true

  // 恢复初始值
  formContextInject!.model[props.prop] = initValue

  await nextTick()
  clearValidate()
  isResettingField = false
}

// 是否必填
const isRequired = computed(() => {
  return props.required || isExistRequiredRule(_rules.value)
})

// 尺寸
const sizeKls = computed(() => {
  let size: SizeType = 'default'
  if (props.size) {
    size = props.size
  } else if (formContextInject?.size) {
    size = formContextInject.size
  }
  return size === 'default' ? undefined : bem.m(size)
})

const containerKls = computed(() => [
  bem.b(),
  bem.is('top', formContextInject?.labelPosition === 'top'),
  bem.is('required', isRequired.value),
  bem.is('success', validateState.value === 'success'),
  bem.is('error', validateState.value === 'error'),
  sizeKls.value
])

const context = reactive({
  ...toRefs(props),
  validateState,
  fieldValue,
  validate,
  resetField,
  clearValidate
})

onMounted(() => {
  if (props.prop) {
    // 将当前字段添加到校验器中
    formContextInject?.addField(context)
    // 并克隆初始值，为后续重置表单提供支撑
    initValue = clone(fieldValue.value)
  }
})

provide(FormItemContextKey, context)
</script>

<template>
  <div :class="containerKls">
    <div :class="[bem.e('label-wrap')]" :style="formItemLabelStyle">
      <template v-if="$slots.label">
        <slot name="label"></slot>
      </template>
      <template v-else>
        <label v-if="props.label.length" :class="bem.e('label')">{{
          props.label
        }}</label>
      </template>
    </div>

    <div :class="bem.e('content')">
      <slot />

      <transition-group :name="`${PREFIX}-zoom-in-top`">
        <div v-if="showErrorMessage" :class="bem.e('error')">
          <template v-if="$slots.error && showErrorMessage">
            <slot name="error" :error="validateMessage"></slot>
          </template>
          <template v-else>
            {{ validateMessage }}
          </template>
        </div>
      </transition-group>
    </div>
  </div>
</template>
