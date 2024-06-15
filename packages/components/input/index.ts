import { withInstall } from '@coderjc-ui/utils'
import Input from './src/input.vue'

export const CInput = withInstall(Input)
export default CInput

export * from './src/input'

declare module 'vue' {
  export interface GlobalComponents {
    CInput: typeof CInput
  }
}
