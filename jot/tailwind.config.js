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
      faintGray: '#F2F2F2',
      lightGray: '#E7E7E7',
      mediumGray: "#BBBBBB",
      darkGray: "#828282",
      offBlack: "#213547"
    },
    boxShadow: {
      DEFAULT: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;',
      md: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;',
      lg: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;'
    },
    extend: {
      fontSize: {
        h1: ["48px", { lineHeight: "56px", fontWeight: "700" }],
        h2: ["40px", { lineHeight: "46px", fontWeight: "700" }],
        h3: ["32px", { lineHeight: "37px", fontWeight: "700" }],
        h4: ["24px", { lineHeight: "35px", fontWeight: "700" }],
        h5: ["20px", { lineHeight: "30px", fontWeight: "700" }],
        title: ["35px", { lineHeight: "40px", fontWeight: "700" }],
        subheading: ["17px", { lineHeight: "28px", fontWeight: "700" }],
        large: ["16px", { lineHeight: "24px", fontWeight: "400" }],
        regular: ["14px", { lineHeight: "24px", fontWeight: "400" }],
        body: ["14px", { lineHeight: "24px", fontWeight: "450" }],
        small: ["12px", { lineHeight: "20px", fontWeight: "500" }],
        xSmall: ["11px", { lineHeight: "16px", fontWeight: "500" }],
      }
    },
  },
  plugins: [],
  purge: [
    './src/**/*.html',
    './src/**/*.tsx',  // Include TypeScript files
    './src/**/*.jsx',  // Include JSX files
  ],
}

