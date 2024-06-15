import { INSTALLED_KEY } from '@coderjc-ui/constants'
import type { App, Plugin } from 'vue'

export const makeInstall = (components: Plugin[] = []) => {
  const install = (app: App) => {
    if (app[INSTALLED_KEY]) return

    app[INSTALLED_KEY] = true

    components.forEach(comp => app.use(comp))
  }

  return {
    install
  }
}
