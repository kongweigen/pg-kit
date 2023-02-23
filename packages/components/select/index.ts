import { App, Plugin } from 'vue'
import PgSelect from './src/index.vue'

const SelectInstall: Plugin = {
  install(app: App) {
    app.component('pg-select', PgSelect)
  }
}

export default SelectInstall

export { PgSelect }
