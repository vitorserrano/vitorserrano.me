import { styled } from 'src/styles'

export const Button = styled('button', {
  color: '$primary',
  fontSize: 32,
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
  boxShadow: 'none',
  transition: '$easeInOut',

  '&:active': { backgroundColor: 'transparent', boxShadow: 'none' },
  '&:focus': { outline: 'none', boxShadow: 'none' },
  '&:hover': { opacity: 0.7 },

  '@md': { display: 'none' },
})

export const Container = styled('nav', {
  backgroundColor: '$background',
  position: 'fixed',
  top: 60,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 50,
  overflow: 'hidden',
  paddingVertical: 24,
  transition: '$easeInOut',

  variants: {
    isVisible: {
      true: { display: 'flex' },
      false: { display: 'none' },
    },
  },

  '@md': { top: 120 },
})

export const NavList = styled('ul', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginHorizontal: 24,
  listStyle: 'none',
})

export const NavItems = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
})

export const Item = styled('li', {
  width: '100%',
  display: 'flex',
  justifyDontent: 'flex-start',
  alignItems: 'center',

  '&:not(:first-child)': {
    marginTop: 8,
  },

  '.active': {
    background: '$gradientActive',
    color: '$white',
  },

  a: {
    background: '$gradient',
    width: '100%',
    color: '$text',
    fontFamily: '$text',
    fontSize: '$md',
    fontSeight: '400',
    paddingVertical: 18,
    paddingHorizontal: 14,
    borderRadius: 12,
    textDecoration: 'none',
  },
})
