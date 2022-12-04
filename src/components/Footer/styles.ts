import { styled } from 'src/styles'

export const Container = styled('footer', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$background',
  paddingHorizontal: 24,
  paddingVertical: 20,
  transition: '$easeInOut',
})

export const List = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  listStyle: 'none',
})
