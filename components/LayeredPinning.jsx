import gsap from "gsap";
import React, { useEffect } from "react";
import styled from "styled-components";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const LayeredPinning = () => {
  const sectionColors = ["dodgerblue", "salmon", "green", "purple", "maroon"];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set("[data-pinning]", {
      backgroundColor: gsap.utils.wrap(sectionColors),
    });

    gsap.utils.toArray("[data-pinning]").forEach(function (pin, index) {
      ScrollTrigger.create({
        trigger: pin,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });
    });
  }, []);

  const blocks = ["block 1", "block 2", "block 3", "block 4", "block 5"];
  return (
    <ScrollBlockWrapper>
      <ScrollBlockContent data-container>
        {blocks.map((el, index) => (
          <ScrollBlockFullScreen data-pinning key={index}>
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

const ScrollBlockContent = styled.div``;

const ScrollBlockFullScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  color: #ffffff;
  font-weight: 900;
`;

export default LayeredPinning;
