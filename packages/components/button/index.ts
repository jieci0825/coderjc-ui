import { withInstall } from '@coderjc-ui/utils'
import Button from './src/button.vue'
import ButtonGroup from './src/button-group.vue'

export const CButton = withInstall(Button)
export default CButton

export const CButtonGroup = withInstall(ButtonGroup)

export * from './src/button'
export * from './src/button-group'

declare module 'vue' {
  export interface GlobalComponents {
    CButton: typeof CButton
    CButtonGroup: typeof CButtonGroup
  }
}
