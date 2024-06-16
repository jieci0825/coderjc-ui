export declare const CInput: import('../../utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstance<Readonly<import('vue').ExtractPropTypes<{
        readonly modelValue: {
            readonly type: import('vue').PropType<string | number>;
            readonly default: "";
        };
        readonly type: {
            readonly type: import('vue').PropType<import('./src/input.type').InputType>;
            readonly default: "text";
        };
        readonly size: {
            readonly type: import('vue').PropType<import('./src/input.type').SizeType>;
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
            readonly type: import('vue').PropType<import('./src/input.type').ResizeType>;
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
    }, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
        readonly modelValue: {
            readonly type: import('vue').PropType<string | number>;
            readonly default: "";
        };
        readonly type: {
            readonly type: import('vue').PropType<import('./src/input.type').InputType>;
            readonly default: "text";
        };
        readonly size: {
            readonly type: import('vue').PropType<import('./src/input.type').SizeType>;
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
            readonly type: import('vue').PropType<import('./src/input.type').ResizeType>;
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
        readonly size: import('./src/input.type').SizeType;
        readonly type: import('./src/input.type').InputType;
        readonly disabled: boolean;
        readonly resize: import('./src/input.type').ResizeType;
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
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        readonly modelValue: {
            readonly type: import('vue').PropType<string | number>;
            readonly default: "";
        };
        readonly type: {
            readonly type: import('vue').PropType<import('./src/input.type').InputType>;
            readonly default: "text";
        };
        readonly size: {
            readonly type: import('vue').PropType<import('./src/input.type').SizeType>;
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
            readonly type: import('vue').PropType<import('./src/input.type').ResizeType>;
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
    }, {}, {}, {}, {}, {
        readonly size: import('./src/input.type').SizeType;
        readonly type: import('./src/input.type').InputType;
        readonly disabled: boolean;
        readonly resize: import('./src/input.type').ResizeType;
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
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import('vue').PropType<string | number>;
        readonly default: "";
    };
    readonly type: {
        readonly type: import('vue').PropType<import('./src/input.type').InputType>;
        readonly default: "text";
    };
    readonly size: {
        readonly type: import('vue').PropType<import('./src/input.type').SizeType>;
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
        readonly type: import('vue').PropType<import('./src/input.type').ResizeType>;
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
}, string, {
    readonly size: import('./src/input.type').SizeType;
    readonly type: import('./src/input.type').InputType;
    readonly disabled: boolean;
    readonly resize: import('./src/input.type').ResizeType;
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
}, {}, string, {}> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        prepend?(_: {}): any;
        prefix?(_: {}): any;
        suffix?(_: {}): any;
        append?(_: {}): any;
    };
})>;
export default CInput;
export * from './src/input';
declare module 'vue' {
    interface GlobalComponents {
        CInput: typeof CInput;
    }
}
