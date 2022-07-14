import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import SaleContract from '@pages/creation/components/sale-contract';

const KupnaZmluva: NextPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <Head>
        <title>Documents Gen - Kupna zmluva</title>
      </Head>
      {isClient && <SaleContract />}
    </>
  );
};

export default KupnaZmluva;
