// 准备组件的相关数据 和 ts 类型

import { Component, ExtractPropTypes, PropType } from 'vue'

// Icon 组件需要接受的 props 属性
export const iconProps = {
  /**
   * @description icon 的颜色
   */
  color: {
    type: String
  },

  /**
   * @description icon 的尺寸
   */
  size: {
    type: [String, Number] as PropType<string | number>
  },

  /**
   * @description icon组件
   */
  icon: {
    type: Object as PropType<Component>
  }
} as const // 只读
export const iconEmits = {
  click: (e: MouseEvent) => true
}

// Icon 组件需要接受的 props 类型
export type IconProps = ExtractPropTypes<typeof iconProps>
export type IconEmits = typeof iconEmits
