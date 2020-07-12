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
      {posts.map(({ node }) => {
        return <PostCard key={node.fields.slug} post={node} />;
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
          excerpt(pruneLength: 140, truncate: true)
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY.MM.DD")
            category
            private
            cover {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
