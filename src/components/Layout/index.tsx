import { ReactNode } from 'react'
import { VariantProps } from '@stitches/react'

import { Header, Footer } from 'src/components/'
import { Wrapper, Main, Container } from './styles'

interface LayoutProps extends VariantProps<typeof Container> {
  children: ReactNode
}

export const Layout = ({ children, align = 'space-between' }: LayoutProps) => (
  <Wrapper>
    <Header />

    <Main>
      <Container align={align}>{children}</Container>
    </Main>

    <Footer />
  </Wrapper>
)
