/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
extend: {
colors: {
  parmesan: '#F9E4B7',
  pepper: '#B9A032',
  lime: '#A9B823',
  olive: '#818A2F',
  tomato: '#D2724E',
  bolognese: '#B44323',
  marinara: '#8E3520',
},


    },
  },
  plugins: [],
};
