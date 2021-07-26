import styled, { css } from 'styled-components'

type Props = {
  variant: string
}

export const Section = styled.section<Props>`
  display: flex;
  justify-content: center;
  background-color: ${({ variant }) => variant};
  transition: all 0.3s ease-out;
  align-items: center;
`

export const Wrapper = styled.div<Props>`
  width: 100%;
  height: 100%;
  padding: 160px 24px;
  background-color: ${({ variant }) => variant};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-out;

  ${({ theme: { breakpoints } }) => css`
    ${breakpoints.devices.lg} {
      flex-direction: row;
    }

    ${breakpoints.devices.xl} {
      padding: 160px 0;
      min-width: 70rem;
      max-width: 70rem;
    }
  `}
`
