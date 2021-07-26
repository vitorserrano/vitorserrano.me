import Head from 'next/head'

import { Header } from '../components/Header'
import { Main } from '../components/Main'

const Home = () => {
  return (
    <>
      <Head>
        <title>Vitor Serrano</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main />
    </>
  )
}

export default Home
