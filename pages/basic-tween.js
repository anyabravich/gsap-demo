import Card from "@/components/Card";
import Cards from "@/components/Cards";
import { cards } from "@/data/cards";
import gsap from "gsap";
import hljs from "highlight.js";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Basic() {
  useEffect(() => {
    hljs.addPlugin(new CopyButtonPlugin());
    hljs.highlightAll();
  }, []);

  const [tweenTo, setTweenTo] = useState(null);
  const [tweenFrom, setTweenFrom] = useState(null);
  const [tweenFromTo, setTweenFromTo] = useState(null);
  const [tweenRepeatYoYo, setTweenRepeatYoYo] = useState(null);
  const [tweenElastic, setTweenElastic] = useState(null);
  const [tweenStagger, setTweenStagger] = useState(null);

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
    setTweenRepeatYoYo(
      gsap.to('[data="repeatYoYo"]', {
        duration: 3,
        x: 300,
        ease: "linear",
        yoyo: true,
        repeat: -1,
        paused: true,
      })
    );
    setTweenElastic(
      gsap.to('[data="elastic"]', {
        duration: 3,
        x: 220,
        ease: "elastic",
        paused: true,
      })
    );
    setTweenStagger(
      gsap.to('[data="stagger"]', {
        y: -100,
        stagger: {
          amount: 1,
        },
        repeat: -1,
        yoyo: true,
        paused: true,
      })
    );
  }, []);

  const getElement = (e) => {
    const currentSiblings = e.target.parentNode.children;
    const el = e.target.parentNode.parentNode.nextElementSibling.children[0];
    const elAttr = el.getAttribute("data");

    [...currentSiblings].forEach((sibling) => {
      sibling.style.background = "#37b24d";
    });
    e.target.style.background = "#257834";
    return elAttr;
  };

  const animationStart = (e) => {
    switch (getElement(e)) {
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
      case "repeatYoYo": {
        tweenRepeatYoYo.play();
        break;
      }
      case "elastic": {
        tweenElastic.play();
        break;
      }
      case "stagger": {
        tweenStagger.play();
        break;
      }
    }
  };

  const animationPause = (e) => {
    switch (getElement(e)) {
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
      case "repeatYoYo": {
        tweenRepeatYoYo.pause();
        break;
      }
      case "elastic": {
        tweenElastic.pause();
        break;
      }
    }
  };

  const animationReverse = (e) => {
    switch (getElement(e)) {
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
      case "repeatYoYo": {
        tweenRepeatYoYo.reverse();
        break;
      }
      case "elastic": {
        tweenElastic.reverse();
        break;
      }
    }
  };

  const animationRestart = (e) => {
    switch (getElement(e)) {
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
      case "repeatYoYo": {
        tweenRepeatYoYo.restart();
        break;
      }
      case "elastic": {
        tweenElastic.restart();
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
        {cards.map((props, index) => (
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
