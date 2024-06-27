import type { AppContext, VNode } from 'vue'
import { MessageProps } from './message'

export type MessageType = 'success' | 'warning' | 'info' | 'error'

export interface MessageHandler {
  close: () => void
}

export type MessageOptions = Partial<
  Omit<MessageProps, 'onDestroy' | 'id' | 'zIndex'>
>

export type MessageFn = {
  (options?: MessageOptions, appContext?: null | AppContext): MessageHandler
  closeAll(type?: MessageType): void
}

export type MessageTypedFn = (
  options?: MessageOptions,
  appContext?: null | AppContext
) => MessageHandler

export interface Message extends MessageFn {
  success: MessageTypedFn
  waring: MessageTypedFn
  info: MessageTypedFn
  error: MessageTypedFn
}

export interface MessageContext {
  id: string
  vnode: VNode
  props: MessageProps | MessageOptions
  close: () => void
}
