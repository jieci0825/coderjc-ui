import { FormItemRule, Arrayable, SizeType } from './types';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly label: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly prop: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly required: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly size: {
        readonly type: import('vue').PropType<SizeType>;
        readonly default: "";
    };
    readonly rules: {
        readonly type: import('vue').PropType<Arrayable<FormItemRule>>;
    };
    readonly showMessage: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    readonly label: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly prop: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly required: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly size: {
        readonly type: import('vue').PropType<SizeType>;
        readonly default: "";
    };
    readonly rules: {
        readonly type: import('vue').PropType<Arrayable<FormItemRule>>;
    };
    readonly showMessage: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}>>, {
    readonly size: SizeType;
    readonly label: string;
    readonly required: boolean;
    readonly showMessage: boolean;
    readonly prop: string;
}, {}>, {
    label?(_: {}): any;
    default?(_: {}): any;
    error?(_: {
        error: string;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
