import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  colors: {
    black: "#16161D",
    blue: "#00A0D7",
    yellow: "#FFC114",
    gray: "#333333",
  },
  fonts: {
    body: "Dosis",
    heading: "Dosis",
    mono: "Menlo, monospace",
  },
  breakpoints,
});

export default theme;