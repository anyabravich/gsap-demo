import gsap from "gsap";
import React, { useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { rem } from "polished";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const ScrollBlock = () => {
  const sectionColors = ["dodgerblue", "salmon", "green", "purple", "maroon"];
  const navColors = ["#00BFFF", "#FFA07A", "#90EE90", "#EE82EE", "#FF6347"];
  const [sections, setSections] = useState([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set("[data-fullscreen]", {
      backgroundColor: gsap.utils.wrap(sectionColors),
    });
    setSections(gsap.utils.toArray("[data-fullscreen]"));
    const test = gsap.utils.toArray("[data-fullscreen]");
    console.log(test);
    test.forEach(function (section, index) {
      console.log(section, navColors[index]);
      ScrollTrigger.create({
        trigger: section,
        start: "top 100px",
        end: "bottom 100px",
        animation: gsap.to("[data-nav]", {
          backgroundColor: navColors[index],
          immediateRender: false,
        }),
        toggleActions: "restart none none reverse",
      });
    });
  }, []);

  const blocks = ["block 1", "block 2", "block 3", "block 4", "block 5"];
  return (
    <ScrollBlockWrapper>
      <ScrollBlockChangeColorLine data-nav />
      <ScrollBlockContent>
        {blocks.map((el, index) => (
          <ScrollBlockFullScreen data-fullscreen key={index}>
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

const ScrollBlockChangeColorLine = styled.div`
  top: 0;
  width: 100%;
  padding: ${rem(20)};
  position: -webkit-sticky;

  position: sticky;
  z-index: 1;
  background: #00bfff;
  height: 100px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
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
  /* background: ${(props) => props.color}; */
`;

export default ScrollBlock;
