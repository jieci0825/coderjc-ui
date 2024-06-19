<script setup lang="ts">
import {
  computed,
  inject,
  onMounted,
  ref,
  useAttrs,
  useSlots,
  watch
} from 'vue'
import { createNamespace } from '@coderjc-ui/utils'
import { CIcon } from '@coderjc-ui/components'
import {
  CloseCircleOutline,
  EyeOutline,
  EyeOffOutline
} from '@vicons/ionicons5'
import { inputEmits, inputProps } from './input'
import {
  FormContextKey,
  FormItemContextKey
} from '@coderjc-ui/components/form/src/types'
import { SizeType } from './input.type'

type TargetElement = HTMLInputElement | HTMLTextAreaElement

defineOptions({ name: 'CInput', inheritAttrs: false })

const bem = createNamespace('input')
const bemTextarea = createNamespace('textarea')
const props = defineProps(inputProps)
const emits = defineEmits(inputEmits)
const attrs = useAttrs()
const slots = useSlots()

const formContextInject = inject(FormContextKey, undefined)
const formItemContextInject = inject(FormItemContextKey, undefined)

const input = ref<HTMLInputElement>()
const textarea = ref<HTMLTextAreaElement>()

const _ref = computed(() => {
  return input.value || textarea.value
})

const _prevValueLen = ref(0)

// 当前 value 长度
const curValueLen = computed(() => {
  // 拦截候选词汇状态和实际输入完成状态
  if (isComposing.value) return _prevValueLen.value
  const count = interceptWordLimit(String(props.modelValue)).length
  _prevValueLen.value = count
  return count
})
watch(
  () => props.modelValue,
  () => {
    // 修改值的时候，触发校验
    formItemContextInject?.validate('change').catch(() => {})
    setNativeValue(props.modelValue)
  }
)

function setNativeValue(value: string | number) {
  value = interceptWordLimit(String(value))
  _ref.value!.value = value
}

onMounted(() => {
  setNativeValue(props.modelValue)
})

watch(
  () => props.type,
  () => {
    if (props.type === 'textarea') {
      _ref.value!.style.resize = 'none'
    } else {
      _ref.value!.style.resize = 'inherit'
    }
  }
)

const inputAttrs = computed(() => {
  const excludes = ['style']
  const _attrs: any = {}
  for (const key in attrs) {
    if (!excludes.includes(key)) {
      attrs[key] = attrs[key]
    }
  }
  return _attrs
})

const sizeValue = computed(() => {
  // 优先级：props > formItemContextInject > formContextInject
  let size: SizeType = (props.size ||
    formItemContextInject?.size ||
    formContextInject?.size)!
  return size
})

const containerCls = computed(() => {
  const _containerCls = props.type === 'textarea' ? bemTextarea.b() : bem.b()
  const _groupCls = bem.is('group', Boolean(slots.prepend || slots.append))
  const _prependGroupCls = bem.is('group-prepend', Boolean(slots.prepend))
  const _appendGroupCls = bem.is('group-append', Boolean(slots.append))
  const _sizeCls = bem.is(sizeValue.value, !!sizeValue.value)
  const _disabledCls = bem.is('disabled', props.disabled)

  return [
    _containerCls,
    _groupCls,
    _prependGroupCls,
    _appendGroupCls,
    _sizeCls,
    _disabledCls
  ]
})

const isComposing = ref(false)
const isFocus = ref(false)
const isHover = ref(false)
const isValue = computed(() => {
  return !!String(props.modelValue).length
})
const showClear = computed(() => {
  return (
    props.clearable &&
    isValue.value &&
    !props.readonly &&
    !props.disabled &&
    (isFocus.value || isHover.value)
  )
})
const showPassword = computed(() => {
  return (
    props.showPassword &&
    props.type === 'password' &&
    isValue &&
    !props.readonly &&
    !props.disabled
  )
})
const isEye = ref(false)

const textareaStyle = computed(() => {
  const _resize = props.resize ? props.resize : 'none'

  return { resize: _resize }
})

// 拦截字数输入
function interceptWordLimit(value: string) {
  if (props.maxlength) {
    return value.slice(0, props.maxlength as number)
  }
  return value
}

// event handles
function handleInput(event: Event) {
  // 拦截中文候选输入状态
  if (isComposing.value) return

  let { value } = event.target as TargetElement
  emits('input', value)
  emits('update:modelValue', value)
}

function handleChange(event: Event) {
  let { value } = event.target as TargetElement
  emits('change', value)
}

function handleClear() {
  _ref.value!.value = ''
  emits('update:modelValue', '')
  emits('input', '')
  emits('change', '')
  emits('clear')
}

