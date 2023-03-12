import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    black: "#000000",
    white: "#ffffff",
    primary: "#37b24d",
    blue: "#1c7ed6",
  },
  breakpoints: {},
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
