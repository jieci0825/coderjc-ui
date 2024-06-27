import { computed, ref } from 'vue'

const zIndex = ref(0)

export const useZIndex = (initValue: number = 2000) => {
  const initZIndex = ref(initValue)
  const currentZIndex = computed(() => zIndex.value + initZIndex.value)
  const nextZIndex = () => {
    zIndex.value++
    return currentZIndex.value
  }

  return {
    currentZIndex,
    nextZIndex,
    initZIndex
  }
}
