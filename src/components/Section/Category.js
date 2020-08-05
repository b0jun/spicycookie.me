import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Link } from 'gatsby';
import { FaTag } from 'react-icons/fa';
import { FaBookOpen } from 'react-icons/fa';
import { Seo } from '../Service/Seo';

const shake = keyframes`{
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}`;
const Block = styled.div`
  margin-bottom: 2rem;
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    margin-top: 1rem;
  }
`;

const List = styled.ul`
  display: inline-block;
`;

const Item = styled(Link)`
  box-shadow: 0px 2px 4px ${props => props.theme.palette.shadow};
  position: relative;
  float: left;
  margin-right: 1rem;
  border-radius: 20px;
  padding: 8px 10px;
  background: ${props => props.theme.palette.categoryBackground};
  margin-bottom: 1rem;
  div {
    color: ${props => props.theme.palette.categoryTitle};
    text-align: center;
    font-weight: 500;
  }
  &:hover {
    background: linear-gradient(92deg, #7f7fd5, #86a8e7, #91eae4);
    div {
      color: ${props => props.theme.palette.mainBackground};
    }
    animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }

  ${props =>
    props.current &&
    css`
      background: linear-gradient(92deg, #7f7fd5, #86a8e7, #91eae4);
      div {
        color: ${props => props.theme.palette.mainBackground};
      }
    `};
`;

const CategoryTitle = styled.div`
  margin: 0.5rem 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${props => props.theme.palette.footerFont};

  font-size: 1.7rem;
  font-weight: 500;
  color: ${props => props.theme.palette.mainFont};
`;

const Category = ({ pathname, categories }) => {
  const convertPathname = decodeURI(pathname).split('/')[2];
  return (
    <Block>
      <Seo title={convertPathname || 'Home'} />
      <List>
        <Item to="/" current={pathname === '/' ? 1 : 0}>
          <div>
            <FaBookOpen size={13} style={{ marginRight: '6px' }} />
            All
          </div>
        </Item>
        {categories.map((category, idx) => (
          <Item
            key={idx}
            to={`/category/${category.name}`}
            current={decodeURI(pathname) === `/category/${category.name}` ? 1 : 0}
          >
            <div>
              <FaTag size={11} style={{ marginRight: '6px' }} />
              {category.name}
            </div>
          </Item>
        ))}
      </List>
      {pathname !== '/' && <CategoryTitle>{convertPathname}</CategoryTitle>}
    </Block>
  );
};

export default Category;
