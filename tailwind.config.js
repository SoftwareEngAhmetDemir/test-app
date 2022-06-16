const autoprefixer = require('autoprefixer');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
      container: {
        center: true,
        padding:'10rem'
      },
      colors: {
     'gray':'#a1a1aa',
     'border-c':'#888a86',
     'title':'#9d9f9b',
     'description':'#7d8379'
      },
      borderRadius: {
        DEFAULT: '10px',
      }
    },
    extend: {
      height: {
        // '48': '3rem',
      }
    },
  plugins: [],
}
