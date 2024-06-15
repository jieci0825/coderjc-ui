import { FormItemContext, FormValidateCallback } from './types';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly model: {
        readonly type: ObjectConstructor;
    };
    readonly rules: {
        readonly type: import('vue').PropType<Record<string, import('./types').Arrayable<import('./types').FormItemRule>>>;
    };
    readonly labelWidth: {
        readonly type: import('vue').PropType<string | number>;
    };
    readonly labelPosition: {
        readonly type: import('vue').PropType<import('./types').LabelPositionType>;
        readonly default: "right";
    };
    readonly showMessage: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly size: {
        readonly type: import('vue').PropType<import('./types').SizeType>;
        readonly default: "";
    };
}, {
    fields: FormItemContext[];
    validate: (callback?: FormValidateCallback | undefined) => Promise<boolean>;
    validateField: (field: string, callback?: FormValidateCallback | undefined) => Promise<boolean | void>;
    resetFields: (props?: import('./types').Arrayable<import('../../../coderjc-ui').FormItemProp> | undefined) => void;
    clearValidates: (props?: import('./types').Arrayable<import('../../../coderjc-ui').FormItemProp> | undefined) => void;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    readonly model: {
        readonly type: ObjectConstructor;
    };
    readonly rules: {
        readonly type: import('vue').PropType<Record<string, import('./types').Arrayable<import('./types').FormItemRule>>>;
    };
    readonly labelWidth: {
        readonly type: import('vue').PropType<string | number>;
    };
    readonly labelPosition: {
        readonly type: import('vue').PropType<import('./types').LabelPositionType>;
        readonly default: "right";
    };
    readonly showMessage: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly size: {
        readonly type: import('vue').PropType<import('./types').SizeType>;
        readonly default: "";
    };
}>>, {
    readonly size: import('./types').SizeType;
    readonly labelPosition: import('./types').LabelPositionType;
    readonly showMessage: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
