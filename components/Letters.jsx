import React, { useEffect } from "react";
import styled from "styled-components";
import { rem } from "polished";
import gsap from "gsap";

const Letters = () => {
  useEffect(() => {
    gsap.fromTo(
      "[data-letter]",
      {
        opacity: 0,
        scale: 3,
        stagger: 0.5,
        delay: 1,
      },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.5,
        delay: 1,
      }
    );
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
  height: calc(100% - ${rem(90)});
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LettersWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(10)};
  font-weight: 900;
  font-size: ${rem(200)};
  line-height: ${rem(242)};
  color: ${(props) => props.theme.colors.black};
  margin-top: ${rem(45)};
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
`;

export default Letters;
