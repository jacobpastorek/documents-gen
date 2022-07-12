import { BodyText, H2 } from '@components/ui/typography';
import React from 'react';
import { GenSC } from './gen.styled';
import { ReactComponent as PlusIcon } from '@assets/svg/file-plus.svg';
import { ReactComponent as DatabaseIcon } from '@assets/svg/database.svg';
import Link from 'next/link';

const Gen: React.FC = () => {
  return (
    <GenSC>
      <Link href="/creation">
        <section className="section__left">
          <div>
            <H2>
              Tvorba<span> Dokumentov</span>
            </H2>
          </div>
        </section>
      </Link>
      <section className="section__right">
        <div>
          <H2>
            Výber<span> z Dokumentov</span>
          </H2>
        </div>
      </section>
    </GenSC>
  );
};

export default Gen;
