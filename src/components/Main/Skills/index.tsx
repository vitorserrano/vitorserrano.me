import { Container } from '../../Container'

import { Heading } from '../../Base/Heading'
import { Paragraph } from '../../Base/Paragraph'

import { tecnologies } from '../../../utils/tecnologies'
import { colors } from '../../../styles/theme/colors'

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
      {tecnologies.map(tecnology => {
        const Icon = tecnology.iconComponent

        return (
          <Card key={tecnology.id}>
            <Icon color={colors.primary} size={54} />

            <p>{tecnology.label}</p>
          </Card>
        )
      })}
    </Grid>
  </Container>
)
