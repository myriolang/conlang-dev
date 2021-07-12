import { extendTheme } from "@chakra-ui/react"

// palette from coolors.co
// https://coolors.co/5b2333-3f4b3b-53a28d-fdd9d2-89a7a7
// shades calculated with shadegenerator.com,
// taking original palette as 500 (or 300 in case of
// altrose and altblue)

const theme = extendTheme({
  fonts: {
    heading: "Maven Pro",
    body: "Karla"
  },
  radii: {
    sm: "2px",
    md: "2px",
    lg: "2px",
    xl: "2px"
  },
  shadows: {
    outline: "0 0 0 3px #478A7899"
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false
  },
  colors: {
    primary: {
      100: "#BADAD1",
      200: "#A0CCC0",
      300: "#87BEAF",
      400: "#6DB09E",
      500: "#53A28D",
      600: "#478A78",
      700: "#3A7163",
      800: "#2E594E",
      900: "#214138"
    },
    olive: {
      100: "#B2B7B1",
      200: "#8C9389",
      300: "#6F786C",
      400: "#5C6658",
      500: "#3F4B3B",
      600: "#364032",
      700: "#2C3529",
      800: "#232920",
      900: "#191E18"
    },
    mauve: {
      100: "#BDA7AD",
      200: "#A5868F",
      300: "#845A66",
      400: "#744452",
      500: "#5B2333",
      600: "#4D1E2B",
      700: "#401924",
      800: "#32131C",
      900: "#240E14"
    },
    altrose: {
      100: "#FEE8E4",
      200: "#FDE1DB",
      300: "#FDD9D2",
      400: "#D7B8B3",
      500: "#B19893",
      600: "#8B7774",
      700: "#655754",
      800: "#3F3635",
      900: "#262120"
    },
    altblue: {
      100: "#B2C6C6",
      200: "#9BB4B4",
      300: "#89A7A7",
      400: "#748E8E",
      500: "#607575",
      600: "#4B5C5C",
      700: "#374343",
      800: "#293232",
      900: "#1B2121"
    }
  },
  styles: {
    global: {
      "::selection": {
        background: "primary.400",
        color: "white"
      },
      body: {
        minHeight: "100vh"
      }
    }
  }
})
export default theme
