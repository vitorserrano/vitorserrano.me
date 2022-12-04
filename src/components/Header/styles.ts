import { styled } from 'src/styles'

export const Container = styled('header', {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  backgroundColor: '$background',
  width: '100%',
  paddingHorizontal: 24,
  paddingVertical: 20,

  '@md': { justifyContent: 'center' },
})

export const NavBar = styled('nav', {
  display: 'none',

  '@md': { display: 'block' },
})

export const NavList = styled('ul', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  listStyle: 'none',
})

export const NavItem = styled('li', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: '$easeInOut',
  borderRadius: 12,
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$secondary',
    color: '$white',
  },

  '.active': {
    color: '$white',
    '&::after': {
      content: '',
      marginVertical: 0,
      marginHorizontal: 'auto',
      position: 'absolute',
      top: 36,
      left: 0,
      right: 0,
      width: 20,
      height: 2,
      backgroundColor: '$primary',
    },
  },

  a: {
    fontSize: '$xs',
    textTransform: 'uppercase',
    color: '$text',
    fontFamily: '$text',
    fontWeight: '400',
    letterSpacing: 1.2,
    textDecoration: 'none',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
})
