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

export const Illustration = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to left, #814dd4, #986edc, #b699e6);
  box-shadow: 0px 0px 14px 4px rgba(105, 42, 204, 0.5);
  border-radius: 100%;
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
