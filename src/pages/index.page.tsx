import type { NextPage } from 'next';

import Head from 'next/head';
import Gen from '@pages/gen';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Documents gen</title>
      </Head>
      <Gen />
    </>
  );
};

export default Home;
