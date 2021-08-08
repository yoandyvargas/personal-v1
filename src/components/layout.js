import React from 'react'
import styled from 'styled-components'
import Header from './header'
import Footer from './footer'
import GlobalStyle from './globalStyle'
import SEO from './seo'

const BorderContainer = styled.section`
  padding: 0.5rem;
  background: var(--outer-border-color);
  @media screen and (max-width: 642px) {
    padding: 0.5rem;
  }
  section {
    background: var(--main-bg-color);
    border-radius: 15px;
    border: none;
    margin: 0 auto;
  }
`

const Layout = ({children}) => {
  return (
    <BorderContainer>
      <SEO />
      <section>
        <GlobalStyle />
        <Header />
        {children}
        <Footer />
      </section>
    </BorderContainer>
  )
}

export default Layout;