import { styled } from 'src/styles'
import { Text } from 'src/components'

export const Infos = styled('div', {
  marginLeft: 20,
})

export const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: 20,
  marginTop: 40,

  a: { textDecoration: 'none' },

  '@sm': { gridTemplateColumns: 'repeat(2, 1fr)' },
  '@md': { gridTemplateColumns: 'repeat(3, 1fr)' },
})

export const Card = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  border: '2px solid $secondary',
  borderRadius: 12,
  padding: 20,
  cursor: 'pointer',
  transition: '$easeInOut',

  '.footer': {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '.language': {
      fontSize: '$xs',
      fontFamily: '$text',
      color: '$info',
    },

    '.icons': {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      fontSize: '$xs',
      fontFamily: '$text',
      color: '$info',
    },
  },

  '&:hover': {
    backgroundColor: '$secondary',
    filter: 'brightness(150%)',
  },
  '@xl': { maxWidth: 240 },
})

export const Name = styled(Text, {
  color: '$white',
  textTransform: 'capitalize',
  marginBottom: 12,
})