function handleShowPassword() {
  isEye.value = !isEye.value
}

function handleFocus(evt: FocusEvent) {
  isFocus.value = true
}

function handleBlur(evt: FocusEvent) {
  formItemContextInject?.validate('blur').catch(() => {})
  isFocus.value = false
}

function handleMouseLeave(evt: MouseEvent) {
  isHover.value = false
}

function handleMouseEnter(evt: MouseEvent) {
  isHover.value = true
}

function handleCompositionStart(evt: CompositionEvent) {
  emits('compositionstart', evt)
  isComposing.value = true
}

function handleCompositionUpdate(evt: CompositionEvent) {
  emits('compositionupdate', evt)
}

function handleCompositionEnd(evt: CompositionEvent) {
  emits('compositionend', evt)
  if (isComposing.value) {
    isComposing.value = false
    // 关闭拦截后手动更新一次
    handleInput(evt)
  }
}
</script>

<template>
  <div
    :class="containerCls"
    v-bind="attrs"
    @mouseleave="handleMouseLeave"
    @mouseenter="handleMouseEnter"
  >
    <!-- input -->
    <template v-if="props.type !== 'textarea'">
      <!-- prepend slot -->
      <template v-if="$slots.prepend">
        <div :class="[bem.be('group', 'prepend')]">
          <slot name="prepend"></slot>
        </div>
      </template>

      <div :class="[bem.e('wrapper'), bem.is('focus', isFocus)]">
        <!-- prefix slot -->
        <template v-if="$slots.prefix">
          <div :class="[bem.e('prefix')]">
            <slot name="prefix"></slot>
          </div>
        </template>

        <input
          ref="input"
          spellcheck="false"
          v-bind="inputAttrs"
          :class="[bem.e('inner')]"
          :type="showPassword ? (isEye ? 'text' : 'password') : type"
          :tabindex="props.tabindex"
          :placeholder="props.placeholder"
          :disabled="props.disabled"
          :readonly="props.readonly"
          :minlength="minlength"
          :maxlength="maxlength"
          :autocomplete="autocomplete"
          :form="props.form"
          :autofocus="props.autofocus"
          @focus="handleFocus"
          @blur="handleBlur"
          @input="handleInput"
          @change="handleChange"
          @compositionstart="handleCompositionStart"
          @compositionupdate="handleCompositionUpdate"
          @compositionend="handleCompositionEnd"
        />

        <div
          v-if="showClear || showPassword || props.showWordLimit"
          :class="bem.be('interior', 'suffix')"
        >
          <!-- clear -->
          <c-icon
            v-if="showClear"
            :icon="CloseCircleOutline"
            @click="handleClear"
          ></c-icon>
          <!-- showPassword -->
          <c-icon
            v-if="showPassword"
            :icon="isEye ? EyeOutline : EyeOffOutline"
            @click="handleShowPassword"
          ></c-icon>
          <!-- showWordLimit -->
          <span
            :class="bem.e('count')"
            v-if="props.showWordLimit && props.type === 'text'"
          >
            {{ curValueLen }} / {{ props.maxlength }}
          </span>
        </div>

        <!-- suffix slot -->
        <template v-if="$slots.suffix">
          <div :class="[bem.e('suffix')]">
            <slot name="suffix"></slot>
          </div>
        </template>
      </div>

      <!-- append slot -->
      <template v-if="$slots.append">
        <div :class="[bem.be('group', 'append')]">
          <slot name="append"></slot>
        </div>
      </template>
    </template>

    <!-- textarea -->
    <!-- TODO: 文本域的自适应 -->
    <template v-else>
      <textarea
        ref="textarea"
        spellcheck="false"
        :class="[bemTextarea.e('inner')]"
        :style="textareaStyle"
        v-bind="inputAttrs"
        :rows="props.rows"
        :minlength="props.minlength"
        :maxlength="props.maxlength"
        :tabindex="props.tabindex"
        :disabled="props.disabled"
        :readonly="props.readonly"
        :autocomplete="props.autocomplete"
        :placeholder="props.placeholder"
        :form="props.form"
        :autofocus="props.autofocus"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput"
        @change="handleChange"
        @compositionstart="handleCompositionStart"
        @compositionupdate="handleCompositionUpdate"
        @compositionend="handleCompositionEnd"
      />
    </template>

    <!-- word count -->
    <span
      :class="bem.e('count')"
      v-if="props.showWordLimit && props.type === 'textarea'"
    >
      {{ curValueLen }} / {{ props.maxlength }}
    </span>
  </div>
</template>
