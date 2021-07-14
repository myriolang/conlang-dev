import PageHeading from "../components/ui/PageHeading"
import PageWrapper from "../components/ui/PageWrapper"
import NextLink from "next/link"
import {
  Heading,
  Text,
  Link,
  UnorderedList,
  ListItem,
  useColorModeValue
} from "@chakra-ui/react"

const PrivacyPolicy: React.FC = () => {
  const headingColor = useColorModeValue("gray.600", "gray.400")
  const linkColor = useColorModeValue("primary.700", "primary.300")

  return (
    <PageWrapper title="Privacy Policy" type="narrow">
      <PageHeading title="Privacy Policy" />
      <Heading size="lg" color={headingColor}>
        Summary
      </Heading>
      <Text mt={4}>
        Your privacy matters a lot to us which is why we&apos;ve done
        our best to simplify our privacy policy and make it as clear
        as possible.
      </Text>
      <Text mt={4}>
        If you have any questions or concerns regarding the policy or
        procedures laid out in the policy, please feel free to{" "}
        <NextLink href="/contact" passHref>
          <Link color={linkColor}>get in touch</Link>
        </NextLink>
        .
      </Text>
      <Text mt={4}>
        By using the website, <strong>you hereby consent</strong> to
        this Privacy Policy and agree to its terms.
      </Text>
      <Heading size="lg" color={headingColor} mt={8}>
        What data do we hold?
      </Heading>
      <Text mt={4}>
        We only hold as much information as you provide, such as email
        address upon registration, display name if set in Profile
        settings, and information about the languages you create here.
      </Text>
      <Text mt={4}>
        This information is stored only for the purpose of its use on
        the website. We don&apos;t send any data to third parties and
        we ensure that the reason for our collecting data is clear
        when we ask for it.
      </Text>
      <Text mt={4}>
        The only exception to this is that we may use anonymizable
        data points such as the number of users and the dates they
        signed up in order to generate statistics about how many
        people are using our website. Statistics such as these,
        however, will only be collected by us and we will not give
        this information to third parties.
      </Text>
      <Heading size="lg" color={headingColor} mt={8}>
        Your rights
      </Heading>
      <Text mt={4}>
        Every user of our website is entitled to the following:
      </Text>
      <UnorderedList mt={2}>
        <ListItem>
          <strong>Access</strong> ─ You have the right to request
          copies of your personal data.
        </ListItem>
        <ListItem>
          <strong>Rectification</strong> ─ You have the right to
          request that we correct any information you believe to be
          inaccurate. You also have the right to request that we
          complete any information you believe to be incomplete.
        </ListItem>
        <ListItem>
          <strong>Erasure</strong> ─ You have the right to request
          that we erase your personal data, under certain conditions.
        </ListItem>
        <ListItem>
          <strong>Restrict processing</strong> ─ You have the right to
          request that we restrict the processing of your personal
          data, under certain conditions.
        </ListItem>
        <ListItem>
          <strong>Object processing</strong> ─ You have the right to
          object to our processing of your personal data, under
          certain conditions.
        </ListItem>
        <ListItem>
          <strong>Data portability</strong> ─ You have the right to
          request that we transfer the data that we have collected to
          another organization, or directly to you, under certain
          conditions.
        </ListItem>
      </UnorderedList>
      <Text mt={4}>
        To exercise any of these rights, please{" "}
        <NextLink href="/contact" passHref>
          <Link color={linkColor}>get in touch</Link>
        </NextLink>
        .
      </Text>
      <Heading size="lg" color={headingColor} mt={8}>
        Children&apos;s Information
      </Heading>
      <Text mt={4}>
        Protection of children online is a large priority for us and
        we encourage any parents to observe, participate in, and/or
        monitor and guide their childrens&apos; online activity.
      </Text>
      <Text mt={4}>
        conlang.dev does not knowingly collect any Personal
        Identifiable Information from children under the age of 13. If
        you think that your child provided this kind of information on
        our website, we strongly encourage you to contact us
        immediately and we will do our best to promptly remove such
        information from our records.
      </Text>
    </PageWrapper>
  )
}
export default PrivacyPolicy
