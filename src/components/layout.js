import React from 'react'
import styled from 'styled-components'
import Header from './header'
import Footer from './footer'
import GlobalStyle from './globalStyle'
import SEO from './seo'

const LayoutContainer = styled.section`
  background: var(--main-bg-color);
  @media screen and (max-width: 642px) {
    padding: 0.5rem;
  }
`


const Layout = ({children}) => {
  return (
    <LayoutContainer>
      <SEO />
        <GlobalStyle />
        <Header />
        {children}
        <Footer />
    </LayoutContainer>
  )
}

export default Layout;