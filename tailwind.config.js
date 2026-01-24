/** @type {import('tailwindcss').Config} */
export default {
  content: ['./resources/views/**/*.edge', './public/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#0ea5e9',
          900: '#0c4a6e',
        },
        dark: {
          300: '#1e293b',
          400: '#0f172a',
          500: '#020617',
        },
        accent: {
          purple: '#a855f7',
          pink: '#ec4899',
          cyan: '#06b6d4',
          orange: '#f97316',
          green: '#10b981',
          yellow: '#eab308',
          blue: '#3b82f6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}
