import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <h1 style={{ fontSize: '6rem' }}>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>
      <p>{post.frontmatter.category}</p>
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
