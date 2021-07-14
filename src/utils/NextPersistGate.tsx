import { PropsWithChildren } from "react"
import { Persistor } from "redux-persist"
import { PersistGate } from "redux-persist/lib/integration/react"

type Props = {
  persistor: Persistor
}

const NextPersistGate: React.FC<PropsWithChildren<Props>> = ({
  persistor,
  children
}: PropsWithChildren<Props>) => {
  if (typeof window === "undefined") {
    return <>{children}</>
  }
  return (
    <PersistGate persistor={persistor} loading={null}>
      {children}
    </PersistGate>
  )
}
export default NextPersistGate
