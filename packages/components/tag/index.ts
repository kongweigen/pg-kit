import { App, Plugin } from 'vue'
import Tag from './src/index.vue'

export const PgTag: Plugin = {
  install(app: App) {
    app.component('pg-tag', Tag)
  }
}
