import { ExtractPropTypes, PropType } from 'vue';

export declare const checkboxProps: {
    readonly modelValue: {
        readonly type: PropType<string | number | boolean>;
    };
    readonly label: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly value: {
        readonly type: PropType<string | number | boolean | object>;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly indeterminate: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly size: {
        readonly type: PropType<"default" | "small" | "large">;
        readonly default: "default";
    };
    readonly name: {
        readonly type: StringConstructor;
        readonly default: "";
    };
};
export declare const checkboxEmits: {
    'update:modelValue': (value: boolean | string | number) => boolean;
    change: (value: boolean) => boolean;
};
export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;
export type CheckboxEmits = typeof checkboxEmits;
