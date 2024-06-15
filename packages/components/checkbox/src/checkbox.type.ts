export type ValueType = boolean | string | number

export interface CheckboxGroupContext {
  checkedList: any
  onChange: (sate: boolean, value: any) => void
}
