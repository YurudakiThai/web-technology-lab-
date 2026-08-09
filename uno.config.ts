import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
  presetWebFonts,
} from 'unocss'

const PHI = 1.618

// สร้างคอลัมน์แบบ golden ratio
// ตัวอย่าง goldenCols(3) => "2.618fr 1.618fr 1.000fr"
function goldenCols(n: number): string {
  return Array.from({ length: n }, (_, i) =>
    `${Number(PHI ** (n - 1 - i)).toFixed(3)}fr`,
  ).join(' ')
}

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),

    presetWebFonts({
      provider: 'google',
      fonts: {
        heading: 'Chakra Petch:500,600,700',
        sans: 'IBM Plex Sans Thai:400,500,600',
      },
    }),
  ],

  theme: {
    breakpoints: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },

    colors: {
      ink: '#0b1220',
      paper: '#f6f7fb',

      accent: {
        DEFAULT: '#4f46e5',
        soft: '#e0e7ff',
      },

      gold: '#c9a227',
    },
  },

  rules: [
    // ===== aspect ratio =====
    ['ratio-golden', { 'aspect-ratio': '1.618' }],

    // ratio-1.5, ratio-1.25
    [/^ratio-([\d.]+)$/, ([, v]) => ({
      'aspect-ratio': v,
    })],

    // ratio-16_9
    [/^ratio-(\d+)_(\d+)$/, ([, w, h]) => ({
      'aspect-ratio': `${w} / ${h}`,
    })],

    // ===== golden grid =====
    ['golden-cols', { 'grid-template-columns': '1.618fr 1fr' }],
    ['golden-cols-rev', { 'grid-template-columns': '1fr 1.618fr' }],
    ['golden-rows', { 'grid-template-rows': '1.618fr 1fr' }],

    // golden-cols-1.25 => 1.25fr 1fr
    [/^golden-cols-(\d+\.\d+)$/, ([, r]) => ({
      'grid-template-columns': `${r}fr 1fr`,
    })],

    // golden-cols-3 => 2.618fr 1.618fr 1fr
    [/^golden-cols-(\d+)$/, ([, n]) => ({
      'grid-template-columns': goldenCols(Number(n)),
    })],

    // ปรับผ่าน CSS variable
    // ใช้คู่กับ [--phi-cols:2fr_1fr]
    ['golden-cols-var', {
      'grid-template-columns': 'var(--phi-cols, 1.618fr 1fr)',
    }],

    // ===== พื้นหลังเรขาคณิต =====
    ['bg-grid', {
      'background-image':
        'linear-gradient(to right, rgba(11,18,32,1) 1px, transparent 0px),' +
        'linear-gradient(to bottom, rgba(11,18,32,1) 1px, transparent 0px)',
      'background-size': '24px 24px',
    }],

    // bg-grid-32
    [/^bg-grid-(\d+)$/, ([, s]) => ({
      'background-image':
        'linear-gradient(to right, rgba(11,18,32,1) 2px, transparent 1px),' +
        'linear-gradient(to bottom, rgba(11,18,32,1) 2px, transparent 1px)',
      'background-size': `${s}px ${s}px`,
    })],

    ['bg-dots', {
      'background-image': 'radial-gradient(rgba(11,18,32,.18) 1px, transparent 1.5px)',
      'background-size': '18px 18px',
    }],

    ['bg-checker', {
      'background-image':
        'conic-gradient(rgba(11,18,32,.08) 25%, transparent 0 50%, rgba(11,18,32,.08) 0 75%, transparent 0)',
      'background-size': '24px 24px',
    }],

    // ===== รูปทรงเรขาคณิต =====
    ['shape-triangle', {
      'clip-path': 'polygon(50% 0, 100% 100%, 0 100%)',
    }],

    ['shape-diamond', {
      'clip-path': 'polygon(50% 0, 100% 50%, 50% 100%, 0 50%)',
    }],

    ['shape-hexagon', {
      'clip-path': 'polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0 50%)',
    }],
  ],

  shortcuts: {
    btn: 'inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition',
    'btn-primary': 'btn bg-accent text-white shadow hover:opacity-90',
    'btn-outline': 'btn border border-ink/15 bg-white text-ink hover:bg-ink/5',

    heading: 'font-heading font-bold tracking-tight',
    'body-text': 'font-sans leading-relaxed',

    'card-geo': 'relative overflow-hidden rounded-xl border border-ink/10 p-5 shadow-sm',
    'card-light': 'relative overflow-hidden rounded-xl border border-ink/10 bg-white p-5 shadow-sm',

    'geo-corner': 'absolute -right-6 -top-6 h-24 w-24 rotate-45 bg-accent-soft',
  },

  preflights: [
    {
      getCSS: () => `
        body {
          font-family: 'IBM Plex Sans Thai', ui-sans-serif, system-ui, sans-serif;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: 'Chakra Petch', 'IBM Plex Sans Thai', sans-serif;
        }
      `,
    },
  ],

  inspector: true,
})
