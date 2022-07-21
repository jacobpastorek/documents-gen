import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import CarShipping from '@pages/creation/components/car-shipping';

const VyzdvihnutieVozidla: NextPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <Head>
        <title>Documents Gen - Vyzdvihnutie vozidla</title>
      </Head>
      {isClient && <CarShipping />}
    </>
  );
};

export default VyzdvihnutieVozidla;
