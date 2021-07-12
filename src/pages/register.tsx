import PageWrapper from "../components/ui/PageWrapper"
import PageHeading from "../components/ui/PageHeading"
import UsernameField from "../components/registration/UsernameField"
import EmailField from "../components/registration/EmailField"

import { useState } from "react"
import { Profile } from "../data/Profile"
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  Text,
  Link,
  Spinner,
  useToast
} from "@chakra-ui/react"
import { FiUserCheck } from "react-icons/fi"
import { openAccountModal } from "../store/slices/ui"
import { useDispatch } from "react-redux"
import withAuthentication from "../utils/authentication"
import inputSubmit from "../utils/inputSubmit"
import { useAppSelector } from "../store"
import { useRouter } from "next/router"

const RegisterPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>()
  const [submitted, setSubmitted] = useState<boolean>()
  const [error, setError] = useState<string>()
  const [username, setUsername] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()

  const dispatch = useDispatch()
  const toast = useToast()
  const router = useRouter()

  const handleRegister = () => {
    if (
      submitted ||
      !username ||
      !(username.length > 2) ||
      !password ||
      !(password.length > 2) ||
      !email ||
      !(email.length > 2)
    )
      return

    setSubmitted(true)
    setLoading(true)
    Profile.create(email, username, password)
      .then(() => {
        toast({
          title: "Account created",
          description: "Try logging in to start using conlang.dev",
          status: "success",
          isClosable: true
        })
        router.push("/")
        dispatch(openAccountModal())
      })
      .catch(() => {
        toast({
          title: "Something went wrong",
          description: "Account could not be created",
          status: "error",
          isClosable: true
        })
        setSubmitted(false)
      })
      .finally(() => setLoading(false))
  }

  return (
    <PageWrapper title="Register" type="regular">
      <PageHeading title="Register" />
      <Flex direction="row" wrap="wrap">
        <Box w="100%" pb={6}>
          <EmailField
            value={email}
            setValue={setEmail}
            onKeyPress={inputSubmit(handleRegister)}
          />
        </Box>
        <Box w={["100%", "100%", "50%"]} pr={[0, 0, 2]} pb={6}>
          <UsernameField
            value={username}
            setValue={setUsername}
            onKeyPress={inputSubmit(handleRegister)}
          />
        </Box>
        <FormControl
          w={["100%", "100%", "50%"]}
          pl={[0, 0, 2]}
          pb={6}
        >
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={inputSubmit(handleRegister)}
          />
          <FormHelperText>
            Try not to reuse the same password as other sites, and be
            sure to keep it safe!
          </FormHelperText>
        </FormControl>
        <Box w="100%">
          <Button
            colorScheme="primary"
            leftIcon={
              loading ? (
                <Spinner size="sm" color="white" />
              ) : (
                <FiUserCheck />
              )
            }
            disabled={submitted}
            onClick={handleRegister}
          >
            Register
          </Button>
        </Box>
        <Box mt={4} w="100%">
          <Text fontSize="sm">
            Already have an account?{" "}
            <Link
              color="primary.600"
              onClick={() => dispatch(openAccountModal())}
            >
              Log in
            </Link>
          </Text>
        </Box>
      </Flex>
    </PageWrapper>
  )
}
export default withAuthentication(RegisterPage, "/", true)
