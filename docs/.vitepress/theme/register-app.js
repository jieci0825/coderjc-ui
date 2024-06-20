import {
  CIcon,
  CTree,
  CButton,
  CButtonGroup,
  CCheckbox,
  CCheckboxGroup,
  CVirtual,
  CInput,
  CForm,
  CFormItem,
  CEmpty,
  CCollapse,
  CCollapseItem
} from '@coderjc-ui/components'
import { ElementPlusContainer } from '@vitepress-demo-preview/component'

const components = [
  CIcon,
  CTree,
  CButton,
  CButtonGroup,
  CCheckbox,
  CCheckboxGroup,
  CVirtual,
  CInput,
  CForm,
  CFormItem,
  CEmpty,
  CCollapse,
  CCollapseItem
]

export default function (app) {
  components.forEach(comp => app.component(comp.name, comp))
  app.component('demo-preview', ElementPlusContainer)
}
