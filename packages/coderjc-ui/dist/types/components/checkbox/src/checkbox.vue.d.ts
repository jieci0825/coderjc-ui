declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly modelValue: {
        readonly type: import('vue').PropType<string | number | boolean>;
    };
    readonly label: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly value: {
        readonly type: import('vue').PropType<string | number | boolean | object>;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly indeterminate: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly size: {
        readonly type: import('vue').PropType<"large" | "default" | "small">;
        readonly default: "default";
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (value: boolean) => void;
    "update:modelValue": (value: string | number | boolean) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import('vue').PropType<string | number | boolean>;
    };
    readonly label: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly value: {
        readonly type: import('vue').PropType<string | number | boolean | object>;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly indeterminate: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly size: {
        readonly type: import('vue').PropType<"large" | "default" | "small">;
        readonly default: "default";
    };
}>> & {
    onChange?: ((value: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number | boolean) => any) | undefined;
}, {
    readonly size: "large" | "default" | "small";
    readonly label: string;
    readonly disabled: boolean;
    readonly indeterminate: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
