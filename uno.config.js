import { defineConfig } from 'unocss'

export default defineConfig({
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
  },
  shortcuts: {
    // ปุ่ม
    'btn': 'inline-block px-8 py-3 rounded-lg font-chakra font-semibold text-base border-none cursor-pointer',
    'btn-primary': 'btn bg-primary text-white',
    'btn-yellow': 'btn bg-yellow text-primary',
    'btn-outline': 'btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary',
    
    // หัวข้อ
    'section-title': 'text-3xl md:text-4xl font-chakra font-bold text-primary',
    'section-sub': 'text-lg text-gray-600 max-w-2xl mx-auto',
    
    // การ์ด
    'stat-card': 'bg-white p-6 rounded-xl shadow-md text-center border-l-4 border-blue',
    'major-card': 'bg-[#f3f7ff] p-6 rounded-2xl text-center border-b-[6px] border-blue',
  },
  safelist: [
    // ใช้สำหรับการ์ดที่เปลี่ยนสีขอบ
    'border-blue', 'border-green', 'border-yellow', 'border-primary',
    'bg-primary', 'bg-blue', 'bg-green', 'bg-yellow',
  ],
  preflights: [
    {
      getCSS: () => `
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'IBM Plex Sans Thai', sans-serif; background: #fff; }
        a { text-decoration: none; color: inherit; }
      `,
    },
  ],
})
