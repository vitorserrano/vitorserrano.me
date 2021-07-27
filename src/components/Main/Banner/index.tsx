import { Container } from '../../Container'
import { Social } from '../../Social'

import { Info, Title, Description, Illustration, Animation } from './styles'

export const Banner = () => {
  return (
    <Container variant="dark">
      <Info>
        <Title>
          Vitor <br /> Serrano
        </Title>

        <Description>
          Desenvolvedor Front-end web e mobile, <br /> apaixonado pelo
          ecossistema JavaScript e <br /> nas horas vagas estudante de Design
        </Description>

        <Social horizontal />
      </Info>

      <Illustration>
        <Animation width="100%" height="100%" />
      </Illustration>
    </Container>
  )
}
