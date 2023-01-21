import Theme from "@/styles/Theme";
import GlobalStyles from "@/styles/GlobalStyles";
import Nav from "@/components/Nav";
import { Inter } from "@next/font/google";
import GitBookButton from "@/components/GitBookButton";
const inter = Inter({ subsets: ["latin"] });
import { BallTriangle } from "react-loader-spinner";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function App({ Component, pageProps }) {
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // setIsLoad(false);
    }, 1000);
  }, []);

  return (
    <>
      <GlobalStyles />
      <Theme>
        <main className={inter.className}>
          {isLoad ? (
            <Loader>
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
            </Loader>
          ) : (
            <>
              <Nav />
              <Component {...pageProps} />
              <GitBookButton />
            </>
          )}
        </main>
      </Theme>
    </>
  );
}

const Loader = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh; */
`;
