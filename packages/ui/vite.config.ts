/*
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2023-02-02 21:31:50
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2023-02-07 22:36:30
 * @FilePath: \webpack-learne:\webProject\Monerepo\pg-kit\packages\ui\vite.config.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
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
    } 
  },
  plugins: [vue(), dts()]
})
