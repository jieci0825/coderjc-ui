<script setup lang="ts">
import { computed, provide, ref, useAttrs, useSlots, watch } from 'vue'
import { treeEmits, treeInjectKey, treeProps } from './tree'
import { Key, TreeNode, TreeOptions } from './tree.type'
import { createNamespace } from '@coderjc-ui/utils'
import CTreeNode from './tree-node.vue'
import CVirtual from '@coderjc-ui/components/virtual'
import { RootTreeKey } from './constans'

const bem = createNamespace('tree')
defineOptions({ name: 'c-tree' })

const props = defineProps(treeProps)
const emits = defineEmits(treeEmits)

// 存储格式化后的节点
const tree = ref<TreeNode[]>([])
// 对传入的 data 根据配置的 lebel、key、children 字段进行格式化
const formatTreeData = (list: TreeOptions[], parent?: TreeNode) => {
  return list.map(item => {
    const node: TreeNode = {
      label: item[props.labelField],
      level: parent ? parent.level + 1 : 0,
      key: props.nodeKey ? item[props.nodeKey] : item[props.labelField],
      rawNode: item,
      disabled: !!item.disabled,
      children: [],
      isLeaf: item.isLeaf ?? true, // 默认为叶子节点
      parentNode: parent
    }

    // 当children存在数据时，就不是叶子节点且递归处理它的子节点
    const child = item[props.childrenField]
    if (child && child.length) {
      node.isLeaf = false
      node.children = formatTreeData(child, node)
    }

    return node
  })
}
watch(
  () => props.data,
  value => {
    tree.value = formatTreeData(value)
  },
  {
    deep: true,
    immediate: true
  }
)

// 需要展示的节点
const expandedKeysSetRef = ref(new Set(props.defaultExpandedKeys))

// 将树形结构打平
const flatenTree = computed(() => {
  // 需要展开的节点
  const expandedKeys = expandedKeysSetRef.value
  // 最终根据需要展开的结果返回的拍平数组
  const flatenNodes: TreeNode[] = []
  // 被格式化后的data
  const treeData = tree.value || []
  // 进行遍历的栈
  const stack: TreeNode[] = []

  // 因为栈的特点，先进后出，所以进行向后遍历
  //  - 保证可以在 stack 结构遍历的时候，保持源数据所保持的排列顺序
  for (let i = treeData.length; i >= 0; i--) {
    stack.push(treeData[i])
  }

  while (stack.length) {
    const node = stack.pop()
    // 节点不存在则退出
    if (!node) continue
    // 然后将取出的节点加入到最终拍平数组中
    flatenNodes.push(node)
    // 判断是否需要展开
    //  - 如果是需要展开的，则将其子节点放入栈中，等待下一次循环取出
    //  - 如果不需要展开则不做处理
    if (expandedKeys.has(node.key)) {
      if (node.children) {
        // 因为栈的特点，先进后出
        // 为了同样保证当前这个节点的第一个子节点先被取出，所以这里需要从后往前遍历
        for (let i = node.children.length; i >= 0; i--) {
          stack.push(node.children[i])
        }
      }
    }
  }
  return flatenNodes
})

// 是否需要展开
const isExpanded = (node: TreeNode): boolean => {
  return !!expandedKeysSetRef.value.has(node.key)
}
// 折叠功能
const collpase = (node: TreeNode) => {
  expandedKeysSetRef.value.delete(node.key)
}
// 展开
const expand = (node: TreeNode) => {
  expandedKeysSetRef.value.add(node.key)

  // 展示时，触发异步加载方法
  triggerLoad(node)
}
// 切换
const toggleExpanded = (node: TreeNode) => {
  const expandKeys = expandedKeysSetRef.value
  // 当前节点是展开状态且不在加载列表时才收起
  if (expandKeys.has(node.key) && !loadingKeysRef.value.has(node.key)) {
    collpase(node)
  } else {
    expand(node)
  }
}

