import { BodyText, H2 } from '@components/ui/typography';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { CreationSC } from './creation.styled';

const Creation: NextPage = () => {
  return (
    <>
      <Head>
        <title>Documents Gen - Tvorba</title>
      </Head>
      <CreationSC>
        <H2>Vyberte dokument</H2>
        <Link href="/creation/splnomocnenie">
          <div className="doc-link">
            <BodyText>1. Splnomocnenie</BodyText>
          </div>
        </Link>
      </CreationSC>
    </>
  );
};

export default Creation;
