import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.ts',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Google Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        surface: {
          base:    '#111111',
          raised:  '#171717',
          overlay: '#1d1d1d',
        },
        border: {
          subtle:  'rgba(255,255,255,0.05)',
          default: 'rgba(255,255,255,0.09)',
          strong:  'rgba(255,255,255,0.18)',
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      backgroundImage: {
        'glow-blue':   'radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.12) 0%, transparent 70%)',
        'glow-center': 'radial-gradient(ellipse at 50% 50%, rgba(59,130,246,0.08) 0%, transparent 65%)',
      },
      transitionDuration: {
        '150': '150ms',
      },
    },
  },
  plugins: [],
} satisfies Config
