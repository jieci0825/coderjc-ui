import { Key, TreeNode, TreeOptions } from './tree.type';

declare function getCurrentKeyRawNode(key: Key): TreeOptions | undefined;
declare const _default: import('vue').DefineComponent<{
    readonly data: {
        readonly type: import('vue').PropType<TreeOptions[]>;
        readonly default: () => never[];
    };
    readonly emptyText: {
        readonly type: StringConstructor;
        readonly default: "没有数据...";
    };
    readonly nodeKey: {
        readonly type: StringConstructor;
    };
    readonly labelField: {
        readonly type: StringConstructor;
        readonly default: "label";
    };
    readonly childrenField: {
        readonly type: StringConstructor;
        readonly default: "children";
    };
    readonly defaultExpandedKeys: {
        readonly type: import('vue').PropType<Key[]>;
        readonly default: () => never[];
    };
    readonly defaultExpandAll: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly defaultCheckedKeys: {
        readonly type: import('vue').PropType<Key[]>;
        readonly default: () => never[];
    };
    readonly selectedKeys: {
        readonly type: import('vue').PropType<Key[]>;
        readonly default: () => never[];
    };
    readonly load: {
        readonly type: import('vue').PropType<(node: TreeOptions, resolve: Function, reject: Function) => any>;
    };
    readonly nodeHeight: {
        readonly type: NumberConstructor;
        readonly default: 30;
    };
    readonly virtual: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly cache: {
        readonly type: NumberConstructor;
    };
    readonly remain: {
        readonly type: NumberConstructor;
        readonly default: 8;
    };
    readonly showCheckbox: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}, {
    flatenTree: import('vue').ComputedRef<TreeNode[]>;
    getCurrentKeyRawNode: typeof getCurrentKeyRawNode;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:selectedKeys": (keys: Key[]) => void;
    "node-click": (node: TreeOptions, evt: MouseEvent) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    readonly data: {
        readonly type: import('vue').PropType<TreeOptions[]>;
        readonly default: () => never[];
    };
    readonly emptyText: {
        readonly type: StringConstructor;
        readonly default: "没有数据...";
    };
    readonly nodeKey: {
        readonly type: StringConstructor;
    };
    readonly labelField: {
        readonly type: StringConstructor;
        readonly default: "label";
    };
    readonly childrenField: {
        readonly type: StringConstructor;
        readonly default: "children";
    };
    readonly defaultExpandedKeys: {
        readonly type: import('vue').PropType<Key[]>;
        readonly default: () => never[];
    };
    readonly defaultExpandAll: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly defaultCheckedKeys: {
        readonly type: import('vue').PropType<Key[]>;
        readonly default: () => never[];
    };
    readonly selectedKeys: {
        readonly type: import('vue').PropType<Key[]>;
        readonly default: () => never[];
    };
    readonly load: {
        readonly type: import('vue').PropType<(node: TreeOptions, resolve: Function, reject: Function) => any>;
    };
    readonly nodeHeight: {
        readonly type: NumberConstructor;
        readonly default: 30;
    };
    readonly virtual: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly cache: {
        readonly type: NumberConstructor;
    };
    readonly remain: {
        readonly type: NumberConstructor;
        readonly default: 8;
    };
    readonly showCheckbox: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>> & {
    "onUpdate:selectedKeys"?: ((keys: Key[]) => any) | undefined;
    "onNode-click"?: ((node: TreeOptions, evt: MouseEvent) => any) | undefined;
}, {
    readonly data: TreeOptions[];
    readonly emptyText: string;
    readonly labelField: string;
    readonly childrenField: string;
    readonly defaultExpandedKeys: Key[];
    readonly defaultExpandAll: boolean;
    readonly defaultCheckedKeys: Key[];
    readonly selectedKeys: Key[];
    readonly nodeHeight: number;
    readonly virtual: boolean;
    readonly remain: number;
    readonly showCheckbox: boolean;
}, {}>;
export default _default;
