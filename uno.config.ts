import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno()],
  shortcuts: {
     'grid-golden': 'grid gap-4 md:grid-cols-[1fr_0.618fr]',
    'grid-golden-left': 'grid gap-4 md:grid-cols-[0.618fr_1fr]',
  }
})
