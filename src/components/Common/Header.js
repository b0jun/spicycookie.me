import React from 'react';
import styled from 'styled-components';
import ContentWrapper from './ContentWrapper';
import titlefont from '../../../static/images/svg/titlefont.svg';
import logo from '../../../static/images/svg/logo.svg';
import { Link } from 'gatsby';

const HeaderBlock = styled.div`
  background: ${props => props.theme.palette.headerBackground};
  width: 100%;
  height: 60px;
  box-shadow: 0px 2px 4px ${props => props.theme.palette.shadow};
`;
const HeaderInner = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    justify-content: center;
  }
`;
const Img = styled.img`
  height: 50px;
  &:first-child {
    height: 40px;
  }
`;

const Header = () => {
  return (
    <HeaderBlock>
      <ContentWrapper>
        <HeaderInner>
          <Link to="/">
            <Img src={titlefont} />
            <Img src={logo} />
          </Link>
        </HeaderInner>
      </ContentWrapper>
    </HeaderBlock>
  );
};

export default Header;
