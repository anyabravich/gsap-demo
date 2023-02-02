import LayeredPinning from "@/components/LayeredPinning";
import Nav from "@/components/Nav";
import Rainbow from "@/components/Rainbow";
import ScrollBlock from "@/components/ScrollBlock";
import ScrollBlockColorLine from "@/components/ScrollBlockColorLine";
import { userMenu } from "@/context/menu";
import Head from "next/head";

export default function Beyond() {
  const { isOpenMenu, setIsOpenMenu } = userMenu();
  return (
    <>
      <Head>
        <title>GSAP ScrollTrigger</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Nav isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
        <ScrollBlock />
        <ScrollBlockColorLine />
        <LayeredPinning />
      </>
    </>
  );
}
