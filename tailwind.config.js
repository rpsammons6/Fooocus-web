/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-in forwards',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      colors: {
        white: {
          100: '#FFFFFF',
          200: '#080808',
        },
        gray: {
          100: '#EBF1F5',
          200: '#D9E3EA',
          300: '#C5D2DC',
          400: '#9BA9B4',
          500: '#707D86',
          600: '#55595F',
          700: '#33363A',
          800: '#25282C',
          900: '#151719',
        },
        orange: {
          100: '#f8d74e',
          200: '#f4b144',
          300: '#e97431',
          400: '#da533e',
          500: '#d0494c',
          600: '#c33755',
          700: '#c13259',
          800: '#bc265d',
          900: '#9b3332',
        },
        purple: {
          100: '#f84fd8',
          200: '#f547ef',
          300: '#e542f2',
          400: '#c737ed',
          500: '#a530e5',
          600: '#7e46d5',
          700: '#5a3dc4',
          800: '#2529bb',
          900: '#6132a5',
        },
        green: {
          100: '#4ef8c9',
          200: '#43f3a0',
          300: '#39ee7e',
          400: '#3fd945',
          500: '#58cf47',
          600: '#66c130',
          700: '#69bb25',
          800: '#35b535',
          900: '#3b9530',
        },
        blue: {
          100: '#7785cc',
          200: '#2a4d7e',
        },
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        'architects-daughter': ['var(--font-architects-daughter)', 'sans-serif']
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3.25rem',
        '6xl': '4rem',
      },
      inset: {
        'full': '100%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      minWidth: {
        '10': '2.5rem',
      },
      scale: {
        '98': '.98'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}