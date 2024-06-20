import { withInstall } from '@coderjc-ui/utils'
import Tree from './src/tree.vue'

export const CTree = withInstall(Tree)
export default CTree

export * from './src/tree'
export * from './src/constants'
export * from './src/tree.type'

declare module 'vue' {
  // 接口同名混合
  export interface GlobalComponents {
    CTree: typeof CTree
  }
}