// 异步加载keys
const loadingKeysRef = ref(new Set<Key>())
// 触发加载
async function triggerLoad(node: TreeNode) {
  const onLoad = props.load
  // 存在 load 方法、 非叶子节点时加载、且 children 无数据
  //  - 三者条件都满足，才触发加载
  if (onLoad && !node.isLeaf && !node?.children.length) {
    const loadingKeys = loadingKeysRef.value
    // 如果正在加载中也无需再次加载
    if (!loadingKeys.has(node.key)) {
      // 加入加载队列
      loadingKeys.add(node.key)
      try {
        const children = await new Promise<TreeOptions[]>((resolve, reject) => {
          onLoad(node.rawNode, resolve, reject)
        })
        node.rawNode.children = children
        const processChildren = formatTreeData(children, node)
        node.children = processChildren
      } catch (error) {
      } finally {
        loadingKeys.delete(node.key)
      }
    }
  }
}

// 当前想选中的keys
const selectedKeysRef = ref<Key[]>([])
// 半选状态节点key集合
const indeterminateKeysRef = ref(new Set<Key>())

// 查看是否存在默认选中的值
watch(
  () => props.defaultCheckedKeys,
  () => {
    selectedKeysRef.value = props.defaultCheckedKeys
    // 处理第一次时的选中状态
    props.defaultCheckedKeys.forEach(key => {
      const node = getCurrentKeyNode(key, false) as TreeNode
      node && processNodeCascadeState(node, selectedKeysRef.value)
    })
  },
  { immediate: true }
)
// 监听选择的keys
watch(
  () => props.selectedKeys,
  value => {
    selectedKeysRef.value = value
  }
)

// ***** 级联 *****
// 处理当前节点触发的选择事件
function handleSelect(node: TreeNode) {
  let keys = Array.from(selectedKeysRef.value)

  // 存在则同过筛选删除当前key，不存在则加入
  if (keys.includes(node.key)) {
    keys = keys.filter(key => key !== node.key)
  } else {
    keys.push(node.key)
  }
  processNodeCascadeState(node, keys)
  emits('update:selectedKeys', keys)
}

// 处理tree中各个节点级联的状态
function processNodeCascadeState(node: TreeNode, curKeys: Key[]) {
  // 选中状态 或者 未选中状态
  const isChecked = curKeys.includes(node.key)
  //  - 自上而下的处理(捕获)
  !node.isLeaf && processCapture(node, curKeys, isChecked)
  //  - 自下而上的处理(冒泡)
  processBubbling(node, curKeys, isChecked)
}

// 处理捕获流
function processCapture(node: TreeNode, curKeys: Key[], isChecked: boolean) {
  // 当前不是叶子节点，如果选中则让其子节点也全部选中，反之如果是未选中则子节点都是未选中
  if (!node.isLeaf && node.children.length) {
    node.children.forEach(child => {
      // 禁止的按钮不参与变化
      if (!child.disabled) {
        // 为 true 则选中
        if (isChecked) {
          addSelectedKey(curKeys, child.key)
        }
        // false 则表示需要将所有子节点设置为未选中状态，且自己也只能为未选中状态
        else {
          // 移除子节点的选中
          removeSelectedKey(curKeys, child.key)
          // 同时如果存在半选则移除自身的半选状态
          indeterminateKeysRef.value.delete(node.key)
        }
      }
      processCapture(child, curKeys, isChecked)
    })
  }
}

