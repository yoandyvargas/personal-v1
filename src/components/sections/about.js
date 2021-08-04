import React from 'react'
import styled from 'styled-components'

const AboutContainer = styled.div`
  max-width: 760px;
  padding: 0 2rem 4rem 2rem;
  margin: 0 auto;
  &::after {
    display: block;
    content: '';
    background: var(--main-text-color);
    opacity: 0.125;
    width: 100%;
    height: 2px;
    margin-top: 4rem;
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  p {
    line-height: 1.5;
  }
`

const About = () => {
  return (
    <AboutContainer>
      <h2>My Story</h2>
      <p>
      Hey there! 👋🏻 My name is Yoandy (YO-AHN-DEE), and I love the coming together of all things design and technology. 
      I have always gravitated towards tinkering ever since I got my first PC in 1998, but it wasn't until 2017 while working at Apple that I would discover my passion for programming. 
      One day at work, I participated in a Today @ Apple coding session – and I never looked back. 
      </p>
    </AboutContainer>
  )
}

export default About;