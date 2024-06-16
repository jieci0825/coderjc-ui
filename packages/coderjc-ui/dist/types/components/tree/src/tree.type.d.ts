import { SetupContext } from 'vue';

export type Key = string | number;
export interface TreeOptions {
    label?: Key;
    key?: Key;
    children?: TreeOptions[];
    disabled?: boolean;
    [key: string]: any;
}
export interface TreeNode extends Required<TreeOptions> {
    parentNode: TreeNode | undefined;
    level: number;
    isLeaf: boolean;
    rawNode: TreeOptions;
    children: TreeNode[];
}
export interface TreeContext {
    slots: SetupContext['slots'];
}
export interface RootTreeType {
    _emits: any;
}
