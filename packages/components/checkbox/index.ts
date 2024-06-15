import { withInstall } from '@coderjc-ui/utils'
import Checkbox from './src/checkbox.vue'
import CheckboxGroup from './src/checkbox-group.vue'

export const CCheckbox = withInstall(Checkbox)
export default CCheckbox

export const CCheckboxGroup = withInstall(CheckboxGroup)

export * from './src/checkbox'
export * from './src/checkbox-group'

declare module 'vue' {
  export interface GlobalComponents {
    CCheckbox: typeof CCheckbox
    CCheckboxGroup: typeof CCheckboxGroup
  }
}
