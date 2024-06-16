import { SetupContext } from 'vue'

export type Key = string | number

export interface TreeOptions {
  label?: Key
  key?: Key
  children?: TreeOptions[]
  disabled?: boolean
  [key: string]: any
}

export interface TreeNode extends Required<TreeOptions> {
  parentNode: TreeNode | undefined // 该节点的父节点
  level: number // 层级
  isLeaf: boolean // 是否是叶子节点
  rawNode: TreeOptions // 源数据
  children: TreeNode[]
}

export interface TreeContext {
  slots: SetupContext['slots']
  // emit: SetupContext<TreeEmits>['emit']
}

export interface RootTreeType {
  _emits: any
}
