import { FC } from 'react'
import { IconBaseProps } from 'react-icons'

import { Container } from './styles'
import { colors } from '../../styles/theme/colors'

type ButtonProps = {
  title: string
  icon: FC<IconBaseProps>
  href: string
}

export const Button = ({ title, icon: Icon, href }: ButtonProps) => {
  return (
    <Container href={href}>
      <Icon color={colors.background} size={26} />
      <span>{title}</span>
    </Container>
  )
}
