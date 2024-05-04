/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark': '#111928',
        'dark-2': '#1F2A37',
        'gray': '#DFE4EA',
      },
      boxShadow: {
        'card': '0px 5px 12px 0px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
