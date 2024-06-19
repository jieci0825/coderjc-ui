import { PropType, ExtractPropTypes, Component } from 'vue'
import { NativeType, Placement, Type } from './button.type'
import {ComponentSize} from "@coderjc-ui/constants";

export const buttonProps = {
  /**
   * @description 类型
   */
  type: {
    type: String as PropType<Type>,
    default: ''
  },

  /**
   * @description 尺寸
   */
  size: {
    type: String as PropType<ComponentSize>
  },

  /**
   * @description 是否为朴素按钮
   */
  plain: {
    type: Boolean,
    default: false
  },

  /**
   * @description 是否为圆角按钮
   */
  round: {
    type: Boolean,
    default: false
  },

  /**
   * @description 是否为圆形按钮
   */
  circle: {
    type: Boolean,
    default: false
  },

  /**
   * @description 图标组件
   */
  icon: {
    type: [Object] as PropType<Component>
  },

  /**
   * @description icon 位置
   */
  iconPlacement: {
    type: String as PropType<Placement>,
    default: 'left'
  },

  /**
   * @description 是否禁用按钮
   */
  disabled: {
    type: Boolean,
    default: false
  },

  /**
   * @description 是否加载中状态
   */
  loading: {
    type: Boolean,
    default: false
  },

  /**
   * @description Loading 状态时显示的文本
   */
  loadingText: {
    type: String,
    default: ''
  },

  /**
   * @description 原生 type 属性
   */
  nativeType: {
    type: String as PropType<NativeType>,
    default: 'button'
  }
} as const
export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonEmits = typeof buttonEmits
