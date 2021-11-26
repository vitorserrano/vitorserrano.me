import Head from 'next/head'

import { Header, Main } from '../components'

const Home = () => (
  <>
    <Head>
      <title>Vitor Serrano</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    <Main />
  </>
)

export default Home
