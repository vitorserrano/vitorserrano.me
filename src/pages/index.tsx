import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'

import client from '../../apollo-client'
import { getRepositories } from '../graphql/queries/getRepositories'
import { Repositories } from '../graphql/schema'

import { Header, Main, Footer } from '../components'

export default function Home({
  repositories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Vitor Serrano</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main repositories={repositories} />
      <Footer />
    </>
  )
}

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
