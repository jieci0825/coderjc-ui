# Tree 树形控件
看不清未来时，就坚持的更久一点
> [!NOTE]
> 在设计之初的时候，考虑的情况不算多，所以用了把树结构打平取巧的方法，后续大概率会重构，但是不会改动 API 的使用，到时候也会把这个组件尚未完成的功能补充

## 基础用法
一种基础的树形结构，通常它更多的是用于展示
<preview path="../../demo/tree/tree-basic.vue"></preview>

## 可选择
大多数时候，使用树形控件的时候都会添加上这个可选择，为组件添加 `show-checkbox` 属性即可开启，通常在使用这个功能的时候，我们需要你提供一个响应式的数组，绑定到
`v-model:selected-keys` 属性上，这个数组会记录你选中的节点的 `key`
<preview path="../../demo/tree/tree-selectable.vue"></preview>

## 禁用复选框
通过给你用于渲染的数据的数据项添加 `disabled` 属性，即可禁用这个复选框
<preview path="../../demo/tree/tree-disabled.vue"></preview>

## 异步加载
如果你的节点数据并不是一开始就确定的，需要进行异步加载，那么你可以给组件添加 `load` 属性，并绑定一个方法，这个方法会在你展开节点时被调用

请注意你需要保证你展开的节点是没有 children 数据的且不是一个叶子节点，*在这种情况下，通常需要你手动给这个节点添加一个 `isLeaf` 属性，并设置为 false，表示不是一个叶子节点*
<preview path="../../demo/tree/tree-load.vue"></preview>

## 默认展开以及默认选中
此功能你必须保证你的 `key` 值是能够被使用的，通过 `default-checked-keys` 属性即可设置默认选中的节点，数组里面的值为节点的 key

通过 `default-expanded-keys` 属性即可设置默认展开的节点，数组里面的值为节点的 key，需要注意的是，这个属性你如果要展开子节点的话，必须保证你的父节点也在这个数组里面，
否则子节点不会被展开，当然，这不是一个很好的处理的，后续会完善
<preview path="../../demo/tree/tree-default.vue"></preview>

## 更改默认的 label、children 以及 key 属性
通过 `label-field` `children-field` `node-key` 属性，你可以更改默认的这三个属性，当然，如果你更改了这三个属性，那么你需要保证你的数据结构中，这三个属性都是存在的
<preview path="../../demo/tree/tree-props.vue"></preview>

## 虚拟化树形控件
如果你的数据量非常大，那么可以尝试使用这个功能，它会将你的数据进行分片，将展示的数据量控制在一个合理的范围内，提升性能，为组件添加 `virtual` 属性即可开启，通过 `remain` 属性来设置可视区域应该展示多少条数据

*这个组件可能相对来说，并不算很成熟，所以你需要保证你的每项数据高度是一致且已知的，而非动态的，每项的高度你可以通过 `node-height` 属性设置*
<preview path="../../demo/tree/tree-virtual.vue"></preview>


## 节点内容插槽
如果你不满足于节点简单的文本展示，那么可以使用这个插槽来展示你自己的内容，可以按照作用域插槽的方式，接受原节点数据，比如加一点 emoji
<preview path="../../demo/tree/tree-node-slot.vue"></preview>

## Tree API

### Tree Props
| 属性名                | 说明                                                         | 类型                              | 默认值   |
| --------------------- | ------------------------------------------------------------ | --------------------------------- | -------- |
| data                  | 展示数据                                                     | `array`                           | --       |
| empty-text            | 内容为空的时候展示的文本                                     | `string`                          | --       |
| node-key              | 指定使用那个属性值作为 key，这个属性的属性值需要保证唯一，默认以 label 为 key | `string`                          | --       |
| label-field           | 指定节点标签为节点对象的某个属性值                           | `string`                          | label    |
| children-field        | 指定子树为节点对象的某个属性值                               | `string`                          | children |
| disabled              | 是否禁用复选框                                               | `boolean`                         | false    |
| load                  | 加载子树数据的方法，仅当 lazy 属性为true 时生效              | `function(node, resolve, reject)` | --       |
| show-checkbox         | 开启复选框模式                                               | `boolean`                         | false    |
| v-model:selected-keys | 复选框模式下必填，记录选中节点的 key                         | `array`                           | --       |
| default-checked-keys  | 设置默认选中的节点，值为节点的 key                           | `array`                           | --       |
| default-expanded-keys | 设置默认展开的节点，值为节点的 key                           | `array`                           | --       |
| virtual               | 是否开启虚拟化树形控件                                       | `boolean`                         | false    |
| cache                 | 必须开启 `virtual`，为了更好的渲染效果预先渲染多少条数据，后续加载中决定上下加载多少条件数据，默认与 `remain` 保持一致，一般情况下，你不需要改动这个数据 | `number`                          | --       |
| remain                | 必须开启 `virtual`，可视区域应该展示多少条数据               | `number`                          | --       |
| node-height           | 节点的高度                                                   | `number`                          | 30       |

## Tree 事件
| 事件名 | 说明                                                        | 类型       |
| ------ | ----------------------------------------------------------- | ---------- |
| node-click   | 当节点被点击时触发                              | `(node:TreeOptions, evt:MouseEvent) => void` |

## Tree Exposes
| 名称                 | 说明                | 类型                             |
| -------------------- | ------------------- | -------------------------------- |
| flatenTree           | 打平的树形数据      | `array`                          |
| getCurrentKeyRawNode | 根据 key 获取原节点 | `(key)=>TreeOptions | undefined` |


## 常见问题
### 为什么无法选中节点？
> 请确保你绑定的 `v-model:selected-keys` 是一个响应式的数组，并且你选中的节点 `key` 存在于这个数组中

### 如果我没有指定某个属性为 key 值会怎么处理？
> 如果你没有通过 `node-key` 指定，那么我们会用你的 label 作为 key 值，但是一般情况下，我们还是建议你指定一个 key 值

### 为什么禁用的复选框，最后还是选中了或者被移除了？
> 这个禁用仅仅是禁用这个复选框无法被主动点击改变而已，但是依然会受到子级状态改变而变化，所以当你想完全禁用某一个节点的时候，请将其子节点也全部禁用