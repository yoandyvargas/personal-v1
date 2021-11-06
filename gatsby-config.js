module.exports = {
  siteMetadata: {
    title: "Yoandy Vargas | Software Engineer",
    description:
      "Yoandy Vargas, a software engineer specializing in building pixel-perfect, robust, and accessible user interfaces. Currently developing excellent product experiences at SightPlan",
    url: "https://yoandyvargas.com",
    twitterUsername: "@yoahndee",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-anchor-links",
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `yoandyvargas.com`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Yoandy Vargas",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
      },
    },
  ],
};
