import styled, { css } from 'styled-components'

export const Info = styled.div`
  ${({ theme: { breakpoints } }) => css`
    margin-bottom: 60px;

    ${breakpoints.devices.md} {
      margin-bottom: 80px;
    }

    ${breakpoints.devices.lg} {
      margin-bottom: 0;
    }
  `}
`

export const Grid = styled.div`
  ${({ theme: { breakpoints } }) => css`
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 40px;
    width: 100%;

    ${breakpoints.devices.md} {
      grid-template-columns: repeat(3, 1fr);
    }

    ${breakpoints.devices.lg} {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);
      margin-left: 40px;
    }
  `}
`

export const Card = styled.div`
  ${({ theme: { colors, fonts, breakpoints } }) => css`
    background-color: ${colors.backgroundLight};
    display: flex;
    padding: 30px 20px;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 2px solid transparent;

    p {
      font-family: ${fonts.text};
      font-size: ${breakpoints.fontSizes.xs};
      color: ${colors.text};
      line-height: 26px;
      margin-top: 16px;
      text-align: center;
    }

    &:hover {
      transition: all 0.3s ease-out;

      border: 2px solid ${colors.backgroundLight};
      border-image-outset: 0;
      border-image-repeat: stretch;
      border-image-slice: 100%;
      border-image-source: none;
      border-image-width: 1;

      border-image: linear-gradient(
          225deg,
          ${colors.primary} 0%,
          ${colors.backgroundLight} 100%
        )
        1;
    }

    ${breakpoints.devices.xl} {
      padding: 30px 30px;
    }
  `}
`
