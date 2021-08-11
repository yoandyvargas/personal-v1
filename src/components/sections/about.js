import React from 'react'
import styled from 'styled-components'

const AboutContainer = styled.section`
  margin: 4rem 0;
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1rem;
    line-height: 1.5;
  }
  span {
    color: var(--accent-color);
    text-transform: uppercase;
  }
  .about__tech, .about__fun {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`

const TechButton = styled.div`
  background: var(--accent-bg-color);
  width: max-content;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: bold;
  margin: 0.25rem; 
`
  

const About = () => {

  const techArray = ['JavaScript ES6+', 'React', 'Gatsby', 'GraphQL', 'Stylus', 'Sass']

  return (
    <AboutContainer id='about'>
      <h2>About Me</h2>
      <p>Hey there, my name is Yoandy <span>(yo-ahn-dee)</span>, and I enjoy all things design and technology. I have always loved building and learning the inner workings of things ever since I got my first PC in 1998 – but it wasn't until 2017 that I would discover my passion for coding and the web. I participated in a coding educational session at work and I absolutely fell in ❤️.</p>
      <p>A few years later, I would receive my B.A. in Digital Media - Web Design from the University of Central Florida while specializing in web-focused software engineering, design principles, human-computer interaction, and UX research.</p>
      <p>Here are some technologies I'm currently working with:</p>
      <div className='about__tech'>
        {techArray.map((item) => <TechButton>{item}</TechButton>)}
      </div>
    </AboutContainer>
  )
}

export default About;