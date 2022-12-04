import { styled } from 'src/styles'
import { Text } from 'src/components'

export const Experiences = styled('div', {
  marginTop: 40,
  maxWidth: 520,

  '.items': {
    p: { fontSize: '$sm' },

    span: {
      color: '$info',
      fontSize: '$xs',
    },

    '.separator': {
      backgroundColor: '$primary',
      height: 2,
      marginBottom: 16,
      maxWidth: 30,
    },

    '&:last-child': {
      '.separator': {
        display: 'none',
      },
    },
  },
})

export const Role = styled(Text, {
  color: '$white',
  marginBottom: 6,
})
