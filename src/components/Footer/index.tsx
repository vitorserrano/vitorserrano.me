import { Social } from '../Social'
import { Wrapper, Container, Button, Icon } from './styles'

export const Footer = () => {
  const handleScrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <Wrapper>
      <Container>
        <Social direction="row" />

        <Button onClick={handleScrollToTop}>
          <Icon />
        </Button>
      </Container>
    </Wrapper>
  )
}
