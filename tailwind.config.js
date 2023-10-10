/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      primary: '#31FFE6',
      secondary: '#9D3FE8',
      tertiary: '#0F0132',
      dark: '#0D0D0D',
      light: '#F5F5F5',
      success: '#00FF00',
      fail: '#FFFFFF',
    },
    extend: {
      fontFamily: {
        title: ['GalakPro-Bold', 'sans-serif'],
        'title-bold': ['GalakPro-Heavy', 'sans-serif'],
        'title-medium': ['GalakPro-Medium', 'sans-serif'],
        'title-light': ['GalakPro-Light', 'sans-serif'],
        text: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
