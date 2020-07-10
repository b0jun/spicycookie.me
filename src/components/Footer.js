import React from 'react';
import styled from 'styled-components';
import ContentWrapper from './ContentWrapper';
import { Link } from 'gatsby';

const FooterBlock = styled.div`
  height: 100px;
`;

const FooterInner = styled.div`
  font-size: 14px;
  text-align: center;
  color: ${props => props.theme.palette.darkBlue};
  padding: 2rem;
  border-top: solid 1px ${props => props.theme.palette.darkBlue};
`;

const Footer = () => {
  return (
    <FooterBlock>
      <ContentWrapper>
        <FooterInner>
          <p>
            Copyright © {new Date().getFullYear()}{' '}
            <Link to="https://github.com/billowycloud">Spicy Cookie (Byeong Jun)</Link>
          </p>
        </FooterInner>
      </ContentWrapper>
    </FooterBlock>
  );
};

export default Footer;
