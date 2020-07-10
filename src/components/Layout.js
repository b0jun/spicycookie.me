import React from 'react';
import GlobalStyle from '../lib/styles/globalStyles';
import Header from './Header';
import Footer from './Footer';
import { ThemeProvider } from 'styled-components';
import theme from '../lib/styles/theme';
import ContentWrapper from './ContentWrapper';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
