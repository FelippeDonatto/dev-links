/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7c7c8a',
        100: '#e1e1e6'
      },

      white: '#ffffff'
    },
    extend: {
      backgroundImage: {
        app: 'url(/background.png)'
      }
    }
  },
  plugins: []
}
