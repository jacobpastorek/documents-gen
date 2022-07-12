import { BodyText, SmallText } from '@components/ui/typography';
import Image from 'next/image';
import Link from 'next/link';
import React, { PropsWithChildren } from 'react';
import { GenLayoutSC } from './gen-layout.styled';
import { ReactComponent as LogoIcon } from '@assets/svg/logo.svg';

interface GenLayoutProps {}

const GenLayout: React.FC<PropsWithChildren<GenLayoutProps>> = ({ children }) => {
  return (
    <GenLayoutSC>
      <Link href="/">
        <div className="top">
          <LogoIcon />
          <BodyText className="bold">
            Documents <span>Gen</span>
          </BodyText>
        </div>
      </Link>
      {children}
      <div className="bottom">
        <SmallText className="smaller">© Mid_redux | 2022</SmallText>
      </div>
    </GenLayoutSC>
  );
};

export default GenLayout;
