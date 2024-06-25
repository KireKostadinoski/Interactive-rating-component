/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '180px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        Orange: 'hsl(25, 97%, 53%)',
        White: 'hsl(0, 0%, 100%)',
        LightGrey: 'hsl(217, 12%, 63%)',
        DarkBlue: 'hsl(213, 19%, 18%)',
        VeryDarkBlue: 'hsl(216, 12%, 8%)',
      },
      fontFamily: {
        sans: ['Overpass', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

