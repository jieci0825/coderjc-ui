<script setup lang="ts">
import { computed, inject } from 'vue'
import { createNamespace, PREFIX } from '@coderjc-ui/utils'
import CIcon from '@coderjc-ui/components/icon'
import { collapseItemProps } from './collapse-item'
import { CollapseContextKey } from './constants'
import { ChevronRight20Filled } from '@vicons/fluent'
import CCollapseTransition from '@coderjc-ui/components/collapse-transition'

defineOptions({ name: 'CCollapseItem' })

const bem = createNamespace('collapse-item')
const props = defineProps(collapseItemProps)

const collapseInject = inject(CollapseContextKey, undefined)

const isActive = computed(() => {
  return collapseInject?.activeNames.value.includes(props.name)
})

const containerCls = computed(() => {
  return [bem.b(), bem.is('disabled', props.disabled)]
})
const arrwoCls = computed(() => {
  return [bem.e('arrow'), bem.is('active', isActive.value)]
})
const headerCls = computed(() => {
  return [bem.e('header'), bem.is('active', isActive.value)]
})

const currentHeaderId = computed(() => {
  return props.name ? `${bem.b()}-head-${props.name}` : undefined
})
const currentContentId = computed(() => {
  return props.name ? `${bem.b()}-content-${props.name}` : undefined
})

const handleClick = () => {
  if (props.disabled) return
  collapseInject?.handleItemClick(props.name)
}
</script>

<template>
  <div :class="containerCls">
    <div :class="headerCls" :id="currentHeaderId" @click="handleClick">
      <slot name="title">{{ props.title }}</slot>
      <c-icon :class="arrwoCls">
        <ChevronRight20Filled />
      </c-icon>
    </div>

    <c-collapse-transition>
      <div :class="bem.e('wrap')" v-show="isActive">
        <div :class="[bem.e('content')]" :id="currentContentId">
          <slot />
        </div>
      </div>
    </c-collapse-transition>
  </div>
</template>
