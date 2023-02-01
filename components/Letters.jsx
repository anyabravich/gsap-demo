import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import { rem } from "polished";
import gsap from "gsap";

const Letters = () => {
  useLayoutEffect(() => {
    gsap.to("[data-letter]", {
      y: 50,
      rotate: -360,
      ease: "none",
      opacity: 1,
      stagger: {
        each: 0.5,
      },
    });
  }, []);
  return (
    <LettersContainer>
      <LettersWrap>
        <LettersLetter data-letter data-g>
          G
        </LettersLetter>
        <LettersLetter data-letter data-s>
          S
        </LettersLetter>
        <LettersLetter data-letter data-a>
          A
        </LettersLetter>
        <LettersLetter data-letter data-p>
          P
        </LettersLetter>
      </LettersWrap>
    </LettersContainer>
  );
};

const LettersContainer = styled.div`
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 576px) {
    height: calc(100vh - ${rem(90)});
  }
`;

const LettersWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(10)};
  font-weight: 900;
  font-size: ${rem(200)};
  line-height: ${rem(242)};
  color: ${(props) => props.theme.colors.black};
  /* margin-top: ${rem(45)}; */
  // TODO: добавить в переменную
  @media (max-width: 768px) {
    font-size: 140px;
    line-height: 100%;
    margin-top: 0;
  }
  // TODO: добавить в переменную
  @media (max-width: 546px) {
    font-size: 90px;
  }
`;

const LettersLetter = styled.span`
  will-change: transform;
  opacity: 0;
`;

export default Letters;
