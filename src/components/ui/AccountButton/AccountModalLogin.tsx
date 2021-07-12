import { useState } from "react"
import NextLink from "next/link"
import {
  ModalBody,
  ModalFooter,
  Box,
  Flex,
  Icon,
  Heading,
  Text,
  Input,
  Button,
  Link,
  Spinner,
  useToast
} from "@chakra-ui/react"
import { FiHeart } from "react-icons/fi"
import { closeAccountModal } from "../../../store/slices/ui"
import { login } from "../../../store/slices/auth"
import { useDispatch } from "react-redux"
import inputSubmit from "../../../utils/inputSubmit"

import { Profile } from "../../../data/Profile"

type Props = {
  initialFocusRef: React.MutableRefObject<undefined>
}

const AccountModalLogin: React.FC<Props> = ({
  initialFocusRef
}: Props) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [invalid, setInvalid] = useState<boolean>(false)
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const dispatch = useDispatch()
  const toast = useToast()

  const handleLogin = () => {
    if (loading) return
    if (
      username &&
      username.length > 2 &&
      password &&
      password.length > 2
    ) {
      setLoading(true)
      Profile.authenticate(username, password, (err, response) => {
        setLoading(false)
        if (err) {
          setError(true)
        } else if (!response) {
          setInvalid(true)
        } else {
          setInvalid(false)
          dispatch(closeAccountModal())
          dispatch(
            login({
              jwt: response.jwt,
              profile: response.profile
            })
          )
          toast({
            title: "You are now logged in",
            description: "It's nice to see you again!",
            status: "success",
            isClosable: true
          })
        }
      })
    }
  }

  return (
    <>
      <ModalBody>
        <Flex
          direction="column"
          justify="center"
          align="center"
          mt={3}
          mb={3}
        >
          <Icon color="primary.400" boxSize="3em" as={FiHeart} />
          <Heading size="md" color="gray.500" mt={3}>
            Welcome back
          </Heading>
          {(error || invalid) && (
            <Text
              color="red.500"
              fontSize="sm"
              mt={2}
              textAlign="center"
              px={4}
            >
              {error ? (
                <>Something went wrong.</>
              ) : (
                <>
                  That username and password doesn&apos;t seem to be
                  right.
                  <Box as="span" display="block">
                    <NextLink href="/" passHref>
                      <Link color="red.600">
                        Forgotten your password?
                      </Link>
                    </NextLink>
                  </Box>
                </>
              )}
            </Text>
          )}
          <Input
            mt={6}
            ref={initialFocusRef}
            placeholder="Username"
            disabled={loading}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyPress={inputSubmit(handleLogin)}
          />
          <Input
            mt={4}
            type="password"
            disabled={loading}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={inputSubmit(handleLogin)}
            placeholder="Password"
          />
          <Button
            colorScheme="primary"
            mt={4}
            w="100%"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? <Spinner size="sm" color="white" /> : "Log in"}
          </Button>
        </Flex>
      </ModalBody>
      <ModalFooter
        background="gray.100"
        justifyContent="center"
        borderBottomRadius="md"
        mt={2}
        py={6}
      >
        <Text fontSize="sm" color="gray.700">
          Not registered yet?{" "}
          <NextLink href="/register" passHref>
            <Link
              color="primary.600"
              onClick={() => dispatch(closeAccountModal())}
            >
              Create an account
            </Link>
          </NextLink>
        </Text>
      </ModalFooter>
    </>
  )
}
export default AccountModalLogin
