import Theme from "@/styles/Theme";
import GlobalStyles from "@/styles/GlobalStyles";

export default function App({ Component, pageProps }) {
  return (
    <Theme>
      <GlobalStyles />
      <Component {...pageProps} />
    </Theme>
  );
}
