import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

const ProjectsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin: 0 auto 4rem 0;
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    grid-column: 1 / span 2;
  }
  @media screen and (max-width: 642px) {
    grid-template-columns: auto;
    h2 {
    grid-column: 1;
  }
  }
`

const ProjectCard = styled.div`
  padding: 2rem;
  background: var(--accent-bg-color);
  border-radius: 15px;
  border: solid 1px var(--main-bg-color);
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    border: solid 1px var(--accent-color);
    background: none;
  }
  p {
    line-height: 1.5;
    margin-top: 0.25rem;
  }
  .tech {
    display: flex;
    flex-wrap: wrap;
    p {
      margin-right: 0.25rem;
      opacity: 0.8;
      font-weight: 400;
    }
  }
  h3 {
    font-size: 1.75rem;
  }
`

const ProjectInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  padding-bottom: 0.5rem;
  &::after {
    display: block;
    position: absolute;
    content: '';
    background: var(--main-text-color);
    opacity: 0.125;
    width: 100%;
    height: 2px;
    bottom: 0;
  }
  a svg {
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  a:first-child {
    svg {
    fill: var(--accent-color);
    margin-right: 0.5rem;
    width: 22px;
    &:hover {
      fill: var(--main-text-color);
    }
    }
  }
  a:nth-child(2){
    svg path {
      stroke: var(--accent-color);
    }
    &:hover {
      svg path {
        stroke: var(--main-text-color);
      }
    }
  }
`

const Projects = () => {

  const projects = useStaticQuery(graphql`
  query {
    allMdx (filter: {frontmatter: {type: {eq: "projects"}}}) {
      nodes {
        frontmatter {
          description
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

return (
  <ProjectsContainer>
    <h2>Projects</h2>
    {projects.allMdx.nodes.map((node) => (
      <ProjectCard key={node.id}>
        <ProjectInfo>
          <h3>{node.frontmatter.name}</h3>
            <div>
              <a href={node.frontmatter.github} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href={node.frontmatter.production} target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 2H22V7" stroke="#000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H11" stroke="#000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13 11L21.5 2.5" stroke="#000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </a>
            </div>
        </ProjectInfo>
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