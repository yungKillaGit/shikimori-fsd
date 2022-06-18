const spacingScale = Array.from(Array(20).keys()).reduce((acc, key) => {
  return {
    ...acc,
    [key]: `${key * 8}px`,
  };
}, {});
spacingScale['0.5'] = `${8 * 0.5}px`;
spacingScale['1.5'] = `${8 * 1.5}px`;
spacingScale['2.5'] = `${8 * 2.5}px`;
spacingScale['3.5'] = `${8 * 3.5}px`;

const screens = {
  sm: 320,
  md: 768,
  lg: 1440,
};

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      sm: { max: `${screens.md - 1}px` },
      md: { min: `${screens.md}px`, max: `${screens.lg - 1}px` },
      lg: '1440px',
      'md-up': `${screens.md}px`,
      'lg-down': { max: `${screens.lg - 1}px` },
    },
    fontFamily: {
      primary: ['PrimaryFont', 'sans-serif'],
      head: ['HeadersFont', 'sans-serif'],
      logo: ['LogoFont'],
    },
    spacing: spacingScale,
    extend: {
      colors: {
        'brand-1': '#3193FF',
        'deep-blue-1': '#0C193D',
        'deep-blue-2': '#112950',
        'deep-blue-3': '#273B57',
        'deep-blue-4': '#3E5271',
        'deep-blue-5': '#667790',
        'deep-blue-6': '#EAEDF1',
        'black-1': '#000000',
        'black-2': '#0B0B0D',
        'black-3': '#18191A',
        'black-4': '#242526',
        'gray-1': '#4E4E4E',
        'gray-2': '#A7A7A8',
        'gray-3': '#E7E7E7',
        'gray-4': '#EEEEEE',
        'alt-yellow-1': '#FFD568',
        'alt-yellow-2': '#FFEF5A',
        'alt-pink': '#FE35D9',
        'alt-violet': '#8B5FE7',
        'alt-cian': '#11B5A1',
        'pastel-blue': '#9AC6FF',
        'pastel-pink': '#F3A7FF',
        'pastel-red': '#FFF4F3',
        'pastel-green': '#F2FED8',
        'pastel-cian': '#EEFFFF',
        'pastel-yellow': '#FFF27E',
        'pastel-violet-1': '#C3A8FB',
        'pastel-violet-2': '#F1EAFF',
        'pastel-violet-3': '#F9F6FF',
        'pastel-purple-1': '#898EFF',
        'pastel-purple-2': '#9FA3FF',
        'pastel-purple-3': '#9FA3FF',
        'pastel-orange-1': '#FFD0B0',
        'pastel-orange-2': '#FFEDC0',
        'pastel-orange-3': '#FFFAE8',
        'success-1': '#1C8B2E',
        'success-2': '#62BA1D',
        'danger-1': '#DA3A3A',
        'danger-2': '#C82828',
      },
      zIndex: {
        header: 1000,
      },
      spacing: {
        header: '48px',
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    ({ addComponents }) => {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '304px',
          },
          '@screen md': {
            maxWidth: '752px',
          },
          '@screen lg': {
            maxWidth: '1392px',
          },
        },
      });
    },
  ],
};
