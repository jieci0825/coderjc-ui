import DefaultTheme from 'vitepress/theme'
import {
  CIcon,
  CTree,
  CButton,
  CCheckbox,
  CCheckboxGroup,
  CVirtual,
  CInput,
  CForm,
  CFormItem,
  CEmpty
} from '@coderjc-ui/components/index.ts'
import {  ElementPlusContainer } from '@vitepress-demo-preview/component'

import '@vitepress-demo-preview/component/dist/style.css'
import '@coderjc-ui/theme-chalk/src/index.scss'
import './custom.css'

const components = [
  CIcon,
  CTree,
  CButton,
  CCheckbox,
  CCheckboxGroup,
  CVirtual,
  CInput,
  CForm,
  CFormItem,
  CEmpty
]

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    components.forEach(comp => app.component(comp.name, comp))
    app.component('demo-preview', ElementPlusContainer)
  }
}
