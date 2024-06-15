import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    // 这里可以添加全局组件
    CButton: typeof import('../packages/coderjc-ui')['CButton']
    CCheckbox: typeof import('../packages/coderjc-ui')['CCheckbox']
    CCheckboxGroup: typeof import('../packages/coderjc-ui')['CCheckboxGroup']
    CEmpty: typeof import('../packages/coderjc-ui')['CEmpty']
    CForm: typeof import('../packages/coderjc-ui')['CForm']
    CFormItem: typeof import('../packages/coderjc-ui')['CFormItem']
    CIcon: typeof import('../packages/coderjc-ui')['CIcon']
    CInput: typeof import('../packages/coderjc-ui')['CInput']
    CTree: typeof import('../packages/coderjc-ui')['CTree']
    CVirtual: typeof import('../packages/coderjc-ui')['CVirtual']
  }

  interface ComponentCustomProperties {}
}

export {}
