import DefaultTheme from 'vitepress/theme'

import '@vitepress-demo-preview/component/dist/style.css'
import '@coderjc-ui/theme-chalk/src/index.scss'
import './custom.css'

import reigsterApp from './register-app'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    reigsterApp(app)
  }
}
