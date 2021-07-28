import React from 'react'
import styled from 'styled-components'

const StyledHero = styled.div`
  max-width: 760px;
  padding: 4rem 2rem;
  margin: 0 auto;
  &::after {
    display: block;
    content: '';
    background: rgba(0, 0, 0, 0.125);
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

const Hero = () => {

  return (
    <StyledHero>
      <h2>Hello, I'm Yoandy Vargas</h2>
      <h1>I bring ideas to life.</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec varius elit, suscipit bibendum lectus. 
        Aliquam pellentesque dapibus orci sed laoreet. Integer ut nulla porttitor, efficitur sapien at, interdum ante. 
        Nunc eu tellus pretium, venenatis arcu ac, feugiat lectus.
      </p>
    </StyledHero>
  )
}

export default Hero;