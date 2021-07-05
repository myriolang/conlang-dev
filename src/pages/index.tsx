import PageWrapper from "../components/ui/PageWrapper"
import PageHeading from "../components/ui/PageHeading"
import { Box, Heading, Text } from "@chakra-ui/react"
import { useAppSelector } from "../store"

const Index: React.FC = () => {
  const { authenticated, profile } = useAppSelector(
    (state) => state.auth
  )

  return (
    <PageWrapper title="Home" type="regular">
      {authenticated ? (
        <>
          <PageHeading title={`Hey, ${profile.username}`} />
          <Text>Etc...</Text>
        </>
      ) : (
        <PageHeading title="Welcome to conlang.dev" />
      )}
    </PageWrapper>
  )
}
export default Index
