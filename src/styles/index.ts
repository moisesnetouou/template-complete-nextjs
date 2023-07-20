import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      blue50: '#E1E8F3',
      blue500: '#1C77FF',
      blue600: '#004FC7',

      gray100: '#F6F6F6',
      gray200: '#EFEFEF',
      gray300: '#D9D9D9',
      gray500: '#C9C9C9',
      gray700: '#979797',
      gray800: '#565656',

      red600: '#CC0031',

      green600: '#00CC76',

      white: '#FFFFFF',
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '2.875rem',
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
  media: {
    xs: '(max-width: 30em)', // 480px
    sm: '(max-width: 37.50em)', // 600px
    md: '(max-width: 56.25em)', // 900px
    lg: '(max-width: 75em)', // 1120px
    xl: '(max-width: 90em)', // 1440px
  },
});
