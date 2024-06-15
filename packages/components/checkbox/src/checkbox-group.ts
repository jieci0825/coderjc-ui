import { ExtractPropTypes, InjectionKey, PropType } from 'vue'
import { CheckboxGroupContext } from './checkbox.type'

export const checkboxGroupProps = {
  /**
   * @description 绑定值
   */
  modelValue: {
    type: Object as PropType<Array<string> | Array<number>>,
    default: []
  },

  /**
   * @description 是否禁用
   */
  disabled: {
    type: Boolean,
    default: false
  }
} as const
export const checkboxGroupEmits = {
  'update:modelValue': (value: Array<string> | Array<number>) => true,
  change: (value: Array<string> | Array<number>) => true
}

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>
export type CheckboxGroupEmits = typeof checkboxGroupEmits

export const provideCheckboxGroupKey: InjectionKey<CheckboxGroupContext> =
  Symbol('checkboxGroup')
