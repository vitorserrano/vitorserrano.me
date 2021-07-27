import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme: { colors, fonts, breakpoints } }) => css`
    body {
      overflow: hidden;
    }

    .items {
      display: none;
    }

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

    ${breakpoints.devices.xl} {
      .items {
        display: inline-flex;
        flex-wrap: wrap;
        gap: 40px;
        list-style: none;
      }
    }
  `}
`
