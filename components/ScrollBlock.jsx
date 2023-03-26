import gsap from "gsap";
import React, { useEffect } from "react";
import styled from "styled-components";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const ScrollBlock = () => {
  const sectionColors = ["dodgerblue", "salmon", "green", "purple", "maroon"];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set("[data-slide]", {
      backgroundColor: gsap.utils.wrap(sectionColors),
    });

    const tl = gsap.timeline();
    tl.from("[data='1']", { xPercent: -100, ease: "none", duration: 2 })
      .from("[data='2']", { xPercent: 100, ease: "none", duration: 2 })
      .from("[data='3']", { yPercent: -100, ease: "none", duration: 2 });

    ScrollTrigger.create({
      animation: tl,
      trigger: "[data-container]",
      start: "top top",
      end: "+=4000",
      scrub: true,
      pin: true,
      anticipatePin: 1,
    });
  }, []);

  const blocks = ["block 1", "block 2", "block 3", "block 4"];
  return (
    <ScrollBlockWrapper>
      <ScrollBlockContent data-container>
        {blocks.map((el, index) => (
          <ScrollBlockFullScreen data={index} data-slide key={index}>
            {el.toUpperCase()}
          </ScrollBlockFullScreen>
        ))}
      </ScrollBlockContent>
    </ScrollBlockWrapper>
  );
};

const ScrollBlockWrapper = styled.div`
  position: relative;
`;

const ScrollBlockContent = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const ScrollBlockFullScreen = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  color: ${(props) => props.theme.colors.white};
  font-weight: 900;
`;

export default ScrollBlock;
