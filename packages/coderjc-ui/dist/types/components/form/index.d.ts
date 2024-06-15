import { default as Form } from './src/form.vue';
import { default as FormItem } from './src/form-item.vue';

export declare const CForm: import('../../utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstance<Readonly<import('vue').ExtractPropTypes<{
        readonly model: {
            readonly type: ObjectConstructor;
        };
        readonly rules: {
            readonly type: import('vue').PropType<Record<string, import('./src/types').Arrayable<import('./src/types').FormItemRule>>>;
        };
        readonly labelWidth: {
            readonly type: import('vue').PropType<string | number>;
        };
        readonly labelPosition: {
            readonly type: import('vue').PropType<import('./src/types').LabelPositionType>;
            readonly default: "right";
        };
        readonly showMessage: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly size: {
            readonly type: import('vue').PropType<import('./src/types').SizeType>;
            readonly default: "";
        };
    }>>, {
        fields: import('./src/types').FormItemContext[];
        validate: (callback?: import('./src/types').FormValidateCallback | undefined) => Promise<boolean>;
        validateField: (field: string, callback?: import('./src/types').FormValidateCallback | undefined) => Promise<boolean | void>;
        resetFields: (props?: import('./src/types').Arrayable<import('./src/form-item').FormItemProp> | undefined) => void;
        clearValidates: (props?: import('./src/types').Arrayable<import('./src/form-item').FormItemProp> | undefined) => void;
    }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
        readonly model: {
            readonly type: ObjectConstructor;
        };
        readonly rules: {
            readonly type: import('vue').PropType<Record<string, import('./src/types').Arrayable<import('./src/types').FormItemRule>>>;
        };
        readonly labelWidth: {
            readonly type: import('vue').PropType<string | number>;
        };
        readonly labelPosition: {
            readonly type: import('vue').PropType<import('./src/types').LabelPositionType>;
            readonly default: "right";
        };
        readonly showMessage: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly size: {
            readonly type: import('vue').PropType<import('./src/types').SizeType>;
            readonly default: "";
        };
    }>>, {
        readonly size: import('./src/types').SizeType;
        readonly labelPosition: import('./src/types').LabelPositionType;
        readonly showMessage: boolean;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        readonly model: {
            readonly type: ObjectConstructor;
        };
        readonly rules: {
            readonly type: import('vue').PropType<Record<string, import('./src/types').Arrayable<import('./src/types').FormItemRule>>>;
        };
        readonly labelWidth: {
            readonly type: import('vue').PropType<string | number>;
        };
        readonly labelPosition: {
            readonly type: import('vue').PropType<import('./src/types').LabelPositionType>;
            readonly default: "right";
        };
        readonly showMessage: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly size: {
            readonly type: import('vue').PropType<import('./src/types').SizeType>;
            readonly default: "";
        };
    }>>, {
        fields: import('./src/types').FormItemContext[];
        validate: (callback?: import('./src/types').FormValidateCallback | undefined) => Promise<boolean>;
        validateField: (field: string, callback?: import('./src/types').FormValidateCallback | undefined) => Promise<boolean | void>;
        resetFields: (props?: import('./src/types').Arrayable<import('./src/form-item').FormItemProp> | undefined) => void;
        clearValidates: (props?: import('./src/types').Arrayable<import('./src/form-item').FormItemProp> | undefined) => void;
    }, {}, {}, {}, {
        readonly size: import('./src/types').SizeType;
        readonly labelPosition: import('./src/types').LabelPositionType;
        readonly showMessage: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    readonly model: {
        readonly type: ObjectConstructor;
    };
    readonly rules: {
        readonly type: import('vue').PropType<Record<string, import('./src/types').Arrayable<import('./src/types').FormItemRule>>>;
    };
    readonly labelWidth: {
        readonly type: import('vue').PropType<string | number>;
    };
    readonly labelPosition: {
        readonly type: import('vue').PropType<import('./src/types').LabelPositionType>;
        readonly default: "right";
    };
    readonly showMessage: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly size: {
        readonly type: import('vue').PropType<import('./src/types').SizeType>;
        readonly default: "";
    };
}>>, {
    fields: import('./src/types').FormItemContext[];
    validate: (callback?: import('./src/types').FormValidateCallback | undefined) => Promise<boolean>;
    validateField: (field: string, callback?: import('./src/types').FormValidateCallback | undefined) => Promise<boolean | void>;
    resetFields: (props?: import('./src/types').Arrayable<import('./src/form-item').FormItemProp> | undefined) => void;
    clearValidates: (props?: import('./src/types').Arrayable<import('./src/form-item').FormItemProp> | undefined) => void;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    readonly size: import('./src/types').SizeType;
    readonly labelPosition: import('./src/types').LabelPositionType;
    readonly showMessage: boolean;
}, {}, string, {}> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})>;
export default CForm;
export declare const CFormItem: import('../../utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstance<Readonly<import('vue').ExtractPropTypes<{
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
            readonly type: import('vue').PropType<import('./src/types').SizeType>;
            readonly default: "";
        };
        readonly rules: {
            readonly type: import('vue').PropType<import('./src/types').Arrayable<import('./src/types').FormItemRule>>;
        };
        readonly showMessage: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
    }>>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
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
            readonly type: import('vue').PropType<import('./src/types').SizeType>;
            readonly default: "";
        };
        readonly rules: {
            readonly type: import('vue').PropType<import('./src/types').Arrayable<import('./src/types').FormItemRule>>;
        };
        readonly showMessage: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
    }>>, {
        readonly size: import('./src/types').SizeType;
        readonly label: string;
        readonly required: boolean;
        readonly showMessage: boolean;
        readonly prop: string;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
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
            readonly type: import('vue').PropType<import('./src/types').SizeType>;
            readonly default: "";
        };
        readonly rules: {
            readonly type: import('vue').PropType<import('./src/types').Arrayable<import('./src/types').FormItemRule>>;
        };
        readonly showMessage: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
    }>>, {}, {}, {}, {}, {
        readonly size: import('./src/types').SizeType;
        readonly label: string;
        readonly required: boolean;
        readonly showMessage: boolean;
        readonly prop: string;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
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
        readonly type: import('vue').PropType<import('./src/types').SizeType>;
        readonly default: "";
    };
    readonly rules: {
        readonly type: import('vue').PropType<import('./src/types').Arrayable<import('./src/types').FormItemRule>>;
    };
    readonly showMessage: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}>>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    readonly size: import('./src/types').SizeType;
    readonly label: string;
    readonly required: boolean;
    readonly showMessage: boolean;
    readonly prop: string;
}, {}, string, {}> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        label?(_: {}): any;
        default?(_: {}): any;
        error?(_: {
            error: string;
        }): any;
    };
})>;
export * from './src/form';
export * from './src/form-item';
declare module 'vue' {
    interface GlobalComponents {
        CForm: typeof CForm;
    }
}
export type FormInstance = InstanceType<typeof Form>;
export type FormItemInstance = InstanceType<typeof FormItem>;
