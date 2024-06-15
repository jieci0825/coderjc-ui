import { PropType, ExtractPropTypes, Component } from 'vue';
import { NativeType, Placement, Size, Type } from './button.type';

export declare const buttonProps: {
    readonly type: {
        readonly type: PropType<Type>;
        readonly default: "";
    };
    readonly size: {
        readonly type: PropType<Size>;
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
        readonly type: PropType<Component>;
    };
    readonly iconPlacement: {
        readonly type: PropType<Placement>;
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
        readonly type: PropType<NativeType>;
        readonly default: "button";
    };
};
export declare const buttonEmits: {
    click: (evt: MouseEvent) => boolean;
    dbclick: (evt: MouseEvent) => boolean;
};
export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
export type ButtonEmits = typeof buttonEmits;
