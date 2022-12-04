import { FiAlignRight, FiX } from 'react-icons/fi'

import { options } from 'src/utils/options'
import { ActiveLink, Socials } from 'src/components'
import { Button, Container, NavList, NavItems, Item } from './styles'

interface DrawerProps {
  isVisible: boolean
  onOpen: () => void
}

export const Drawer = ({ isVisible, onOpen }: DrawerProps) => (
  <>
    <Button onClick={onOpen}>{isVisible ? <FiX /> : <FiAlignRight />}</Button>

    <Container isVisible={isVisible}>
      <NavList>
        <NavItems>
          {options.map(({ id, href, name }) => (
            <Item key={id} onClick={onOpen}>
              <ActiveLink href={href} activeClassName="active">
                <a>{name}</a>
              </ActiveLink>
            </Item>
          ))}
        </NavItems>

        <Socials direction="column" />
      </NavList>
    </Container>
  </>
)
