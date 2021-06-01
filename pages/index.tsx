import Head from 'next/head';

const Home = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Vitor Serrano</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello World</h1>
      </main>
    </div>
  );
};

export default Home;
