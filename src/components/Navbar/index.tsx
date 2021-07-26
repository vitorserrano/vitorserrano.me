import { Container, Drawer } from './styles'

export const Navbar = () => {
  return (
    <Container>
      <ul className="items">
        <li>
          <h2>Sobre</h2>
        </li>
        <li>
          <h2>Skills</h2>
        </li>
        <li>
          <h2>Projetos</h2>
        </li>
        <li>
          <h2>Experiência</h2>
        </li>
        <li>
          <h2>Contato</h2>
        </li>
      </ul>

      <Drawer />
    </Container>
  )
}
