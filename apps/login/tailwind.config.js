/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html',
    '../../libs/**/*.{js,jsx,ts,tsx}', // Adicionar esta linha para incluir as libs
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

