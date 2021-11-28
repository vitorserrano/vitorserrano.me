import { InferGetServerSidePropsType } from 'next'
import Head from 'next/head'

import client from '../../apollo-client'
import { getRepositories } from '../graphql/queries/getRepositories'
import { Repositories } from '../graphql/schema'

import { Header, Main } from '../components'

export const getServerSideProps = async () => {
  try {
    const { data }: Repositories = await client.query({
      query: getRepositories,
    })

    return {
      props: {
        repositories: data.user.pinnedItems.nodes,
      },
    }
  } catch {
    return {
      props: { repositories: [] },
    }
  }
}

const Home = ({
  repositories,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <>
    <Head>
      <title>Vitor Serrano</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    <Main repositories={repositories} />
  </>
)

export default Home
