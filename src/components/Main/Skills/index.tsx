import {
  IoLogoJavascript,
  IoLogoReact,
  IoLogoFirebase,
  IoLogoFigma,
} from 'react-icons/io5'

import { SiTypescript, SiStyledComponents } from 'react-icons/si'

import { Container } from '../../Container'

import { Heading } from '../../Base/Heading'
import { Paragraph } from '../../Base/Paragraph'

import { Info, Grid, Card } from './styles'

export const Skills = () => (
  <Container variant="dark">
    <Info>
      <Heading>
        Tecnologias <br /> que utilizo
      </Heading>

      <Paragraph>
        Com o passar dos anos eu acabei focando no ecossistema javascript e hoje
        em dia utilizo essas tecnologias fantasticas.
      </Paragraph>
    </Info>

    <Grid>
      <Card>
        <IoLogoJavascript color="#692ACC" size="54" />
        <p>Javascript</p>
      </Card>
      <Card>
        <SiTypescript color="#692ACC" size="54" />
        <p>Typescript</p>
      </Card>
      <Card>
        <IoLogoReact color="#692ACC" size="54" />
        <p>React Native</p>
      </Card>
      <Card>
        <IoLogoFirebase color="#692ACC" size="54" />
        <p>Firebase</p>
      </Card>
      <Card>
        <IoLogoFigma color="#692ACC" size="54" />
        <p>Figma</p>
      </Card>
      <Card>
        <SiStyledComponents color="#692ACC" size="54" />
        <p>Styled Components</p>
      </Card>
    </Grid>
  </Container>
)
