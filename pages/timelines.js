import TimelineOctopus from "@/components/TimelineOctopus";
import Head from "next/head";

export default function Timelines() {
  return (
    <>
      <Head>
        <title>GSAP Timelines</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <TimelineOctopus />
      </>
    </>
  );
}
