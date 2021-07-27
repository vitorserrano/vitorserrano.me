import { useState } from 'react'

import { Drawer } from './Drawer'

import { Container } from './styles'

export const Navbar = () => {
  const [drawerIsVisible, setDrawerisVisible] = useState(false)

  const handleToggleDrawer = () => {
    document.body.style.overflow = !drawerIsVisible ? 'hidden' : 'unset'
    setDrawerisVisible(!drawerIsVisible)
  }

  return (
    <Container>
      <ul className="items">
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
      </ul>

      <Drawer isOpen={drawerIsVisible} onOpen={handleToggleDrawer} />
    </Container>
  )
}
