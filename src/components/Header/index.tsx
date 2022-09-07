import { useState } from 'react'

import { Drawer, ActiveLink } from 'src/components'
import { options } from 'src/utils/options'
import { Container, NavBar, NavList, NavItem } from './styles'

export const Header = () => {
  const [drawerIsVisible, setDrawerisVisible] = useState(false)

  const handleToggleDrawer = () => {
    document.body.style.overflow = drawerIsVisible ? 'unset' : 'hidden'
    document.getElementsByTagName('main')[0].style.display = drawerIsVisible
      ? 'block'
      : 'none'

    setDrawerisVisible(!drawerIsVisible)
  }

  return (
    <Container>
      <NavBar>
        <NavList>
          {options.map(({ id, name, href }) => (
            <NavItem key={id}>
              <ActiveLink href={href} activeClassName="active" passHref>
                <a>{name}</a>
              </ActiveLink>
            </NavItem>
          ))}
        </NavList>
      </NavBar>

      <Drawer isVisible={drawerIsVisible} onOpen={handleToggleDrawer} />
    </Container>
  )
}
