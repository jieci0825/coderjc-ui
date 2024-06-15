declare const _default: import('vue').DefineComponent<{
    readonly node: {
        readonly type: import('vue').PropType<import('./tree.type').TreeNode>;
        readonly required: true;
    };
    readonly expanded: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly loadingKeys: {
        readonly type: import('vue').PropType<Set<import('./tree.type').Key>>;
    };
    readonly selectedKeys: {
        readonly type: import('vue').PropType<import('./tree.type').Key[]>;
        readonly default: () => never[];
    };
    readonly showCheckbox: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly indeterminateKeys: {
        readonly type: import('vue').PropType<Set<import('./tree.type').Key>>;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    select: (node: import('./tree.type').TreeNode) => void;
    toggleExpanded: (node: import('./tree.type').TreeNode) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    readonly node: {
        readonly type: import('vue').PropType<import('./tree.type').TreeNode>;
        readonly required: true;
    };
    readonly expanded: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly loadingKeys: {
        readonly type: import('vue').PropType<Set<import('./tree.type').Key>>;
    };
    readonly selectedKeys: {
        readonly type: import('vue').PropType<import('./tree.type').Key[]>;
        readonly default: () => never[];
    };
    readonly showCheckbox: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly indeterminateKeys: {
        readonly type: import('vue').PropType<Set<import('./tree.type').Key>>;
    };
}>> & {
    onSelect?: ((node: import('./tree.type').TreeNode) => any) | undefined;
    onToggleExpanded?: ((node: import('./tree.type').TreeNode) => any) | undefined;
}, {
    readonly selectedKeys: import('./tree.type').Key[];
    readonly showCheckbox: boolean;
    readonly expanded: boolean;
}, {}>;
export default _default;
