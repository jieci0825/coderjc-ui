import Empty from './src/empty.vue'
import { withInstall } from '@coderjc-ui/utils'

export const CEmpty = withInstall(Empty)
export default CEmpty

export * from './src/empty'

declare module 'vue' {
  export interface GlobalComponents {
    CEmpty: typeof CEmpty
  }
}
