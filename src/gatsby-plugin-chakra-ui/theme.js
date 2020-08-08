import { theme } from "@chakra-ui/core";

const { colors } = theme;
const { twitter, facebook } = colors;

export default {
  ...theme,
  colors: {
    ...colors,
    primary: twitter,
    secondary: facebook,
    text: {
      primary: "#fff",
      secondary: "#000",
    },
    navItem: "#A0AEC0",
  },
  breakpoints: ["30em", "48em", "62em", "80em"],
};
