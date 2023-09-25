import { App, Plugin } from 'vue'
import PgTooltip from './src/index.vue'

const TooltipInstall: Plugin = {
  install(app: App) {
    app.component('pg-tooltip', PgTooltip)
  }
}

export default TooltipInstall

export { PgTooltip }
