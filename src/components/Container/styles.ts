import styled, { css } from 'styled-components'

type Props = {
  variant: string
}

export const Section = styled.section<Props>`
  display: flex;
  justify-content: center;
  background-color: ${({ variant }) => variant};
`

export const Wrapper = styled.div<Props>`
  min-width: 80rem;
  max-width: 80rem;
  height: 100%;
  padding: 160px 0;
  background-color: ${({ variant }) => variant};

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme: { breakpoints } }) => css`
    ${breakpoints.devices.sm} {
      background-color: green;
    }
  `}
`
