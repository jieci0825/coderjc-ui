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
  CFormItem
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
  CFormItem
]

const app = createApp(App)
components.forEach(comp => app.component(comp.name, comp))
app.mount('#app')
