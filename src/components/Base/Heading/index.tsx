import { ReactNode } from 'react'
import { HeadingText } from './styles'

type HeadingProps = {
  children: ReactNode
}

export const Heading = ({ children }: HeadingProps) => (
  <HeadingText>{children}</HeadingText>
)
