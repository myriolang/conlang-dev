import PageHeading from "../components/ui/PageHeading"
import PageWrapper from "../components/ui/PageWrapper"
import NextLink from "next/link"
import { Text, Button, useColorModeValue } from "@chakra-ui/react"
import { FiMail } from "react-icons/fi"

const Contact: React.FC = () => {
  const emailColor = useColorModeValue("primary.600", "primary.400")
  const subtleColor = useColorModeValue("gray.600", "gray.400")

  return (
    <PageWrapper title="Contact" type="narrow">
      <PageHeading title="Contact Us" />
      <Text fontSize="lg">
        Whether it&apos;s a concern about privacy, or just a simple
        question about the site - we are only ever a single email
        away.
      </Text>
      <NextLink href="mailto:hello@conlang.dev" passHref>
        <Button
          mt={6}
          leftIcon={<FiMail />}
          colorScheme="primary"
          size="lg"
        >
          Send us an email
        </Button>
      </NextLink>
      <Text mt={4} fontSize="sm" color={subtleColor}>
        Our email address is{" "}
        <Text as="strong" d="inline" color={emailColor}>
          hello@conlang.dev
        </Text>{" "}
        if you&apos;d prefer to type that in the good old-fashioned
        way.
      </Text>
    </PageWrapper>
  )
}
export default Contact
