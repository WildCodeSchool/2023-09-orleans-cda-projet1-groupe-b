/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#31FFE6',
      secondary: '#9D3FE8',
      tertiary: '#0F0132',
      dark: '#0D0D0D',
      light: '#F5F5F5',
    },
  },
  extend: {
    fontFamily: {
      title: ['GalakPro-Bold', 'sans-serif'],
      'title-bold': ['GalakPro-Heavy', 'sans-serif'],
      'title-medium': ['GalakPro-Medium', 'sans-serif'],
      'title-light': ['GalakPro-Light', 'sans-serif'],
      text: ['Roboto', 'sans-serif'],
    },
    backgroundImage: {
      background: 'url(./images/background.jpg)',
    },
    screens: {
      xsm: '576px',
    },
  },
  plugins: [],
};
