<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import {
  TypeComponentsMap,
  createNamespace,
  isFunction
} from '@coderjc-ui/utils'
import { messageEmits, messageProps } from './message'
import { getLastBottomOffset } from './method'
import { CIcon } from '@coderjc-ui/components'
import { CloseOutline } from '@vicons/ionicons5'
import { useEventListener } from '@coderjc-ui/hooks'

defineOptions({ name: 'CMessage' })

const bem = createNamespace('message')
const props = defineProps(messageProps)
const emits = defineEmits(messageEmits)

const messageRef = ref<HTMLDivElement>()

function onKeydown(e: KeyboardEvent) {
  if (e.code === 'Escape') {
    close()
  }
}
useEventListener(document, 'keydown', onKeydown)

// 相对于当前组件上一个实例的底部偏移，第一个为 0
const lastOffset = computed(() => getLastBottomOffset(props.id))
const topOffset = computed(() => {
  return props.offset + lastOffset.value
})
const height = ref(0)
// 底部偏移
const bottomOffset = computed(() => {
  return topOffset.value + height.value
})

const containerCls = computed(() => {
  return [bem.b(), bem.m(props.type)]
})

const containerStyle = computed(() => {
  return {
    top: topOffset.value + 'px',
    zIndex: props.zIndex
  }
})

const iconComponent = computed(
  () => props.icon || TypeComponentsMap[props.type] || ''
)

let stopTimer: any = null

const visible = ref(false)

function startTimer() {
  if (props.duration === 0) return
  stopTimer = setTimeout(() => {
    close()
  }, props.duration)
}

function clearTimer() {
  if (stopTimer) {
    clearTimeout(stopTimer)
    stopTimer = null
  }
}

function close() {
  clearTimer()
  visible.value = false
  if (isFunction(props.onClose)) {
    props.onClose(messageRef.value!)
  }
}

onMounted(() => {
  startTimer()
  visible.value = true
})

function destoryCommponent() {
  props.onDestroy()
}

function updateHeight() {
  height.value = messageRef.value!.getBoundingClientRect().height
}

defineExpose({
  bottomOffset,
  visible
})
</script>

<template>
  <!-- after-leave 等待动画执行完成之后再销毁组件 -->
  <Transition
    :name="bem.b('fade')"
    @after-leave="destoryCommponent"
    @enter="updateHeight"
  >
    <div
      :class="containerCls"
      v-show="visible"
      :style="containerStyle"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
      ref="messageRef"
    >
      <c-icon
        v-if="iconComponent"
        :class="[bem.e('icon'), bem.em('icon', props.type)]"
      >
        <Component :is="iconComponent"></Component>
      </c-icon>
      <slot>
        <p v-if="props.isHTML" :class="bem.e('content')" v-html="message" />
        <p v-else :class="bem.e('content')">{{ props.message }}</p>
      </slot>
      <c-icon
        v-if="props.showClose"
        :class="[bem.e('closeBtn')]"
        :icon="CloseOutline"
        @click="close"
      />
    </div>
  </Transition>
</template>
