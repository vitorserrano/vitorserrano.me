import { ReactNode } from 'react'
import { ParagraphText } from './styles'

type ParagraphProps = {
  children: ReactNode
}

export const Paragraph = ({ children }: ParagraphProps) => (
  <ParagraphText>{children}</ParagraphText>
)
