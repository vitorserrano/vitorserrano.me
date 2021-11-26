import styled, { css } from 'styled-components'

export const ParagraphText = styled.p`
  ${({ theme: { colors, fonts, breakpoints } }) => css`
    color: ${colors.text};
    font-family: ${fonts.text};
    font-size: ${breakpoints.fontSizes.sm};
    max-width: 480px;
    line-height: 28px;
    margin-bottom: 16px;

    ${breakpoints.devices.sm} {
      font-size: ${breakpoints.fontSizes.xs};
    }
  `}
`
