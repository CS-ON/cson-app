/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark': '#111928',
        'dark-2': '#1F2A37',
        'dark-3': '#374151',
        'gray': '#DFE4EA',
        'gray-2':'#F3F4F6',
        'green': ' #13C296',
        'green-dark': '#1A8245',
        'stroke': '#DFE4EA'
      },
      boxShadow: {
        'card': '0px 5px 12px 0px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
