declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    itemHeight: {
        type: NumberConstructor;
        default: number;
    };
    remain: {
        type: NumberConstructor;
        default: number;
    };
    cache: {
        type: NumberConstructor;
        default: number;
    };
    data: {
        type: import('vue').PropType<any[]>;
        default: never[];
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    itemHeight: {
        type: NumberConstructor;
        default: number;
    };
    remain: {
        type: NumberConstructor;
        default: number;
    };
    cache: {
        type: NumberConstructor;
        default: number;
    };
    data: {
        type: import('vue').PropType<any[]>;
        default: never[];
    };
}>>, {
    data: any[];
    cache: number;
    itemHeight: number;
    remain: number;
}, {}>, {
    default?(_: {
        key: number;
        node: any;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
