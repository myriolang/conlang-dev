import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Heading,
  Button
} from "@chakra-ui/react"
import { FiPlus } from "react-icons/fi"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useAppSelector } from "../../../store"
import { closeLanguageModal } from "../../../store/slices/ui"
import { logout } from "../../../store/slices/auth"
import { Language, ILanguage } from "../../../data/Language"
import LanguageOption from "./LanguageOption"

const LanguageModal: React.FC = () => {
  const { languageModalOpen } = useAppSelector((state) => state.ui)
  const { jwt } = useAppSelector((state) => state.auth)
  const dispatch = useDispatch()
  //const [loading, setLoading] = useState<boolean>(true)
  //const [error, setError] = useState<boolean>(false)
  const [languages, setLanguages] = useState<ILanguage[]>([])
  const [selected, setSelected] = useState<string>("")

  useEffect(() => {
    if (!jwt) return
    Language.getAllCurrentUser(jwt)
      .then((langs) => {
        setLanguages(langs)
        if (languages.length > 0) {
          setSelected(languages[0].id)
        }
      })
      .catch((err) => {
        if (err.response.status == 401) {
          dispatch(logout())
          return
        }
        //setError(true)
      })
    //.finally(() => setLoading(false))
  }, [jwt])

  return (
    <Modal
      isOpen={languageModalOpen}
      onClose={() => dispatch(closeLanguageModal())}
    >
      <ModalOverlay />
      <ModalContent pb={4}>
        <ModalHeader
          minH={110}
          backgroundImage="/lang-books.png"
          backgroundSize="auto 96px"
          backgroundRepeat="no-repeat"
          backgroundPosition="8% 100%"
          backgroundColor="gray.200"
          borderTopRadius="md"
          position="relative"
        >
          <ModalCloseButton />
          <Button
            position="absolute"
            bottom=".5em"
            right="1em"
            colorScheme="primary"
            leftIcon={<FiPlus />}
          >
            Create
          </Button>
        </ModalHeader>
        <ModalBody>
          <Heading size="md" color="gray.700" mt={4} mb={2}>
            My languages
          </Heading>
        </ModalBody>
        {languages.map((language) => (
          <LanguageOption
            key={language.id}
            language={language}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </ModalContent>
    </Modal>
  )
}
export default LanguageModal
