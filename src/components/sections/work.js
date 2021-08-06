import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

const WorkContainer = styled.div`
  max-width: 960px;
  padding: 0 2rem 4rem 2rem;
  margin: 0 auto;
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 642px) {
    padding: 1.5rem;
  }
`

const WorkInfo = styled.div`
  margin-bottom: 2rem;
  span {
    color: var(--accent-color);
  }
  h3 {
    font-size: 1.25rem;

  }
  h4 {
    margin: 0.5rem 0 1rem 0;
    font-weight: normal;
  }
  ul {
    list-style: none;
    line-height: 1.5;
    padding: 0;
    li::before {
      display: inline-block;
      content: '';
      width: 10px;
      height: 10px;
      border: solid 1px var(--accent-color);
      border-radius: 50%;
      margin-right: 0.5rem;
      @media screen and (max-width: 642px) {
        width: 7px;
        height: 7px;
      }
    }
  }
`

const Work = () => {

  const work = useStaticQuery(graphql`
  query {
    allMdx (sort: { fields: [frontmatter___date], order: DESC }, filter: {frontmatter: {type: {eq: "work"}}}) {
      nodes {
        frontmatter {
          title
          responsibilites
          range
          company
          date
        }
        id
      }
    }
  }
  
  
`)

  return (
    <WorkContainer>
      <h2>Where I've Worked</h2>
        {
        work.allMdx.nodes.map((node) => (
          <WorkInfo key={node.id}>
            <h3>{node.frontmatter.title} <span> @ {node.frontmatter.company}</span></h3>
            <h4>{node.frontmatter.range}</h4>
            <ul>
              {node.frontmatter.responsibilites.map((res) => (
                <li key={res}>{res}</li>
              ))}
            </ul>
          </WorkInfo>
        ))
        }
    </WorkContainer>
  )
}

export default Work;