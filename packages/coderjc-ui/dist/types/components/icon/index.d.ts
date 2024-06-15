export declare const CIcon: import('../../utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstance<Readonly<import('vue').ExtractPropTypes<{
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
    }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        click: (e: MouseEvent) => void;
    }, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
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
    }, {}, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
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
    }, {}, {}, {}, {}, {}>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
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
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (e: MouseEvent) => void;
}, string, {}, {}, string, {}> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})>;
export default CIcon;
export * from './src/icon';
declare module 'vue' {
    interface GlobalComponents {
        CIcon: typeof CIcon;
    }
}
