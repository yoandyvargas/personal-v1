import React from "react";
import { Helmet } from "react-helmet";
import { graphql, StaticQuery } from "gatsby";

// Gatsby JS: Create a SEO React Component - https://www.youtube.com/watch?v=Y2gweJCaHz0

const Seo = ({ title, description, keywords, url }) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaTitle = title || data.site.siteMetadata.title;
        const metaDescription =
          description || data.site.siteMetadata.description;
        const metaAuthor = data.site.siteMetadata.author;
        const metaUrl = url || data.site.siteMetadata.url;
        const metaKeywords = keywords || [
          "Yoandy Vargas",
          "Front-End Developer",
          "UI Developer",
          "Designer",
        ];
        return (
          <Helmet
            title={metaTitle}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: metaTitle,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:url`,
                content: metaUrl,
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`,
              },
              {
                name: `twitter:creator`,
                content: metaAuthor,
              },
              {
                name: `twitter:title`,
                content: metaTitle,
              },
              {
                name: `twitter: description`,
                content: metaDescription,
              },
            ].concat(
              metaKeywords && metaKeywords.length > 0
                ? {
                    name: `keywords`,
                    content: metaKeywords.join(", "),
                  }
                : []
            )}
          />
        );
      }}
    />
  );
};

export default Seo;

const detailsQuery = graphql`
  query DefaultSEO {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
