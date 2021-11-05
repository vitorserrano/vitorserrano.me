import { Container } from '../../Container'

import { Heading } from '../../Base/Heading'
import { Paragraph } from '../../Base/Paragraph'

export const About = () => {
  return (
    <Container variant="light">
      <div>
        <Heading>Um pouco sobre mim</Heading>

        <Paragraph>
          Atualmente sou Desenvolvedor Web atuando com PHP, AngularJS e
          JavaScript nos projetos/produtos do meu atual emprego.
        </Paragraph>

        <Paragraph>
          Estudo Node.js, React e React Native por conta própria, pois sou
          apaixonado por todo o ecossistema JavaScritpt e acredito que com essa
          stack de tecnologias irei alcançar meus objetivos.
        </Paragraph>

        <Paragraph>
          Meu objetivo é criar aplicações limpas utilizando bons padrões de
          códigos com um design simples e intuitivo. Sou movido por construir
          soluções com tecnologias atuais e escaláveis.
        </Paragraph>
      </div>
    </Container>
  )
}
