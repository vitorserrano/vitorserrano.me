import styled, { css } from 'styled-components'

export const Title = styled.span`
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.text};
    font-family: ${fonts.heading};
    font-weight: 700;
    font-size: 3.5rem;
    margin-bottom: 16px;
  `}
`

export const Description = styled.p`
  ${({ theme: { colors, fonts, breakpoints } }) => css`
    color: ${colors.description};
    font-family: ${fonts.text};
    font-size: ${breakpoints.fontSizes.sm};
    max-width: 480px;
    line-height: 28px;
    margin-bottom: 40px;
  `}
`

export const Animation = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 50%;
  padding: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`
