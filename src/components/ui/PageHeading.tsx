import { Box, Heading, useColorModeValue } from "@chakra-ui/react"

type Props = {
  title: string
  subtitle?: string
}

const PageHeading: React.FC<Props> = ({ title, subtitle }: Props) => {
  const color = useColorModeValue("gray.700", "gray.300")

  return (
    <Box pt={4} pb={6}>
      <Heading
        fontFamily="Maven Pro"
        fontWeight={800}
        letterSpacing={-1}
        color={color}
      >
        {title}
      </Heading>
      {subtitle && (
        <Heading
          fontWeight="bold"
          letterSpacing={-0.5}
          color="gray.500"
          size="lg"
          mt={2}
        >
          {subtitle}
        </Heading>
      )}
    </Box>
  )
}
export default PageHeading
