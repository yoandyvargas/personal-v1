import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const Card = styled.div`
  display: grid;
  grid-template: repeat(4, auto) / auto;
  width: 380px;
  background: rgba(50, 50, 50, 0.2);
  padding: 0 0 2rem 0;
  border-radius: 15px;
  margin: 0 auto;
  img {
    border-radius: 15px 15px 0 0;
  }
`

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.25rem;
  padding: 0 2rem;
  h3 {
    font-size: 2rem;
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`

const ProjectTags = styled.div`
  padding-bottom: 1rem;
  margin-top: 0.25rem;
  padding: 0 2rem;
  span {
    background: var(--accent-color);
    border-radius: 10px;
    padding: 0.25rem 0.5rem;
  }
`

const ProjectDescription = styled.div`
  margin-top: 1rem;
  padding: 0 2rem;
`

const ProjectCard = () => {
  return (
    <Card>
      <StaticImage 
        href="/"
        width={500}
        height={300}
        placeholder='tracedSVG'
        objectFit='cover'
        objectPosition='center top'
        src="../images/lexicon.png"
        alt="Portrait photo of me" 
      />
      <ProjectInfo>
        <h3>Lexicon</h3>
          <div className='links'>
            <p>GH</p>
            <p>See</p>
          </div>
      </ProjectInfo>

      <ProjectTags>
        <span>Javascript</span>
      </ProjectTags>

      <ProjectDescription>
        <p>A website that provides roadmap for various fields in Programming and help people learn to code for free.</p>
      </ProjectDescription>
    </Card>
  )
}

export default ProjectCard;