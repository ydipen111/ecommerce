/** @type {import('tailwindcss').Config} */
export default {
  content: [
    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend:{
      colors: {
        'primary':"#FB2E86",
        'sec':"#7E33E0",
        'secDark':"#151875",
        'secl':'#EEEFFB',
        'orchid':"#C71585	",
        'third':"#8B4513",
        'fourt':"#BC8F8F",

      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... 
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        'xxl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      backgroundImage:{
        'ecom':"url('./src/assets/ecom.jpg')",
        'ecom2':"url('./src/assets/ecom2.jpg')",
        'flat':"url('./src/assets/flat.jpg')"
      }
    }
  },

  plugins: [],
}

