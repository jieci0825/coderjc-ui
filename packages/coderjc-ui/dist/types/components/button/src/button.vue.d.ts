declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly type: {
        readonly type: import('vue').PropType<import('./button.type').Type>;
        readonly default: "";
    };
    readonly size: {
        readonly type: import('vue').PropType<import('./button.type').Size>;
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
        readonly type: import('vue').PropType<import('./button.type').Placement>;
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
        readonly type: import('vue').PropType<import('./button.type').NativeType>;
        readonly default: "button";
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (evt: MouseEvent) => void;
    dbclick: (evt: MouseEvent) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    readonly type: {
        readonly type: import('vue').PropType<import('./button.type').Type>;
        readonly default: "";
    };
    readonly size: {
        readonly type: import('vue').PropType<import('./button.type').Size>;
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
        readonly type: import('vue').PropType<import('./button.type').Placement>;
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
        readonly type: import('vue').PropType<import('./button.type').NativeType>;
        readonly default: "button";
    };
}>> & {
    onClick?: ((evt: MouseEvent) => any) | undefined;
    onDbclick?: ((evt: MouseEvent) => any) | undefined;
}, {
    readonly type: import('./button.type').Type;
    readonly circle: boolean;
    readonly disabled: boolean;
    readonly plain: boolean;
    readonly round: boolean;
    readonly iconPlacement: import('./button.type').Placement;
    readonly loading: boolean;
    readonly loadingText: string;
    readonly nativeType: import('./button.type').NativeType;
}, {}>, {
    icon?(_: {}): any;
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
