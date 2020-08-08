import { theme } from "@chakra-ui/core";

const { colors } = theme;

export default {
  ...theme,
  colors: {
    ...colors,
    primary: "#663399",
    secondary: "#663399",
    text: "#fff",
    navItem: "#A0AEC0",
  },
  breakpoints: ["30em", "48em", "62em", "80em"],
};
