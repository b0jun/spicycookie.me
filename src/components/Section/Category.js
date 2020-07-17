import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Link } from 'gatsby';

const _ = require('lodash');

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
  position: relative;
  float: left;
  margin-right: 1rem;
  border-radius: 20px;
  padding: 8px 10px;
  background: ${props => props.theme.palette.categoryBackground};
  margin-bottom: 1rem;
  div {
    color: ${props => props.theme.palette.dateFont};
    text-align: center;
    font-weight: 500;
  }
  &:hover {
    animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }

  ${props =>
    props.current &&
    css`
      &:hover {
        div {
          color: ${props => props.theme.palette.mainBlack};
        }
      }
      &::after {
        padding: 2px;
        z-index: -1;
        content: '';
        background: linear-gradient(92deg, #7f7fd5, #86a8e7, #91eae4);
        position: absolute;
        top: -2px;
        left: -2px;
        border-radius: 20px;
        width: 100%;
        height: 100%;
      }
    `};
`;

const CategoryTitle = styled.div`
  margin: 0.5rem 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${props => props.theme.palette.footerFont};

  font-size: 1.7rem;
  font-weight: bold;
  color: ${props => props.theme.palette.mainWhite};
`;

const Category = ({ pathname, posts }) => {
  const convertPathname = decodeURI(pathname)
    .replace(/(\s)|(-)/gi, ' ')
    .split('/')[2];
  const categories = _.uniq(posts.map(({ node }) => _.kebabCase(node.frontmatter.category)));
  return (
    <Block>
      <List>
        <Item to="/" current={pathname === '/' ? 1 : 0}>
          <div>All</div>
        </Item>
        {categories.map((category, idx) => (
          <Item
            key={idx}
            to={`/category/${category}`}
            category={category}
            current={decodeURI(pathname) === `/category/${category}` ? 1 : 0}
          >
            <div>{category.replace(/(\s)|(-)/gi, ' ')}</div>
          </Item>
        ))}
      </List>
      {pathname !== '/' && <CategoryTitle>{convertPathname}</CategoryTitle>}
    </Block>
  );
};

export default Category;
