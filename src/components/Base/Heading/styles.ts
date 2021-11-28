import styled, { css } from 'styled-components'

export const HeadingText = styled.h1`
  ${({ theme: { colors, fonts, breakpoints } }) => css`
    color: ${colors.heading};
    font-family: ${fonts.heading};
    font-weight: 700;
    font-size: ${breakpoints.fontSizes['2xl']};
    line-height: 1.22;
    margin-bottom: 22px;
  `}
`
