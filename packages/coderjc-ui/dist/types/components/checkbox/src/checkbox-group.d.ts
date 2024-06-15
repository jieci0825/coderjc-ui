import { ExtractPropTypes, InjectionKey, PropType } from 'vue';
import { CheckboxGroupContext } from './checkbox.type';

export declare const checkboxGroupProps: {
    readonly modelValue: {
        readonly type: PropType<string[] | number[]>;
        readonly default: readonly [];
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
};
export declare const checkboxGroupEmits: {
    'update:modelValue': (value: Array<string> | Array<number>) => boolean;
    change: (value: Array<string> | Array<number>) => boolean;
};
export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>;
export type CheckboxGroupEmits = typeof checkboxGroupEmits;
export declare const provideCheckboxGroupKey: InjectionKey<CheckboxGroupContext>;
