<script setup lang="ts">
import { createNamespace, isNumber } from '@coderjc-ui/utils'
import CImgEmpty from './img-empty.vue'
import { computed } from 'vue'
import { emptyProps } from './empty'

defineOptions({ name: 'CEmpty' })

const bem = createNamespace('empty')
const props = defineProps(emptyProps)

const imageStyle = computed(() => {
  if (!isNumber(props.imageSize)) return
  return {
    width: props.imageSize + 'px',
    height: props.imageSize + 'px'
  }
})
</script>

<template>
  <div :class="[bem.b()]">
    <div :class="[bem.e('image')]" :style="imageStyle">
      <img v-if="image" :src="image" ondragstart="return false" />
      <slot v-else name="image">
        <c-img-empty />
      </slot>
    </div>

    <div :class="[bem.e('description')]">
      <slot v-if="$slots.description" name="description" />
      <p v-else>{{ description }}</p>
    </div>

    <div v-if="$slots.default" :class="[bem.e('bottom')]">
      <slot />
    </div>
  </div>
</template>
