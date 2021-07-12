import PageHeading from "../components/ui/PageHeading"
import PageWrapper from "../components/ui/PageWrapper"
import { Text } from "@chakra-ui/react"

const PrivacyPolicy: React.FC = () => (
  <PageWrapper title="Privacy Policy" type="regular">
    <PageHeading title="Privacy Policy" />
    <Text color="mauve.500">
      This is still being drafted. Check back soon!
    </Text>
    <Text mt={4}>
      Your privacy matters to us and we will not use any submitted
      personal data further than is needed for the functionality of
      the site.
    </Text>
    <Text mt={2}>
      We will heed all and any request to manage data, such as a
      request to have all personal data wiped permanently from our
      servers.
    </Text>
  </PageWrapper>
)
export default PrivacyPolicy
