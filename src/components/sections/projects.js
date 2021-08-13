import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { GhIcon, ProdIcon } from "../index";

const ProjectsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin: 8rem 0;
  animation: fadeIn 2s;
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    grid-column: 1 / span 2;
  }
  @media screen and (max-width: 642px) {
    margin: 4rem 0;
    grid-template-columns: auto;
    h2 {
      grid-column: 1;
    }
  }
`;

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
`;

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
    content: "";
    background: var(--main-text-color);
    opacity: 0.125;
    width: 100%;
    height: 2px;
    bottom: 0;
  }
  .gh {
    svg {
      fill: var(--accent-color);
      margin-right: 0.5rem;
      width: 22px;
      transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
      &:hover {
        fill: var(--main-text-color);
      }
    }
  }
  .prod {
    svg path {
      stroke: var(--accent-color);
    }
    &:hover {
      svg path {
        stroke: var(--main-text-color);
      }
    }
  }
`;

const Projects = () => {
  const projects = useStaticQuery(graphql`
    query {
      allMdx(filter: { frontmatter: { type: { eq: "projects" } } }) {
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
  `);

  return (
    <ProjectsContainer id="projects">
      <h2>Projects</h2>
      {projects.allMdx.nodes.map((node) => (
        <ProjectCard key={node.id}>
          <ProjectInfo>
            <h3>{node.frontmatter.name}</h3>
            <div>
              {node.frontmatter.github !== "NA" ? (
                <a
                  href={node.frontmatter.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gh"
                >
                  <GhIcon />
                </a>
              ) : null}
              <a
                href={node.frontmatter.production}
                target="_blank"
                rel="noopener noreferrer"
                className="prod"
              >
                <ProdIcon />
              </a>
            </div>
          </ProjectInfo>
          <p>{node.frontmatter.description}</p>
          <div className="tech">
            {node.frontmatter.tech.map((res) => (
              <p key={res}>{res}</p>
            ))}
          </div>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
