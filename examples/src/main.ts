import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// import '@coderjc-ui/theme-chalk/src/index.scss'
// import CoderJcUI from 'coderjc-ui'
// console.log('🚢 ~ 当前打印的内容 ~ CoderJcUI:', CoderJcUI)

import {
  CIcon,
  CTree,
  CCheckbox,
  CCheckboxGroup,
  CVirtual,
  CButton,
  CButtonGroup,
  CEmpty,
  CInput,
  CForm,
  CFormItem,
  CCollapse,
  CCollapseItem,
  CMessage
} from '@coderjc-ui/components'
import '@coderjc-ui/theme-chalk/src/index.scss'

const components = [
  CIcon,
  CTree,
  CCheckbox,
  CCheckboxGroup,
  CVirtual,
  CButton,
  CButtonGroup,
  CEmpty,
  CInput,
  CForm,
  CFormItem,
  CCollapse,
  CCollapseItem
]

const plugins = [CMessage]

const app = createApp(App)
components.forEach(comp => app.component(comp.name, comp))
plugins.forEach(plugin => app.use(plugin))
app.mount('#app')
