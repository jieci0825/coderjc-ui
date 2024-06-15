<script setup lang="ts">
import { createNamespace } from '@coderjc-ui/utils'
import { buttonGroupProps } from './button-group'
import { provide, reactive, toRefs } from 'vue'
import { ButtonGroupKey } from './constant'

defineOptions({ name: 'c-button-group' })

const bem = createNamespace('button-group')
const props = defineProps(buttonGroupProps)

provide(ButtonGroupKey, props)
</script>

<template>
  <div :class="bem.b()">
    <slot />
  </div>
</template>
