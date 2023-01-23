import React, { useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import { rem } from "polished";

import hljs from "highlight.js";
import "highlight.js/styles/tomorrow-night-blue.css";

const Card = ({ code }) => {
  useLayoutEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <CardWrap>
      <CardTitle>gsap.to</CardTitle>
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

export default Card;
