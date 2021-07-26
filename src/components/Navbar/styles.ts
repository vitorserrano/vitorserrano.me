import styled, { css } from 'styled-components'

import { FiAlignRight } from 'react-icons/fi'

export const Container = styled.div`
  ${({ theme: { colors, fonts, breakpoints } }) => css`
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

export const Drawer = styled(FiAlignRight)`
  ${({ theme: { colors, breakpoints } }) => css`
    color: ${colors.text};
    font-size: ${breakpoints.fontSizes.lg};

    ${breakpoints.devices.md} {
      font-size: ${breakpoints.fontSizes.xl};
    }

    ${breakpoints.devices.xl} {
      display: none;
    }
  `}
`
