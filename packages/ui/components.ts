import ButtonInstall, { PgButton } from './components/button'
import TagInstall, { PgTag } from './components/tag'
import SelectInstall, { PgSelect } from './components/select'
import TooltipInstall, { PgTooltip } from './components/tooltip'

import type { Plugin } from 'vue'

export { PgButton, PgTag, PgSelect, PgTooltip }
export default [
  ButtonInstall,
  TagInstall,
  SelectInstall,
  TooltipInstall
] as Plugin[]
