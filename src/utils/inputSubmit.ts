import { KeyboardEvent } from "react"

const inputSubmit =
  (handleSubmit: () => void) =>
  (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key == "Enter") handleSubmit()
  }
export default inputSubmit
