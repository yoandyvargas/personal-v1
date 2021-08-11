import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links";

const StyledHeader = styled.header`
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 2rem;
  img {
    cursor: pointer;
    border-radius: 50%;
    border: solid 0.5px var(--outer-border-color);
    filter: opacity(0.9);
    &:hover {
      filter: opacity(1);
    }
  }
  @media screen and (max-width: 642px) {
    padding: 2rem 1.5rem 0rem 1.5rem;
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
    li:nth-child(5) {
      margin-right: 0;
    }
    .active {
      color: var(--accent-color);
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
    <StyledHeader id='header'>
      <Link to="/">
        <StaticImage 
          width={50}
          height={50}
          placeholder='blurred'
          objectPosition='center top'
          src="../images/portrait.jpeg"
          alt="Portrait photo of myself" 
        />
      </Link>
      <Nav>
        <ul>
          <li><AnchorLink to='/#header'>Home</AnchorLink></li>
          <li><AnchorLink to='/#about'>About</AnchorLink></li>
          <li><AnchorLink to='/#projects'>Projects</AnchorLink></li>
          <li><AnchorLink to='/#contact'>Contact</AnchorLink></li>
        </ul>
      </Nav>
    </StyledHeader>
  )
}

export default Header;