import { withInstall } from '@coderjc-ui/utils'
import Icon from './src/icon.vue'

export const CIcon = withInstall(Icon)
export default CIcon

export * from './src/icon'

// 扩展vue声明类型，为组件在模板中使用时提供类型提示支持
declare module 'vue' {
  // 接口同名混合
  export interface GlobalComponents {
    CIcon: typeof CIcon
  }
}
