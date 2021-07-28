import React from 'react'
import styled from 'styled-components'
import Header from './header'
import GlobalStyle from './globalStyle'

const BorderContainer = styled.section`
  padding: 1rem;
  background-color: #ededed;
  width: 100%;
  height: 100%;
  section {
    min-height: 100vh;
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
      </section>
    </BorderContainer>
  )
}

export default Layout;