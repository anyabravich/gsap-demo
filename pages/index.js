import Letters from "@/components/Letters";
import Head from "next/head";
import { userMenu } from "@/context/menu";
import Nav from "@/components/Nav";
import styled from "styled-components";
import { rem } from "polished";

export default function Home() {
  const { isOpenMenu, setIsOpenMenu } = userMenu();
  return (
    <>
      <Head>
        <title>GSAP</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IndexPage>
        <Nav isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
        <Letters />
      </IndexPage>
    </>
  );
}

const IndexPage = styled.div``;
