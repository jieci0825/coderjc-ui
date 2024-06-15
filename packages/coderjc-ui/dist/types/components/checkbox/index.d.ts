export declare const CCheckbox: import('../../utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstance<Readonly<import('vue').ExtractPropTypes<{
        readonly modelValue: {
            readonly type: import('vue').PropType<string | number | boolean>;
        };
        readonly label: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly value: {
            readonly type: import('vue').PropType<string | number | boolean | object>;
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
            readonly type: import('vue').PropType<"default" | "small" | "large">;
            readonly default: "default";
        };
        readonly name: {
            readonly type: StringConstructor;
            readonly default: "";
        };
    }>> & {
        onChange?: ((value: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number | boolean) => any) | undefined;
    }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        change: (value: boolean) => void;
        "update:modelValue": (value: string | number | boolean) => void;
    }, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
        readonly modelValue: {
            readonly type: import('vue').PropType<string | number | boolean>;
        };
        readonly label: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly value: {
            readonly type: import('vue').PropType<string | number | boolean | object>;
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
            readonly type: import('vue').PropType<"default" | "small" | "large">;
            readonly default: "default";
        };
        readonly name: {
            readonly type: StringConstructor;
            readonly default: "";
        };
    }>> & {
        onChange?: ((value: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number | boolean) => any) | undefined;
    }, {
        readonly size: "default" | "small" | "large";
        readonly name: string;
        readonly label: string;
        readonly disabled: boolean;
        readonly indeterminate: boolean;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        readonly modelValue: {
            readonly type: import('vue').PropType<string | number | boolean>;
        };
        readonly label: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly value: {
            readonly type: import('vue').PropType<string | number | boolean | object>;
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
            readonly type: import('vue').PropType<"default" | "small" | "large">;
            readonly default: "default";
        };
        readonly name: {
            readonly type: StringConstructor;
            readonly default: "";
        };
    }>> & {
        onChange?: ((value: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number | boolean) => any) | undefined;
    }, {}, {}, {}, {}, {
        readonly size: "default" | "small" | "large";
        readonly name: string;
        readonly label: string;
        readonly disabled: boolean;
        readonly indeterminate: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import('vue').PropType<string | number | boolean>;
    };
    readonly label: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly value: {
        readonly type: import('vue').PropType<string | number | boolean | object>;
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
        readonly type: import('vue').PropType<"default" | "small" | "large">;
        readonly default: "default";
    };
    readonly name: {
        readonly type: StringConstructor;
        readonly default: "";
    };
}>> & {
    onChange?: ((value: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number | boolean) => any) | undefined;
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (value: boolean) => void;
    "update:modelValue": (value: string | number | boolean) => void;
}, string, {
    readonly size: "default" | "small" | "large";
    readonly name: string;
    readonly label: string;
    readonly disabled: boolean;
    readonly indeterminate: boolean;
}, {}, string, {}> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})>;
export default CCheckbox;
export declare const CCheckboxGroup: import('../../utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstance<Readonly<import('vue').ExtractPropTypes<{
        readonly modelValue: {
            readonly type: import('vue').PropType<string[] | number[]>;
            readonly default: readonly [];
        };
        readonly disabled: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
    }>> & {
        onChange?: ((value: string[] | number[]) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string[] | number[]) => any) | undefined;
    }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        change: (value: string[] | number[]) => void;
        "update:modelValue": (value: string[] | number[]) => void;
    }, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
        readonly modelValue: {
            readonly type: import('vue').PropType<string[] | number[]>;
            readonly default: readonly [];
        };
        readonly disabled: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
    }>> & {
        onChange?: ((value: string[] | number[]) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string[] | number[]) => any) | undefined;
    }, {
        readonly disabled: boolean;
        readonly modelValue: string[] | number[];
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        readonly modelValue: {
            readonly type: import('vue').PropType<string[] | number[]>;
            readonly default: readonly [];
        };
        readonly disabled: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
    }>> & {
        onChange?: ((value: string[] | number[]) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string[] | number[]) => any) | undefined;
    }, {}, {}, {}, {}, {
        readonly disabled: boolean;
        readonly modelValue: string[] | number[];
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import('vue').PropType<string[] | number[]>;
        readonly default: readonly [];
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>> & {
    onChange?: ((value: string[] | number[]) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string[] | number[]) => any) | undefined;
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (value: string[] | number[]) => void;
    "update:modelValue": (value: string[] | number[]) => void;
}, string, {
    readonly disabled: boolean;
    readonly modelValue: string[] | number[];
}, {}, string, {}> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})>;
export * from './src/checkbox';
export * from './src/checkbox-group';
declare module 'vue' {
    interface GlobalComponents {
        CCheckbox: typeof CCheckbox;
        CCheckboxGroup: typeof CCheckboxGroup;
    }
}
