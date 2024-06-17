export declare const CVirtual: import('../../utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstance<Readonly<import('vue').ExtractPropTypes<{
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
    }>>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
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
        remain: number;
        itemHeight: number;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
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
    }>>, {}, {}, {}, {}, {
        data: any[];
        cache: number;
        remain: number;
        itemHeight: number;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
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
}>>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    data: any[];
    cache: number;
    remain: number;
    itemHeight: number;
}, {}, string, {}> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {
            key: number;
            node: any;
        }): any;
    };
})>;
export default CVirtual;
export * from './src/virtual';
declare module 'vue' {
    interface GlobalComponents {
        CVirtual: typeof CVirtual;
    }
}
