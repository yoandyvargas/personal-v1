import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: light;
    --main-bg-color: #f7f7f7;
    --outer-border-color: #0F0F0F;
    --main-text-color: #303030;
    --secondary-bg-color: #ededed;
    --secondary-text-color: white;
    --accent-color: #15529E; //#1D73DD 1476B2 1E77E2
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --main-bg-color: #121212;
      --outer-border-color: #FCFCFC;
      --main-text-color: #CFCFCF;
      --secondary-bg-color: #242424;
      --secondary-text-color: black;
      --accent-color: #4A8FE7; //3CCF91 #9EC3F0 66A2EB 1C77C3 spanish blue
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