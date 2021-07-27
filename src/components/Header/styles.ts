import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme: { colors, breakpoints } }) => css`
    display: flex;
    justify-content: center;
    background-color: ${colors.background};
    height: 80px;

    ${breakpoints.devices.md} {
      height: 120px;
    }
  `}
`

export const Container = styled.div`
  ${({ theme: { colors, breakpoints } }) => css`
    width: 100%;
    background-color: ${colors.background};
    padding: 0 24px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease-out;
    box-shadow: inset 0 -1px 0 #d9d9d9;

    ${breakpoints.devices.xl} {
      padding: 0;
      max-width: 70rem;
      min-width: 70rem;
    }
  `}
`
