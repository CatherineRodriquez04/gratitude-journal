const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: ['"Rancho"', 'cursive'],
    },
    extend: {
      colors: {
        primary: '#FFF1F6',
        accent: {
          DEFAULT: 'black',
          hover: 'black',
        },
      },
      keyframes: {
        drift: {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '50%': { transform: 'translateX(100px) translateY(100px)' },
          '100%': { transform: 'translateX(0) translateY(0)' }
        },
        drift2: {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '55%': { transform: 'translateX(-50px) translateY(-70px)' },
          '100%': { transform: 'translateX(0) translateY(0)' }
        },
        drift3: {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '55%': { transform: 'translateX(200px) translateY(-150px)' },
          '100%': { transform: 'translateX(0) translateY(0)' }
        },
      },
      animation: {
        drift: 'drift 30s ease-in-out infinite',
        drift2: 'drift2 40s ease-in-out infinite',
        drift3: 'drift3 50s ease-in-out infinite',
      }
    },
  },
  plugins: [require('@nextui-org/theme')],
};
