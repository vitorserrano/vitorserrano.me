import { Container } from '../../Container'
import { Social } from '../../Social'

import { Heading } from '../../Base/Heading'
import { Paragraph } from '../../Base/Paragraph'

import { Info, Animation } from './styles'

export const Banner = () => (
  <Container variant="dark">
    <Info>
      <Heading>
        Vitor <br /> Serrano
      </Heading>

      <div style={{ marginBottom: 40 }}>
        <Paragraph>
          Desenvolvedor Front-end web e mobile, <br /> apaixonado pelo
          ecossistema JavaScript e <br /> nas horas vagas estudante de Design
        </Paragraph>
      </div>

      <Social direction="row" />
    </Info>

    <div>
      <Animation width="100%" height="100%" />
    </div>
  </Container>
)
