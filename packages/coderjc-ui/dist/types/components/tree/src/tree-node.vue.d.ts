declare const _default: import('vue').DefineComponent<{
    readonly node: {
        readonly type: import('vue').PropType<import('../..').TreeNode>;
        readonly required: true;
    };
    readonly expanded: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly loadingKeys: {
        readonly type: import('vue').PropType<Set<import('../..').Key>>;
    };
    readonly selectedKeys: {
        readonly type: import('vue').PropType<import('../..').Key[]>;
        readonly default: () => never[];
    };
    readonly showCheckbox: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly indeterminateKeys: {
        readonly type: import('vue').PropType<Set<import('../..').Key>>;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    select: (node: import('../..').TreeNode) => void;
    toggleExpanded: (node: import('../..').TreeNode) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    readonly node: {
        readonly type: import('vue').PropType<import('../..').TreeNode>;
        readonly required: true;
    };
    readonly expanded: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly loadingKeys: {
        readonly type: import('vue').PropType<Set<import('../..').Key>>;
    };
    readonly selectedKeys: {
        readonly type: import('vue').PropType<import('../..').Key[]>;
        readonly default: () => never[];
    };
    readonly showCheckbox: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly indeterminateKeys: {
        readonly type: import('vue').PropType<Set<import('../..').Key>>;
    };
}>> & {
    onSelect?: ((node: import('../..').TreeNode) => any) | undefined;
    onToggleExpanded?: ((node: import('../..').TreeNode) => any) | undefined;
}, {
    readonly selectedKeys: import('../..').Key[];
    readonly showCheckbox: boolean;
    readonly expanded: boolean;
}, {}>;
export default _default;
