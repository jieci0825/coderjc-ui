export declare const CTree: import('../../utils').SFCWithInstall<import('vue').DefineComponent<{
    readonly data: {
        readonly type: import('vue').PropType<import('./src/tree.type').TreeOptions[]>;
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
        readonly type: import('vue').PropType<import('./src/tree.type').Key[]>;
        readonly default: () => never[];
    };
    readonly defaultExpandAll: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly defaultCheckedKeys: {
        readonly type: import('vue').PropType<import('./src/tree.type').Key[]>;
        readonly default: () => never[];
    };
    readonly selectedKeys: {
        readonly type: import('vue').PropType<import('./src/tree.type').Key[]>;
        readonly default: () => never[];
    };
    readonly load: {
        readonly type: import('vue').PropType<(node: import('./src/tree.type').TreeOptions, resolve: Function, reject: Function) => any>;
    };
    readonly nodeHeight: {
        readonly type: NumberConstructor;
        readonly default: 30;
    };
    readonly isVirtual: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly cache: {
        readonly type: NumberConstructor;
        readonly default: 8;
    };
    readonly showCheckbox: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}, {
    flatenTree: import('vue').ComputedRef<import('./src/tree.type').TreeNode[]>;
    getCurrentKeyRawNode: (key: import('./src/tree.type').Key, isRaw?: boolean) => import('./src/tree.type').TreeOptions | import('./src/tree.type').TreeNode | undefined;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:selectedKeys": (keys: import('./src/tree.type').Key[]) => void;
    "node-click": (node: import('./src/tree.type').TreeOptions, evt: MouseEvent) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    readonly data: {
        readonly type: import('vue').PropType<import('./src/tree.type').TreeOptions[]>;
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
        readonly type: import('vue').PropType<import('./src/tree.type').Key[]>;
        readonly default: () => never[];
    };
    readonly defaultExpandAll: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly defaultCheckedKeys: {
        readonly type: import('vue').PropType<import('./src/tree.type').Key[]>;
        readonly default: () => never[];
    };
    readonly selectedKeys: {
        readonly type: import('vue').PropType<import('./src/tree.type').Key[]>;
        readonly default: () => never[];
    };
    readonly load: {
        readonly type: import('vue').PropType<(node: import('./src/tree.type').TreeOptions, resolve: Function, reject: Function) => any>;
    };
    readonly nodeHeight: {
        readonly type: NumberConstructor;
        readonly default: 30;
    };
    readonly isVirtual: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly cache: {
        readonly type: NumberConstructor;
        readonly default: 8;
    };
    readonly showCheckbox: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>> & {
    "onUpdate:selectedKeys"?: ((keys: import('./src/tree.type').Key[]) => any) | undefined;
    "onNode-click"?: ((node: import('./src/tree.type').TreeOptions, evt: MouseEvent) => any) | undefined;
}, {
    readonly data: import('./src/tree.type').TreeOptions[];
    readonly emptyText: string;
    readonly labelField: string;
    readonly childrenField: string;
    readonly defaultExpandedKeys: import('./src/tree.type').Key[];
    readonly defaultExpandAll: boolean;
    readonly defaultCheckedKeys: import('./src/tree.type').Key[];
    readonly selectedKeys: import('./src/tree.type').Key[];
    readonly nodeHeight: number;
    readonly isVirtual: boolean;
    readonly cache: number;
    readonly showCheckbox: boolean;
}, {}>>;
export default CTree;
export * from './src/tree';
export * from './src/constans';
export * from './src/tree.type';
declare module 'vue' {
    interface GlobalComponents {
        CTree: typeof CTree;
    }
}
