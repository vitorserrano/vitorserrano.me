import Link from 'next/link'

import * as Feather from 'react-icons/fi'
import { social } from '../../utils/social'

import { Container, Item } from './styles'
import { colors } from '../../styles/theme/colors'

type SocialProps = {
  direction: 'column' | 'row'
}

export const Social = ({ direction }: SocialProps) => (
  <Container direction={direction}>
    {social.map(item => {
      const TagName = Feather[item.name]

      return (
        <Link key={item.id} href={item.href} passHref>
          <Item target="_blank">
            <TagName color={colors.primary} size={26} />
          </Item>
        </Link>
      )
    })}
  </Container>
)
