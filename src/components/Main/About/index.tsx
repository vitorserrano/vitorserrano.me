import { Container } from '../../Container'

import { Heading } from '../../Base/Heading'
import { Paragraph } from '../../Base/Paragraph'

import { Illustration, Animation } from './styles'

export const About = () => (
  <Container variant="light">
    <Illustration>
      <Animation width="100%" height="100%" />
    </Illustration>

    <div>
      <Heading>
        Um pouco <br /> sobre mim
      </Heading>

      <Paragraph>
        Sou nascido em Cianorte uma cidade no interior do Paraná, amo jogos
        eletrônicos, futebol e basquete.
      </Paragraph>

      <Paragraph>
        Crio soluções mobile utilizando <strong>React Native</strong>.
        Apaixonado por tecnologias atuais e escaláveis, quero me especializar
        cada vez mais em todo os ecossistema <strong>mobile</strong>.
      </Paragraph>

      <Paragraph>
        Acredito que compartilhar conhecimento e trabalhar em equipe são os
        maiores pilares de grandes desenvolvedores, por isso faço parte da
        comunidade de desenvolvedores de Cianorte, a nossa tão amada {''}
        <strong>DevCia</strong>.
      </Paragraph>
    </div>
  </Container>
)
