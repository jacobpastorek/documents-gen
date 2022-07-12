import { BodyText, H2 } from '@components/ui/typography';
import React from 'react';
import { GenSC } from './gen.styled';
import { ReactComponent as PlusIcon } from '@assets/svg/file-plus.svg';
import { ReactComponent as DatabaseIcon } from '@assets/svg/database.svg';
import Link from 'next/link';

const Gen: React.FC = () => {
  return (
    <GenSC>
      <section className="section__left">
        <Link href="/creation">
          <div>
            <PlusIcon />
            <H2>
              Tvorba
              <br />
              <span>Dokumentov</span>
            </H2>
          </div>
        </Link>
      </section>
      <section className="section__right">
        <div>
          <DatabaseIcon />
          <H2>
            Výber z
            <br />
            <span>Dokumentov</span>
          </H2>
        </div>
      </section>
    </GenSC>
  );
};

export default Gen;
