import { ExtractPropTypes, PropType } from 'vue'
import { isString } from '@vue/shared'
import { InputType, ResizeType, SizeType } from './input.type'

export const inputProps = {
  /**
   * @description 输入框值
   */
  modelValue: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  },

  /**
   * @description 类型
   */
  type: {
    type: String as PropType<InputType>,
    default: 'text'
  },

  /**
   * @description 输入框大小
   */
  size: {
    type: String as PropType<SizeType>,
    default: ''
  },

  /**
   * @description 原生属性，最小输入长度
   */
  minlength: {
    type: [String, Number] as PropType<string | number>,
    default: 0
  },

  /**
   * @description 原生属性，最大输入长度
   */
  maxlength: {
    type: [String, Number] as PropType<string | number>,
    default: 10000
  },

  /**
   * @description 输入框行数，仅 type 为 'textarea' 时有效
   */
  rows: {
    type: [String, Number] as PropType<string | number>,
    default: 2
  },

  /**
   * @description 是否显示统计字数, 只在 type 为 'text' 或 'textarea' 的时候生效
   */
  showWordLimit: {
    type: Boolean,
    default: false
  },

  /**
   * @description 输入框占位文本
   */
  placeholder: {
    type: String,
    default: ''
  },

  /**
   * @description 是否显示清除按钮，只有当 type 不是 textarea时生效
   */
  clearable: {
    type: Boolean,
    default: false
  },

  /**
   * @description 是否显示切换密码图标，只有 type 为 password 时才有效
   */
  showPassword: {
    type: Boolean,
    default: true
  },

  /**
   * @description 是否禁用
   */
  disabled: {
    type: Boolean,
    default: false
  },

  /**
   * @description autocomplete
   */
  autocomplete: {
    type: String,
    default: 'off'
  },

  /**
   * @description 等价于原生 input name 属性
   */
  name: {
    type: String
  },

  /**
   * @description 原生 readonly 属性，是否只读
   */
  readonly: {
    type: Boolean,
    default: false
  },

  /**
   * @description 原生 step 属性，设置输入字段的合法数字间隔
   */
  step: {
    type: [String, Number] as PropType<string | number>
  },

  /**
   * @description 控制是否能被用户缩放
   */
  resize: {
    type: String as PropType<ResizeType>,
    default: 'vertical'
  },

  /**
   * @description textarea 高度是否自适应，仅 type 为 'textarea' 时生效。 可以接受一个对象，比如: { minRows: 2, maxRows: 6 }
   */
  // TODO
  autosize: {
    type: [Boolean, Object] as PropType<boolean | object>,
    default: false
  },

  /**
   * @description 原生属性，自动获取焦点
   */
  autofocus: {
    type: Boolean,
    default: false
  },

  /**
   * @description 原生属性
   */
  form: {
    type: String
  },

  /**
   * @description 输入框的 tabindex
   */
  tabindex: {
    type: [String, Number] as PropType<string | number>,
    default: -1
  },

  /**
   * @description 输入时是否触发表单的校验
   */
  // TODO
  validateEvent: {},

  /**
   * @description input 元素或 textarea 元素的 style
   */
  inputStyle: {
    type: [String, Object] as PropType<string | object>
  }
} as const

export const inputEmits = {
  'update:modelValue': (value: string) => isString(value),
  input: (value: string) => isString(value),
  change: (value: string) => isString(value),
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
  clear: () => true,
  mouseleave: (evt: MouseEvent) => evt instanceof MouseEvent,
  mouseenter: (evt: MouseEvent) => evt instanceof MouseEvent,
  compositionstart: (evt: CompositionEvent) => evt instanceof CompositionEvent,
  compositionupdate: (evt: CompositionEvent) => evt instanceof CompositionEvent,
  compositionend: (evt: CompositionEvent) => evt instanceof CompositionEvent
}

export type InputProps = ExtractPropTypes<typeof inputProps>
export type InputEmits = typeof inputEmits
