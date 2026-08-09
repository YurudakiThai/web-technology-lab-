import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({ scale: 1.1 }),

    presetWebFonts({
      provider: 'google',
      fonts: {
        heading: 'Chakra Petch:500,600,700',
        sans: 'IBM Plex Sans Thai:400,500,600',
      },
    }),
  ],

  theme: {
    colors: {
      night: '#0a1033',
      navy: '#141d5b',
      panel: '#0f1a4d',
      royal: '#2946e8',
      mist: '#b6c0e2',

      // สี gradient ตามลำดับที่กำหนด
      deep: '#213389',
      sky: '#43abec',
      leaf: '#7cfb49',
      sun: '#fefb2c',
    },
  },

  shortcuts: {
    wrap: 'mx-auto w-full max-w-5xl px-3.618 md:px-1',
    heading: 'font-heading font-bold tracking-tight text-white',
  },

  inspector: true,
})
