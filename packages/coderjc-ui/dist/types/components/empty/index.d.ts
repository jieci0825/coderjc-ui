export declare const CEmpty: import('../../utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstance<Readonly<import('vue').ExtractPropTypes<{
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
    }>>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
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
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
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
    }>>, {}, {}, {}, {}, {
        readonly imageSize: number;
        readonly description: string;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
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
}>>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    readonly imageSize: number;
    readonly description: string;
}, {}, string, {}> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        image?(_: {}): any;
        description?(_: {}): any;
        default?(_: {}): any;
    };
})>;
export default CEmpty;
export * from './src/empty';

declare module 'vue' {
    interface GlobalComponents {
        CEmpty: typeof CEmpty;
    }
}
