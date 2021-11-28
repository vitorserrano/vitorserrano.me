import styled, { css } from 'styled-components'

import { FiZap } from 'react-icons/fi'

export const Container = styled.div`
  ${({ theme: { colors, fonts, breakpoints } }) => css`
    && {
      display: flex;
      align-items: center;

      h1 {
        color: ${colors.heading};
        font-family: ${fonts.heading};
        font-size: ${breakpoints.fontSizes.lg};
        font-weight: 700;
        margin-left: 12px;

        strong {
          color: ${colors.primary};
          font-weight: 700;
        }
      }

      ${breakpoints.devices.md} {
        h1 {
          font-size: ${breakpoints.fontSizes.xl};
        }
      }
    }
  `}
`

export const Icon = styled(FiZap)`
  ${({ theme: { colors, breakpoints } }) => css`
    && {
      color: ${colors.primary};
      font-size: ${breakpoints.fontSizes.lg};

      ${breakpoints.devices.md} {
        font-size: ${breakpoints.fontSizes.xl};
      }
    }
  `}
`
