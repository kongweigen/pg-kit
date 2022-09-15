import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './index.ts',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['vue'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          dir: 'dist/es'
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          dir: 'dist/lib'
        }
      ]
    }
  },
  plugins: [vue(), dts()]
})
