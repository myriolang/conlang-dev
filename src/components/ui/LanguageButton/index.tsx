import { Button, Spinner } from "@chakra-ui/react"
import { FiMessageCircle } from "react-icons/fi"
import { useDispatch } from "react-redux"
import { useAppSelector } from "../../../store"
import { openLanguageModal } from "../../../store/slices/ui"
import LanguageModal from "./LanguageModal"

const LanguageButton: React.FC = () => {
  const dispatch = useDispatch()
  const { checkingLanguages } = useAppSelector((state) => state.ui)

  return (
    <>
      <Button
        colorScheme="primary"
        leftIcon={
          checkingLanguages ? (
            <Spinner size="sm" color="primary.400" />
          ) : (
            <FiMessageCircle />
          )
        }
        onClick={() => dispatch(openLanguageModal())}
      >
        Languages
      </Button>
      <LanguageModal />
    </>
  )
}
export default LanguageButton
