import { ExtractPropTypes, PropType } from 'vue'
import { ValueType } from './collapse.type'

export const collapseProps = {
  /**
   * @descript 当前活动面板，在手风琴模式下其类型是 `string`，在其他模式下是 `array`
   */
  modelValue: {
    type: [String, Array] as PropType<string | string[]>
  },

  /**
   * @descript 手风琴模式
   */
  accordion: {
    type: Boolean,
    default: false
  }
}

export const collapseEmits = {
  'update:modelValue': (value: ValueType) => true,
  change: (activeNames: ValueType) => true
}

export type CollapseProps = ExtractPropTypes<typeof collapseProps>
