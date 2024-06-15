<script setup lang="ts">
import { createNamespace } from '@coderjc-ui/utils'
import { virtualProps } from './virtual'
import { computed, onMounted, ref, watch } from 'vue'

defineOptions({ name: 'c-virtual' })

const props = defineProps(virtualProps)
const bem = createNamespace('virtual')

watch(
  () => props.data,
  () => {
    updateHeight()
  }
)

// 开始索引
const startIndex = ref(0)
// 结束索引
const endIndex = computed(() => {
  const index = startIndex.value + props.remain
  if (index >= props.data.length - 1) {
    return props.data.length - 1
  }
  return index
})

// 计算向上需要补充多少条数据
const prev = computed(() => {
  return Math.min(startIndex.value, props.cache)
})
// 计算向下需要补充多少条数据
const next = computed(() => {
  return Math.min(props.data.length - endIndex.value, props.cache)
})

// 显示的数据
const visibleData = computed(() => {
  // 根据 cache 计算需要多展示的数据，补足上下部分，防止快速滚动时出现留白
  return props.data.slice(
    startIndex.value - prev.value,
    endIndex.value + next.value
  )
})

// 获取 dom
const containerRef = ref<HTMLElement>()
const barRef = ref<HTMLElement>()

// 根据bar卷去的头部同步计算list应该往下偏移的距离
//  - 之所以偏移这部分，就是为了解决数据加载完毕后，底部会因为头部卷去出现的留白
const offset = computed(() => {
  // 同步减去向上补充的数据高度
  return startIndex.value * props.itemHeight - prev.value * props.itemHeight
})

onMounted(() => {
  updateHeight()
})

// 更新高度
function updateHeight() {
  containerRef.value!.style.height = props.itemHeight * props.remain + 'px'
  barRef.value!.style.height = props.itemHeight * props.data.length + 'px'
}

// 滚动
const handleScroll = () => {
  // 计算开始索引
  const scrollTop = containerRef.value!.scrollTop
  startIndex.value = Math.floor(scrollTop / props.itemHeight)
}
</script>

<template>
  <div :class="[bem.b()]" ref="containerRef" @scroll="handleScroll">
    <div
      :class="[bem.em('scroll', 'list')]"
      :style="{
        transform: `translateY(${offset}px)`
      }"
    >
      <slot
        v-for="(item, index) in visibleData"
        :key="index"
        :node="item"
      ></slot>
    </div>
    <div :class="[bem.em('scroll', 'bar')]" ref="barRef"></div>
  </div>
</template>

<style scoped></style>
