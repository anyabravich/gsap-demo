import AutoCloseCards from "@/components/AutoCloseCards";
import FlipCards from "@/components/FlipCards";
import Nav from "@/components/Nav";
import OtherWrap from "@/components/OtherWrap";
import Seal from "@/components/Seal";
import Snow from "@/components/Snow";
import { userMenu } from "@/context/menu";
import Head from "next/head";
import styled from "styled-components";

export default function Other() {
  const { isOpenMenu, setIsOpenMenu } = userMenu();
  return (
    <>
      <Head>
        <title>GSAP Other</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OtherWrapper>
        <Nav
          isOpenMenu={isOpenMenu}
          setIsOpenMenu={setIsOpenMenu}
          color={"white"}
        />
        <Snow />
        <OtherWrap>
          <FlipCards />
          <AutoCloseCards />
        </OtherWrap>
      </OtherWrapper>
    </>
  );
}

const OtherWrapper = styled.div`
  position: relative;
  min-height: 100%;
`;
