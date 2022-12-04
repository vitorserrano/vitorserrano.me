import { styled } from 'src/styles'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 28,

  variants: {
    direction: {
      row: { flexDirection: 'row' },
      column: { flexDirection: 'column' },
    },
  },
})

export const Item = styled('a', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '$xs',
  color: '$text',
  fontFamily: '$text',
  fontWeight: '400',
  letterSpacing: 1.2,
  borderRadius: 12,
  cursor: 'pointer',
  textDecoration: 'none',
  transition: '$easeInOut',

  variants: {
    type: {
      github: {
        color: '$github',
        '&:hover': { color: '$github' },
        '@md': { color: '$text' },
      },
      linkedin: {
        color: '$linkedin',
        '&:hover': { color: '$linkedin' },
        '@md': { color: '$text' },
      },
      telegram: {
        color: '$telegram',
        '&:hover': { color: '$telegram' },
        '@md': { color: '$text' },
      },
      instagram: {
        color: '$instagram',
        '&:hover': { color: '$instagram' },
        '@md': { color: '$text' },
      },
      twitter: {
        color: '$twitter',
        '&:hover': { color: '$twitter' },
        '@md': { color: '$text' },
      },
    },
  },
})

export const ItemName = styled('span', {
  marginLeft: 6,
  textTransform: 'capitalize',
  display: 'none',
  '@md': { display: 'block' },
})
