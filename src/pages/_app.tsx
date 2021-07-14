import { AppProps } from "next/app"
import { DefaultSeo } from "next-seo"
import { ChakraProvider, Flex, Box } from "@chakra-ui/react"
import PageFooter from "../components/ui/PageFooter"

import { store, persistor } from "../store"
import { Provider } from "react-redux"
import NextPersistGate from "../utils/NextPersistGate"

import theme from "../utils/theme"
import NavBar from "../components/ui/NavBar"

const App: React.FC<AppProps> = ({
  Component,
  pageProps
}: AppProps) => {
  return (
    <Provider store={store}>
      <NextPersistGate persistor={persistor}>
        <DefaultSeo
          title="conlang.dev"
          description="Language documentation tool for linguists and conlangers."
          openGraph={{
            type: "website",
            locale: "en_GB",
            url: "https://conlang.dev",
            site_name: "conlang.dev",
            description:
              "Language documentation tool for linguists and conlangers",
            images: [
              {
                url: "https://conlang.dev/conlang-dev-logo.png",
                alt: "conlang.dev logo"
              }
            ]
          }}
        />
        <ChakraProvider theme={theme}>
          <Flex direction="column" w="100%" minH="100vh">
            <NavBar />
            <Box flexGrow={1}>
              <Component {...pageProps} />
            </Box>
            <PageFooter />
          </Flex>
        </ChakraProvider>
      </NextPersistGate>
    </Provider>
  )
}
export default App
