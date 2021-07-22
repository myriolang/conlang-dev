import { Flex, Box, Icon, Heading, Text } from "@chakra-ui/react"
import { NextRouter, withRouter } from "next/router"
import React from "react"
import { connect, ConnectedProps } from "react-redux"
import { RootState } from "../store"
import PageWrapper from "../components/ui/PageWrapper"
import { FiSlash } from "react-icons/fi"

const mapState = (state: RootState) => ({
  authenticated: state.auth.authenticated
})
const connector = connect(mapState)
type Props = ConnectedProps<typeof connector> & { router: NextRouter }

function withAuthentication(
  ChildComponent: React.ComponentType,
  redirect = "/",
  guestOnly = false
): unknown {
  class AuthenticatedComponent extends React.Component<Props> {
    constructor(props) {
      super(props)
    }

    render() {
      if (typeof window !== "undefined") {
        if (
          (guestOnly && this.props.authenticated) ||
          (!guestOnly && !this.props.authenticated)
        ) {
          setTimeout(() => this.props.router.push(redirect), 1000)
          return (
            <PageWrapper type="regular" title="Unauthorized">
              <Flex direction="row" wrap="nowrap" align="center">
                <Box mr={6}>
                  <Icon
                    as={FiSlash}
                    boxSize="3em"
                    color="primary.600"
                  />
                </Box>
                <Box>
                  <Heading size="lg" color="gray.600">
                    {guestOnly ? "You are logged in" : "Unauthorized"}
                  </Heading>
                  <Text mt={2}>You will be redirected shortly.</Text>
                </Box>
              </Flex>
            </PageWrapper>
          )
        }
        return <ChildComponent {...this.props} />
      }
      return null
    }
  }
  return withRouter(connector(AuthenticatedComponent))
}
export default withAuthentication
