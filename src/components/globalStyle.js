import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --main-bg-color: #f7f7f7;
    --secondary-bg-color: #ededed;
    --accent-bg-color: #e6e6e6;
    --main-text-color: #303030;
    --secondary-text-color: white;
    --accent-color: #13498B;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --main-bg-color: #121212;
      --secondary-bg-color: #242424;
      --accent-bg-color: #202020;
      --main-text-color: #CFCFCF;
      --secondary-text-color: black;
      --accent-color: #7CA4D5;
    }
  }
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
    @media screen and (max-width: 642px) {
      font-size: 14px;
    }
    @media screen and (max-width: 320px) {
      font-size: 12px;
    }
  }
  body {
    margin: 0 auto;
    color: var(--main-text-color);
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  a {
    color: var(----main-text-color)
    }
`

export default GlobalStyle;