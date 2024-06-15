declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly modelValue: {
        readonly type: import('vue').PropType<string[] | number[]>;
        readonly default: readonly [];
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (value: string[] | number[]) => void;
    "update:modelValue": (value: string[] | number[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import('vue').PropType<string[] | number[]>;
        readonly default: readonly [];
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>> & {
    onChange?: ((value: string[] | number[]) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string[] | number[]) => any) | undefined;
}, {
    readonly disabled: boolean;
    readonly modelValue: string[] | number[];
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
