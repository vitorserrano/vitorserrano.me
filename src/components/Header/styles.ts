import styled, { css } from 'styled-components'

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 44px 72px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-out;
  box-shadow: inset 0 -1px 0 #d9d9d9;
`

export const Menu = styled.ul`
  && {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 40px;
    list-style: none;

    ${({ theme: { colors, fonts, breakpoints } }) => css`
      h2 {
        color: ${colors.text};
        font-family: ${fonts.heading};
        font-size: ${breakpoints.fontSizes.md};
        font-weight: 500;
        cursor: pointer;

        &:hover {
          color: ${colors.primary};
        }
      }

      ${breakpoints.devices.sm} {
        display: none;
      }
    `}
  }
`
