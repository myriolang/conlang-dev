import {
  Flex,
  Box,
  Text,
  Button,
  useColorModeValue
} from "@chakra-ui/react"
import {
  FiMoreVertical,
  FiEye,
  FiBook,
  FiSettings
} from "react-icons/fi"
import { ILanguage } from "../../../data/Language"
import { useAppSelector } from "../../../store"

type Props = {
  language: ILanguage
  selected: string
  setSelected: (language: string) => void
}

const LanguageOption: React.FC<Props> = ({
  language,
  selected,
  setSelected
}: Props) => {
  const { profile } = useAppSelector((state) => state.auth)

  const selectedBg = useColorModeValue("gray.100", "gray.600")
  const activeBg = useColorModeValue("gray.200", "gray.500")

  return (
    <>
      <Flex
        direction="row"
        wrap="nowrap"
        align="center"
        px={6}
        py={2}
        cursor="pointer"
        _hover={{
          background: selectedBg
        }}
        _active={{
          background: activeBg
        }}
        _focus={{
          boxShadow: "outline"
        }}
        onClick={() => {
          setSelected(selected === language.id ? "" : language.id)
        }}
      >
        <Box flexGrow={1}>
          <Text>{language.name}</Text>
          <Text color="gray.500" fontSize="sm">
            {profile.username}/{language.slug}
          </Text>
        </Box>
        <Box flexShrink={1}>
          <FiMoreVertical />
        </Box>
      </Flex>
      <Box
        h={selected === language.id ? "48px" : 0}
        overflow="hidden"
        transition="height .2s ease-in-out"
      >
        <Box px={6} py={1}>
          <Button
            size="sm"
            colorScheme="primary"
            leftIcon={<FiEye />}
            mr={2}
          >
            Summary
          </Button>
          <Button
            size="sm"
            colorScheme="altrose"
            leftIcon={<FiBook />}
            mr={2}
          >
            Dictionary
          </Button>
          <Button size="sm" leftIcon={<FiSettings />}>
            Settings
          </Button>
        </Box>
      </Box>
    </>
  )
}
export default LanguageOption
