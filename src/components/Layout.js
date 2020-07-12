import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../lib/styles/globalStyles';
import Header from './Header';
import Footer from './Footer';
import { ThemeProvider } from 'styled-components';
import theme from '../lib/styles/theme';
import ContentWrapper from './ContentWrapper';
import Profile from './Section/Profile';

const ContentBlock = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    flex-direction: column;
    justify-content: flex-start;
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    margin-top: 0;
  }
`;
const MainWrapper = styled.div`
  width: calc(100% - ${props => props.theme.sizes.profileWidth} - 40px);
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    width: 100%;
  }
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <ContentWrapper>
        <ContentBlock>
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
