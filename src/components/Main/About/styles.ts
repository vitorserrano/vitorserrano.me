import styled, { css } from 'styled-components'

import LottieView from 'react-lottie'
import AboutAnimation from '../../../assets/about.json'

export const Illustration = styled.div`
  ${({ theme: { breakpoints } }) => css`
    order: 2;

    ${breakpoints.devices.lg} {
      order: 1;
    }
  `}
`

export const Animation = styled(LottieView).attrs({
  options: {
    loop: true,
    autoplay: true,
    animationData: AboutAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  },
})``

export const Content = styled.div`
  ${({ theme: { breakpoints } }) => css`
    margin-bottom: 120px;
    order: 1;

    ${breakpoints.devices.md} {
      margin-bottom: 160px;
    }

    ${breakpoints.devices.lg} {
      margin-bottom: 0;
    }
  `}
`
