module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '360px',
      // => @media (min-width: 360px) { ... }

      md: '600px',
      // => @media (min-width: 600px) { ... }

      lg: '905px',
      // => @media (min-width: 905px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat'],
        Spartan: ['Spartan', 'sans-serif'],
        Lato: ['Lato', 'sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        '': '#262A47',
        'primary-dark': '#1EFCF1',
        'primary-60': '#00A299',
        'primary-light': 'var(--pimary-light-green-color)',
        'primary-dark-green': 'var(--primary-dark-green-color)',

        // archive
        'archive-teal-400': '#16FBF0',
        'archive-Neutral-Variant30': '#3F4947',
        'archive-Neutral-Variant70': '#A2ADAB',
        'archive-Neutral-Variant60': '#889391',
        'archive-Neutral-Variant80': '#BEC9C7',

        //Secondary
        'secondary-container': '#8F1115',
        'secondary-20': '#680005',
        'secondary-30': '#8F1115',
        'secondary-40': '#B02C29',
        'secondary-50': '#D3453F',
        'secondary-60': '#F55E55',
        'secondary-70': '#FF897E',
        'secondary-200': '#03DAC5',
        'on-secondary-container': '#FFDAD5',
        'dark-on-surface-variant': '#BEC9C7',
        'dark-on-surface': '#EBE0E1',
        'secondary-container-hover': '#7B0E12',
        'secondary-container-focus': '#9E292D',
        'secondary-container-dragged': '#9E292D',
        'secondary-red': 'var(--secondary-red-40)',
        // 'orange': '#D3453F',

        // error
        'error-60': '#FF5449',
        'error-70': '#FF897A',

        //text
        grey: 'var(--text-color-grey)',
        'grey-80': '#989DBC',
        'grey-90': '#51556C',
        'primary-dark-red': '#F23E32',

        // background
        'background-disabled-input': 'var(--background-disabled-input)',
        'background-dark-300': '#585D82',
        'background-dark-400': '#4B526A',
        'background-dark-500': '#262A47',
        'background-dark-600': 'var(--background-600-dark)',
        'background-dark-700': 'var(--background-700-dark)',
        'background-dark-800': 'var(--background-800-dark)',
        'background-dark-900': 'var(--background-900-dark)',
        'background-dark': 'black',
        'background-danger': '#F17D7F',
        'background-grey': '#858585',
        'background-purple': '#7000FF',
        'background-dark-green': '#0F3321',

        // outlined button
        'outlined-normal': 'var(--outlined-normal)',
        'gray-c4': '#C4C4C4',

        //color white opacity: 0.5
        'gray-c5': 'var(--border-500-white)',
      },
      boxShadow: {
        // ELEVATION DARK
        'elevation-dark-1': 'var(--elevation-dark-1)',
        'elevation-dark-2': 'var(--elevation-dark-2)',
        'elevation-dark-3': 'var(--elevation-dark-3)',
        'elevation-dark-4': 'var(--elevation-dark-4)',
        'elevation-dark-5': 'var(--elevation-dark-5)',
        // ELEVATION light
        'elevation-light-1': 'var(--elevation-light-1)',
        'elevation-light-2': 'var(--elevation-light-2)',
        'elevation-light-3': 'var(--elevation-light-3)',
        'elevation-light-4': 'var(--elevation-light-4)',
        'elevation-light-5': 'var(--elevation-light-5)',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
  ],
};
