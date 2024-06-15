# Checkbox 多选框

有时候努力的意义可能不是成功，而是不留遗憾

> [!CAUTION]
> `label` 不能作为 `value` 使用，`label` 仅用于文字展示

## 基础用法
单独使用可以表示状态的切换，当然，此时你需要绑定一个 `boolean`，而 label 可以作为你的显示文本
<preview path="../../demo/checkbox/checkbox-basic.vue"></preview>


## 禁用状态
有些选项你希望是展示，但不能被修改时，可以试试这个状态，设置 `disabled` 属性即可
<preview path="../../demo/checkbox/checkbox-disabled.vue"></preview>

## 多选框组
当你需要多个选项，且绑定到一个数组中时，比如你喜欢的角色，此时通过 `value` 属性可以设置你需要选中的值
<preview path="../../demo/checkbox/checkbox-group.vue"></preview>

## 中间状态
`indeterminate` 属性可以表示不确定的状态，一般用于全选或者父子级联，表达的意思是，我选了但是没完全选
<preview path="../../demo/checkbox/checkbox-indeterminate.vue"></preview>

## Checkbox API
### Checkbox 属性

| 属性名                | 说明                           | 类型                            | 默认值 |
| --------------------- | ------------------------------ | ------------------------------- | ------ |
| model-value / v-model | 选中项绑定值                   | `string` / `number` / `boolean` | --     |
| label                 | 显示的文本                     | `string`                        | --     |
| value                 | 选中状态的值                   | `string` / `number`           | --     |
| disabled              | 是否禁用                       | `boolean`                       | false  |
| indeterminate         | 设置不确定状态，仅负责样式控制 | `boolean`                       | false  |


### Checkbox 事件
| 事件名   | 说明                   | 回调参数                                      |
| ---------- | -------------------------- | -------------------------------------------- |
| change    | 选中状态发生变化时的回调函数 | `(checked: boolean) => void` |

### Checkbox 插槽
| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## CheckboxGroup API
### CheckboxGroup 属性

| 属性名                | 说明                           | 类型                            | 默认值 |
| --------------------- | ------------------------------ | ------------------------------- | ------ |
| model-value / v-model | 绑定值                   | `string[]` / `number[]` | --     |

### CheckboxGroup 插槽
| 插槽名  | 说明           | 子标签  |
| ------- | -------------- | ------- |
| default | 自定义默认内容 | Checkbox  |


