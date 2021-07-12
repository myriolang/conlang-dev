import { Box, Text, Link } from "@chakra-ui/react"
import NextLink from "next/link"

const PageFooter: React.FC = () => {
  return (
    <Box
      bg="gray.100"
      textAlign="center"
      px={4}
      py={8}
      direction="row"
      justify="center"
      align="center"
    >
      <Text fontSize="sm" color="gray.600">
        A Myriolang project.
      </Text>
      <Text fontSize="sm" color="gray.500">
        Thanks to all contributors.
      </Text>
      <Box
        h="1px"
        borderBottom="1px solid"
        borderColor="gray.300"
        maxW="140px"
        mx="auto"
        my={4}
      />
      <Text fontSize="sm" color="gray.600">
        <NextLink href="/privacy-policy" passHref>
          <Link mx={2}>Privacy Policy</Link>
        </NextLink>
        ·
        <NextLink href="mailto:hello@myriolang.org" passHref>
          <Link mx={2}>Contact</Link>
        </NextLink>
      </Text>
    </Box>
  )
}
export default PageFooter
