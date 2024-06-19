import { ExtractPropTypes, PropType } from 'vue'
import { ValueType } from '@coderjc-ui/components/checkbox/src/checkbox.type'

export const collapseProps = {
  /**
   * @descript 当前活动面板，在手风琴模式下其类型是 `string`，在其他模式下是 `array`
   */
  modelValue: {
    type: [String, Array] as PropType<string | string[]>
  }
}

export const collapseEmits = {
  'update:modelValue': (value: ValueType) => true
}

export type CollapseProps = ExtractPropTypes<typeof collapseProps>
