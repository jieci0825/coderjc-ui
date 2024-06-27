import { withInstallFunction } from '@coderjc-ui/utils'
import createMessage from './src/method'

export const CMessage = withInstallFunction(createMessage, '$CMessage')
export default CMessage

export * from './src/message'

declare module 'vue' {
  export interface GlobalComponents {
    CMessage: typeof CMessage
  }
}
