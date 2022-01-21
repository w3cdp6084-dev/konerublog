import '../styles/globals.scss';
import '../styles/Header.module.scss';
import '../styles/Home.module.scss';
import '../styles/reset.min.scss';
import { ChakraProvider } from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp