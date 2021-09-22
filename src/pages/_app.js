import { ThemeProvider } from '@chakra-ui/react'
import { SiteLayout } from '@/layouts'

import theme from '@/theme'

function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ||
    ((page) => <SiteLayout {...pageProps}>{page}</SiteLayout>)
  return (
    <ThemeProvider theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  )
}

export default MyApp
