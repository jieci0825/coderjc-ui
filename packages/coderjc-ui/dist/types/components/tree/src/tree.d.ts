import { ExtractPropTypes, InjectionKey, PropType } from 'vue';
import { TreeOptions, Key, TreeNode, TreeContext } from './tree.type';

export declare const treeProps: {
    readonly data: {
        readonly type: PropType<TreeOptions[]>;
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
        readonly type: PropType<Key[]>;
        readonly default: () => never[];
    };
    readonly defaultExpandAll: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly defaultCheckedKeys: {
        readonly type: PropType<Key[]>;
        readonly default: () => never[];
    };
    readonly selectedKeys: {
        readonly type: PropType<Key[]>;
        readonly default: () => never[];
    };
    readonly load: {
        readonly type: PropType<(node: TreeOptions, resolve: Function, reject: Function) => any>;
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
};
export declare const treeEmits: {
    'update:selectedKeys': (keys: Key[]) => boolean;
    'node-click': (node: TreeOptions, evt: MouseEvent) => boolean;
};
export type TreeProps = Partial<ExtractPropTypes<typeof treeProps>>;
export type TreeEmits = typeof treeEmits;
export declare const treeNodeProps: {
    readonly node: {
        readonly type: PropType<TreeNode>;
        readonly required: true;
    };
    readonly expanded: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly loadingKeys: {
        readonly type: PropType<Set<Key>>;
    };
    readonly selectedKeys: {
        readonly type: PropType<Key[]>;
        readonly default: () => never[];
    };
    readonly showCheckbox: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly indeterminateKeys: {
        readonly type: PropType<Set<Key>>;
    };
};
export declare const treeNodeEmits: {
    toggleExpanded: (node: TreeNode) => boolean;
    select: (node: TreeNode) => boolean;
};
export type TreeNodeProps = ExtractPropTypes<typeof treeNodeProps>;
export type TreeNodeEmits = typeof treeNodeEmits;
export declare const treeInjectKey: InjectionKey<TreeContext>;
