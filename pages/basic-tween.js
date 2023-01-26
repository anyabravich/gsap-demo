import Card from "@/components/Card";
import Cards from "@/components/Cards";
import gsap from "gsap";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Basic() {
  const items = [
    {
      title: "gsap.to",
      selector: "to",
      code: `
gsap.to("[data='to']", {
  duration: 3,
  x: 300,
  ease: "linear",
  paused: true,
});
      `,
    },
    {
      title: "gsap.from",
      selector: "from",
      code: `
gsap.from("[data='from']", {
  duration: 3,
  x: 300,
  ease: "linear",
  paused: true,
});
      `,
    },
    {
      title: "gsap.fromTo",
      selector: "fromTo",
      code: `
gsap.fromTo('[data="fromTo"]', {
    x: 300,
    duration: 3,
    ease: "linear",
    paused: true,
    opacity: 0,
  },
  {
    x: 0,
    duration: 3,
    ease: "linear",
    paused: true,
    opacity: 1,
  }
)
      `,
    },
  ];

  const [tweenTo, setTweenTo] = useState(null);
  const [tweenFrom, setTweenFrom] = useState(null);
  const [tweenFromTo, setTweenFromTo] = useState(null);

  useEffect(() => {
    setTweenTo(
      gsap.to('[data="to"]', {
        duration: 3,
        x: 300,
        ease: "linear",
        paused: true,
      })
    );
    setTweenFrom(
      gsap.from('[data="from"]', {
        x: 300,
        duration: 3,
        ease: "linear",
        paused: true,
      })
    );
    setTweenFromTo(
      gsap.fromTo(
        '[data="fromTo"]',
        {
          x: 300,
          duration: 3,
          ease: "linear",
          paused: true,
          opacity: 0,
        },
        {
          x: 0,
          duration: 3,
          ease: "linear",
          paused: true,
          opacity: 1,
        }
      )
    );
  }, []);

  const animationStart = (e) => {
    const el = e.target.parentNode.parentNode.nextElementSibling.children[0];
    const elAttr = el.getAttribute("data");
    switch (elAttr) {
      case "to": {
        tweenTo.play();
        break;
      }
      case "from": {
        tweenFrom.play();
        break;
      }
      case "fromTo": {
        tweenFromTo.play();
        break;
      }
    }
  };

  const animationPause = (e) => {
    const el = e.target.parentNode.parentNode.nextElementSibling.children[0];
    const elAttr = el.getAttribute("data");
    switch (elAttr) {
      case "to": {
        tweenTo.pause();
        break;
      }
      case "from": {
        tweenFrom.pause();
        break;
      }
      case "fromTo": {
        tweenFromTo.pause();
        break;
      }
    }
  };

  const animationReverse = (e) => {
    const el = e.target.parentNode.parentNode.nextElementSibling.children[0];
    const elAttr = el.getAttribute("data");
    switch (elAttr) {
      case "to": {
        tweenTo.reverse();
        break;
      }
      case "from": {
        tweenFrom.reverse();
        break;
      }
      case "fromTo": {
        tweenFromTo.reverse();
        break;
      }
    }
  };

  const animationRestart = (e) => {
    const el = e.target.parentNode.parentNode.nextElementSibling.children[0];
    const elAttr = el.getAttribute("data");
    switch (elAttr) {
      case "to": {
        tweenTo.restart();
        break;
      }
      case "from": {
        tweenFrom.restart();
        break;
      }
      case "fromTo": {
        tweenFromTo.restart();
        break;
      }
    }
  };

  return (
    <>
      <Head>
        <title>GSAP Basic Tween</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cards>
        {items.map((props, index) => (
          <Card
            {...props}
            animationStart={animationStart}
            animationPause={animationPause}
            animationReverse={animationReverse}
            animationRestart={animationRestart}
            key={index}
          />
        ))}
      </Cards>
    </>
  );
}
