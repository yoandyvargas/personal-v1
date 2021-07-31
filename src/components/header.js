import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const StyledHeader = styled.header`
  max-width: 950px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 2rem;
`

const LogoImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  p {
    font-size: 1.5rem;
    font-weight: 600;
    margin-left: 0.5rem;
  }
  img {
    cursor: pointer;
    border-radius: 50%;
  }
`

const Button = styled.a`
  border: solid 2px var(--main-text-color);
  border-radius: 10px;
  padding: 0.25rem 0.5rem;
  width: 50px;
  font-weight: bold;
  &:hover {
    background-color: white;
    color: black;
  }
`
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  ul {
    display: flex;
    align-content: center;
    li {
      list-style: none;
      margin-right: 0.5rem;
      position: relative;
      &:hover::after {
        display: block;
        content: '';
        position: absolute;
        background: var(--accent-color);
        height: 3px;
        animation: left-to-right 0.5s cubic-bezier(0.075, 0.82, 0.165, 1) 1 forwards;
      }
      span {
        color: var(--accent-color);
        font-weight: bold;
        margin-right: 0.25rem;
      }
      a {
        text-decoration: none;
        font-size: 1.125rem;
        font-weight: 600;
        position: relative;
      }
    }
    li:nth-child(3) {
      margin-right: 0;
    }
  }
@keyframes left-to-right {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
`

const Header = () => {
  return (
    <StyledHeader>
      <LogoImg>
        <StaticImage 
          href="/"
          width={50}
          height={50}
          placeholder='tracedSVG'
          objectPosition='center top'
          src="../images/portrait.jpeg"
          alt="Portrait photo of me" 
        />
      </LogoImg>
      <Nav>
        <ul>
          <li><span>01.</span><a href='#'>Home</a></li>
          <li><span>02.</span><a href='#'>About</a></li>
          <li><span>03.</span><a href='#'>Experience</a></li>
        </ul>
      </Nav>
    </StyledHeader>
  )
}

export default Header;