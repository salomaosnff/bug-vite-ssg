import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: './relative-path',
  plugins: [
    vue()
  ]
})
