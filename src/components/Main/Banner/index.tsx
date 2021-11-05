import { Container } from '../../Container'
import { Social } from '../../Social'

import { Heading } from '../../Base/Heading'
import { Paragraph } from '../../Base/Paragraph'

import { Info, Illustration, Animation } from './styles'

export const Banner = () => {
  return (
    <Container variant="dark">
      <Info>
        <Heading>
          Vitor <br /> Serrano
        </Heading>

        <Paragraph>
          Desenvolvedor Front-end web e mobile, <br /> apaixonado pelo
          ecossistema JavaScript e <br /> nas horas vagas estudante de Design
        </Paragraph>

        <Social horizontal />
      </Info>

      <Illustration>
        <Animation width="100%" height="100%" />
      </Illustration>
    </Container>
  )
}
