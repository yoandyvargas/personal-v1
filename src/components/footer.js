import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledFooter = styled.footer`
  max-width: 960px;
  padding: 4rem 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  position: relative;
  &::before {
    display: block;
    content: '';
    position: absolute;
    background: var(--main-text-color);
    opacity: 0.125;
    width: 100%;
    height: 2px;
    top: 0;
    margin-top: 2rem;
  }
  @media screen and (max-width: 642px) {
    padding: 4rem 1.5rem 2rem 1.5rem;
    flex-wrap: wrap;
  }
`

const FooterItem = styled.div`
  display: grid;
  grid-template: auto auto / auto;
  justify-content: center;
  p, a {
    margin-right: 0.25rem;
    opacity: 0.8;
  }
  p:first-child {
    font-weight: bold;
  }
  a:hover {
    opacity: 1;
  }
  @media screen and (max-width: 375px) {
    margin-top: 0.5rem;
    place-items: center;
  }
`


const Footer = () => {
return (
  <StyledFooter>
    <FooterItem>
      <p>Legal</p>
      <Link to="/privacy">Privacy Policy</Link>
    </FooterItem>
    <FooterItem>
      <p>Contact</p>
      <p>
        <a href="https://github.com/yoandyvargas" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://www.linkedin.com/in/yoandyvargas/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>
    </FooterItem>
    <FooterItem>
      <p>© 2021</p>
      <p>Yoandy Vargas</p>
    </FooterItem>
  </StyledFooter>
)
}

export default Footer;