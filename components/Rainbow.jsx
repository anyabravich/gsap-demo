import React, { useEffect } from "react";
import styled from "styled-components";
import Container from "./Container";
import { rem } from "polished";
import { gsap } from "gsap-trial";
import { SplitText } from "gsap-trial/dist/SplitText";

const Rainbow = () => {
  useEffect(() => {
    gsap.registerPlugin(SplitText);

    gsap.registerEffect({
      name: "rainbow",
      extendTimeline: true,
      defaults: {
        y: -100,
        colors: ["aqua", "pink", "yellow"],
      },
      effect: (targets, config) => {
        let split = new SplitText(targets, { type: "chars" });
        let tl = gsap.timeline();
        tl.from(split.chars, { opacity: 0, y: config.y, stagger: 0.05 }).to(
          split.chars,
          { color: gsap.utils.wrap(config.colors), stagger: 0.05 },
          0
        );
        return tl;
      },
    });

    gsap.set(".wrapper", { autoAlpha: 1 });

    let animation = gsap.timeline();

    animation.rainbow("h1").rainbow("h2", { y: 50 }, 0);
  }, []);
  return (
    <RainbowWrap>
      <Container>
        <RainbowInner>
          <RainbowTextBox className="wrapper">
            <RainbowH1>Bob&rsquo;s Ice Cream</RainbowH1>
            <RainbowH2>A rainbow of flavors</RainbowH2>
          </RainbowTextBox>
        </RainbowInner>
      </Container>
    </RainbowWrap>
  );
};

const RainbowWrap = styled.div`
  margin-top: ${rem(80)};
`;

const RainbowInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25vw;
  color: #fff;
  background-image: linear-gradient(
      12deg,
      rgba(193, 193, 193, 0.05) 0%,
      rgba(193, 193, 193, 0.05) 2%,
      rgba(129, 129, 129, 0.05) 2%,
      rgba(129, 129, 129, 0.05) 27%,
      rgba(185, 185, 185, 0.05) 27%,
      rgba(185, 185, 185, 0.05) 66%,
      rgba(83, 83, 83, 0.05) 66%,
      rgba(83, 83, 83, 0.05) 100%
    ),
    linear-gradient(
      321deg,
      rgba(240, 240, 240, 0.05) 0%,
      rgba(240, 240, 240, 0.05) 13%,
      rgba(231, 231, 231, 0.05) 13%,
      rgba(231, 231, 231, 0.05) 34%,
      rgba(139, 139, 139, 0.05) 34%,
      rgba(139, 139, 139, 0.05) 71%,
      rgba(112, 112, 112, 0.05) 71%,
      rgba(112, 112, 112, 0.05) 100%
    ),
    linear-gradient(
      236deg,
      rgba(189, 189, 189, 0.05) 0%,
      rgba(189, 189, 189, 0.05) 47%,
      rgba(138, 138, 138, 0.05) 47%,
      rgba(138, 138, 138, 0.05) 58%,
      rgba(108, 108, 108, 0.05) 58%,
      rgba(108, 108, 108, 0.05) 85%,
      rgba(143, 143, 143, 0.05) 85%,
      rgba(143, 143, 143, 0.05) 100%
    ),
    linear-gradient(
      96deg,
      rgba(53, 53, 53, 0.05) 0%,
      rgba(53, 53, 53, 0.05) 53%,
      rgba(44, 44, 44, 0.05) 53%,
      rgba(44, 44, 44, 0.05) 82%,
      rgba(77, 77, 77, 0.05) 82%,
      rgba(77, 77, 77, 0.05) 98%,
      rgba(8, 8, 8, 0.05) 98%,
      rgba(8, 8, 8, 0.05) 100%
    ),
    linear-gradient(334deg, hsl(247, 0%, 2%), hsl(247, 0%, 2%));
`;

const RainbowTextBox = styled.div``;

const RainbowH1 = styled.h1`
  font-size: 6vw;
  font-weight: 600;
  margin: 0;
  line-height: 4vw;
`;

const RainbowH2 = styled.h2`
  font-size: 3vw;
  font-weight: 600;
  margin: 0;
  letter-spacing: 10px;
`;

export default Rainbow;
