import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
  }
  html {
    width: 100%;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
  }
  body {
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
`

export default GlobalStyle;