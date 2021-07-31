import React from 'react'
import styled from 'styled-components'

const StyledHero = styled.div`
  max-width: 760px;
  padding: 4rem 2rem;
  margin: 0 auto;
  &::after {
    display: block;
    content: '';
    background: var(--main-text-color);
    opacity: 0.125;
    width: 100%;
    height: 2px;
    margin-top: 2rem;
  }
  h1 {
    font-size: 4rem;
  }
  p {
    margin: 0 auto;
  }
  h2 {
    font-size: 1.5rem;
  }
  p {
    line-height: 1.5;
  }
`

const HeroButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 8px;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  color: white;
  font-weight: 600;
  min-width: 105px;
  background: rgba(25,25,25,0.90);
  transition: background 0.25s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  text-decoration: none;
  &:hover {
    background: var(--accent-color);
    svg {
      fill: white;
    }
  }
  svg {
    width: 16px;
    height: 16px;
    margin-right: 0.25rem;
    fill: var(--accent-color);
    transition: fill 0.25s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
`

const ButtonList = styled.div`
  display: flex;
  flex-direction: row;
  a {
    margin-right: 0.75rem;
  }
  a:nth-:nth-child(3) {
    margin-right: 0rem;
  }
`

const Hero = () => {

  return (
    <StyledHero>
      <h2>Hello, I'm Yoandy Vargas</h2>
      <h1>I bring ideas to life. 💡</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec varius elit, suscipit bibendum lectus. 
        Aliquam pellentesque dapibus orci sed laoreet. Integer ut nulla porttitor, efficitur sapien at, interdum ante. 
        Nunc eu tellus pretium, venenatis arcu ac, feugiat lectus.
      </p>
      <ButtonList>
        <HeroButton href="https://github.com/yoandyvargas" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <p>GitHub</p>
        </HeroButton>
        <HeroButton href="https://www.linkedin.com/in/yoandyvargas/" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          <p>LinkedIn</p>
        </HeroButton>
        <HeroButton href="mailto:yoandy.vargas@icloud.com">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
          <p>Email</p>
        </HeroButton>
      </ButtonList>
    </StyledHero>
  )
}

export default Hero;