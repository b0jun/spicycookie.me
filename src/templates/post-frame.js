import React from 'react';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import githubStyles from '../lib/styles/githubStyles';
import _ from 'lodash';
import { FaTag } from 'react-icons/fa';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

const Block = styled.div`
  ${githubStyles}
`;

const ContentWrapper = styled.div`
  background: #f5f5f5;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 2rem ${props => props.theme.sideSpace.contentLarge};
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    padding: 30px ${props => props.theme.sideSpace.contentSmall};
  }
`;

const Title = styled.h1`
  border-bottom: 1px solid ${props => props.theme.palette.profileDesc};
  span {
    font-size: 2.2rem;
    color: #0d7377;
    @media screen and (max-width: ${props => props.theme.responsive.largest}) {
      font-size: 1.9rem;
    }
  }
`;
const Category = styled(Link)`
  span {
    transition: background 300ms;
    font-weight: 500;
    border-radius: 20px;
    border: 2px solid ${props => props.theme.palette.brightGreen2};
    padding: 7px 12px;
    color: ${props => props.theme.palette.brightGreen2};
    transform: color 10ms ease-in;
    &:hover {
      background: ${props => props.theme.palette.brightGreen2};
      color: ${props => props.theme.palette.mainFont};
    }
  }
`;
const Date = styled.p`
  font-style: italic;
  padding-right: 0.5rem;
  text-align: right;
  color: ${props => props.theme.palette.profileDesc};
`;
const Header = styled.div`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background: ${props => props.theme.palette.brightBlue2};
  min-height: 200px;
`;

export default ({ data }) => {
  deckDeckGoHighlightElement();
  const { html } = data.markdownRemark;
  const { title, date, category } = data.markdownRemark.frontmatter;
  let categoryLink = _.kebabCase(category);
  return (
    <Layout>
      <Block>
        <Header />
        <ContentWrapper>
          <Category to={`/category/${categoryLink}`}>
            <span>
              <FaTag size={13} style={{ marginRight: '8px' }} />
              {category}
            </span>
          </Category>
          <Title>
            <span>{title}</span>
          </Title>
          <Date style={{ lineHeight: '1' }}>{date}</Date>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </ContentWrapper>
      </Block>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
        category
      }
    }
  }
`;
