import PageWrapper from "../components/ui/PageWrapper"
import PageHeading from "../components/ui/PageHeading"
import {
  Flex,
  Box,
  Heading,
  Text,
  Link,
  Icon,
  Image,
  Button
} from "@chakra-ui/react"
import NextLink from "next/link"
import { FiArrowUpRight, FiExternalLink } from "react-icons/fi"
import { useAppSelector } from "../store"
import { useDispatch } from "react-redux"
import { openAccountModal } from "../store/slices/ui"

const Index: React.FC = () => {
  const { authenticated, profile } = useAppSelector(
    (state) => state.auth
  )
  const dispatch = useDispatch()

  return (
    <PageWrapper
      title="Home"
      type={authenticated ? "regular" : "fullwidth"}
    >
      {authenticated ? (
        <>
          <PageHeading title={`Hey, ${profile.username}`} />
          <Text>Etc...</Text>
        </>
      ) : (
        <>
          <Box
            backgroundImage="/amador-loureiro-BVyNlchWqzs-unsplash.jpg"
            h="460px"
          >
            <Flex
              px={4}
              align="center"
              justify="center"
              w="100%"
              h="100%"
              backgroundColor="#00000088"
              direction={["column", "column", "row"]}
            >
              <Box>
                <Heading size="2xl" color="white" align="center">
                  Welcome to conlang.dev
                </Heading>
                <Text
                  mt={2}
                  align="center"
                  fontSize="2xl"
                  color="gray.300"
                >
                  We are a community of conlangers and linguists.
                </Text>
                <Flex
                  mt={8}
                  align="center"
                  justify="center"
                  direction={["column", "column", "row"]}
                >
                  <Button
                    mx={[0, 0, 2]}
                    my={[2, 2, 0]}
                    colorScheme="mauve"
                    size="lg"
                    leftIcon={<FiArrowUpRight />}
                    onClick={() => dispatch(openAccountModal())}
                  >
                    Get started
                  </Button>
                  <NextLink href="#about" passHref>
                    <Button
                      href="#about"
                      size="lg"
                      mx={[2, 2, 0]}
                      my={[0, 0, 2]}
                      bg="gray.700"
                      color="white"
                      _hover={{
                        bg: "gray.800"
                      }}
                      _active={{
                        bg: "gray.900"
                      }}
                    >
                      See what we&apos;re all about
                    </Button>
                  </NextLink>
                </Flex>
              </Box>
            </Flex>
          </Box>
          <Box
            id="about"
            maxW={960}
            mx="auto"
            px={[4, 4, 2]}
            py={[8, 8, 12]}
          >
            <Flex align="center" justify="space-between">
              <Box flexGrow={1}>
                <Heading color="gray.700">About</Heading>
                <Text fontSize="lg" mt={3}>
                  <b>conlang.dev</b> is a platform where linguists and
                  conlangers can document their languages intuitively
                  and with the freedom to be as minimal or as detailed
                  as they please. It&apos;s our answer to the question
                  of lexicon organization, made by{" "}
                  <Link
                    href="https://myriolang.org"
                    color="primary.700"
                    isExternal
                  >
                    Myriolang
                    <Icon
                      as={FiExternalLink}
                      mx="3px"
                      color="gray.700"
                      boxSize=".8em"
                    />
                  </Link>
                  .
                </Text>
              </Box>
              <Image
                display={["none", "none", "block"]}
                mx={12}
                borderRadius="full"
                boxSize="220px"
                src="/maksym-kaharlytskyi-Q9y3LRuuxmg-unsplash.jpg"
                alt="Filing cabinet"
              />
            </Flex>
          </Box>
          <Box bg="gray.100">
            <Box maxW={960} mx="auto" px={[4, 4, 2]} py={[8, 8, 12]}>
              <Heading size="lg" color="gray.600">
                What&apos;s to come?
              </Heading>
              <Text mt={3}>
                Keep on the look-out as we have lots of new features
                on their way very soon! If you&apos;re too excited,
                you can keep up to date via the{" "}
                <Link
                  href="https://github.com/myriolang/conlang-dev"
                  color="primary.700"
                  isExternal
                >
                  Github repository
                  <Icon
                    as={FiExternalLink}
                    mx="3px"
                    color="gray.700"
                    boxSize=".8em"
                  />
                </Link>
                for this project.
              </Text>
              <Text mt={2}>
                We also have a{" "}
                <Link
                  href="https://trello.com/b/prSeXglQ"
                  color="primary.700"
                  isExternal
                >
                  Trello
                  <Icon
                    as={FiExternalLink}
                    mx="3px"
                    color="gray.700"
                    boxSize=".8em"
                  />
                </Link>
                which we use for organizing what will be implemented
                next.
              </Text>
            </Box>
          </Box>
        </>
      )}
    </PageWrapper>
  )
}
export default Index
