import { ExtractPropTypes, InjectionKey, PropType } from 'vue'
import type { TreeOptions, Key, TreeNode, TreeContext } from './tree.type'

// props
export const treeProps = {
  /**
   * @description 展示数据
   */
  data: {
    type: Array as PropType<TreeOptions[]>,
    default: () => []
  },

  /**
   * @description 内容为空的时候展示的文本
   */
  emptyText: {
    type: String,
    default: '没有数据'
  },

  /**
   * @description 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的
   */
  nodeKey: {
    type: String
  },

  /**
   * @description 指定节点标签为节点对象的某个属性值
   */
  labelField: {
    type: String,
    default: 'label'
  },

  /**
   * @description 指定子树为节点对象的某个属性值
   */
  childrenField: {
    type: String,
    default: 'children'
  },

  /**
   * @description 默认需要展开的节点
   */
  defaultExpandedKeys: {
    type: Array as PropType<Key[]>,
    default: () => []
  },

  /**
   * @description 默认展开所有节点
   */
  defaultExpandAll: {
    type: Boolean,
    default: false
  },

  // TODO
  /**
   * @description 默认选中的节点
   */
  defaultCheckedKeys: {
    type: Array as PropType<Key[]>,
    default: () => []
  },

  /**
   * @description 当前选中的节点
   */
  selectedKeys: {
    type: Array as PropType<Key[]>,
    default: () => []
  },

  /**
   * @description 异步加载
   */
  load: {
    type: Function as PropType<
      (node: TreeOptions, resolve: Function, reject: Function) => any
    >
  },

  /**
   * @description 节点的高度
   */
  nodeHeight: {
    type: Number,
    default: 30
  },

  /**
   * @description 是否开启虚拟滚动
   */
  isVirtual: {
    type: Boolean,
    default: false
  },

  /**
   * @description 为了更好的渲染效果预先多多少条数据，需要开启虚拟滚动
   */
  cache: {
    type: Number,
    default: 8
  },

  /**
   * @description 节点是否可以被选择
   */
  showCheckbox: {
    type: Boolean,
    default: false
  }
} as const
export const treeEmits = {
  'update:selectedKeys': (keys: Key[]) => true
}

// props type
// - Partial 转为可选
export type TreeProps = Partial<ExtractPropTypes<typeof treeProps>>
export type TreeEmits = typeof treeEmits

export const treeNodeProps = {
  /**
   * @description 被加工后节点的内容
   */
  node: {
    type: Object as PropType<TreeNode>,
    required: true
  },

  /**
   * @description 是否是需要展开
   */
  expanded: {
    type: Boolean,
    default: false
  },

  /**
   * @description 当前正在加载中的key
   */
  loadingKeys: {
    type: Object as PropType<Set<Key>>
  },

  /**
   * @description 选中的节点keys
   */
  selectedKeys: {
    type: Array as PropType<Key[]>,
    default: () => []
  },

  /**
   * @description 节点是否可以被选择
   */
  showCheckbox: {
    type: Boolean,
    default: false
  },

  /**
   * @description 半选状态key集合
   */
  indeterminateKeys: {
    type: Object as PropType<Set<Key>>
  }
} as const

export const treeNodeEmits = {
  toggleExpanded: (node: TreeNode) => true,
  select: (node: TreeNode) => true
}

export type TreeNodeProps = ExtractPropTypes<typeof treeNodeProps>
export type TreeNodeEmits = typeof treeNodeEmits

// 基于此提供属性
export const treeInjectKey: InjectionKey<TreeContext> = Symbol('tree')
