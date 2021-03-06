import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { LinkedinIcon, EmailIcon, ResumeIcon, Button } from "../index";

const ContactContainer = styled.section`
  text-align: center;
  margin: 8rem 0;
  animation: fadeIn 2s;
  h2 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    color: var(--accent-color);
  }
  p {
    max-width: 30ch;
    margin: 0 auto;
  }
  .clickTracker {
    margin: 0;
    a {
      margin-right: 0;
      svg {
        margin-right: 0.1rem;
        stroke: var(--secondary-text-color);
        stroke-width: 0.5px;
      }
    }
  }
  div {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    a {
      margin-right: 1rem;
    }
  }
  @media screen and (max-width: 642px) {
    padding: 0 1.5rem;
    justify-content: center;
    div {
      flex-wrap: wrap;
      a {
        margin: 2px;
      }
    }
  }
`;

const Contact = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `);

  //Gatsby dev has window object, but at build with Node it does not - checks for object and resolves build issues
  /* Disabling resume tracking and resume button all together
  const isBrowser = typeof window !== "undefined";

  if (isBrowser) {
    window.plausible =
      window.plausible ||
      function () {
        (window.plausible.q = window.plausible.q || []).push(arguments);
      };
  }

  //Tracks clicks for Plausible
  const resumeView = () => {
    window.plausible("Resume");
    console.log("Thanks for taking a look at my resume!");
  };


  <div role="button" className="clickTracker" onClick={resumeView}>
    <Button href={data.allFile.edges[0].node.publicURL}>
      <ResumeIcon />
      Resume
    </Button>
  </div>


  */

  return (
    <ContactContainer id="contact">
      <h2>Say Hello</h2>
      <p>
        My inbox is always open if you have any questions or just want to say
        hi.
      </p>
      <div>
        <Button href="https://www.linkedin.com/in/yoandyvargas/">
          <LinkedinIcon />
          LinkedIn
        </Button>
        <Button href="mailto:yoandy.vargas@icloud.com">
          <EmailIcon />
          Email
        </Button>
      </div>
    </ContactContainer>
  );
};

export default Contact;
