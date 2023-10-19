/* eslint no-undef: "off" */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  safelist: [
    {
      pattern: /grid-cols-\d+/,
    },
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
        pixel: ['ARCADE_N', 'sans-serif'],
      },
      backgroundImage: {
        background: 'url(/images/background.jpg)',
      },
      screens: {
        xs: '576px',
        xxs: '360px',
      },
      skew: {
        35: '35deg',
      },
      width: {
        'clamp-title': 'clamp(320px, 90vw, 500px)',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
