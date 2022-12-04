import Link from 'next/link'
import LottieView from 'react-lottie'

import { Layout, Title, Text } from 'src/components'
import { lottieAnimationOptions } from 'src/utils/lottieAnimation'
import AboutAnimation from 'src/assets/about.json'
import { Illustration, Content } from 'src/styles/pages/about'

const About = () => (
  <Layout>
    <Illustration>
      <LottieView
        width="100%"
        height="100%"
        options={lottieAnimationOptions(AboutAnimation)}
      />
    </Illustration>

    <Content>
      <Title>Sobre mim</Title>

      <Text type="paragraph">
        Sou nascido em Cianorte uma cidade no interior do Paraná, amo jogos
        eletrônicos, futebol e basquete.
      </Text>

      <Text type="paragraph">
        Crio soluções mobile utilizando <span>React Native</span>. Apaixonado
        por tecnologias atuais e escaláveis, quero me especializar cada vez mais
        em aplicações <span> mobile</span>.
      </Text>

      <Text type="paragraph">
        Acredito que compartilhar conhecimento e trabalhar em equipe são os
        maiores pilares de grandes desenvolvedores, por isso faço parte da
        comunidade de desenvolvedores de Cianorte, a nossa{' '}
        <Link
          href="https://devcia.slack.com/join/shared_invite/zt-1ek559xrn-03db_YbIHjz0IBCgWCVEgg#/shared-invite/email"
          passHref
        >
          <a target="_blank">DevCia</a>
        </Link>
        .
      </Text>
    </Content>
  </Layout>
)

export default About
