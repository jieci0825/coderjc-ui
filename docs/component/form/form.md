# Form 表单
不过是些许风霜罢了

## 基础用法
表单组件的需要各类的表单项支撑，但是目前还在不断完善中，所以暂时先展示一些基础用法，等待后续完善
<preview path="../../demo/form/form-basic.vue"></preview>

## 对其方式
通过设置 `label-position` 属性可以改变表单域标签的位置，可选值为 `top`、`left`， 当设为 `top` 时标签会置于表单域的顶部
<preview path="../../demo/form/form-label-position.vue"></preview>

## 表单校验
`Form` 组件提供表单验证功能，这也是经常使用的场景，通过给 `rules` 传入约定的验证规则即可，需要注意的是 `form-item` 的 `prop` 属性的设置，需与规则的 key 保持一致，
*更多的用法请参考 [async-validator](https://github.com/yiminghe/async-validator)*
<preview path="../../demo/form/form-validator.vue"></preview>

## 尺寸
通过给 `Form` 组件设置 `size` 属性，可以改变表单内组件的尺寸，可选值为 `large`、`default`、`small`，当然，你也可以给表单组件单独设置 `size` 来覆盖 `Form` 组件设置的 `size` 属性
> [!NOTE]
> 因为 checkbox 组件编写的时候没有考虑按钮状态样式，所以 checkbox 的 size 变化还在开发中
<preview path="../../demo/form/form-size.vue"></preview>

## Form API
### Form 属性
| 属性名         | 说明                                                         | 类型                                 | 默认值 |
| -------------- | ------------------------------------------------------------ | ------------------------------------ | ------ |
| model          | 表单数据对象                                                 | `object`                             | --     |
| rules          | 表单验证规则                                                 | `FormItemRule / FormItemRule[]`      | --     |
| label-position | 表单域标签的位置， 当设置为 `left` 或 `right` 时，一般也需要设置 `label-width` 属性 | `'left' / 'top' / 'right'`           | left   |
| label-width    | 标签的长度，例如 `'50px'`                                    | `string` / `number`                  | --     |
| size           | 用于控制该表单内组件的尺寸                                   | `'large' / 'default' / 'small' / ''` | ''     |

### Form 插槽
| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

### Form Exposes
| 名称          | 说明                                                         | 类型       |
| ------------- | ------------------------------------------------------------ | ---------- |
| validate      | 对整个表单的内容进行验证。 接收一个回调函数，或返回 `Promise` | `Function` |
| validateField | 验证具体的某个字段。                                         | `Function` |
| resetFields   | 重置该表单项，将其值重置为初始值，并移除校验结果             | `Function` |
| clearValidate | 清理某个字段的表单验证信息。                                 | `Function` |
| fields        | 获取所有字段的 context                                       | `array`    |

## FormItem API

### FormItem 属性
| 属性名       | 说明                                                         | 类型                                 | Default |
| ------------ | ------------------------------------------------------------ | ------------------------------------ | ------- |
| prop         | `model` 的键名，在你需要校验的时候，该属性是必填的           | `string`                             | --      |
| label        | 标签文本                                                     | `string`                             | --      |
| required     | 是否为必填项，如不设置，则会根据校验规则确认                 | `boolean`                            | false   |
| rules        | 表单验证规则，`teigger` 为校验规则的触发方式，更多内容可以参考 [async-validator](https://github.com/yiminghe/async-validator) | `FormItemRule / FormItemRule[]`      | --      |
| show-message | 是否显示校验错误信息，一般当你需要自定义错误样式或者保持表单清爽时可以关闭 | `boolean`                            | true    |
| size         | 用于控制该表单域下组件的默认尺寸                             | `'large' / 'default' / 'small' / ''` | ''      |

### Form 插槽
| 插槽名  | 说明                                                         | 类型     |
| ------ | ----------------------------------------------------------- | ------- |
| default | 表单的内容                                                   | --       |
| label   | 标签位置显示的内容                                           | `object` |
| error   | 验证错误信息的显示内容，你可以使用作用域插槽的方式接收到错误消息 | `object` |


