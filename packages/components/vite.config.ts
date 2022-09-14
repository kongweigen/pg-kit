import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './index.ts',
      name: 'pgui',
      fileName: '@pg-ui'
    }
  }
})
