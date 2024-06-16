export type ValueType = boolean | string | number;
export type SizeType = 'small' | 'default' | 'large' | '';
export interface CheckboxGroupContext {
    checkedList: any;
    onChange: (sate: boolean, value: any) => void;
}
