/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    fontFamily: {
      EliceBold: 'EliceDigitalBaeum_Bold, monospace',
      EliceRegular: 'EliceDigitalBaeum_Regular, monospace',
      AggroBold: 'SBAggroB, cursive',
      SuitMedium: 'SUIT-Medium, sans-serif'
    },
    extend: {},
  },
  plugins: [],
}
