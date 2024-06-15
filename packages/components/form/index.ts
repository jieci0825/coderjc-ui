import Form from './src/form.vue'
import FormItem from './src/form-item.vue'
import { withInstall } from '@coderjc-ui/utils'

export const CForm = withInstall(Form)
export default CForm

export const CFormItem = withInstall(FormItem)

export * from './src/form'
export * from './src/form-item'

declare module 'vue' {
  export interface GlobalComponents {
    CForm: typeof CForm
  }
}

export type FormInstance = InstanceType<typeof Form>
export type FormItemInstance = InstanceType<typeof FormItem>
