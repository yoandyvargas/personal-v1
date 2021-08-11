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
  height: 32px;
  width: 32px;
  position: fixed;
  bottom: 2rem;
  right: 1rem;
  background: red;
`

const Layout = ({children}) => {

  return (
    <LayoutContainer>  
        <AnchorLink to='/#header'>
          <ScrollTopButton/>
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