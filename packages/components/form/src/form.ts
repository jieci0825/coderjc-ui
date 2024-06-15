import { ExtractPropTypes, PropType } from 'vue'
import type {
  Arrayable,
  FormItemRule,
  LabelPositionType,
  SizeType
} from './types'

export const formProps = {
  /**
   * @description 表单数据对象
   */
  model: {
    type: Object
  },

  /**
   * @description 表单验证规则
   */
  rules: {
    type: Object as PropType<Record<string, Arrayable<FormItemRule>>>
  },

  /**
   * @description 标签宽度，例如 '50px' 或则 50
   */
  labelWidth: {
    type: [String, Number] as PropType<string | number>
  },

  /**
   * @description 表单对其方式
   */
  labelPosition: {
    type: String as PropType<LabelPositionType>,
    default: 'right'
  },

  /**
   * @description 是否显示校验错误信息
   */
  showMessage: {
    type: Boolean,
    default: true
  },

  /**
   * @description 尺寸
   */
  size: {
    type: String as PropType<SizeType>,
    default: ''
  }
} as const
export const formEmits = {}

// Icon 组件需要接受的 props 类型
export type FormProps = ExtractPropTypes<typeof formProps>
