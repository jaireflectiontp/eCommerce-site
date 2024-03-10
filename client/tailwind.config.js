/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: ' #3f51b5',
        secondary: '#e9e9e9',
        dark: '#2b2b2d',
        light: '#7a7a7a',
        faint: '#e8ebff',
        rate: '#f5885f'
      }
    },
  },
  plugins: [],
}
