import { styled } from 'src/styles'

export const StyledText = styled('p', {
  fontFamily: '$text',

  span: {
    color: '$white',
  },

  a: {
    color: '$white',
    textDecoration: 'none',
    borderBottom: '1px solid $white',
  },

  variants: {
    type: {
      paragraph: {
        color: '$text',
        fontSize: '$sm',
        lineHeight: 1.6,
        marginBottom: 16,
        fontWeight: '300',
        '@md': { fontSize: '$md' },
      },
      heading: {
        color: '$white',
        fontSize: '$lg',
        marginBottom: 20,
        fontWeight: 'bold',
        '@md': { fontSize: '$xl' },
      },
    },
  },
})
