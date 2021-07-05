import PageWrapper from "../../../components/ui/PageWrapper"
import PageHeading from "../../../components/ui/PageHeading"

import { useRouter } from "next/router"

const LanguagePage: React.FC = () => {
  const router = useRouter()
  const { username, language } = router.query

  return (
    <PageWrapper title="Language" type="regular">
      <PageHeading
        title={language as string}
        subtitle={`Language by ${username}`}
      />
    </PageWrapper>
  )
}
export default LanguagePage
