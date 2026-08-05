import { defineConfig } from 'vite'
import UnoCSS from '@unocss/vite'
import { resolve } from 'path'
const dirname = import.meta.dirname

export default defineConfig({
  plugins: [
    UnoCSS(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(dirname, 'index.html'),
        about: resolve(dirname, 'about.html'),
        curriculum: resolve(dirname, 'curriculum.html'),
      }
    }
  }
})
