/*
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2023-02-02 22:43:20
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2023-02-06 23:10:18
 * @FilePath: \webpack-learne:\webProject\Monerepo\pg-kit\packages\ui\index.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
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
