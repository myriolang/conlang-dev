import {
  FormControl,
  FormLabel,
  FormHelperText,
  InputGroup,
  Input,
  InputRightElement,
  Icon,
  Spinner
} from "@chakra-ui/react"
import { FiX } from "react-icons/fi"
import { KeyboardEvent, useEffect, useState } from "react"
import api from "../../utils/axios"
import axios from "axios"

type Props = {
  value: string
  setValue: (value: string) => void
  onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
}

const EmailField: React.FC<Props> = ({
  value,
  setValue,
  onKeyPress
}: Props) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [checked, setChecked] = useState<boolean>(false)
  const [valid, setValid] = useState<boolean>(true)

  useEffect(() => {
    const source = axios.CancelToken.source()
    const timeout = setTimeout(() => {
      if (value && value.length > 2) {
        setLoading(true)
        api
          .post("/api/profile/validate/username", {
            username: value
          })
          .then((data) => {
            console.log(data)
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

  let rightElem: JSX.Element = null
  if (loading) rightElem = <Spinner size="sm" color="primary.400" />
  else if (!valid)
    rightElem = <Icon as={FiX} color="red.400" boxSize="1em" />

  return (
    <FormControl>
      <FormLabel>Email</FormLabel>
      <InputGroup>
        <Input
          placeholder="example"
          type="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={onKeyPress}
          background={checked && !valid ? "red.100" : "none"}
          borderColor={checked && !valid ? "red.200" : "gray.200"}
        />
        <InputRightElement>{rightElem}</InputRightElement>
      </InputGroup>
      {checked && !valid ? (
        <FormHelperText color="red">
          That email address is in use already.
        </FormHelperText>
      ) : (
        <FormHelperText>
          Don&apos;t worry - we don&apos;t share this with third
          parties.
        </FormHelperText>
      )}
    </FormControl>
  )
}
export default EmailField
