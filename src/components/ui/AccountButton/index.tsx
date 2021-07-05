import { Button } from "@chakra-ui/react"
import { useAppSelector } from "../../../store"
import { openAccountModal } from "../../../store/slices/ui"
import { FiLogIn, FiUser } from "react-icons/fi"
import AccountModal from "./AccountModal"
import { useDispatch } from "react-redux"

const AccountButton: React.FC = () => {
  const { authenticated, profile } = useAppSelector(
    (state) => state.auth
  )
  const dispatch = useDispatch()

  return (
    <>
      {authenticated ? (
        <Button
          leftIcon={<FiUser />}
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
