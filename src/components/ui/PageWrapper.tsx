import { NextSeo } from "next-seo"
import { Box } from "@chakra-ui/react"

type Props = {
  title: string
  description?: string
  type: "regular" | "fullwidth" | "narrow"
  noSeo?: boolean
  children: React.ReactNode
}

const PageWrapper: React.FC<Props> = ({
  title,
  description,
  type,
  noSeo,
  children
}: Props) => {
  return (
    <Box
      as="main"
      maxWidth={
        type === "fullwidth" ? "auto" : type === "narrow" ? 720 : 920
      }
      mx={type === "fullwidth" ? 0 : "auto"}
      mt={type === "fullwidth" ? 0 : 8}
      px={type === "fullwidth" ? 0 : [4, 4, 2]}
      pb={12}
    >
      {!noSeo && (
        <NextSeo
          title={`${title} – conlang.dev`}
          description={description}
          openGraph={{
            title,
            description,
            site_name: "conlang.dev"
          }}
        />
      )}
      {children}
    </Box>
  )
}
export default PageWrapper
