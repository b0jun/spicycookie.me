import React from 'react';
import styled from 'styled-components';
import ContentWrapper from './ContentWrapper';

const HeaderBlock = styled.div`
  background: ${props => props.theme.palette.headerBackground};
  width: 100%;
  height: 60px;
  box-shadow: 0px 2px 4px #1e1e1e;
`;

const HeaderInner = styled.div``;
const Header = () => {
  return (
    <HeaderBlock>
      <ContentWrapper>
        <HeaderInner></HeaderInner>
      </ContentWrapper>
    </HeaderBlock>
  );
};

export default Header;
