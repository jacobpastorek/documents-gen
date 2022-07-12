import React from 'react';
import type { AppProps } from 'next/app';

import defaultTheme from '@lib/theme/defaultTheme';
import GlobalStyle from '@lib/theme/globalStyle';

import 'numeral/locales/sk';

import { ThemeProvider } from 'styled-components';
import GenLayout from '@components/layout/gen-layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <GenLayout>
        <Component {...pageProps} />
      </GenLayout>
    </ThemeProvider>
  );
}

export default MyApp;
