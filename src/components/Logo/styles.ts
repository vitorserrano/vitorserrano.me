import styled, { css } from 'styled-components'

export const Container = styled.div`
  && {
    display: flex;
    align-items: center;
  }

  h1 {
    ${({ theme: { colors, fonts, breakpoints } }) => css`
      color: ${colors.text};
      font-family: ${fonts.heading};
      font-size: ${breakpoints.fontSizes.lg};
      font-weight: 700;
      margin-left: 12px;

      strong {
        color: ${colors.primary};
        font-weight: 700;
      }
    `}
  }
`
