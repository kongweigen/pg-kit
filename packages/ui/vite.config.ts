import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { presetUno, presetAttributify, presetIcons } from 'unocss'
import Unocss from 'unocss/vite'
import { safelist } from './config/uno'

export default defineConfig({
  build: {
    lib: {
      entry: './index.ts',
      name: 'ui',
      fileName: (format) => `ui.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖，防止多个vue产生冲突
      external: ['vue']
    },
    cssCodeSplit: true
  },
  plugins: [
    vue(),
    dts(),
    Unocss({
      safelist,
      presets: [presetUno(), presetAttributify(), presetIcons()]
    })
  ]
})
