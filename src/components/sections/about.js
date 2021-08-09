import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const AboutContainer = styled.section`
  max-width: 960px;
  padding: 0 2rem 4rem 2rem;
  margin: 0 auto;
  min-height: 100vh;
  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
    &::after {
      display: block;
      content: '';
      background: var(--main-text-color);
      opacity: 0.125;
      width: 100%;
      height: 2px;
      margin-top: 0rem;
    }
  }
  span {
      color: var(--accent-color);
  }
  p, li {
    font-size: 1.25rem;
    line-height: 1.5;
  }
  li::before {
      display: inline-block;
      content: '';
      width: 10px;
      height: 10px;
      border: solid 1px var(--accent-color);
      border-radius: 50%;
      margin-right: 0.5rem;
      @media screen and (max-width: 642px) {
        width: 8px;
        height: 8px;
      }
    }
  ul {
    display: grid;
    grid-template: auto auto / auto auto auto;
    list-style: none;
    padding: 0;
    margin: 0.5rem 0;
  }
  @media screen and (max-width: 642px) {
    padding: 1.5rem;
    h1 {
      font-size: 3rem;
    }
  }

  .about__other {
    span {
      color: #59289B;
      font-weight: bold;
      background: white;

    }
  }
`

const About = () => {

  return (
    <AboutContainer>
      <h1>About Me</h1>
      <p>I'm Yoandy <span>(YO-AHN-DEE)</span> Vargas, a front-end web developer with an eye for design based in Orlando, FL. I have been creating on the web for the last 4 years.</p>
      <br/><p>I graduated with a Bachelor of Arts in Digital Media from the University of Central Florida – where I could focus on my passion for design and technology by studying design principles, human-computer interaction, user experience research, and web-focused software engineering.</p>
      <br/><p>Here are a few technologies I've been working with recently:</p>
      <ul>
        <li>JavaScript (ES6+)</li>
        <li>React</li>
        <li>Gatsby</li>
        <li>GraphQL</li>
        <li>Stylus</li>
        <li>Sass</li>
      </ul>
    </AboutContainer>
  )
}

export default About;