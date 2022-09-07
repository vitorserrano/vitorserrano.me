import { styled } from 'src/styles'

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '100vh',
  position: 'relative',
  zIndex: 0,
})

export const Main = styled('main', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginVertical: 0,
  marginHorizontal: 'auto',
})

export const Container = styled('div', {
  paddingVertical: 100,
  paddingHorizontal: 24,
  backgroundColor: '$background',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  transition: '$easeInOut',
  zIndex: 10,

  variants: {
    align: {
      'space-between': { justifyContent: 'space-between' },
      center: { justifyContent: 'center' },
    },
  },

  '@md': {
    paddingVertical: 140,
  },
  '@lg': {
    flexDirection: 'row',
    paddingVertical: 110,
  },
  '@xl': {
    minWidth: '70rem',
    maxWidth: '70rem',
  },
})
