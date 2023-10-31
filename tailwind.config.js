/* eslint no-undef: "off" */
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  // Génération de classe dynamique et empêche la supression de styles pendant le processus de purge
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
      fontSize: {
        xxs: ['10px'],
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
      animation: {
        spin: 'spin 300s infinite linear',
      },
      keyframes: {
        spin: {
          '0%': {
            transform: 'rotateX(0.0deg) rotateY(0.0deg) rotateZ(0.0deg)',
          },
          '100%': {
            transform: 'rotateX(3600deg) rotateY(3600deg) rotateZ(3deg)',
          },
        },
      },
    },
  },
  plugins: [],
};
