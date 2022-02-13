import { Social } from '../../Social'

import { MenuIcon, CloseIcon, Container } from './styles'

type DrawerProps = {
  isOpen: boolean
  onOpen: () => void
}

export const Drawer = ({ isOpen, onOpen }: DrawerProps) => {
  const Button = isOpen ? CloseIcon : MenuIcon

  return (
    <>
      <Button onClick={onOpen} />

      <Container isOpen={isOpen}>
        <ul>
          <div className="items">
            <li>
              <a>Sobre</a>
            </li>
            <li>
              <a>Skills</a>
            </li>
            <li>
              <a>Projetos</a>
            </li>
            <li>
              <a>Experiência</a>
            </li>
            <li>
              <a>Contato</a>
            </li>
          </div>

          <Social direction="column" />
        </ul>
      </Container>
    </>
  )
}
