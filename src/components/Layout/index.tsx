import React from 'react';
import { GlobalStyle } from './styles';

import { Header } from '../Header/index';

function Layout({ children }) {
  return (
    <>
      <Header />
      <GlobalStyle />
      {children}
    </>
  );
}

export default Layout;
