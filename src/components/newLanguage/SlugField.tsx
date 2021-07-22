import React, { KeyboardEvent, useEffect, useState } from "react"
import {
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Input,
  FormHelperText,
  Spinner,
  Icon,
  useColorModeValue
} from "@chakra-ui/react"
import { FiX, FiCheck } from "react-icons/fi"
import { useAppSelector } from "../../store"
import api from "../../utils/axios"
import axios from "axios"

type Props = {
  value: string
  setValue: (value: string) => void
  onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
}

const SlugField: React.FC<Props> = ({
  value,
  setValue,
  onKeyPress
}: Props) => {
  const { jwt, profile } = useAppSelector((state) => state.auth)

  const [loading, setLoading] = useState<boolean>(false)
  const [checked, setChecked] = useState<boolean>(false)
  const [valid, setValid] = useState<boolean>(true)

  const slugPrefixColor = useColorModeValue("gray.600", "gray.300")

  const defaultBorder = useColorModeValue(
    "gray.200",
    "whiteAlpha.300"
  )
  const invalidBorder = useColorModeValue("red.300", "red.400")
  const invalidTextColor = useColorModeValue("red.500", "red.300")

  let rightElem: JSX.Element = null
  if (loading) rightElem = <Spinner size="sm" color="primary.400" />
  else if (!valid)
    rightElem = <Icon as={FiX} color="red.400" boxSize="1em" />
  else if (checked)
    rightElem = (
      <Icon as={FiCheck} color="primary.600" boxSize="1em" />
    )

  useEffect(() => {
    const source = axios.CancelToken.source()
    const timeout = setTimeout(() => {
      if (value && value.length > 2) {
        setLoading(true)
        api
          .post(
            "/api/language/validate/slug",
            {
              slug: value
            },
            {
              headers: {
                Authorization: `Bearer ${jwt}`
              }
            }
          )
          .then((data) => {
            setChecked(true)
            setLoading(false)
            setValid(data.data.valid)
          })
          .catch(() => setLoading(false))
      } else {
        setChecked(false)
      }
    }, 800)
    return () => {
      clearTimeout(timeout)
      source.cancel()
    }
  }, [value])

  return (
    <FormControl isRequired>
      <FormLabel>Identifier</FormLabel>
      <InputGroup>
        <InputLeftAddon color={slugPrefixColor}>
          {profile.username}/
        </InputLeftAddon>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={onKeyPress}
          borderColor={
            checked && !valid ? invalidBorder : defaultBorder
          }
        />
        <InputRightElement>{rightElem}</InputRightElement>
      </InputGroup>
      {checked && !valid ? (
        <FormHelperText color={invalidTextColor}>
          You already have a language with that identifier.
        </FormHelperText>
      ) : (
        <FormHelperText>
          This will be how your language appears in the URL bar.
        </FormHelperText>
      )}
    </FormControl>
  )
}
export default SlugField
