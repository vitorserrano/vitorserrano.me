import Link from 'next/link'
import LottieView from 'react-lottie'
import { FiArrowRight } from 'react-icons/fi'

import { Layout, Text } from 'src/components'
import DevAnimation from 'src/assets/dev.json'

import { lottieAnimationOptions } from 'src/utils/lottieAnimation'
import { Presentation, Button } from 'src/styles/pages/home'

const Home = () => (
  <Layout>
    <Presentation>
      <div className="title">
        <Text type="heading">
          Oi<strong>,</strong> eu sou <br /> Vitor Serrano<strong>.</strong>
        </Text>

        <Text type="paragraph">
          Desenvolvedor Front-end web e mobile, <br />
          apaixonado pelo ecossistema JavaScript.
        </Text>
      </div>

      <Button>
        <Link href="/projects">
          <a>
            Ver projetos
            <FiArrowRight size={20} />
          </a>
        </Link>
      </Button>
    </Presentation>

    <div>
      <LottieView options={lottieAnimationOptions(DevAnimation)} />
    </div>
  </Layout>
)

export default Home
