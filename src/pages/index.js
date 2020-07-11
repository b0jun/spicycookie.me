import React from 'react';
import Layout from '../components/Layout';
import Category from '../components/Section/Category';
import PostCard from '../components/Section/PostCard';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <Category />
      {console.log(posts)}
      {posts.map(post => {
        return <PostCard post={post} />;
      })}
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { ne: null }, private: { eq: false } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 100, truncate: true)
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY년 MM월 DD일")
            category
            private
          }
        }
      }
    }
  }
`;
