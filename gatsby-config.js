module.exports = {
  siteMetadata: {
    title: 'Spicy Cookie Tech Blog',
    author: 'Byeong Jun, Kim',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
  ],
};
