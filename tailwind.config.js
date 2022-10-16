const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      grey: colors.zinc,
      primary: colors.indigo,
    },
    fontFamily: {
      sans: [
        `"Inter"`,
        `ui-sans-serif`,
        `system-ui`,
        `-apple-system`,
        `BlinkMacSystemFont`,
        `"Segoe UI"`,
        `Roboto`,
        `"Helvetica Neue"`,
        `Arial`,
        `"Noto Sans"`,
        `sans-serif`,
        `"Apple Color Emoji"`,
        `"Segoe UI Emoji"`,
        `"Segoe UI Symbol"`,
        `"Noto Color Emoji"`,
      ],
    },
    extend: {},
  },
  plugins: [],
}
