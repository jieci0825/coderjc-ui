import { InjectionKey } from 'vue';
import { RuleItem, ValidateError, ValidateFieldsError } from 'async-validator';
import { FormItemProps, FormItemProp } from './form-item';
import { FormProps } from './form';

export type SizeType = 'large' | 'default' | 'small' | '';
export type LabelPositionType = 'left' | 'right' | 'top';
export type FormItemValidateStateType = '' | 'success' | 'error';
export type TriggerType = '' | 'blur' | 'change';
export type Arrayable<T> = T | T[];
export interface FormItemRule extends RuleItem {
    trigger?: Arrayable<TriggerType>;
}
export type FormDataRules<T> = {
    [K in keyof T]: FormItemRule | FormItemRule[];
};
export interface FormValidateFailure {
    errors: ValidateError[] | null;
    fields: ValidateFieldsError;
}
export type FormValidateCallback = (isValid: boolean, invalidFields?: ValidateFieldsError) => Promise<void> | void;
export interface FormItemContext extends FormItemProps {
    resetField(): void;
    clearValidate(): void;
    validate: (trigger: TriggerType, callback?: FormValidateCallback) => Promise<any>;
}
export declare const FormItemContextKey: InjectionKey<FormItemContext>;
export interface FormContext extends FormProps {
    addField: (field: FormItemContext) => void;
    getField: (prop: string) => FormItemContext | undefined;
    removeField: (field: FormItemContext) => void;
    resetFields: (props?: Arrayable<FormItemProp>) => void;
    clearValidates: (props?: Arrayable<FormItemProp>) => void;
}
export declare const FormContextKey: InjectionKey<FormContext>;
