import {
  ModalBody,
  ModalFooter,
  Heading,
  Text,
  Button,
  useToast
} from "@chakra-ui/react"
import { closeAccountModal } from "../../../store/slices/ui"
import { logout } from "../../../store/slices/auth"
import { useAppSelector } from "../../../store"
import { useDispatch } from "react-redux"

type Props = {
  initialFocusRef: React.MutableRefObject<undefined>
}

const AccountModalAccount: React.FC<Props> = () => {
  const auth = useAppSelector((state) => state.auth)
  const dispatch = useDispatch()
  const toast = useToast()

  if (!auth.authenticated) return null

  return (
    <>
      <ModalBody>
        <Heading size="lg" color="primary.600">
          Hello, {auth.profile.username}.
        </Heading>
        <Text mt={2}>
          Isn&apos;t it a wonderful day for conlanging?
        </Text>
      </ModalBody>
      <ModalFooter mt={6} background="gray.100">
        <Button
          colorScheme="primary"
          onClick={() => {
            dispatch(closeAccountModal())
            dispatch(logout())
            toast({
              title: "You are now logged out",
              description: "See you again soon!",
              status: "info",
              isClosable: true
            })
          }}
        >
          Log out
        </Button>
      </ModalFooter>
    </>
  )
}
export default AccountModalAccount
