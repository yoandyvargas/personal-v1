import React from 'react'
import styled from 'styled-components'
import Button from '../button'
import { useStaticQuery, graphql } from 'gatsby'

const ContactContainer = styled.section`
  text-align: center;
  h2 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    color: var(--accent-color);
  }
  div {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    a {
      margin-right: 1rem;
    }
    a:nth-child(3) {
      margin-right: 0;
      svg {
        margin-right: 0.1rem;
        stroke: var(--secondary-text-color);
        stroke-width: 0.5px;
      }
    }
  }
  @media screen and (max-width: 642px) {
    padding: 0 1.5rem;
    justify-content: center;
    div  {
      flex-wrap: wrap;
      a {
        margin: 2px;
      }
    }
}
`

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
`)

  return (
    <ContactContainer>
      <h2>Say Hello.</h2>
      <p>I'm currently open for work. Let's chat.</p>
      <div>
        <Button href="https://www.linkedin.com/in/yoandyvargas/">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          LinkedIn
        </Button>
        <Button href="mailto:yoandy.vargas@icloud.com">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
          Email
        </Button>
        <Button href={data.allFile.edges[0].node.publicURL}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 6H16M8 10H16M8 14H11M6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22Z" stroke="" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        Resume
        </Button>
      </div>
    </ContactContainer>
  )
}

export default Contact