import { ExtractPropTypes, PropType } from 'vue'
import { Arrayable, FormItemRule, SizeType } from './types'

export type FormItemProp = Arrayable<string>

export const formItemProps = {
  /**
   * @description 标签文本
   */
  label: {
    type: String,
    default: ''
  },

  /**
   * @description model 的键名。 它可以是一个属性的值(如 a.b.0 或 ['a', 'b', '0'])。 在使用了 validate、resetFields 的方法时，该属性是必填的
   */
  prop: {
    type: String,
    default: ''
  },

  /**
   * @description 是否必填
   */
  required: {
    type: Boolean,
    default: false
  },

  /**
   * @description 尺寸
   */
  size: {
    type: String as PropType<SizeType>,
    default: ''
  },

  /**
   * @description rules
   */
  rules: {
    type: [Object, Array] as PropType<Arrayable<FormItemRule>>
  },

  /**
   * @description 是否显示校验错误信息
   */
  showMessage: {
    type: Boolean,
    default: true
  }
} as const
export const formItemEmits = {}

// Icon 组件需要接受的 props 类型
export type FormItemProps = ExtractPropTypes<typeof formItemProps>
