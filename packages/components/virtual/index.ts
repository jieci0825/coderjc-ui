import { withInstall } from '@coderjc-ui/utils'
import Virtual from './src/virtual.vue'

export const CVirtual = withInstall(Virtual)
export default CVirtual

export * from './src/virtual'

declare module 'vue' {
  export interface GlobalComponents {
    CVirtual: typeof CVirtual
  }
}
