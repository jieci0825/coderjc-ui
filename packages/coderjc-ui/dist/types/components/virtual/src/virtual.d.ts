import { PropType } from 'vue';

export declare const virtualProps: {
    itemHeight: {
        type: NumberConstructor;
        default: number;
    };
    remain: {
        type: NumberConstructor;
        default: number;
    };
    cache: {
        type: NumberConstructor;
        default: number;
    };
    data: {
        type: PropType<any[]>;
        default: never[];
    };
};
export type VirtualProps = Partial<typeof virtualProps>;
