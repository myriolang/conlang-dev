import { useDispatch } from "react-redux"
import NextLink from "next/link"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  Button,
  Spinner,
  Avatar,
  MenuDivider,
  useToast
} from "@chakra-ui/react"
import { FiChevronDown } from "react-icons/fi"
import { closeAccountModal } from "../../../store/slices/ui"
import { useAppSelector } from "../../../store"
import { logout } from "../../../store/slices/auth"

const AccountProfileButton: React.FC = () => {
  const dispatch = useDispatch()
  const toast = useToast()

  const { profile } = useAppSelector((state) => state.auth)
  const { checkingAuth } = useAppSelector((state) => state.ui)
  if (!profile) return

  return (
    <Menu placement="bottom-end">
      <MenuButton
        as={Button}
        leftIcon={
          checkingAuth ? (
            <Spinner size="sm" color="primary.400" />
          ) : (
            <Avatar
              size="xs"
              color="white"
              bg="mauve.300"
              name={
                profile.displayName && profile.displayName.length > 0
                  ? profile.displayName
                  : profile.username
              }
            />
          )
        }
        rightIcon={<FiChevronDown />}
      >
        {profile.username}
      </MenuButton>
      <MenuList>
        <MenuGroup>
          <NextLink href={`/${profile.username}`} passHref>
            <MenuItem>My profile</MenuItem>
          </NextLink>
          <NextLink href="/settings">
            <MenuItem>Settings</MenuItem>
          </NextLink>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup>
          <MenuItem
            onClick={() => {
              dispatch(closeAccountModal())
              dispatch(logout())
              toast({
                title: "You are now logged out",
                description: "See you again soon!",
                status: "info",
                isClosable: true
              })
            }}
          >
            Log out
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  )
}
export default AccountProfileButton
