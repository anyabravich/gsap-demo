import { rgba } from "polished";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    black: "#000000",
    white: "#ffffff",
  },
  breakpoints: {},
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
