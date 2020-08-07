import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../lib/styles/globalStyles';
import Header from './Header';
import Footer from './Footer';
import { ThemeProvider } from 'styled-components';
import { blue, lilac, mint } from '../../lib/styles/theme';
import ContentWrapper from './ContentWrapper';
import Profile from '../Section/Profile';
import { globalHistory as history } from '@reach/router';

const ContentBlock = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    flex-direction: ${props => (props.pathname ? 'column-reverse' : 'column')};
    justify-content: flex-start;
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    margin-top: 1rem;
  }
`;
const MainWrapper = styled.div`
  min-height: 85vh;
  width: calc(100% - ${props => props.theme.sizes.profileWidth} - 40px);
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    width: 100%;
  }
`;

const Layout = ({ children }) => {
  /* Theme Changer */
  const [themeMode, setThemeMode] = useState(window.localStorage.getItem('theme') || 'blue');
  const theme = themeMode => {
    if (themeMode === 'blue') return blue;
    else if (themeMode === 'lilac') return lilac;
    else if (themeMode === 'mint') return mint;
  };
  const setMode = mode => {
    window.localStorage.setItem('theme', mode);
    setThemeMode(mode);
  };

  const {
    location: { pathname },
  } = history;

  return (
    <ThemeProvider theme={theme(themeMode)}>
      <GlobalStyle />
      <Header setMode={setMode} />
      <ContentWrapper>
        <ContentBlock pathname={pathname === '/' || pathname.indexOf('/category/') !== -1}>
          <MainWrapper>
            <main>{children}</main>
          </MainWrapper>
          <Profile />
        </ContentBlock>
      </ContentWrapper>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
