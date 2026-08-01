/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"DM Sans Variable"', 'DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#102A43',
          muted: '#486581',
          faint: '#829AB1',
        },
        paper: {
          DEFAULT: '#F7FAFC',
          soft: '#EBF4F8',
          border: '#D9E2EC',
        },
        signal: {
          DEFAULT: '#0F766E',
          soft: '#CCFBF1',
          deep: '#115E59',
        },
      },
      maxWidth: {
        prose: '65ch',
        site: '70rem',
      },
      boxShadow: {
        glow: '0 0 80px -20px rgba(15, 118, 110, 0.35)',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(2%, -1.5%, 0) scale(1.04)' },
        },
      },
      animation: {
        rise: 'rise 0.8s ease-out both',
        'rise-delay': 'rise 0.8s ease-out 0.12s both',
        'rise-delay-2': 'rise 0.8s ease-out 0.24s both',
        fade: 'fade 1s ease-out both',
        drift: 'drift 18s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
