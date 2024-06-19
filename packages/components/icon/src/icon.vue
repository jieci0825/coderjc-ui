<script setup lang="ts">
import { computed } from 'vue'
import { createNamespace } from '@coderjc-ui/utils'
import { iconEmits, iconProps } from './icon'

defineOptions({ name: 'CIcon' })

const bem = createNamespace('icon')
const props = defineProps(iconProps)
const emits = defineEmits(iconEmits)

// 根据 props 计算 style
const style = computed(() => {
  if (!props.color && !props.size)
    return {
      width: '1em',
      height: '1em'
    }

  let size: string | number = 16

  if (props.size && isNaN(Number(props.size))) {
    size = props.size
  } else {
    size = props.size + 'px'
  }

  return {
    width: size,
    height: size,
    fontSize: size,
    color: props.color
  }
})

const handleClick = (evt: MouseEvent) => {
  emits('click', evt)
}
</script>

<template>
  <i :class="bem.b()" :style="style" @click="handleClick">
    <template v-if="$slots.default">
      <slot></slot>
    </template>
    <template v-else>
      <Component :is="props.icon" />
    </template>
  </i>
</template>
