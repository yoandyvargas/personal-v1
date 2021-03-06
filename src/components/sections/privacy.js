import React from "react";
import styled from "styled-components";

const PrivacyContainer = styled.div`
  max-width: 960px;
  padding: 0 2rem;
  margin: 2rem auto;
  min-height: 100vh;
  h1 {
    font-size: 5rem;
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    &::after {
      display: block;
      content: "";
      background: var(--main-text-color);
      opacity: 0.125;
      width: 100%;
      height: 2px;
      margin-top: 1rem;
    }
  }
  p {
    line-height: 1.5;
  }
  ul {
    padding-left: 2rem;
    li {
      line-height: 1.5;
    }
  }
  a {
    opacity: 0.75;
    &:hover {
      opacity: 1;
    }
  }
  @media screen and (max-width: 642px) {
    padding: 1.5rem;
    margin: 0 auto;
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
`;

const Privacy = () => {
  return (
    <PrivacyContainer>
      <h1>Privacy Policy </h1>
      <h2>Only the necessary stuff.</h2>
      <p>
        I value data privacy highly which is why I am using{" "}
        <a
          href="https://plausible.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Plausible Analytics
        </a>{" "}
        – a GDPR, CCPA, and cookie law-compliant analytics tool. Plausible is
        privacy-focused and only collects crucial non-personally identifiable
        data that helps me to improve this website.
      </p>
      <br />
      <h3>The following data is being collected:</h3>
      <br />
      <ul>
        <li>Page URL</li>
        <li>HTTP Referrer</li>
        <li>Browser</li>
        <li>Operating system</li>
        <li>Device type</li>
        <li>Visitor Country</li>
      </ul>
      <br />
      <p>
        Learn more about Plausible's data policy at{" "}
        <a
          href="https://plausible.io/data-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://plausible.io/data-policy
        </a>
        .
      </p>
      <br />
      <h3>
        Please contact{" "}
        <a href="mailto:yoandy.vargas@icloud.com">Yoandy Vargas</a> If you have
        any questions or concerns.
      </h3>
      <br />
      <p>
        <em>Last Updated – August 6th, 2021</em>
      </p>
    </PrivacyContainer>
  );
};

export default Privacy;
