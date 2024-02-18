/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'light-red': {
          normal: 'hsl(0, 100%, 67%)',
          light: 'hsla(0, 100%, 67%, .3)',
        },
        'orangey-yellow': {
          normal: 'hsl(39, 100%, 56%)',
          light: 'hsla(39, 100%, 56%, .2)',
        },
        'green-teal': {
          normal: 'hsl(166, 100%, 37%)',
          light: 'hsla(166, 100%, 37%, .2)',
        },
        'cobalt-blue': {
          normal: 'hsl(234, 85%, 45%)',
          light: 'hsla(234, 85%, 45%,.2)',
        },
        'light-slate-blue': '#7857ff',
        'light-royal-blue': '#2e2be9',
        'violet-blue': 'hsla(256, 72%, 46%, 1)',
        'persian-blue': 'hsla(241, 72%, 46%, 0)',
        'White': '#ffffff',
        'pale-blue': '#ebf1ff',
        'light-lavender': '#c8c7ff',
        'dark-gray-blue': '#303b5a',
      }
    },
  },
  plugins: [],
}

