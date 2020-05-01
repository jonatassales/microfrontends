import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito:400,700');

  * {
    font-family: 'Nunito', sans-serif;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    > div {
      height: 100%;
    }
  }
`
