import { FiSun } from 'react-icons/fi'
import { Logo } from '../Logo'

import { Container, Menu } from './styles'

export const Header = () => {
  return (
    <Container>
      <Logo />

      <Menu>
        <li>
          <h2>Sobre</h2>
        </li>
        <li>
          <h2>Skills</h2>
        </li>
        <li>
          <h2>Projetos</h2>
        </li>
        <li>
          <h2>Experiência</h2>
        </li>
        <li>
          <h2>Contato</h2>
        </li>
      </Menu>
    </Container>
  )
}
