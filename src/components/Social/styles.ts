import styled from 'styled-components'

type ContainerProps = {
  horizontal: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 18px;
  flex-direction: ${({ horizontal }) => (horizontal ? 'row' : 'column')};
`

export const Item = styled.a`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background-color: #d9d9d9;
  }
`
