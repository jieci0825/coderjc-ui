# Button 按钮

过去无法挽回，未来可以改变

## 基础用法

使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式

<preview path="../../demo/button/button-basic.vue"></preview>

## 禁用状态

使用 `disabled` 属性即可完成实现按钮的禁用，此属性接收一个 `Boolean` 的值

<preview path="../../demo/button/button-disabled.vue"></preview>

## 图标按钮

使用 `icon` 属性即可实现插入图标，图标组件可以在 [xicons](https://www.xicons.org/#/) 获取，下面将会展示几种不同的图标使用方式

<preview path="../../demo/button/button-icon.vue"></preview>

## 按钮组
当你多项操作所属一类时，那么使用按钮组可能会有更好的效果
<preview path="../../demo/button/button-group.vue"></preview> 

## 加载状态按钮

使用 `loading` 的属性为 `true` 或 `false` 来控制按钮的加载状态，`loading-text` 可以附加一些文本说明

<preview path="../../demo/button/button-loading.vue"></preview>

## 按钮尺寸

除了默认的大小之外，还提供 `large` 和 `small` 两种尺寸供选择

<preview path="../../demo/button/button-size.vue"></preview>

## Button API

### Button 属性

| 属性名         | 说明                                         | 类型                                                         | 默认值   |
| :------------- | -------------------------------------------- | ------------------------------------------------------------ | -------- |
| type           | 类型                                         | `'' / 'primary' / 'success' / 'warning' / 'danger' / 'info'` | --       |
| size           | 尺寸                                         | `'large' / 'default' / 'small' / ''`                             | --       |
| plain          | 是否为朴素按钮                               | `boolean`                                                    | false    |
| round          | 是否为圆角按钮                               | `boolean`                                                    | false    |
| circle         | 是否为圆形按钮                               | `boolean`                                                    | false    |
| icon           | 图标组件 [xicons](https://www.xicons.org/#/) | `object`                                                     | --       |
| icon-placement | icon 位置                                    | `'left' / 'right'`                                           | 'left'   |
| disabled       | 是否禁用按钮                                 | `boolean`                                                    | false    |
| loading        | 是否为加载中状态                             | `boolean`                                                    | false    |
| loading-text   | 加载时需要显示的文本                         | `string`                                                     | --       |
| native-type    | 原生 type 属性                               | `'submit' / 'button' / 'reset'`                              | 'button' |

### Button 事件

| 名称  | 说明           | 类型       |
| ----- | -------------- | ---------- |
| click | 点击按钮后触发 | `Function` |

### Button 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
| icon    | 自定义图标组件 |

## ButtonGroup API

### ButtonGroup 属性
| 属性名         | 说明                                         | 类型                                                         | 默认值   |
| :------------- | -------------------------------------------- | ------------------------------------------------------------ | -------- |
| type           | 类型                                         | `'' / 'primary' / 'success' / 'warning' / 'danger' / 'info'` | --       |
| size           | 尺寸                                         | `'large' / 'default' / 'small'`                              | --       |

### ButtonGroup 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |