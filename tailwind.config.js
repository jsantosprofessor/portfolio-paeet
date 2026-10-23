/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070A12',
          900: '#0A0F1D',
          850: '#0D1527',
          800: '#111C35',
          700: '#1A294C',
          600: '#253B6E',
        },
        tech: {
          blue: {
            DEFAULT: '#3B82F6',
            light: '#60A5FA',
            dark: '#1D4ED8',
            glow: 'rgba(59, 130, 246, 0.4)',
          },
          purple: {
            DEFAULT: '#8B5CF6',
            light: '#A78BFA',
            dark: '#6D28D9',
            glow: 'rgba(139, 92, 246, 0.4)',
          },
          cyan: '#06B6D4',
          emerald: '#10B981',
          amber: '#F59E0B',
          rose: '#F43F5E',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(35px)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
