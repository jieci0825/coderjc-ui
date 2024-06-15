import { Component, ExtractPropTypes, PropType } from 'vue';

export declare const iconProps: {
    readonly color: {
        readonly type: StringConstructor;
    };
    readonly size: {
        readonly type: PropType<string | number>;
    };
    readonly icon: {
        readonly type: PropType<Component>;
    };
};
export declare const iconEmits: {
    click: (e: MouseEvent) => boolean;
};
export type IconProps = ExtractPropTypes<typeof iconProps>;
export type IconEmits = typeof iconEmits;
