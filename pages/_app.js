import Theme from "@/styles/Theme";
import GlobalStyles from "@/styles/GlobalStyles";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
import GitBookButton from "@/components/GitBookButton";
import { BallTriangle } from "react-loader-spinner";
import { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import { Provider } from "react-redux";
import store from "@/store";

export default function App({ Component, pageProps }) {
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(false);
    }, 1000);
  }, []);

  return (
    <>
      <GlobalStyles />
      <Theme>
        <main className={inter.className}>
          {isLoad ? (
            <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#93D400"
              ariaLabel="ball-triangle-loading"
              wrapperClass={"loader"}
              wrapperStyle={{
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
              visible={true}
            />
          ) : (
            <Provider store={store}>
              <Nav />
              <Component {...pageProps} />
              <GitBookButton />
            </Provider>
          )}
        </main>
      </Theme>
    </>
  );
}
