import { App, Plugin } from 'vue'
import Button from './src/index.vue'

export const PgButton: Plugin = {
  install(app: App) {
    app.component('pg-button', Button)
  }
}
