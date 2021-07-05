import { NextSeo } from "next-seo"
import { Box } from "@chakra-ui/react"

type Props = {
  title: string
  description?: string
  type: "regular" | "fullwidth"
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
      maxWidth={type === "fullwidth" ? "auto" : 960}
      mx={type === "fullwidth" ? 0 : "auto"}
      px={type === "fullwidth" ? 0 : [4, 4, 2]}
      pb={4}
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
