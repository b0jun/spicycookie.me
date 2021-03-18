import React from 'react';
import Layout from '../components/Common/Layout';
import Category from '../components/Section/Category';
import PostCard from '../components/Section/PostCard';
import { graphql } from 'gatsby';

const IndexPage = ({ data, location: { pathname } }) => {
  const posts = data.allMarkdownRemark.edges;
  const categories = data.site.siteMetadata.categories;
  const decodePathname = decodeURI(pathname);
  return (
    <Layout>
      <Category pathname={pathname} categories={categories} />
      {pathname === '/'
        ? posts.map(({ node }) => {
            return <PostCard key={node.fields.slug} post={node} categories={categories} />;
          })
        : posts
            .filter(({ node }) => decodePathname.split('/')[2] === node.frontmatter.category)
            .map(({ node }) => (
              <PostCard key={node.fields.slug} post={node} categories={categories} />
            ))}
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        categories {
          name
          color
        }
      }
    }

    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { ne: null }, private: { eq: false } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 90, truncate: true)
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
                fluid(maxWidth: 200) {
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
