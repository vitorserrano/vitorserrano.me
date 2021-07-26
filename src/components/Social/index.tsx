import Link from 'next/link'

import * as Feather from 'react-icons/fi'
import { social } from '../../utils/social'

import { Container, Item } from './styles'

export const Social = () => {
  return (
    <Container>
      {social.map(item => {
        const TagName = Feather[item.name]

        return (
          <Link key={item.id} href={item.href} passHref>
            <Item target="_blank">
              <TagName color="#692ACC" size={26} />
            </Item>
          </Link>
        )
      })}
    </Container>
  )
}
