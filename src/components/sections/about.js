import React from 'react'
import styled from 'styled-components'

const AboutContainer = styled.div`
  max-width: 760px;
  padding: 0 2rem;
  margin: 0 auto 4rem auto;
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  p {
    line-height: 1.5;
  }
  @media screen and (max-width: 642px) {
    padding: 0 1.5rem;
    margin: 0 auto;
  }
`

const About = () => {
  return (
    <AboutContainer id="about">
      <h2>My Story</h2>
      <p>
      Hey there! 👋🏻 My name is Yoandy (YO-AHN-DEE), and I love the coming together of all things design and technology. 
      I have always gravitated towards tinkering ever since I got my first PC in 1998, but it wasn't until 2017 while working at Apple that I would discover my passion for programming. 
      One day at work, I participated in a Today @ Apple coding educational session – and I <strong>never</strong> looked back. 
      </p>
    </AboutContainer>
  )
}

export default About;