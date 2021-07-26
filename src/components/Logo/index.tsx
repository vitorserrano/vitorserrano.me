import { FiZap } from 'react-icons/fi'

import { Container } from './styles'
import { colors } from '../../styles/theme/colors'

export const Logo = () => (
  <Container>
    <FiZap color={colors.primary} size={40} />

    <h1>
      vitor<strong>.</strong>
    </h1>
  </Container>
)
