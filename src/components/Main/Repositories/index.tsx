import Link from 'next/link'

import { Repository } from '../../../graphql/schema'
import { Heading } from '../../Base/Heading'

import {
  Section,
  Container,
  Grid,
  Card,
  CircleIcon,
  StarIcon,
  ForkIcon,
} from './styles'

type MyRepositoriesProps = {
  repositories: Repository[]
}

export const MyRepositories = ({ repositories }: MyRepositoriesProps) => {
  return (
    <Section>
      <Container>
        <Heading>Meus repositórios favoritos</Heading>

        <Grid>
          {repositories.map(repository => (
            <Link key={repository.id} href={repository.url} passHref>
              <a target="_blank">
                <Card>
                  <div className="header">
                    <h3>{repository.name}</h3>
                    <p>{repository.description}</p>
                  </div>

                  <div className="footer">
                    <p>
                      <CircleIcon
                        color={repository.languages.nodes[0]?.color}
                      />
                      {repository.languages.nodes[0]?.name || 'Documentação'}
                    </p>

                    <div className="githubInfos">
                      <p>
                        <StarIcon />
                        {repository.stargazerCount}
                      </p>
                      <p>
                        <ForkIcon />
                        {repository.forkCount}
                      </p>
                    </div>
                  </div>
                </Card>
              </a>
            </Link>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
