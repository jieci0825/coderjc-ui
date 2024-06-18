# Coderjc UI

> 目前处于开发阶段，有任何问题或者建议都可以提出 Issue，感谢您的参与！

具体说明请查看文档 [Coderjc UI](https://coderjc-ui.coderjc.cn/)

## 安装

```bash
npm install coderjc-ui
```

## 引入

```js
// main.ts / main.js
import { createApp } from 'vue'
import App from './App.vue'
import 'coderjc-ui/dist/index.css'
import CoderjcUI from 'coderjc-ui'

const app = createApp(App)
app.use(CoderjcUI)
app.mount('#app')
```
