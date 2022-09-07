import { createStitches } from '@stitches/react'

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
      background: '#08070b',
      primary: '#D53F8C',
      secondary: '#212024',
      text: '#8f9ba8',
      info: '#cfd4d9',
      white: '#f2f2f2',
      github: '#777777',
      linkedin: '#0e76a8',
      telegram: '#0088cc',
      instagram: '#E12F6C',
      twitter: '#1DA1F1',
      gradient: 'linear-gradient(90deg, #17161d, rgba(9, 9, 10, 0))',
      gradientActive: 'linear-gradient(90deg, #2C2A36, rgba(9, 9, 10, 0))',
    },
    fonts: {
      text: "'Poppins', sans-serif",
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '2.5rem',
      xl: '3rem',
    },
    transitions: {
      easeInOut: 'ease-in-out 0.3s',
    },
  },
  media: {
    sm: '(min-width: 30rem)',
    md: '(min-width: 48rem)',
    lg: '(min-width: 62rem)',
    xl: '(min-width: 80rem)',
  },
  utils: {
    marginHorizontal: value => ({ marginLeft: value, marginRight: value }),
    marginVertical: value => ({ marginTop: value, marginBottom: value }),
    paddingHorizontal: value => ({ paddingLeft: value, paddingRight: value }),
    paddingVertical: value => ({ paddingTop: value, paddingBottom: value }),
  },
})
