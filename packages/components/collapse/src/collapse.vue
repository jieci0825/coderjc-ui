<script setup lang="ts">
import { createNamespace } from '@coderjc-ui/utils'
import { collapseEmits, collapseProps } from './collapse'

defineOptions({ name: 'Collapse' })

const bem = createNamespace('collapse')
const props = defineProps(collapseProps)
const emits = defineEmits(collapseEmits)
</script>

<template>
  <div :class="[bem.b()]">
    <slot />
  </div>
</template>
