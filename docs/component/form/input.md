# Input 输入框
精神濒临崩溃的症状之一，就是相信自己的工作非常重要

> [!CAUTION]
> 不支持 `v-model` 修饰符

## 基础用法
基础的用法上，可能与直接为 input 标签绑定 v-model 的区别并不大
<preview path="../../demo/input/input-basic.vue"></preview>

## 禁用状态
使用 `disabled` 可以开启禁用状态
<preview path="../../demo/input/input-disabled.vue"></preview>

## 一键清空
使用 `clearable` 就可以开启，当你的文本框存在内容，且聚焦或者经过的时候，即可看到这个按钮
<preview path="../../demo/input/input-clearable.vue"></preview>

## 密码框
使用 `show-password` 属性即可开启切换显示/隐藏密码的功能
<preview path="../../demo/input/input-password.vue"></preview>

## 带图标的输入框
某些场景中，你可能需要一些图标来帮助你表达语义，比如搜索。通过 `prefix` 插槽可以在输入框的左侧添加一些图标，通过 `suffix` 插槽可以在输入框的右侧添加一些图标

*通常我们建议你从 [xicons](https://xicons.org) 寻找你需要的图标*
<preview path="../../demo/input/input-icon.vue"></preview>

## 文本域
这个在你需要输入一些多行文本的时候，将会很有用，添加 `type="textarea"` 即可使用
文本域的高度可以通过 `rows` 属性控制
<preview path="../../demo/input/input-textarea.vue"></preview>

## 复合型输入框
前面提到了可以通过两个插槽来完成一些图标的插入，不过有时候可能需要的不仅仅是一个图标，那么你可以尝试一下这个

通过 `prepend` 插槽和 `append` 插槽，你可以在输入框中前置或后置一个元素，一般来说，这里会是一个按钮
<preview path="../../demo/input/input-recombination.vue"></preview>

## 尺寸
使用 `size` 属性可以控制输入框的尺寸，可选值为 `large`、`default`、`small`，通常 `default` 属性你不需要特意的关注
<preview path="../../demo/input/input-size.vue"></preview>

## 输入长度限制
为文本或者文本域设置 `maxlength` 属性即可设置输入值最大字符数，字符数以 JavaScript 的字符长度为基准，你还可以通过设置 `show-word-limit` 属性来显示字符数
<preview path="../../demo/input/input-length.vue"></preview>

## Input API
### Input 属性
| 属性名                | 说明                                                         | 类型                                                         | 默认值  |
| --------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------- |
| model-value / v-model | 绑定值                                                       | `string` / `number`                                          | --      |
| type                  | 类型                                                         | `'text' / 'textarea' / 'password' / 'button' / 'checkbox' / 'file' / 'number' / 'radio'` | text    |
| maxlength             | 同原生 `maxlength` 属性                                      | `string` / `number`                                          | 10000   |
| show-password         | 是否显示切换密码图标                                         | `boolean`                                                    | false   |
| show-word-limit       | 是否显示统计字数, 只在 `type` 为 'text' 或 'textarea' 的时候生效 | `boolean`                                                    | false   |
| disabled              | 是否禁用                                                     | `boolean`                                                    | false   |
| clearable             | 是否显示清除按钮                                             | `boolean`                                                    | false   |
| size                  | 输入框尺寸，对 `type="texterea"` 无效                        | `'large' / 'default' / 'small' / ''`                           | default |
| rows                  | 输入框行数，仅对 `type="texterea"` 无效                      | `number`                                                     | 2       |
| prefix-icon           | 自定义前缀图标                                               | `string` / `Component`                                       | --      |
| suffix-icon           | 自定义后缀图标                                               | `string` / `Component`                                       | --      |
| autocomplete          | 原生 `autocomplete` 属性                                     | `string`                                                     | off     |
| name                  | 等价于原生 input `name` 属性                                 | `string`                                                     | --      |
| readonly              | 原生 `readonly` 属性，是否只读                               | `boolean`                                                    | false   |
| step                  | 原生属性，设置输入字段的合法数字间隔                         | --                                                           | --      |
| resize                | 控制是否能被用户缩放                                         | `'none' / 'both' / 'horizontal' / 'vertical'`                | --      |
| autofocus             | 原生属性，自动获取焦点                                       | `boolean`                                                    | false   |

### Input 事件
| 事件名 | 说明                                                        | 类型       |
| ------ | ----------------------------------------------------------- | ---------- |
| blur   | 当选择器的输入框失去焦点时触发                              | `Function` |
| focus  | 当选择器的输入框获得焦点时触发                              | `Function` |
| change | 仅当 modelValue 改变时，当输入框失去焦点或用户按Enter时触发 | `Function` |
| input  | 在 Input 值改变时触发                                       | `Function` |
| clear  | 在点击由 `clearable` 属性生成的清空按钮时触发               | `Function` |

### Input 插槽
| 插槽名  | 说明                                          |
| ------- | --------------------------------------------- |
| prefix  | 输入框头部内容，只对非 `type="textarea"` 有效 |
| suffix  | 输入框尾部内容，只对非 `type="textarea"` 有效 |
| prepend | 输入框前置内容，只对非 `type="textarea"` 有效 |
| append  | 输入框后置内容，只对非 `type="textarea"` 有效 |
