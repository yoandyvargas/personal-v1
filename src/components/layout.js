import React from 'react'
import styled from 'styled-components'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Header from './header'
import Footer from './footer'
import GlobalStyle from './globalStyle'
import Seo from './seo'

const LayoutContainer = styled.div`
  background: var(--main-bg-color);
`

const ContentViewport = styled.main`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 2rem;
  @media screen and (max-width: 642px) {
    padding: 0 1.25rem;
  }
`

const ScrollTopButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  position: fixed;
  bottom: 2rem;
  right: 1rem;
  background: var(--accent-color);
  border-radius: 50%;
  z-index: 2;
  cursor: pointer;
  font-size: 2rem;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.2);
    background: none;
    border: solid 1px var(--accent-color);
  }
`

const Layout = ({children}) => {

  return (
    <LayoutContainer>  
        <AnchorLink to='/#header'>
          <ScrollTopButton>👆🏻</ScrollTopButton>
        </AnchorLink>  
      <Seo />
        <GlobalStyle />
        <Header />
        <ContentViewport>
          {children}
        </ContentViewport>
        <Footer />
    </LayoutContainer>
  )
}

export default Layout;