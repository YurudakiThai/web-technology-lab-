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
      background: {
        light: '#ffffff',
        dark: '#0f172a',
        card: '#f8fafc',
      },
      text: {
        main: '#1e293b',
        muted: '#64748b',
        light: '#f8fafc',
      }
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
    // Common Layouts
    'section-padding': 'py-12 md:py-20 lg:py-24',
    'card-base': 'bg-background-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden',
    'btn-modern': 'bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg',
    'btn-secondary-modern': 'bg-white hover:bg-gray-50 text-primary font-medium py-3 px-6 rounded-xl border border-gray-200 transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm hover:shadow-md',
    // Typography
    'heading-1': 'text-3xl sm:text-4xl lg:text-5xl font-bold text-text-main leading-tight',
    'heading-2': 'text-2xl sm:text-3xl lg:text-4xl font-bold text-text-main leading-tight',
    'heading-3': 'text-xl sm:text-2xl font-bold text-text-main leading-snug',
    'body-text': 'text-base text-text-muted leading-relaxed',
    'body-text-lg': 'text-lg text-text-muted leading-relaxed',
    // Animations & Effects
    'fade-in-up': 'animate-fade-in-up',
    'hover-lift': 'transition-transform duration-300 hover:-translate-y-1',
    'glass-effect': 'backdrop-blur-md bg-white/80 border border-white/20',
  },
  rules: [
    // Golden Ratio Aspect Ratio
    ['aspect-golden', { 'aspect-ratio': '1.618' }],
    ['aspect-golden-portrait', { 'aspect-ratio': '0.618' }],
    // Custom Gradients
    ['gradient-primary', { 'background-image': 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)' }],
    ['gradient-accent', { 'background-image': 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)' }],
    ['gradient-hero', { 'background-image': 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #3b82f6 100%)' }],
    // Custom Animations
    ['animate-fade-in-up', {
      'animation': 'fadeInUp 0.8s ease-out forwards',
      'opacity': '0',
      'transform': 'translateY(20px)'
    }],
  ],
})
