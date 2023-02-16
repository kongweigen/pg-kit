import { App, Plugin } from 'vue'
import PgTag from './src/index.vue'

const TagInstall: Plugin = {
  install(app: App) {
    app.component('pg-tag', PgTag)
  }
}

export default TagInstall

export { PgTag }
