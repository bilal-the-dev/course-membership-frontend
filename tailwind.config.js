
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
   
      screens: {
        '3xl': '1700px',
        '4xl': '1900px',
        '5xl': '2100px',
      },
      fontFamily: {
        'Roboto-Flex': ['Roboto Flex', 'sans-serif'],
        
      },
  colors:{
    'primary_grey':'#030712',
    'primary_gold':'#FACC15',
    'secondary-gray':'#6B7280',
    'shaded-gray':'#111827',
    'purplish-gray':'#060D20',
    'blackish-gray':'#030712',
  },
      backgroundImage: {
        'bg': "url('./src/assets/bg.svg')",
      }
    },
  },
  plugins: [],
}