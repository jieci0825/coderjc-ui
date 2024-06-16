import { SizeType } from './input.type';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly modelValue: {
        readonly type: import('vue').PropType<string | number>;
        readonly default: "";
    };
    readonly type: {
        readonly type: import('vue').PropType<import('./input.type').InputType>;
        readonly default: "text";
    };
    readonly size: {
        readonly type: import('vue').PropType<SizeType>;
        readonly default: "";
    };
    readonly minlength: {
        readonly type: import('vue').PropType<string | number>;
        readonly default: 0;
    };
    readonly maxlength: {
        readonly type: import('vue').PropType<string | number>;
        readonly default: 10000;
    };
    readonly rows: {
        readonly type: import('vue').PropType<string | number>;
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
        readonly type: import('vue').PropType<string | number>;
    };
    readonly resize: {
        readonly type: import('vue').PropType<import('./input.type').ResizeType>;
        readonly default: "vertical";
    };
    readonly autosize: {
        readonly type: import('vue').PropType<boolean | object>;
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
        readonly type: import('vue').PropType<string | number>;
        readonly default: 0;
    };
    readonly validateEvent: {};
    readonly inputStyle: {
        readonly type: import('vue').PropType<string | object>;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    clear: () => void;
    input: (value: string) => void;
    blur: (evt: FocusEvent) => void;
    change: (value: string) => void;
    compositionend: (evt: CompositionEvent) => void;
    compositionstart: (evt: CompositionEvent) => void;
    compositionupdate: (evt: CompositionEvent) => void;
    focus: (evt: FocusEvent) => void;
    mouseenter: (evt: MouseEvent) => void;
    mouseleave: (evt: MouseEvent) => void;
    "update:modelValue": (value: string) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import('vue').PropType<string | number>;
        readonly default: "";
    };
    readonly type: {
        readonly type: import('vue').PropType<import('./input.type').InputType>;
        readonly default: "text";
    };
    readonly size: {
        readonly type: import('vue').PropType<SizeType>;
        readonly default: "";
    };
    readonly minlength: {
        readonly type: import('vue').PropType<string | number>;
        readonly default: 0;
    };
    readonly maxlength: {
        readonly type: import('vue').PropType<string | number>;
        readonly default: 10000;
    };
    readonly rows: {
        readonly type: import('vue').PropType<string | number>;
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
        readonly type: import('vue').PropType<string | number>;
    };
    readonly resize: {
        readonly type: import('vue').PropType<import('./input.type').ResizeType>;
        readonly default: "vertical";
    };
    readonly autosize: {
        readonly type: import('vue').PropType<boolean | object>;
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
        readonly type: import('vue').PropType<string | number>;
        readonly default: 0;
    };
    readonly validateEvent: {};
    readonly inputStyle: {
        readonly type: import('vue').PropType<string | object>;
    };
}>> & {
    onCompositionend?: ((evt: CompositionEvent) => any) | undefined;
    onCompositionstart?: ((evt: CompositionEvent) => any) | undefined;
    onCompositionupdate?: ((evt: CompositionEvent) => any) | undefined;
    onFocus?: ((evt: FocusEvent) => any) | undefined;
    onBlur?: ((evt: FocusEvent) => any) | undefined;
    onChange?: ((value: string) => any) | undefined;
    onInput?: ((value: string) => any) | undefined;
    onMouseenter?: ((evt: MouseEvent) => any) | undefined;
    onMouseleave?: ((evt: MouseEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onClear?: (() => any) | undefined;
}, {
    readonly size: SizeType;
    readonly type: import('./input.type').InputType;
    readonly disabled: boolean;
    readonly resize: import('./input.type').ResizeType;
    readonly modelValue: string | number;
    readonly minlength: string | number;
    readonly maxlength: string | number;
    readonly rows: string | number;
    readonly showWordLimit: boolean;
    readonly placeholder: string;
    readonly clearable: boolean;
    readonly showPassword: boolean;
    readonly autocomplete: string;
    readonly readonly: boolean;
    readonly autosize: boolean | object;
    readonly autofocus: boolean;
    readonly tabindex: string | number;
}, {}>, {
    prepend?(_: {}): any;
    prefix?(_: {}): any;
    suffix?(_: {}): any;
    append?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
