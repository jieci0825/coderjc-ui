declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly color: {
        readonly type: StringConstructor;
    };
    readonly size: {
        readonly type: import('vue').PropType<string | number>;
    };
    readonly icon: {
        readonly type: import('vue').PropType<import('vue').Component>;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (e: MouseEvent) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    readonly color: {
        readonly type: StringConstructor;
    };
    readonly size: {
        readonly type: import('vue').PropType<string | number>;
    };
    readonly icon: {
        readonly type: import('vue').PropType<import('vue').Component>;
    };
}>> & {
    onClick?: ((e: MouseEvent) => any) | undefined;
}, {}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
