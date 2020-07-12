import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const Block = styled.div`
  background: #fff;
`;

const ContentWrapper = styled.div`
  padding: 2rem ${props => props.theme.sideSpace.contentLarge};
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    padding: 30px ${props => props.theme.sideSpace.contentSmall};
  }
`;

export default ({ data }) => {
  const { html } = data.markdownRemark;
  const { title, date, category } = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <Block>
        <ContentWrapper>
          <h1 style={{ fontSize: '6rem' }}>{title}</h1>
          <p>{date}</p>
          <p>{category}</p>
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
        date(formatString: "YYYY년 MM월 DD일")
        category
      }
    }
  }
`;
