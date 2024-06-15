import { ExtractPropTypes } from 'vue';

export declare const emptyProps: {
    readonly image: {
        readonly type: StringConstructor;
    };
    readonly imageSize: {
        readonly type: NumberConstructor;
        readonly default: 280;
    };
    readonly description: {
        readonly type: StringConstructor;
        readonly default: "暂无数据";
    };
};
export declare const emptyEmits: {};
export type EmptyProps = ExtractPropTypes<typeof emptyProps>;
export type EmptyEmits = typeof emptyEmits;
