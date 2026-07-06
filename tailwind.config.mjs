/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#0f172a',
          muted: '#475569',
          faint: '#94a3b8',
        },
        paper: {
          DEFAULT: '#ffffff',
          soft: '#f8fafc',
          border: '#e2e8f0',
        },
      },
      maxWidth: {
        prose: '68ch',
        site: '72rem',
      },
    },
  },
  plugins: [],
};
