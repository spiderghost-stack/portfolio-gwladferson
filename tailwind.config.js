/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#020b18',
        bg2: '#040f20',
        cyan: '#00ffe7',
        green: '#00ff88',
        blue: '#0080ff',
        dim: '#0a2540',
        text: '#c8e8ff',
        muted: '#3a6080',
        border: 'rgba(0,255,231,.15)',
      },
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif'],
        orbitron: ['Orbitron', 'monospace'],
        sharetech: ['Share Tech Mono', 'monospace'],
      },
      boxShadow: {
        'glow-c': '0 0 8px #00ffe7, 0 0 20px #00ffe788',
        'glow-g': '0 0 8px #00ff88, 0 0 20px #00ff8866',
      },
    },
  },
  plugins: [],
}
