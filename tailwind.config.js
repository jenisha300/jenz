/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"	#A0522D",
        secondary:	"	#DAA520"

      },
      conatiner:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"3rem"
        }
      }
    },
    
  },
  plugins: [],
}

