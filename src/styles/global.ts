import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    ${({ theme: { colors } }) => css`
      background-color: ${colors.backgroundDark};
      color: ${colors.heading};
      overflow: unset;
      scroll-behavior: smooth;
      z-index: 1;
    `}
  }
`
