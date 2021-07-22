import React, { useState } from "react"
import PageWrapper from "../../components/ui/PageWrapper"
import PageHeading from "../../components/ui/PageHeading"
import withAuthentication from "../../utils/authentication"
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  Button,
  Spinner,
  useToast
} from "@chakra-ui/react"
import SlugField from "../../components/newLanguage/SlugField"
import inputSubmit from "../../utils/inputSubmit"
import { Language } from "../../data/Language"
import { useAppSelector } from "../../store"
import { useRouter } from "next/router"
import { FiPlus } from "react-icons/fi"
import { useDispatch } from "react-redux"
import { startCheckingLanguages } from "../../store/slices/ui"

const NewLanguagePage: React.FC = () => {
  const { jwt, profile } = useAppSelector((state) => state.auth)
  const toast = useToast()
  const router = useRouter()
  const dispatch = useDispatch()

  const [submitted, setSubmitted] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const [exonym, setExonym] = useState<string>("")
  const [slug, setSlug] = useState<string>("")
  const [description, setDescription] = useState<string>("")

  const handleCreate = () => {
    if (submitted || exonym.length < 2 || slug.length < 2) return

    setSubmitted(true)
    setLoading(true)

    Language.create(jwt, {
      name: exonym,
      slug,
      description
    })
      .then(() => {
        toast({
          title: "Language created",
          status: "success",
          isClosable: true
        })
        dispatch(startCheckingLanguages())
        router.push(`/${profile.username}/${slug}`)
      })
      .catch(() => {
        toast({
          title: "Something went wrong",
          description: "Language could not be created",
          status: "error",
          isClosable: true
        })
        setSubmitted(false)
      })
      .finally(() => setLoading(false))
  }

  return (
    <PageWrapper title="New language" type="regular">
      <PageHeading title="New language" />
      <Flex direction="row" wrap="wrap">
        <Box w={["100%", "100%", "50%"]} pr={[0, 0, 2]} pb={6}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              value={exonym}
              onChange={(e) => setExonym(e.target.value)}
              onKeyPress={inputSubmit(handleCreate)}
            />
            <FormHelperText>
              This is the exonym (meta name) of your language as you
              would write it in English or your native language.
            </FormHelperText>
          </FormControl>
        </Box>
        <Box w={["100%", "100%", "50%"]} pl={[0, 0, 2]} pb={6}>
          <SlugField
            value={slug}
            setValue={setSlug}
            onKeyPress={inputSubmit(handleCreate)}
          />
        </Box>
        <Box w="100%" pb={6}>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <FormHelperText>
              This can be a long or short introduction to your
              language. Why not talk about its features, where it
              comes from or the culture surrounding it.
            </FormHelperText>
          </FormControl>
        </Box>
        <Box w="100%">
          <Button
            colorScheme="primary"
            leftIcon={
              loading ? (
                <Spinner size="sm" color="white" />
              ) : (
                <FiPlus />
              )
            }
            disabled={submitted}
            onClick={handleCreate}
          >
            Create language
          </Button>
        </Box>
      </Flex>
    </PageWrapper>
  )
}
export default withAuthentication(NewLanguagePage)
