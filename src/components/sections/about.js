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
`

const About = () => {
  return (
    <AboutContainer>
      <h2>About Me</h2>
      <p>Hey there, my name is Yoandy <span>(yo-ahn-dee)</span>, and I enjoy all things design and technology. I have always loved building and learning the inner workings of things ever since I got my first PC in 1998 – but it wasn't until 2017 that I would discover my passion for web development. I participated in a coding educational session at work and I absolutely fell in ❤️.</p>
      <p>A few years later, I would receive my B.A. in Digital Media - Web Design from the University of Central Florida while specializing in web-focused software engineering, design principles, human-computer interaction, and user experience research.</p>
      <p>Here are a few technologies I've been working with recently:</p>
    </AboutContainer>
  )
}

export default About;