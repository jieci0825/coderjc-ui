import { withInstall } from '@coderjc-ui/utils'
import Collapse from './src/collapse.vue'
import CollapseItem from './src/collapse-item.vue'

export const CCollapse = withInstall(Collapse)
export default CCollapse

export const CCollapseItem = withInstall(CollapseItem)

export * from './src/collapse.vue'
export * from './src/collapse'

declare module 'vue' {
  export interface GlobalComponents {
    CCollapse: typeof CCollapse
    CCollapseItem: typeof CCollapseItem
  }
}
