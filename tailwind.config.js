/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        'md':'1210px'
      },
      colors:{
        'primary':'#3a84f8',
        'primary-dark':'#59616c',
        'secondary':'#bcd9ff',
        'background':'#eff6ff',
        'background-dark':'#373e47',
        'icon':'#b6bec5',
      },
    },
  },
  plugins: [],
}

