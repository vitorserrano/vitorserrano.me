import { Repository } from '../../graphql/schema'

import { Banner } from './Banner'
import { About } from './About'
import { Skills } from './Skills'
import { MyRepositories } from './Repositories'

type MainProps = {
  repositories: Repository[]
}

export const Main = ({ repositories }: MainProps) => (
  <main>
    <Banner />
    <About />
    <Skills />
    <MyRepositories repositories={repositories} />
  </main>
)
