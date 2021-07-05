import LanguageButton from "../LanguageButton"
import NextLink from "next/link"
import styles from "./NavBar.module.scss"
import { Link } from "@chakra-ui/react"

const AuthenticatedNavLinks: React.FC = () => (
  <>
    <NextLink href="/" passHref>
      <Link className={styles.NavLink} px={3} py={2}>
        Dictionary
      </Link>
    </NextLink>
    <NextLink href="/" passHref>
      <Link className={styles.NavLink} px={3} py={2}>
        Community
      </Link>
    </NextLink>
    <LanguageButton />
  </>
)
export default AuthenticatedNavLinks