// 处理冒泡
function processBubbling(node: TreeNode, curKeys: Key[], isChecked: boolean) {
  if (!node.parentNode) return

  const childs = node.parentNode.children

  // 如果当前节点是选中的处理
  if (isChecked) {
    // 检测父元素子节点是否都选中了，如果都选中了则父节点也要是选中状态
    if (childs.every(child => curKeys.includes(child.key))) {
      addSelectedKey(curKeys, node.parentNode.key)
    }
    // 否则父节点为半选中状态
    else {
      indeterminateKeysRef.value.add(node.parentNode.key)
    }
  }
  // 如果当前节点是未选中的处理
  else {
    // 检测父元素下子节点是否存在选中的，存在则父节点为半选中，并移除父节点的选中状态
    if (childs.some(child => curKeys.includes(child.key))) {
      indeterminateKeysRef.value.add(node.parentNode.key)
      removeSelectedKey(curKeys, node.parentNode.key)
    }
    // 如果一个都没有选中，则继续进行处理
    else {
      // 如果当前节点的兄弟节点存在半选状态
      if (childs.some(child => indeterminateKeysRef.value.has(child.key))) {
        // 如果兄弟节点中存在半选状态，则父节点也应该为半选状态
        indeterminateKeysRef.value.add(node.parentNode.key)
      }
      // 如果不存在那么父节点只能是非选中状态，需要移除半选和选中状态
      else {
        indeterminateKeysRef.value.delete(node.parentNode.key)
        removeSelectedKey(curKeys, node.parentNode.key)
      }
    }
  }

  // 递归继续处理父元素的父元素
  processBubbling(node.parentNode, curKeys, isChecked)
}
// 增加选中节点
function addSelectedKey(keys: Key[], key: Key) {
  if (!keys.includes(key)) {
    keys.push(key)
  }
}
// 移除选中节点key
function removeSelectedKey(keys: Key[], key: Key) {
  const index = keys.indexOf(key)
  index > -1 && keys.splice(index, 1)
}

const _slots = useSlots()

// ***** 注入组件数据 *****
provide(treeInjectKey, {
  slots: _slots
})

provide(RootTreeKey, {
  _emits: emits
})

// ***** Expose *****
// 根据 key 获取节点
function getCurrentKeyNode(
  key: Key,
  isRaw: boolean = true
): TreeNode | TreeOptions | undefined {
  // 从打平的数组结构中查询节点
  const curNode = flatenTree.value.find(node => node.key === key)
  return isRaw ? curNode?.rawNode : curNode
}

// 根据 key 获取原节点数据
function getCurrentKeyRawNode(key: Key): TreeOptions | undefined {
  return getCurrentKeyNode(key, true)
}

defineExpose({
  flatenTree,
  getCurrentKeyRawNode
})
</script>

<template>
  <div :class="bem.b()">
    <template v-if="flatenTree && flatenTree.length">
      <template v-if="!props.virtual">
        <c-tree-node
          v-for="node in flatenTree"
          :style="{ height: `${props.nodeHeight}px` }"
          :key="node.key"
          :node="node"
          :expanded="isExpanded(node)"
          :loadingKeys="loadingKeysRef"
          :selectedKeys="selectedKeysRef"
          :show-checkbox="props.showCheckbox"
          :indeterminate-keys="indeterminateKeysRef"
          @select="handleSelect"
          @toggleExpanded="toggleExpanded"
        ></c-tree-node>
      </template>
      <template v-else>
        <c-virtual
          :data="flatenTree"
          :itemHeight="props.nodeHeight"
          :cache="props.cache || props.remain"
          :remain="props.remain"
        >
          <template #default="{ node }">
            <c-tree-node
              :style="{ height: `${props.nodeHeight}px` }"
              :key="node.key"
              :node="node"
              :expanded="isExpanded(node)"
              :loadingKeys="loadingKeysRef"
              :selectedKeys="selectedKeysRef"
              :show-checkbox="props.showCheckbox"
              :indeterminate-keys="indeterminateKeysRef"
              @select="handleSelect"
              @toggleExpanded="toggleExpanded"
            ></c-tree-node>
          </template>
        </c-virtual>
      </template>
    </template>
    <template v-else>
      <span :class="bem.e('empty')">{{ props.emptyText }}</span>
    </template>
  </div>
</template>
