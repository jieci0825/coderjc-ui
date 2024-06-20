# Collapse 折叠面板

尊重所有声音，但只成为自己

## 基础用法

当你需要同时展开多个面板的时候，并通过 `collapse-item` 组件的默认插槽拉编写你的内容

<preview path="../../demo/collapse/collapse-basic.vue"></preview>

## 手风琴效果

一般当你展示的折叠数据较多，全部展开影响阅读，你可以尝试一下这个效果，给组件设置 `accordion` 属性即可

<preview path="../../demo/collapse/collapse-accordion.vue"></preview>

## 禁止

你可以通过设置 `disabled` 属性来禁止某个面板的点击

<preview path="../../demo/collapse/collapse-disabled.vue"></preview>

## 自定义标题

标题有时候一个简单的文本，并不能满足你的需求，那么此时你可以通过给 `title` 的插槽来实现自定义的标题，_title 插槽比 title 属性优先级更高_

<preview path="../../demo/collapse/collapse-title.vue"></preview>

## Collapse API

### Collapse 属性

| 属性名                | 详情                                                      | 类型               | 默认值 |
| --------------------- | --------------------------------------------------------- | ------------------ | ------ |
| model-value / v-model | 绑定值，手风琴模式下是一个 string，正常模式则是一个 array | `string` / `array` | --     |
| accordion             | 是否手风琴模式                                            | `boolean`          | false  |

### Collapse 事件

| 事件名 | 说明                                           | 类型       |
| ------ | ---------------------------------------------- | ---------- |
| change | 接收一个参数 activeNames，值与 modelValue 一致 | `Function` |

### 插槽

| 插槽名  | 说明                   |
| :------ | :--------------------- |
| default | `Collapse Item` 子标签 |

## Collapse Item API

### Collapse Item 属性

| 属性名   | 说明       | 类型                | 默认值 |
| :------- | :--------- | :------------------ | :----- |
| name     | 唯一标志符 | `string` / `number` | --     |
| title    | 面板标题   | `string`            | ''     |
| disabled | 是否禁用   | `boolean`           | false  |

### Collapse Item 插槽

| 插槽名  | 说明                   |
| :------ | :--------------------- |
| default | `Collapse Item` 的内容 |
| title   | `Collapse Item` 的标题 |
