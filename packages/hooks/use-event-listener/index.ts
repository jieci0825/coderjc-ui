import { onMounted, onBeforeUnmount, type Ref, isRef, watch, unref } from 'vue'

export function useEventListener(
  target: EventTarget | Ref<EventTarget | null>,
  type: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions
) {
  onMounted(() => {
    if (isRef(target)) {
      watch(target, (newValue, oldValue) => {
        oldValue?.removeEventListener(type, listener, options)
        newValue?.addEventListener(type, listener, options)
      })
    } else {
      target.addEventListener(type, listener, options)
    }
  })

  onBeforeUnmount(() => {
    unref(target)?.removeEventListener(type, listener, options)
  })
}
