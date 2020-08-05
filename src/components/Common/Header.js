import React from 'react';
import styled from 'styled-components';
import ContentWrapper from './ContentWrapper';
import logo from '../../../static/images/svg/logo.svg';
import { Link } from 'gatsby';
import '../../lib/fonts/fonts.css';

const ThemeChanger = styled.div`
  width: 100px;
  height: 60px;
`;
const HeaderBlock = styled.div`
  background: ${props => props.theme.palette.headerBackground};
  width: 100%;
  height: 60px;
  box-shadow: 0px 2px 4px ${props => props.theme.commonColor.shadow};
`;

const HeaderInner = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    display: block;
    position: relative;
    ${ThemeChanger} {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;
const SLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  font-family: 'Bangers', cursive;
  font-size: 2.5rem;
  color: ${props => props.theme.palette.headerTitle};
  text-shadow: 2px 3px 1px ${props => props.theme.commonColor.shadow};
  margin-right: 0.3rem;
`;
const Img = styled.img`
  height: 50px;
`;

const Header = () => {
  return (
    <HeaderBlock>
      <ContentWrapper>
        <HeaderInner>
          <SLink to="/">
            <Title>SpicyCookie</Title>
            <Img src={logo} alt="logo" />
          </SLink>
          <ThemeChanger />
        </HeaderInner>
      </ContentWrapper>
    </HeaderBlock>
  );
};

export default Header;
