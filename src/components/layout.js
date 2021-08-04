import React from 'react'
import styled from 'styled-components'
import Header from './header'
import Footer from './footer'
import GlobalStyle from './globalStyle'

const BorderContainer = styled.section`
  padding: 1rem;
  background-color: var(--outer-border-color);
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