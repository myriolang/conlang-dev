import { Button } from "@chakra-ui/react"
import { FiMessageCircle } from "react-icons/fi"
import { useDispatch } from "react-redux"
import { openLanguageModal } from "../../../store/slices/ui"
import LanguageModal from "./LanguageModal"

const LanguageButton: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <>
      <Button
        colorScheme="primary"
        leftIcon={<FiMessageCircle />}
        onClick={() => dispatch(openLanguageModal())}
      >
        Languages
      </Button>
      <LanguageModal />
    </>
  )
}
export default LanguageButton
