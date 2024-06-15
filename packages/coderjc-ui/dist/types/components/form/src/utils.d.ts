import { FormItemContext, FormItemRule, LabelPositionType } from './types';

export declare function toJustifyContentProp(position: LabelPositionType): "flex-start" | "flex-end" | undefined;
export declare function filterFields(fields: FormItemContext[], formItemFields: string[]): FormItemContext[];
export declare function isExistRequiredRule(rules: FormItemRule[]): boolean;
