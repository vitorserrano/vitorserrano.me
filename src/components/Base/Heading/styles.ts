import styled, { css } from 'styled-components'

export const HeadingText = styled.span`
  ${({ theme: { colors, fonts, breakpoints } }) => css`
    color: ${colors.text};
    font-family: ${fonts.heading};
    font-weight: 700;
    font-size: ${breakpoints.fontSizes['2xl']};
    margin-bottom: 16px;
  `}
`
