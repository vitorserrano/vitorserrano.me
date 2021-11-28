import { useState } from 'react'

import { Drawer } from './Drawer'

import { Container } from './styles'

export const Navbar = () => {
  const [drawerIsVisible, setDrawerisVisible] = useState(false)

  const handleToggleDrawer = () => {
    document.body.style.overflow = drawerIsVisible ? 'unset' : 'hidden'
    document.getElementsByTagName('main')[0].style.display = drawerIsVisible
      ? 'block'
      : 'none'

    setDrawerisVisible(!drawerIsVisible)
  }

  const sections = ['Sobre', 'Skills', 'Projetos', 'Experiência', 'Contato']

  return (
    <Container>
      <ul className="items">
        {sections.map((section, index) => (
          <li key={String(index)}>
            <h2>{section}</h2>
          </li>
        ))}
      </ul>

      <Drawer isOpen={drawerIsVisible} onOpen={handleToggleDrawer} />
    </Container>
  )
}
