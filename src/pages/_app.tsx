import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { appTheme } from '../styles/theme'
import GlobalStyle from '../styles/global'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={appTheme}>
    <Component {...pageProps} />
    <GlobalStyle />
  </ThemeProvider>
)

export default MyApp
