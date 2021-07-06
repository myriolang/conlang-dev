import { Button, Spinner, useToast } from "@chakra-ui/react"
import { useAppSelector } from "../../../store"
import {
  openAccountModal,
  startCheckingAuth,
  stopCheckingAuth
} from "../../../store/slices/ui"
import { FiLogIn, FiUser } from "react-icons/fi"
import AccountModal from "./AccountModal"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { Profile } from "../../../data/Profile"
import { logout } from "../../../store/slices/auth"

const AccountButton: React.FC = () => {
  const toast = useToast()
  const { authenticated, profile, jwt, authTime } = useAppSelector(
    (state) => state.auth
  )
  const { checkingAuth } = useAppSelector((state) => state.ui)
  const dispatch = useDispatch()

  // check that auth is still valid upon hydration
  // or every five minutes
  const checkAuth = () => {
    if (!authenticated) {
      dispatch(stopCheckingAuth())
    } else if (
      !authTime ||
      new Date().getTime() - new Date(authTime).getTime() >=
        2 * 60 * 1000
    ) {
      dispatch(startCheckingAuth())
      Profile.validate(jwt)
        .catch(() => {
          dispatch(logout())
          toast({
            title: "Login expired",
            description: "You have been logged out",
            status: "warning",
            isClosable: true
          })
          dispatch(openAccountModal())
        })
        .finally(() => dispatch(stopCheckingAuth()))
    }
  }
  useEffect(checkAuth, [jwt])

  return (
    <>
      {authenticated ? (
        <Button
          leftIcon={
            checkingAuth ? (
              <Spinner size="sm" color="primary.400" />
            ) : (
              <FiUser />
            )
          }
          onClick={() => dispatch(openAccountModal())}
        >
          {profile.username}
        </Button>
      ) : (
        <Button
          colorScheme="primary"
          leftIcon={<FiLogIn />}
          onClick={() => dispatch(openAccountModal())}
        >
          Log In
        </Button>
      )}
      <AccountModal />
    </>
  )
}
export default AccountButton
