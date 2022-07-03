module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      fontFamily: {
        'sans': ['Ubuntu'],
      },
      extend: {
        colors: {
          'main': '#D44A7B',
          'black': '#000',
          'mainbg': '#5256A1',
          'rec': '#5C62C2'
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }