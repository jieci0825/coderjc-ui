import { withInstall } from '@coderjc-ui/utils'
import Button from './src/button.vue'

export const CButton = withInstall(Button)
export default CButton

export * from './src/button'

declare module 'vue' {
  export interface GlobalComponents {
    CButton: typeof CButton
  }
}
