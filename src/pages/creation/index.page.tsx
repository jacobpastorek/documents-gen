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
        <H2>
          Vyberte <span>dokument</span>
        </H2>
        <Link href="/creation/splnomocnenie">
          <div className="doc-link">
            <BodyText>1. Splnomocnenie</BodyText>
          </div>
        </Link>
        <Link href="/creation/kupna-zmluva">
          <div className="doc-link">
            <BodyText>2. Kúpna zmluva</BodyText>
          </div>
        </Link>
        <Link href="/creation/vyzdvihnutie-vozidla">
          <div className="doc-link">
            <BodyText>3. Vyzdvihnutie vozidla</BodyText>
          </div>
        </Link>
      </CreationSC>
    </>
  );
};

export default Creation;
