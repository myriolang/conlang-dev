import PageWrapper from "../components/ui/PageWrapper"
import PageHeading from "../components/ui/PageHeading"
import UsernameField from "../components/registration/UsernameField"
import EmailField from "../components/registration/EmailField"

import { useState } from "react"
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  Heading,
  Text,
  Icon,
  Link
} from "@chakra-ui/react"
import { FiUserCheck, FiMessageSquare } from "react-icons/fi"
import { openAccountModal } from "../store/slices/ui"
import { useDispatch } from "react-redux"
import withAuthentication from "../utils/authentication"

const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()

  const dispatch = useDispatch()

  return (
    <PageWrapper title="Register" type="regular">
      <Flex
        w="100%"
        align="center"
        bg="gray.100"
        px={5}
        py={3}
        borderLeft="3px solid"
        borderColor="primary.400"
        borderRadius="md"
        mb={2}
      >
        <Icon
          as={FiMessageSquare}
          mr={4}
          boxSize="1.5em"
          color="primary.600"
        />
        <Box>
          <Heading size="xs" color="primary.600">
            Sorry!
          </Heading>
          <Text fontSize="sm" color="primary.700">
            Registrations are not quite ready yet. Keep your eyes
            peeled!
          </Text>
        </Box>
      </Flex>
      <PageHeading title="Register" />
      <Flex direction="row" wrap="wrap">
        <Box w="100%" pb={6}>
          <EmailField value={email} setValue={setEmail} />
        </Box>
        <Box w={["100%", "100%", "50%"]} pr={[0, 0, 2]} pb={6}>
          <UsernameField value={username} setValue={setUsername} />
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
          />
          <FormHelperText>
            Try not to reuse the same password as other sites, and be
            sure to keep it safe!
          </FormHelperText>
        </FormControl>
        <Box w="100%">
          <Button
            colorScheme="primary"
            leftIcon={<FiUserCheck />}
            disabled
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
