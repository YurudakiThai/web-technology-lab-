import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
  ],

  shortcuts: {
    btn: 'inline-flex items-center gap-2 rounded-lg px-4 py-2 font-semibold transition',
    'btn-primary': 'bg-blue-600 text-white hover:bg-blue-700',
    card: 'rounded-xl bg-white p-6 shadow-md',
  },

  theme: {
    colors: {
      brand: '#0ea5e9',
    },
  },

  safelist: [
    'bg-red-500',
    'text-white',
  ],
})
