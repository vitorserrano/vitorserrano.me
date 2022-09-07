import { AppProps } from 'next/app'
import { globalStyles } from 'src/styles/global'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    {globalStyles()}
    <Component {...pageProps} />
  </>
)

export default MyApp
