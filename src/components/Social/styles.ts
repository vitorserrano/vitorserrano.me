import styled from 'styled-components'

type ContainerProps = {
  direction: 'column' | 'row'
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 18px;
  flex-direction: ${({ direction }) => direction};
`

export const Item = styled.a`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.3s ease-out;

  &:hover {
    transition: all 0.3s ease-out;

    border: 2px solid ${({ theme }) => theme.colors.backgroundLight};
    border-image-outset: 0;
    border-image-repeat: stretch;
    border-image-slice: 100%;
    border-image-source: none;
    border-image-width: 1;

    border-image: linear-gradient(
        225deg,
        ${({ theme }) => theme.colors.primary} 0%,
        ${({ theme }) => theme.colors.backgroundLight} 100%
      )
      1;
  }
`
