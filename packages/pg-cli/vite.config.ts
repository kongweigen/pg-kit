import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './bin/index.js',
      name: 'index',
      formats:['es'],
      fileName: (format) => `index.${format}.js`
    }
  }
})
