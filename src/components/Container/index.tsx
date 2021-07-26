import { ReactNode } from 'react'

import { Section, Wrapper } from './styles'
import { colors } from '../../styles/theme/colors'

type ContainerProps = {
  variant?: 'dark' | 'light'
  children: ReactNode
}

export const Container = ({ variant = 'dark', children }: ContainerProps) => {
  const variantColor = {
    dark: colors.background,
    light: colors.backgroundLight,
  }

  return (
    <Section variant={variantColor[variant]}>
      <Wrapper variant={variantColor[variant]}>{children}</Wrapper>
    </Section>
  )
}
