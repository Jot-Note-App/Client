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

