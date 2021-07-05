import AccountModalLogin from "./AccountModalLogin"
import AccountModalAccount from "./AccountModalAccount"

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton
} from "@chakra-ui/react"
import { useAppSelector } from "../../../store"
import { closeAccountModal } from "../../../store/slices/ui"
import { useDispatch } from "react-redux"
import { useRef } from "react"

const AccountModal: React.FC = () => {
  const { authenticated } = useAppSelector((state) => state.auth)
  const { accountModalOpen } = useAppSelector((state) => state.ui)
  const dispatch = useDispatch()
  const initialFocusRef = useRef()

  return (
    <Modal
      isOpen={accountModalOpen}
      onClose={() => dispatch(closeAccountModal())}
      initialFocusRef={initialFocusRef}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader />
        <ModalCloseButton />
        {authenticated ? (
          <AccountModalAccount initialFocusRef={initialFocusRef} />
        ) : (
          <AccountModalLogin initialFocusRef={initialFocusRef} />
        )}
      </ModalContent>
    </Modal>
  )
}
export default AccountModal
