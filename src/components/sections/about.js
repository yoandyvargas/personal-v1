import React from 'react'
import styled from 'styled-components'

const AboutContainer = styled.div`
  max-width: 960px;
  padding: 0 2rem;
  margin: 2rem auto;
  min-height: 100vh;
  h1 {
    font-size: 5rem;
    margin-bottom: 1rem;
    @media screen and (max-width: 642px) {
      font-size: 3rem;
    }
    &::after {
      display: block;
      content: '';
      background: var(--main-text-color);
      opacity: 0.125;
      width: 100%;
      height: 2px;
      margin-top: 1rem;
    }
  }
  span {
    color: var(--accent-color);
  }
  p {
    line-height: 1.5;
  }
  .about__intro {
    margin-bottom: 4rem;
    ul {
      display: grid;
      grid-template: auto auto / auto auto auto;
      grid-row-gap: 1rem;
      padding: 0;
      li {
        list-style: none;
        font-size: 1rem;
        &::before {
          display: inline-block;
          content: '';
          width: 12px;
          height: 12px;
          border: solid 1px var(--accent-color);
          border-radius: 50%;
          margin-right: 0.5rem;
        } 
        @media screen and (max-width: 642px) {
            font-size: 1.125rem;
            &::before {
            width: 10px;
            height: 10px;
            }
          }
      }
    }
      p {
        font-size: 1rem;
        margin-bottom: 1rem;
      }
}
  @media screen and (max-width: 642px) {
    padding: 0 1.5rem;
    margin: 0 auto;
  }
`
const About = () => {
  return (
    <AboutContainer>
      <h1>Hello</h1>
        <div className="about__intro">
          <p>I'm Yoandy <span>(YO-AHN-DEE)</span> Vargas, a front-end web developer with an eye for design based in Orlando, FL. I have been creating on the web for the last 4 years.</p>
          <p>I graduated with a Bachelor of Arts in Digital Media from the University of Central Florida – where I could focus on my passion for design and technology by studying design principles, human-computer interaction, user experience research, and web-focused software engineering.</p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Gatsby</li>
            <li>GraphQL</li>
            <li>Stylus</li>
            <li>Sass</li>
          </ul>
        </div>
    </AboutContainer>
  )
}

export default About;