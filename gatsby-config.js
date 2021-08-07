module.exports = {
  siteMetadata: {
    title: "Yoandy Vargas | Front-End Developer",
    description: "Yoandy Vargas, a creative Front-End Developer with an eye for design and with a passion for building and delivering exceptional digital experiences that are interactive, intuitive, and problem-solving.",
    url: 'https://yoandyvargas.com',
    twitterUsername: "@yoahndee",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
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
