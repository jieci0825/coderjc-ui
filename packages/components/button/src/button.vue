<script setup lang="ts">
import { computed, watch } from 'vue'
import { Loading3QuartersOutlined } from '@vicons/antd'
import { CIcon } from '@coderjc-ui/components'
import { createNamespace } from '@coderjc-ui/utils'
import { buttonProps, buttonEmits } from './button'
import { inject } from 'vue'
import { ButtonGroupKey } from './constant'

defineOptions({ name: 'c-button' })

const bem = createNamespace('button')
const props = defineProps(buttonProps)
const emits = defineEmits(buttonEmits)

const buttonGroupInject = inject(ButtonGroupKey, undefined)

const buttonCls = computed(() => [
  bem.b(),
  bem.m(buttonGroupInject?.type || props.type),
  bem.m(buttonGroupInject?.size || props.size),
  bem.is('disabled', props.disabled),
  bem.is('loading', props.loading),
  bem.is('plain', props.plain),
  bem.is('round', props.round),
  bem.is('circle', props.circle)
])

const handleClick = (evt: MouseEvent) => {
  if (props.disabled) return
  if (props.nativeType === 'reset') {
    // TODO: 表单中按钮类型为 reset 处理
    // form?.resetFields()
  }
  emits('click', evt)
}

const loadingText = computed(() => {
  return props.loading && props.loadingText ? props.loadingText : undefined
})

const spanStyle = computed(() => {
  if (!props.icon) return
  const gap = '6px'
  return props.iconPlacement === 'left'
    ? { marginLeft: gap }
    : { marginRight: gap }
})
</script>

<template>
  <button
    :class="buttonCls"
    :type="props.nativeType"
    :disabled="props.disabled"
    @click="handleClick"
  >
    <div v-if="props.loading" :class="[bem.em('wrap', 'loading')]">
      <c-icon :size="14" :class="[bem.is('loading', true)]">
        <Loading3QuartersOutlined />
      </c-icon>
      <span style="margin-left: 4px" v-if="loadingText">
        {{ loadingText }}
      </span>
    </div>

    <c-icon
      v-if="props.iconPlacement === 'left' && (props.icon || $slots.icon)"
    >
      <component v-if="props.icon" :is="props.icon"></component>
      <slot v-else name="icon" />
    </c-icon>

    <span :style="spanStyle" v-if="$slots.default">
      <slot>按钮</slot>
    </span>

    <c-icon
      v-if="props.iconPlacement === 'right' && (props.icon || $slots.icon)"
    >
      <component v-if="props.icon" :is="props.icon"></component>
      <slot v-else name="icon" />
    </c-icon>
  </button>
</template>
