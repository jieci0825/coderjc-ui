import type { ExtractPropTypes, PropType } from 'vue'
import type { NameType } from './collapse.type'

export const collapseItemProps = {
  /**
   * @description 唯一标识符
   */
  name: {
    type: [String, Number] as PropType<NameType>
  },

  /**
   * @description 标题
   */
  title: {
    type: String
  },

  /**
   * @description 是否禁用
   */
  disabled: {
    type: Boolean,
    default: false
  }
} as const

export type CollapseItemProps = ExtractPropTypes<typeof collapseItemProps>
