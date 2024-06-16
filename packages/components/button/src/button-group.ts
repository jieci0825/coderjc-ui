import { PropType, ExtractPropTypes } from 'vue'
import { SizeType, Type } from './button.type'

export const buttonGroupProps = {
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
    type: String as PropType<SizeType>,
    default: 'default'
  }
}

export type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>
