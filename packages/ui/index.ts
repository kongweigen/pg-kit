import { PgButton } from '@pg-kit/components/button'
import { PgTag } from '@pg-kit/components/tag'
import Components from './components'
import { App } from 'vue'


const Installer = {
  install(app: App) {
    Components.forEach((c) => {
      debugger
      app.use(c)
    })
  }
}

export default Installer
export { PgButton, PgTag }
