import { ExtractPropTypes, PropType } from 'vue'
import type { SizeType, ValueType } from './checkbox.type'

export const checkboxProps = {
  /**
   * @description 是否选中
   */
  modelValue: {
    type: [Boolean, String, Number] as PropType<boolean | string | number>
  },

  /**
   * @description 展示的标签文本，label 的值不能用作于 value
   */
  label: {
    type: String,
    default: ''
  },

  /**
   * @description 选中状态的值
   */
  value: {
    type: [Boolean, String, Number, Object] as PropType<
      boolean | string | number | object
    >
  },

  /**
   * @description 是否禁用
   */
  disabled: {
    type: Boolean,
    default: false
  },

  /**
   * @description 是否半选状态，设置不确定状态，仅负责样式控制
   */
  indeterminate: {
    type: Boolean,
    default: false
  },

  /**
   * @description checkbox的尺寸
   */
  size: {
    type: String as PropType<SizeType>
  }
} as const
export const checkboxEmits = {
  'update:modelValue': (value: boolean | string | number) => true,
  change: (value: boolean) => true
}

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>
export type CheckboxEmits = typeof checkboxEmits
