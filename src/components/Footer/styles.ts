import styled, { css } from 'styled-components'
import { FiChevronUp } from 'react-icons/fi'

export const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.backgroundDark};
  transition: all 0.3s ease-out;
  align-items: center;
  z-index: 5;
`

export const Container = styled.div`
  width: 100%;
  height: 112px;
  padding: 24px;
  background: ${({ theme }) => theme.colors.backgroundDark};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-out;
  z-index: 10;

  ${({ theme: { breakpoints } }) => css`
    ${breakpoints.devices.xl} {
      padding: 24px 0;
      min-width: 70rem;
      max-width: 70rem;
    }
  `}
`

export const Button = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.3s ease-out;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(150%);
  }
`

export const Icon = styled(FiChevronUp).attrs({
  size: 26,
})`
  color: ${({ theme }) => theme.colors.heading};
`
