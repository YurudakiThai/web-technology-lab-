import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
  ],
  theme: {
    colors: {
      primary: '#213389',
      blue: '#43ABEC',
      green: '#7CFB49',
      yellow: '#FEFB2C',
    },
    fontFamily: {
      chakra: ['Chakra Petch', 'sans-serif'],
      ibm: ['IBM Plex Sans Thai', 'sans-serif'],
    },
    // Golden Ratio Grid System
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  shortcuts: {
    'btn': 'inline-block px-8 py-3 rounded-lg font-chakra font-semibold text-base border-none cursor-pointer transition-all duration-300',
    'btn-primary': 'btn bg-primary text-white hover:bg-primary/90',
    'btn-yellow': 'btn bg-yellow text-primary hover:bg-yellow/90',
    'btn-outline': 'btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary',
    'section-title': 'text-3xl md:text-4xl lg:text-5xl font-chakra font-bold text-primary',
    'section-sub': 'text-base md:text-lg text-gray-600 max-w-2xl mx-auto',
    'stat-card': 'bg-white p-5 md:p-6 rounded-xl shadow-md text-center border-l-4 border-blue transition-transform hover:scale-105',
    'major-card': 'bg-[#f3f7ff] p-5 md:p-6 rounded-2xl text-center border-b-[6px] border-blue transition-all hover:shadow-lg hover:-translate-y-1',
    // Golden Ratio Container
    'container-golden': 'max-w-[1280px] mx-auto px-4 sm:px-5 lg:px-8',
    // Golden Ratio Grid (1:0.618)
    'grid-golden': 'grid grid-cols-1 md:grid-cols-[1fr_0.618fr] gap-6 md:gap-8 lg:gap-10',
    'grid-golden-reverse': 'grid grid-cols-1 md:grid-cols-[0.618fr_1fr] gap-6 md:gap-8 lg:gap-10',
  },
  rules: [
    // Golden Ratio Aspect Ratio
    ['aspect-golden', { 'aspect-ratio': '1.618' }],
    ['aspect-golden-portrait', { 'aspect-ratio': '0.618' }],
  ],
})
