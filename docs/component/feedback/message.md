# Message 消息提示
至此鲜花赠自己，纵马踏欢向自由

## 基础用法
出现在顶部，然后在 3 秒后离开，当然，如果你舍不得，你可以让它再回来

Coderjc UI 注册了一个全局的 `$CMessage` 方法，你可以直接使用，当然，一般这种方式过于麻烦，所以通常会导入一个 `CMessage` 方法使用，
`CMessage` 方法接受一个配置对象 options，其中 `message` 配置项可以是字符也可以是 VNode
<preview path="../../demo/message/message-basic.vue"></preview>

## 不同状态
不同的场景需要不同的类型的消息反馈，你可以选择你需要的
<preview path="../../demo/message/message-status.vue"></preview>

## 可关闭的消息
这个对于有着强迫着或急气性的人，或许是个好选择，将 `showClose` 设置为 true 即可

除了可以通过视图，CMessage 方法也会返回一个对象，上面有一个 `close` 方法，也可以关闭这条消息
<preview path="../../demo/message/message-close.vue"></preview>

## 使用 HTML 片段作为正文内容
除了字符与 `VNode` 之外，你也可以使用 HTML 字符串，只需要将 `isHTML` 设置为 true 即可
<preview path="../../demo/message/message-html.vue"></preview>

## 不会消失的 “它”
如果你偏爱这条提示，你可以留住他，将 `duration` 设置为 0 即可
<preview path="../../demo/message/message-not-fade.vue"></preview>

## Message API
### Message 配置项
| 名称      | 说明                                          | 类型                                       | 默认值 |
| :-------- | :-------------------------------------------- | :----------------------------------------- | :----- |
| message   | 消息文字                                      | `string` / `VNode` / `Function`            | ''     |
| type      | 消息类型                                      | `'success' / 'warning' / 'error' / 'info'` | info   |
| icon      | 自定义图标，该属性会覆盖 `type` 的图标。      | `string` / `Component`                     | --     |
| isHTML    | 是否将 message 属性作为 HTML 片段处理         | `boolean`                                  | false  |
| duration  | 显示时间，单位为毫秒。 设为 0 则不会自动关闭  | `number`                                   | 3000   |
| showClose | 是否显示关闭按钮                              | `boolean`                                  | false  |
| onClose   | 关闭时的回调函数, 参数为被关闭的 message 实例 | `Function`                                 | --     |
| offset    | Message 距离窗口顶部的偏移量                  | `number`                                   | 20     |
| appendTo  | 设置 message 的根元素，默认为 `document.body` | `string` / `HTMLElement`                   | --     |

### Message 方法
| 名称  | 描述               | 类型       |
| :---- | :----------------- | :--------- |
| close | 关闭当前的 Message | `Function` |


