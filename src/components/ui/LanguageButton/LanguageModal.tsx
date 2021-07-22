import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Heading,
  Button,
  Text,
  useColorModeValue
} from "@chakra-ui/react"
import { FiPlus } from "react-icons/fi"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useAppSelector } from "../../../store"
import {
  closeLanguageModal,
  startCheckingLanguages,
  stopCheckingLanguages
} from "../../../store/slices/ui"
import { logout } from "../../../store/slices/auth"
import { Language, ILanguage } from "../../../data/Language"
import LanguageOption from "./LanguageOption"
import { useRouter } from "next/router"

const LanguageModal: React.FC = () => {
  const { languageModalOpen, checkingLanguages } = useAppSelector(
    (state) => state.ui
  )
  const { jwt } = useAppSelector((state) => state.auth)
  const dispatch = useDispatch()
  const router = useRouter()

  const [languages, setLanguages] = useState<ILanguage[]>([])
  const [selected, setSelected] = useState<string>("")

  const bannerBg = useColorModeValue("gray.200", "gray.600")
  const headingColor = useColorModeValue("gray.700", "gray.300")

  const handleNewLanguage = () => {
    dispatch(closeLanguageModal())
    router.push("/language/new")
  }

  useEffect(() => {
    dispatch(startCheckingLanguages())
  }, [])

  useEffect(() => {
    if (!jwt) return
    if (!checkingLanguages) return
    Language.getAllCurrentUser(jwt)
      .then((langs) => {
        setLanguages(langs)
        if (languages.length > 0) {
          setSelected(languages[0].id)
        }
      })
      .catch((err) => {
        if (err.response && err.response.status == 401) {
          dispatch(logout())
          return
        }
        //setError(true)
      })
      .finally(() => dispatch(stopCheckingLanguages()))
  }, [jwt, checkingLanguages])

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
          backgroundColor={bannerBg}
          borderTopRadius="md"
          position="relative"
        >
          <ModalCloseButton />
          <Button
            onClick={handleNewLanguage}
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
          <Heading size="md" color={headingColor} mt={4} mb={2}>
            My languages
          </Heading>
          {(!languages || languages.length == 0) && (
            <Text mt={3} fontSize="sm" color={headingColor}>
              You have no languages
            </Text>
          )}
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
