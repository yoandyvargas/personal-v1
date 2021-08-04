import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const ProjectsContainer = styled.section`
  max-width: 760px;
  padding: 0 2rem;
  margin: 0 auto 4rem auto;
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr;
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    grid-column: 1 / span 2;
  }
`

const ProjectCard = styled.div`
  p {
    line-height: 1.5;
  }
  .info  {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .tech {
    display: flex;
    p {
      margin-right: 0.25rem;
    }
  }

  h3 {
    font-size: 1.75rem;
  }

`

const Projects = () => {

  const projects = useStaticQuery(graphql`
  query {
    allMdx (filter: {frontmatter: {type: {eq: "projects"}}}) {
      nodes {
        frontmatter {
          description
          example
          github
          name
          production
          tech
        }
        id
      }
    }
  }
`)

console.log(projects);

return (
  <ProjectsContainer>
    <h2>Recent Projects</h2>
    {projects.allMdx.nodes.map((node) => (
      <ProjectCard key={node.id}>
        <GatsbyImage image={node.frontmatter.example}/>
        <div className='info'>
        <h3>{node.frontmatter.name}</h3>
          <div>
            <a>GH</a>
            <a>Code</a>
          </div>
        </div>
        <p>{node.frontmatter.description}</p>
        <div className='tech'>
          {node.frontmatter.tech.map((res) => (
            <p key={res}>{res}</p>
          ))}
        </div>
      </ProjectCard>
    ))}
  </ProjectsContainer>
)
}

export default Projects;