const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const _ = require('lodash');

/* Creating slugs */
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

/* Creating pages */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
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
              private
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    throw result.errors;
  }

  const posts = result.data.allMarkdownRemark.edges.filter(({ node }) => !node.frontmatter.private);

  posts.forEach(function (post, index) {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;
    createPage({
      path: post.node.fields.slug,
      component: path.resolve(`./src/templates/post-frame.js`),
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });
  posts.forEach(function (post) {
    createPage({
      path: `/category/${_.kebabCase(post.node.frontmatter.category)}`,
      component: path.resolve(`./src/pages/index.js`),
      context: {
        category: post.node.frontmatter.category,
      },
    });
  });
};
