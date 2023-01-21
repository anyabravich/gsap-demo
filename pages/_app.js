import Theme from "@/styles/Theme";
import GlobalStyles from "@/styles/GlobalStyles";
import Nav from "@/components/Nav";
import { Inter } from "@next/font/google";
import GitBookButton from "@/components/GitBookButton";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <Theme>
      <GlobalStyles />
      <main className={inter.className}>
        <Nav />
        <Component {...pageProps} />
        <GitBookButton />
      </main>
    </Theme>
  );
}
