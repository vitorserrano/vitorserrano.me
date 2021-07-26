import styled, { css } from 'styled-components'

export const Container = styled.a`
  ${({ theme: { colors, fonts, fontSizes } }) => css`
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.primary};

    span {
      color: ${colors.background};
      font-family: ${fonts.text};
      font-size: ${fontSizes.md};
      font-weight: 400;
      margin-left: 14px;
    }
  `}
`
