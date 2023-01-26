import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { rem } from "polished";

import hljs from "highlight.js";
import "highlight.js/styles/tomorrow-night-blue.css";
import Play from "./Buttons";
import Buttons from "./Buttons";

const Card = ({
  title,
  code,
  selector,
  animationPause,
  animationStart,
  animationReverse,
  animationRestart,
}) => {
  const fred = useRef(null);
  useLayoutEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <CardWrap>
      <CardTitle>{title}</CardTitle>
      <CardButtons>
        <Buttons
          selector={selector}
          fred={fred}
          animationPause={animationPause}
          animationStart={animationStart}
          animationReverse={animationReverse}
          animationRestart={animationRestart}
        />
      </CardButtons>
      <CardImages>
        <Fred
          src="https://res.cloudinary.com/duk6gqw1x/image/upload/v1673877097/fred_ndktpv.svg"
          data={selector}
          ref={fred}
        />
      </CardImages>
      <CardPre>
        <CardCode
          className="language-javascript"
          dangerouslySetInnerHTML={{
            __html: code,
          }}
        />
      </CardPre>
    </CardWrap>
  );
};

const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.div`
  font-weight: 900;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 30px;
`;

const CardPre = styled.pre`
  border-radius: ${rem(10)};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CardCode = styled.code`
  border-radius: ${rem(10)};
  flex-grow: 1;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const CardImages = styled.div`
  position: relative;
  height: ${rem(230)};
  background: url("https://res.cloudinary.com/duk6gqw1x/image/upload/v1673877097/space-background_xcjrsf.png")
    no-repeat center bottom;
  background-size: cover;
  margin-bottom: ${rem(30)};
  border-radius: ${rem(10)};
  overflow: hidden;
`;

const Fred = styled.img`
  width: ${rem(100)};
  position: absolute;
  bottom: ${rem(20)};
  left: ${rem(20)};
  @media (max-width: 576px) {
    width: ${rem(50)};
  }
`;

const CardButtons = styled.div``;

export default Card;
