/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
      // colors: {
      //  "white": "#FFFFFF",
      //  "black": "#000000",
      //  "gray": "#676767",
      //  "gray-200": "#555555",
      //  "yellow": "#FFE664"
      // },
    //   borderRadius: {
    //    "none": "0",
    //    "xs": "0.125rem",
    //    "sm": "0.25rem",
    //    "default": "0.3125rem",
    //    "lg": "0.4375rem",
    //    "xl": "2.4375rem"
    //  },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        clash_display: ['Clash Display', 'sans-serif']
      },
    },
  },
  plugins: [],
}

