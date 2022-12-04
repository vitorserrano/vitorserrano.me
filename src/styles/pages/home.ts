import { styled } from 'src/styles'

export const Presentation = styled('div', {
  marginBottom: 80,

  strong: { color: '$primary' },
  '@lg': { marginBottom: 0 },
})

export const Button = styled('div', {
  display: 'flex',
  marginLeft: -14,

  a: {
    fontSize: 14,
    fontFamily: '$text',
    color: '$white',
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    padding: 14,
    gap: 6,
    textDecoration: 'none',

    '&:hover': {
      backgroundColor: '$secondary',
      filter: 'brightness(150%)',
    },
  },
})
