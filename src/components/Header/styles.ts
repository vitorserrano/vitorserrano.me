import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Container = styled.div`
  ${({ theme: { colors, breakpoints } }) => css`
    width: 100%;
    background-color: ${colors.background};
    padding: 44px 24px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease-out;
    box-shadow: inset 0 -1px 0 #d9d9d9;

    ${breakpoints.devices.xl} {
      padding: 44px 0;
      max-width: 70rem;
      min-width: 70rem;
    }
  `}
`
