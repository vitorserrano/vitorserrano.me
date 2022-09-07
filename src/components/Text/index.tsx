import { HTMLAttributes, ReactNode } from 'react'
import { VariantProps } from '@stitches/react'
import { StyledText } from './styles'

interface TextProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof StyledText> {
  children: ReactNode
}

export const Text = ({ children, ...rest }: TextProps) => (
  <StyledText {...rest}>{children}</StyledText>
)
