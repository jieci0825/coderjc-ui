import { withInstall } from '@coderjc-ui/utils'
import Collapse from './src/collapse.vue'

export const CCollapse = withInstall(Collapse)

export default CCollapse

export * from './src/collapse.vue'

declare module 'vue' {
  export interface GlobalComponents {
    CCollapse: typeof CCollapse
  }
}
