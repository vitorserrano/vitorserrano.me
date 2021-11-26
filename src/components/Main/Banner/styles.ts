import styled, { css } from 'styled-components'

import LottieView from 'react-lottie'
import DevAnimation from '../../../assets/dev.json'

export const Info = styled.div`
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
    animationData: DevAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  },
})``
