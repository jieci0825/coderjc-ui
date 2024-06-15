<script lang="ts">
import { PropType, h, inject, renderSlot } from 'vue'
import { treeInjectKey } from './tree'
import { TreeNode } from './tree.type'
import { createNamespace } from '@coderjc-ui/utils'

export default {
  name: 'c-tree-node-content',
  props: {
    node: {
      type: Object as PropType<TreeNode>,
      required: true
    }
  },
  setup(props) {
    const bem = createNamespace('tree-node')
    const treeContext = inject(treeInjectKey)
    return () => {
      return renderSlot(
        treeContext?.slots!,
        'default',
        { node: props.node },
        () => {
          return [h('span', { class: bem.e('label') }, props.node.label)]
        }
      )
    }
  }
}
</script>
