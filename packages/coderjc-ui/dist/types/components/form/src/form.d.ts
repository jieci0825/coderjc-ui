import { ExtractPropTypes, PropType } from 'vue';
import { Arrayable, FormItemRule, LabelPositionType, SizeType } from './types';

export declare const formProps: {
    readonly model: {
        readonly type: ObjectConstructor;
    };
    readonly rules: {
        readonly type: PropType<Record<string, Arrayable<FormItemRule>>>;
    };
    readonly labelWidth: {
        readonly type: PropType<string | number>;
    };
    readonly labelPosition: {
        readonly type: PropType<LabelPositionType>;
        readonly default: "right";
    };
    readonly showMessage: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly size: {
        readonly type: PropType<SizeType>;
        readonly default: "";
    };
};
export declare const formEmits: {};
export type FormProps = ExtractPropTypes<typeof formProps>;
