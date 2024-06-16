export declare const CButton: import('../../utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstance<Readonly<import('vue').ExtractPropTypes<{
        readonly type: {
            readonly type: import('vue').PropType<import('./src/button.type').Type>;
            readonly default: "";
        };
        readonly size: {
            readonly type: import('vue').PropType<import('./src/button.type').SizeType>;
        };
        readonly plain: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly round: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly circle: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly icon: {
            readonly type: import('vue').PropType<import('vue').Component>;
        };
        readonly iconPlacement: {
            readonly type: import('vue').PropType<import('./src/button.type').Placement>;
            readonly default: "left";
        };
        readonly disabled: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly loading: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly loadingText: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly nativeType: {
            readonly type: import('vue').PropType<import('./src/button.type').NativeType>;
            readonly default: "button";
        };
    }>> & {
        onClick?: ((evt: MouseEvent) => any) | undefined;
    }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        click: (evt: MouseEvent) => void;
    }, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
        readonly type: {
            readonly type: import('vue').PropType<import('./src/button.type').Type>;
            readonly default: "";
        };
        readonly size: {
            readonly type: import('vue').PropType<import('./src/button.type').SizeType>;
        };
        readonly plain: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly round: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly circle: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly icon: {
            readonly type: import('vue').PropType<import('vue').Component>;
        };
        readonly iconPlacement: {
            readonly type: import('vue').PropType<import('./src/button.type').Placement>;
            readonly default: "left";
        };
        readonly disabled: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly loading: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly loadingText: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly nativeType: {
            readonly type: import('vue').PropType<import('./src/button.type').NativeType>;
            readonly default: "button";
        };
    }>> & {
        onClick?: ((evt: MouseEvent) => any) | undefined;
    }, {
        readonly type: import('./src/button.type').Type;
        readonly circle: boolean;
        readonly disabled: boolean;
        readonly plain: boolean;
        readonly round: boolean;
        readonly iconPlacement: import('./src/button.type').Placement;
        readonly loading: boolean;
        readonly loadingText: string;
        readonly nativeType: import('./src/button.type').NativeType;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        readonly type: {
            readonly type: import('vue').PropType<import('./src/button.type').Type>;
            readonly default: "";
        };
        readonly size: {
            readonly type: import('vue').PropType<import('./src/button.type').SizeType>;
        };
        readonly plain: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly round: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly circle: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly icon: {
            readonly type: import('vue').PropType<import('vue').Component>;
        };
        readonly iconPlacement: {
            readonly type: import('vue').PropType<import('./src/button.type').Placement>;
            readonly default: "left";
        };
        readonly disabled: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly loading: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly loadingText: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly nativeType: {
            readonly type: import('vue').PropType<import('./src/button.type').NativeType>;
            readonly default: "button";
        };
    }>> & {
        onClick?: ((evt: MouseEvent) => any) | undefined;
    }, {}, {}, {}, {}, {
        readonly type: import('./src/button.type').Type;
        readonly circle: boolean;
        readonly disabled: boolean;
        readonly plain: boolean;
        readonly round: boolean;
        readonly iconPlacement: import('./src/button.type').Placement;
        readonly loading: boolean;
        readonly loadingText: string;
        readonly nativeType: import('./src/button.type').NativeType;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    readonly type: {
        readonly type: import('vue').PropType<import('./src/button.type').Type>;
        readonly default: "";
    };
    readonly size: {
        readonly type: import('vue').PropType<import('./src/button.type').SizeType>;
    };
    readonly plain: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly circle: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly icon: {
        readonly type: import('vue').PropType<import('vue').Component>;
    };
    readonly iconPlacement: {
        readonly type: import('vue').PropType<import('./src/button.type').Placement>;
        readonly default: "left";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly loading: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly loadingText: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly nativeType: {
        readonly type: import('vue').PropType<import('./src/button.type').NativeType>;
        readonly default: "button";
    };
}>> & {
    onClick?: ((evt: MouseEvent) => any) | undefined;
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (evt: MouseEvent) => void;
}, string, {
    readonly type: import('./src/button.type').Type;
    readonly circle: boolean;
    readonly disabled: boolean;
    readonly plain: boolean;
    readonly round: boolean;
    readonly iconPlacement: import('./src/button.type').Placement;
    readonly loading: boolean;
    readonly loadingText: string;
    readonly nativeType: import('./src/button.type').NativeType;
}, {}, string, {}> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        icon?(_: {}): any;
        default?(_: {}): any;
    };
})>;
export default CButton;
export declare const CButtonGroup: import('../../utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstance<Readonly<import('vue').ExtractPropTypes<{
        type: {
            type: import('vue').PropType<import('./src/button.type').Type>;
            default: string;
        };
        size: {
            type: import('vue').PropType<import('./src/button.type').SizeType>;
            default: string;
        };
    }>>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
        type: {
            type: import('vue').PropType<import('./src/button.type').Type>;
            default: string;
        };
        size: {
            type: import('vue').PropType<import('./src/button.type').SizeType>;
            default: string;
        };
    }>>, {
        size: import('./src/button.type').SizeType;
        type: import('./src/button.type').Type;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        type: {
            type: import('vue').PropType<import('./src/button.type').Type>;
            default: string;
        };
        size: {
            type: import('vue').PropType<import('./src/button.type').SizeType>;
            default: string;
        };
    }>>, {}, {}, {}, {}, {
        size: import('./src/button.type').SizeType;
        type: import('./src/button.type').Type;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    type: {
        type: import('vue').PropType<import('./src/button.type').Type>;
        default: string;
    };
    size: {
        type: import('vue').PropType<import('./src/button.type').SizeType>;
        default: string;
    };
}>>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    size: import('./src/button.type').SizeType;
    type: import('./src/button.type').Type;
}, {}, string, {}> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})>;
export * from './src/button';
export * from './src/button-group';
declare module 'vue' {
    interface GlobalComponents {
        CButton: typeof CButton;
        CButtonGroup: typeof CButtonGroup;
    }
}
