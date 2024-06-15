declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly image: {
        readonly type: StringConstructor;
    };
    readonly imageSize: {
        readonly type: NumberConstructor;
        readonly default: 280;
    };
    readonly description: {
        readonly type: StringConstructor;
        readonly default: "暂无数据";
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    readonly image: {
        readonly type: StringConstructor;
    };
    readonly imageSize: {
        readonly type: NumberConstructor;
        readonly default: 280;
    };
    readonly description: {
        readonly type: StringConstructor;
        readonly default: "暂无数据";
    };
}>>, {
    readonly imageSize: number;
    readonly description: string;
}, {}>, {
    image?(_: {}): any;
    description?(_: {}): any;
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
