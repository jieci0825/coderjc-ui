import { ExtractPropTypes, PropType } from 'vue';
import { InputType, ResizeType, SizeType } from './input.type';

export declare const inputProps: {
    readonly modelValue: {
        readonly type: PropType<string | number>;
        readonly default: "";
    };
    readonly type: {
        readonly type: PropType<InputType>;
        readonly default: "text";
    };
    readonly size: {
        readonly type: PropType<SizeType>;
        readonly default: "";
    };
    readonly minlength: {
        readonly type: PropType<string | number>;
        readonly default: 0;
    };
    readonly maxlength: {
        readonly type: PropType<string | number>;
        readonly default: 10000;
    };
    readonly rows: {
        readonly type: PropType<string | number>;
        readonly default: 2;
    };
    readonly showWordLimit: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly clearable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly showPassword: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly autocomplete: {
        readonly type: StringConstructor;
        readonly default: "off";
    };
    readonly name: {
        readonly type: StringConstructor;
    };
    readonly readonly: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly step: {
        readonly type: PropType<string | number>;
    };
    readonly resize: {
        readonly type: PropType<ResizeType>;
        readonly default: "vertical";
    };
    readonly autosize: {
        readonly type: PropType<boolean | object>;
        readonly default: false;
    };
    readonly autofocus: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly form: {
        readonly type: StringConstructor;
    };
    readonly tabindex: {
        readonly type: PropType<string | number>;
        readonly default: -1;
    };
    readonly validateEvent: {};
    readonly inputStyle: {
        readonly type: PropType<string | object>;
    };
};
export declare const inputEmits: {
    'update:modelValue': (value: string) => boolean;
    input: (value: string) => boolean;
    change: (value: string) => boolean;
    focus: (evt: FocusEvent) => boolean;
    blur: (evt: FocusEvent) => boolean;
    clear: () => boolean;
    mouseleave: (evt: MouseEvent) => boolean;
    mouseenter: (evt: MouseEvent) => boolean;
    compositionstart: (evt: CompositionEvent) => boolean;
    compositionupdate: (evt: CompositionEvent) => boolean;
    compositionend: (evt: CompositionEvent) => boolean;
};
export type InputProps = ExtractPropTypes<typeof inputProps>;
export type InputEmits = typeof inputEmits;
