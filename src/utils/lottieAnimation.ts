import { ReactNode } from 'react'

export const lottieAnimationOptions = (animation: ReactNode) => ({
  loop: true,
  autoplay: true,
  animationData: animation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
})
