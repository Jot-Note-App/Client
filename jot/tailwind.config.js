/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: [
    './src/**/*.html',
    './src/**/*.tsx',  // Include TypeScript files
    './src/**/*.jsx',  // Include JSX files
  ],
}

