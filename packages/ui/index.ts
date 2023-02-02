import { PgButton } from '@pg-kit/components/button'
import { PgTag } from '@pg-kit/components/tag'
import { App } from 'vue'

const Installer = {
  install(app: App) {
    ;[PgButton, PgTag].forEach((c) => {
      debugger
      app.use(c)
    })
  }
}

export default Installer
export { PgButton, PgTag }
