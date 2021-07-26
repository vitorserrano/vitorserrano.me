import LottieView from 'react-lottie'

import { Container } from '../../Container'
import { Social } from '../../Social'

import DevAnimation from '../../../assets/dev.json'

import { Title, Description, Animation } from './styles'

export const Banner = () => {
  return (
    <Container variant="dark">
      <div>
        <Title>
          Vitor <br /> Serrano
        </Title>

        <Description>
          Desenvolvedor Front-end web e mobile, <br /> apaixonado por todo
          ecossistema JavaScript e <br /> nas horas vagas estudante de Design
        </Description>

        <Social />
      </div>

      <div>
        <Animation>
          <LottieView
            options={{
              loop: true,
              autoplay: true,
              animationData: DevAnimation,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
              },
            }}
            width={420}
            height={420}
          />
        </Animation>
      </div>
    </Container>
  )
}
