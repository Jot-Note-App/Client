/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [],
  theme: {
    colors: {
      ...colors,
      main: "#4C98FC",
      mainDark: "#146fe3",
      secondary: "#D6EBFF",
      darkGray: "#828282",
      lightGray: "#BBBBBB",
      offBlack: "#213547"
    },
    boxShadow: {
      DEFAULT: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;',
      md: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;',
      lg: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;'
    },
    // fontSize: {
    //   h1: ["48px", { lineHeight: "56px" }],
    //   h2: ["40px", { lineHeight: "46px" }],
    //   h3: ["32px", { lineHeight: "37px" }],
    //   h4: ["24px", { lineHeight: "35px" }],
    //   h5: ["20px", { lineHeight: "30px" }],
    //   large: ["16px", { lineHeight: "24px" }],
    //   regular: ["14px", { lineHeight: "24px" }],
    //   small: ["12px", { lineHeight: "20px" }],
    //   xSmall: ["10px", { lineHeight: "16px" }],
    // },
    extend: {},
  },
  plugins: [],
  purge: [
    './src/**/*.html',
    './src/**/*.tsx',  // Include TypeScript files
    './src/**/*.jsx',  // Include JSX files
  ],
}

