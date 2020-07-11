import React from 'react';
import Layout from '../components/Layout';
import Category from '../components/Section/Category';
import PostCard from '../components/Section/PostCard';
import { useStaticQuery, graphql } from 'gatsby';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "YYYY.MM.DD")
              category
            }
          }
        }
      }
    }
  `);

  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <Category />
      {posts.map(post => {
        return <PostCard post={post} />;
      })}
    </Layout>
  );
};

export default IndexPage;
