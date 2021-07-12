import { AppProps } from "next/app"
import { ChakraProvider, Flex, Box } from "@chakra-ui/react"
import PageFooter from "../components/ui/PageFooter"

import { store, persistor } from "../store"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/lib/integration/react"

import theme from "../utils/theme"
import NavBar from "../components/ui/NavBar"

const App: React.FC<AppProps> = ({
  Component,
  pageProps
}: AppProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider theme={theme}>
          <Flex direction="column" w="100%" minH="100vh">
            <NavBar />
            <Box flexGrow={1}>
              <Component {...pageProps} />
            </Box>
            <PageFooter />
          </Flex>
        </ChakraProvider>
      </PersistGate>
    </Provider>
  )
}
export default App
