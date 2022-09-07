import Link from 'next/link'
import * as PhosphorIcon from 'phosphor-react'
import { VariantProps } from '@stitches/react'

import { socials } from 'src/utils/socials'
import { Container, Item, ItemName } from './styles'

interface SocialsProps {
  direction: 'row' | 'column'
}

export const Socials = ({ direction = 'row' }: SocialsProps) => (
  <Container direction={direction}>
    {socials.map(({ id, name, icon, href }) => {
      const Icon = PhosphorIcon[icon]

      return (
        <Link key={id} href={href} passHref>
          <Item type={name as VariantProps<typeof Item[]>} target="_blank">
            <Icon size={22} weight="regular" />
            {direction === 'row' && <ItemName>{name}</ItemName>}
          </Item>
        </Link>
      )
    })}
  </Container>
)
