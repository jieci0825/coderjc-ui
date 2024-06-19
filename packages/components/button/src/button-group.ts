import { PropType, ExtractPropTypes } from 'vue'
import { Type } from './button.type'
import {ComponentSize} from "@coderjc-ui/constants";

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
    type: String as PropType<ComponentSize>,
    default: 'default'
  }
}

export type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>
