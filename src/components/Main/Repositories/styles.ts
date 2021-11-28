import styled, { css } from 'styled-components'

import { FiStar, FiCircle } from 'react-icons/fi'
import { BiGitRepoForked } from 'react-icons/bi'

type CircleIconProps = {
  color: string
}

export const Section = styled.section`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.backgroundLight};
  transition: all 0.3s ease-out;
  align-items: center;
  z-index: 5;
`

export const Container = styled.div`
  ${({ theme: { colors, breakpoints } }) => css`
    width: 100%;
    height: 100%;
    padding: 160px 24px;
    background-color: ${colors.backgroundLight};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-out;
    z-index: 10;

    ${breakpoints.devices.xl} {
      padding: 160px 0;
      min-width: 70rem;
      max-width: 70rem;
    }
  `}
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 40px;
  width: 100%;
  margin-top: 20px;

  ${({ theme: { breakpoints } }) => css`
    ${breakpoints.devices.lg} {
      grid-template-columns: repeat(2, 1fr);
    }
  `}
`

export const Card = styled.div`
  ${({
    theme: {
      colors,
      fonts,
      breakpoints: { fontSizes },
    },
  }) => css`
    background: ${colors.backgroundDark};
    border: 2px solid ${colors.backgroundDark};
    border-radius: 8px;
    height: 100%;
    padding: 30px 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3 {
      color: ${colors.heading};
      font-family: ${fonts.text};
      font-size: ${fontSizes.sm};
      font-weight: 500;
      margin-bottom: 12px;
    }

    p {
      color: ${colors.text};
      font-family: ${fonts.text};
      font-size: ${fontSizes.xs};
      line-height: 28px;
    }

    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 24px;

      p {
        display: flex;
        align-items: center;
      }

      .githubInfos {
        display: flex;
        align-items: center;
      }
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
  `}
`

export const CircleIcon = styled(FiCircle)<CircleIconProps>`
  color: ${({ theme, color }) => color || theme.colors.primary};
  font-size: 20px;
  margin-right: 6px;
`

export const StarIcon = styled(FiStar)`
  color: ${({ theme }) => theme.colors.heading};
  font-size: 20px;
  margin-right: 6px;
`

export const ForkIcon = styled(BiGitRepoForked)`
  color: ${({ theme }) => theme.colors.heading};
  font-size: 20px;
  margin: 0 6px 0 12px;
`
