import { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"

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
          <NavBar />
          <Component {...pageProps} />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  )
}
export default App
