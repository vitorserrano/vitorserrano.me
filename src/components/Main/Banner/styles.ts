import styled, { css } from 'styled-components'

import LottieView from 'react-lottie'
import DevAnimation from '../../../assets/dev.json'

export const Info = styled.div`
  ${({ theme: { breakpoints } }) => css`
    ${breakpoints.devices.md} {
      margin-bottom: 160px;
    }

    ${breakpoints.devices.lg} {
      margin-bottom: 0;
    }
  `}
`

export const Title = styled.span`
  ${({ theme: { colors, fonts, breakpoints } }) => css`
    color: ${colors.text};
    font-family: ${fonts.heading};
    font-weight: 700;
    font-size: ${breakpoints.fontSizes['2xl']};
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

    ${breakpoints.devices.sm} {
      font-size: ${breakpoints.fontSizes.xs};
    }
  `}
`

export const Illustration = styled.div`
  ${({ theme: { breakpoints } }) => css`
    display: none;

    ${breakpoints.devices.md} {
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(to left, #814dd4, #986edc, #b699e6);
      box-shadow: 0px 0px 14px 4px rgba(105, 42, 204, 0.5);
      border-radius: 100%;
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
