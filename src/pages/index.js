import React from 'react';
import Layout from '../components/Layout';
import Category from '../components/Section/Category';
import PostCard from '../components/Section/PostCard';
import { graphql } from 'gatsby';

const IndexPage = ({ data, location: { pathname } }) => {
  const posts = data.allMarkdownRemark.edges;
  const decodePathname = decodeURI(pathname).replace(/(\s)|(-)/gi, '');
  return (
    <Layout>
      <Category pathname={pathname} posts={posts} />
      {pathname === '/'
        ? posts.map(({ node }) => {
            return <PostCard key={node.fields.slug} post={node} />;
          })
        : posts
            .filter(
              ({ node }) =>
                decodePathname.indexOf(`${node.frontmatter.category.replace(/(\s)|(-)/gi, '')}`) !==
                -1,
            )
            .map(({ node }) => <PostCard key={node.fields.slug} post={node} />)}
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
