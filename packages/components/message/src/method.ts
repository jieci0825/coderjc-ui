import { render, h, shallowReactive, isVNode } from 'vue'
import MessageContainer from './message.vue'
import type { Message, MessageContext, MessageOptions } from './message.type'
import { useZIndex } from '@coderjc-ui/hooks'
import { isFunction } from '@coderjc-ui/utils'

let seed = 1

// 创建数组，存储所有的消息
//  - tips: 这块需要数组改为响应式，模板中收集了依赖后才会重新执行，不然因为异步的原因无法正确执行 getLastBottomOffset
const messageInstances: MessageContext[] = shallowReactive([])

// 统一配置
const normalizeOptions = () => {}

// 获取最后的消息实例
//  - 当前这个实例还未加入 messageInstances，所以获取的最后一个就是上一个实例
export const getLastInstance = () => {
  return messageInstances.at(-1)
}

const createMessage = (options: MessageOptions) => {
  const id = `c-message-${seed++}`

  // 创建容器
  const container = document.createElement('div')

  // 卸载元素
  const onDestroy = () => {
    const idx = messageInstances.findIndex(item => item.id === id)
    if (idx === -1) return
    messageInstances.splice(idx, 1)
    render(null, container)
  }

  // 手动删除
  //  - 改变组件的 visible 的值，不直接调用 onDestroy 从而保持组件状态一致，不破坏动画等逻辑
  const manualDestroy = () => {
    const curInstance = messageInstances.find(item => item.id === id)
    if (!curInstance) return
    curInstance.vnode.component.exposed.visible.value = false
  }

  const props = {
    ...options,
    id,
    zIndex: useZIndex().nextZIndex(),
    onDestroy
  }

  // 将组件使用 h 转为 vnode
  const slots =
    isFunction(options.message) || isVNode(options.message)
      ? {
          default: isFunction(options.message)
            ? options.message
            : () => options.message
        }
      : null
  const vnode = h(MessageContainer, props, slots)
  // 渲染挂载
  render(vnode, container)
  // 只加入第一个子元素，避免这个多余的 div 容器插入
  document.body.appendChild(container.firstElementChild!)

  const instance: MessageContext = {
    id,
    vnode,
    props,
    close: manualDestroy
  }

  messageInstances.push(instance)

  return instance
}

// 获取上一个实例的 bottomOffset
export const getLastBottomOffset = (id: string) => {
  const idx = messageInstances.findIndex(item => item.id === id)
  if (idx <= 0) return 0
  const prev = messageInstances[idx - 1]
  const bottomOffset = prev?.vnode.component.exposed.bottomOffset.value
  return bottomOffset
}

export default createMessage as unknown as Message
