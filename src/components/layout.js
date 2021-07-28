import React from 'react'
import styled from 'styled-components'
import Header from './header'
import GlobalStyle from './globalStyle'

const Layout = ({children}) => {
  return (
    <div>
      <GlobalStyle />
      <Header />
    </div>
  )
}

export default Layout;