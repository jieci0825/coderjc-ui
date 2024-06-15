import { ExtractPropTypes, PropType } from 'vue';
import { Arrayable, FormItemRule, SizeType } from './types';

export type FormItemProp = Arrayable<string>;
export declare const formItemProps: {
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
        readonly type: PropType<SizeType>;
        readonly default: "";
    };
    readonly rules: {
        readonly type: PropType<Arrayable<FormItemRule>>;
    };
    readonly showMessage: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
};
export declare const formItemEmits: {};
export type FormItemProps = ExtractPropTypes<typeof formItemProps>;
