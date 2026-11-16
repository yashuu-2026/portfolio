/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          lavender: '#B69CFF',
          pink: '#F5B8D2',
          mint: '#B8E5E1',
          cream: '#FFF0C9',
          plum: '#29243A',
          plumLight: '#3F3758',
          plumMuted: '#6E6488',
          plumSoft: '#988EB4',
          bgBase: '#FBF9FE',
          bgCream: '#FFFDF9',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Outfit"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 4px 18px -2px rgba(182, 156, 255, 0.12)',
        'soft-md': '0 10px 32px -4px rgba(182, 156, 255, 0.18)',
        'soft-lg': '0 20px 48px -8px rgba(182, 156, 255, 0.22)',
        'soft-xl': '0 25px 60px -12px rgba(41, 36, 58, 0.12)',
        'glow-lavender': '0 0 25px rgba(182, 156, 255, 0.45)',
        'glow-pink': '0 0 25px rgba(245, 184, 210, 0.45)',
        'glow-mint': '0 0 25px rgba(184, 229, 225, 0.45)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(10px) rotate(-2deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.85', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}
