import { theme } from "@chakra-ui/core";
console.log(theme);
const { colors } = theme;
const { twitter } = colors;

export default {
  ...theme,
  colors: {
    ...colors,
    primary: twitter,
    secondary: "#663399",
    text: "#fff",
    navItem: "#A0AEC0",
  },
  breakpoints: ["30em", "48em", "62em", "80em"],
};
