/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html, js}",
      "./index.html"
    ],
    theme: {
      extend: {},
      colors : {
        'white' : '#FFFFFF',
        'black' : '#1D1A1A',
        'black-60' : '#767373',
        'gray' : '#DFDDDD'
      },
      fontFamily : {
        sans : ['Lato', 'sans-serif']
      },
      fontSize : {
        'sm' : ['0.833rem'],
        'base' : ['1rem'],
        'icon' : ['24px'],
        'lead' : ['1.2rem'],
        'subtitle-2' : ['1.48rem'],
        'subtitle' : ['1.725rem'],
        'title-2' : ['2.075rem'],
        'title' : ['2.988rem']
      },
      
    },
    plugins: [],
  }
  