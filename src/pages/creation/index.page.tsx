import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Attorney from './components/attorney';

const Creation: NextPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <Head>
        <title>Documents Gen - Splnomocnenie</title>
      </Head>
      {isClient && <Attorney />}
    </>
  );
};

export default Creation;
