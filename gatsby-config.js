module.exports = {
  siteMetadata: {
    title: 'Spicy Cookie Tech Blog',
    author: 'Byeong Jun, Kim',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ],
};
