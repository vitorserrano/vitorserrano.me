import { Text } from '../../Text'
import { Dot } from './styles'

interface TitleProps {
  children: string
}

export const Title = ({ children }: TitleProps) => (
  <Text type="heading">
    {children}
    <Dot>.</Dot>
  </Text>
)
