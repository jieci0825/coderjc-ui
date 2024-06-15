# Icon 图标

功名半纸，风雪千山

> [!TIP]
> 在 coderjc-ui 中推荐使用 [xicons](https://www.xicons.org/#/) 作为图标库


> [!CAUTION]
> 因为 HTML 标准已经定义了一个名为 `menu` 的标签， 如果您注册的 `menu` 无法正常工作，您需要使用别名来渲染图标

## 基础用法

通过引入 `xicons` 组件库，并使用 `icon` 属性或者 `插槽` 来渲染图标
<preview path="../../demo/icon/icon-basic.vue"></preview>

## Icon API

### Icon 属性

| 属性名 | 说明                                        | 类型              | 默认值       |
| ------ | ------------------------------------------- | ----------------- | ------------ |
| color  | 颜色                                        | `string`          | 继承颜色     |
| size   | 图标大小                                    | `number` / `string` | 继承字体大小 |
| icon   | 图标组件 [xicons](https://www.xicons.org/#/) | `object`          | --           |

### Icon 事件

| 名称  | 说明           | 类型       |
| ----- | -------------- | ---------- |
| click | 点击图标后触发 | `Function` |

### Icon 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
