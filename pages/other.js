import LayeredPinning from "@/components/LayeredPinning";
import Nav from "@/components/Nav";
import OtherWrap from "@/components/OtherWrap";
import Seal from "@/components/Seal";
import { userMenu } from "@/context/menu";
import Head from "next/head";

export default function Other() {
  const { isOpenMenu, setIsOpenMenu } = userMenu();
  return (
    <>
      <Head>
        <title>GSAP Other</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Nav isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
        <OtherWrap>
          <Seal />
        </OtherWrap>
      </>
    </>
  );
}
