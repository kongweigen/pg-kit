import { App, Plugin } from 'vue'
import PgButton from './src/index.vue'

const ButtonInstall: Plugin = {
  install(app: App) {
    app.component('pg-button', PgButton)
  }
}

export default ButtonInstall
export { PgButton }
