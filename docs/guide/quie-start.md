# 快速开始
主打的就是一个快

## 完整引入
在体验或者一开始的开发环境，我觉得完整引入是一个不错的选择

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

## 按需引入
目前来说，按需引入可能做不到很精细化，至少 css 文件还是需要全部引入，后续会不断改进的，但是也可以在打包的时候完成一些 Tree Shaking

下面展示的是单个组件的引入并全局注册，你可以根据需要进行调整

```js
// main.ts / main.js
import { createApp } from 'vue'
import App from './App.vue'
import 'coderjc-ui/dist/index.css'
import { CButton } from 'coderjc-ui'

const app = createApp(App)
app.use(CButton)
app.mount('#app')
```