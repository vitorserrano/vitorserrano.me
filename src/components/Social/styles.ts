import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const Item = styled.a`
  margin-right: 18px;
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
