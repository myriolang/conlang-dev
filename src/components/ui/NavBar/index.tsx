import { useState } from "react"

import AuthenticatedNavLinks from "./AuthenticatedNavLinks"
import AccountButton from "../AccountButton"
import NextLink from "next/link"
import {
  Flex,
  Box,
  Stack,
  Link,
  useColorMode,
  useColorModeValue,
  IconButton,
  Icon
} from "@chakra-ui/react"
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi"

import { useAppSelector } from "../../../store"

const NavBar: React.FC = ({ ...props }) => {
  const { authenticated } = useAppSelector((state) => state.auth)

  const [open, setOpen] = useState<boolean>(false)
  const handleToggle = () => setOpen(!open)

  const { toggleColorMode } = useColorMode()
  const colorModeIcon = useColorModeValue(FiMoon, FiSun)
  const borderColor = useColorModeValue("gray.100", "gray.700")

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      py={5}
      px={[6, 6, 12, 24]}
      borderBottom="1px solid"
      borderColor={borderColor}
      {...props}
    >
      <Box>
        <NextLink href="/" passHref>
          <Link
            color="primary.600"
            fontSize="xl"
            fontWeight={800}
            fontFamily="Maven Pro"
            letterSpacing={-0.5}
            _hover={{
              color: "mauve.300",
              textDecoration: "none"
            }}
          >
            conlang.dev
          </Link>
        </NextLink>
      </Box>
      <Box
        display={{ base: "block", md: "none" }}
        onClick={handleToggle}
      >
        {open ? <FiX /> : <FiMenu />}
      </Box>
      <Box
        display={{ base: open ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Stack
          spacing={6}
          align="center"
          justify={["center", "flex-start", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          {authenticated && <AuthenticatedNavLinks />}
          <IconButton
            aria-label="Toggle colour mode"
            onClick={toggleColorMode}
            icon={<Icon as={colorModeIcon} />}
          />
          <AccountButton />
        </Stack>
      </Box>
    </Flex>
  )
}
export default NavBar
