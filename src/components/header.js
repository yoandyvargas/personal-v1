import React, {useState} from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: black;
  padding: 2rem;
`

const LogoImg = styled.div`
  display: flex;
  align-items: center;
  h1 {
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
    margin-left: 0.5rem;
  }
  img {
    curser: pointer;
    border-radius: 50%;
  }
`

const Button = styled.a`
  border: solid 2px white;
  border-radius: 10px;
  padding: 0.25rem 0.5rem;
  width: 50px;
  text-transform: uppercase;
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
      a {
        text-decoration: none;
        color: white;
        font-size: 1.125rem;
      }
    }
    li:nth-child(3) {
      margin-right: 0;
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
        <h1>Yoandy Vargas</h1>
      </LogoImg>
      <Nav>
        <ul>
          <li><a href='#'>home</a></li>
          <li><a href='#'>about</a></li>
          <li><Button href='#'>Contact</Button></li>
        </ul>
      </Nav>
    </StyledHeader>
  )
}

export default Header;