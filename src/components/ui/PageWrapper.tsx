import { NextSeo } from "next-seo"
import { Box } from "@chakra-ui/react"

type Props = {
  title: string
  description?: string
  ogHideTitle?: boolean
  type: "regular" | "fullwidth" | "narrow"
  children: React.ReactNode
}

const PageWrapper: React.FC<Props> = ({
  title,
  description,
  type,
  ogHideTitle,
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
      <NextSeo
        title={`${title} – conlang.dev`}
        description={description}
        openGraph={{
          description,
          ...(!ogHideTitle && { title })
        }}
      />
      {children}
    </Box>
  )
}
export default PageWrapper
