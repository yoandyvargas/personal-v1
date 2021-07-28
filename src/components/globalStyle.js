import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: light;
    --main-bg-color: #f7f7f7;
    --outer-border-color: black;
    --main-text-color: black;
    --secondary-bg-color: #ededed;
    --accent-color: #9090E7;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --main-bg-color: #121212;
      --outer-border-color: white;
      --main-text-color: white;
      --secondary-bg-color: #242424;
      --accent-color: #9090E7;
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
  }
  body {
    margin: 0 auto;
    color: var(--main-text-color);
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    a {
      color: var(--accent-color);
    }
  }
`

export default GlobalStyle;