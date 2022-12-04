import { styled } from 'src/styles'

export const Illustration = styled('div', {
  width: '100%',
  height: '100%',
  order: 2,

  '@sm': {
    width: '80%',
    height: '80%',
  },
  '@md': {
    width: '60%',
    height: '60%',
  },
  '@lg': {
    width: '45%',
    height: '45%',
    order: 1,
  },
})

export const Content = styled('div', {
  marginBottom: 80,
  order: 1,

  p: { maxWidth: 400 },
  '@lg': { order: 2, marginBottom: 0 },
})
