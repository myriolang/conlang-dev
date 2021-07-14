import { Box, Text, Link, useColorModeValue } from "@chakra-ui/react"
import NextLink from "next/link"

const PageFooter: React.FC = () => {
  const bg = useColorModeValue("gray.100", "gray.700")
  const textMain = useColorModeValue("gray.600", "gray.300")
  const textSubtle = useColorModeValue("gray.500", "gray.400")
  const dividerColor = useColorModeValue("gray.300", "gray.600")

  return (
    <Box
      bg={bg}
      textAlign="center"
      px={4}
      py={8}
      direction="row"
      justify="center"
      align="center"
    >
      <Text fontSize="sm" color={textMain}>
        A Myriolang project.
      </Text>
      <Text fontSize="sm" color={textSubtle}>
        Thanks to all contributors.
      </Text>
      <Box
        h="1px"
        borderBottom="1px solid"
        borderColor={dividerColor}
        maxW="140px"
        mx="auto"
        my={4}
      />
      <Text fontSize="sm" color={textMain}>
        <NextLink href="/privacy-policy" passHref>
          <Link mx={2}>Privacy Policy</Link>
        </NextLink>
        ·
        <NextLink href="/contact" passHref>
          <Link mx={2}>Contact</Link>
        </NextLink>
      </Text>
    </Box>
  )
}
export default PageFooter
