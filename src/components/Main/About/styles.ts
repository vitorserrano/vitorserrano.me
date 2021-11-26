import styled, { css } from 'styled-components'

import LottieView from 'react-lottie'
import AboutAnimation from '../../../assets/about.json'

export const Illustration = styled.div`
  ${({ theme: { breakpoints } }) => css`
    margin-bottom: 120px;

    ${breakpoints.devices.md} {
      margin-bottom: 160px;
    }

    ${breakpoints.devices.lg} {
      margin-bottom: 0;
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
