import { Logo } from '../Logo'
import { Navbar } from '../Navbar'

import { Wrapper, Container } from './styles'

export const Header = () => (
  <Wrapper>
    <Container>
      <Logo />
      <Navbar />
    </Container>
  </Wrapper>
)
