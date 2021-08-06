module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Personal-v1",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `yoandyvargas.com`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `work`,
        path: `${__dirname}/data/work`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `projects`,
        path: `${__dirname}/data/projects`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `general`,
        path: `${__dirname}/data/`,
      }
    },
    "gatsby-plugin-mdx",
  ],
};
