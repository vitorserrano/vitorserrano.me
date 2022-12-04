import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import { Star, GitFork } from 'phosphor-react'

import client from 'src/graphql/apollo-client'
import { getRepositories } from 'src/graphql/queries/getRepositories'
import { Repositories } from 'src/graphql/schema'

import { Layout, Title, Text } from 'src/components'
import { Infos, Grid, Card, Name } from 'src/styles/pages/projects'

const Projects = ({
  repositories,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Layout align="center">
    <div>
      <Infos>
        <Title>Projetos</Title>
        <Text type="paragraph">
          Aqui estão alguns dos meus principais projetos, aplicações web,
          <br />
          mobile e também contribuição para projetos open source.
        </Text>

        <Text type="paragraph">
          <Link href="https://github.com/vitorserrano?tab=repositories">
            <a target="_blank">Ver repositórios no GitHub</a>
          </Link>
        </Text>
      </Infos>

      <Grid>
        {repositories.map(repository => (
          <Link key={repository.id} href={repository.url} passHref>
            <a target="_blank">
              <Card>
                <div className="header">
                  <Name>{repository.name}</Name>
                  <Text type="paragraph">{repository.description}</Text>
                </div>

                <div className="footer">
                  <span className="language">
                    {repository.languages.nodes[0]?.name ?? ''}
                  </span>
                  <div className="icons">
                    <Star size={16} />
                    <span>{repository.stargazerCount}</span>
                    <GitFork size={16} />
                    <span>{repository.forkCount}</span>
                  </div>
                </div>
              </Card>
            </a>
          </Link>
        ))}
      </Grid>
    </div>
  </Layout>
)

export default Projects

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data }: Repositories = await client.query({
      query: getRepositories,
    })

    return {
      props: {
        repositories: data.user.pinnedItems.nodes,
      },
      revalidate: 10,
    }
  } catch {
    return {
      props: { repositories: [] },
      revalidate: 10,
    }
  }
}
