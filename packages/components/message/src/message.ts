import { Component, PropType, ExtractPropTypes, VNode } from 'vue'
import { MessageType } from './message.type'

export const messageProps = {
  /**
   * @description 消息文字
   */
  message: {
    type: [String, Object] as PropType<string | VNode>,
    default: ''
  },

  /**
   * @description 消息类型
   */
  type: {
    type: String as PropType<MessageType>,
    default: 'info'
  },

  /**
   * @description 自定义图标按钮，将会覆盖 type 的图标
   */
  icon: {
    type: Object as PropType<Component>
  },

  /**
   * @description 显示时间，单位为毫秒。设为 0 则不会自动关闭
   */
  duration: {
    type: Number,
    default: 3000
  },

  /**
   * @description 是否显示关闭按钮
   */
  showClose: {
    type: Boolean,
    default: false
  },

  /**
   * @description 点击关闭按钮时触发
   */
  onClose: {
    type: Function as PropType<() => void>
  },

  /**
   * @description Message 距离窗口顶部的偏移量
   */
  offset: {
    type: Number
  },

  /**
   * @description 设置 Message 的根元素。默认为 documen.body
   */
  appendTo: {
    type: [String, Object] as PropType<string | HTMLElement>,
    default: 'body'
  },

  /**
   * @description 是否将 message 属性作为 HTML 处理
   */
  isHTML: {
    type: Boolean,
    default: false
  },

  onDestroy: {
    type: Function as PropType<() => void>
  },

  id: {
    type: String
  },

  zIndex: {
    type: Number
  }
} as const

export const messageEmits = {
  close: (e: MouseEvent) => e instanceof MouseEvent
}

export type MessageProps = Partial<ExtractPropTypes<typeof messageProps>>

export type MessageEmits = typeof messageEmits
