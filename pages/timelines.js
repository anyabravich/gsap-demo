import Nav from "@/components/Nav";
import { userMenu } from "@/context/menu";
import Head from "next/head";

export default function Timelines() {
  const { isOpenMenu, setIsOpenMenu } = userMenu();
  return (
    <>
      <Head>
        <title>GSAP Timelines</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Nav isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
      </>
    </>
  );
}
